<template>
  <v-container>
    <v-row>
      <component :is="selectedComponent" :items="items[selectedComponent]" />
    </v-row>
    <v-row>
      <v-col>
        <v-chip-group v-model="selectedComponent" column mandatory>
          <v-chip
            v-for="component in components"
            :key="component.value"
            :value="component.value"
            variant="outlined"
          >
            {{ component.text }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Bahamut from "./Bahamut.vue";
import NGAList from "./Nga.vue";
import PTTList from "./Ptt.vue";

export default {
  name: "ParentComponent",
  components: {
    Bahamut,
    NGAList,
    PTTList,
  },
  data() {
    return {
      selectedComponent: "Bahamut", // 預設顯示的組件
      components: [
        { text: "巴哈", value: "Bahamut" },
        { text: "NGA", value: "NGAList" },
        { text: "PTT", value: "PTTList" },
      ],
      items: {
        Bahamut: [],
        NGAList: [],
        PTTList: [],
      },
    };
  },
  mounted() {
    this.loadItemsFromLocalStorage();
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbx2fQc_sDvU_eh9tsM8ZJEIfRWUTHim_v3VYklE_wn76yfhYtk8-z1E7JppOPSnA-Qx/exec"
        );
        const data = await response.json();
        this.items.Bahamut = data.baha;
        this.items.NGAList = data.nga;
        this.items.PTTList = data.ptt;

        // 保存資料到 localStorage
        this.saveItemsToLocalStorage();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    saveItemsToLocalStorage() {
      const data = {
        items: this.items,
        timestamp: new Date().getTime(),
      };
      localStorage.setItem("forumItemsData", JSON.stringify(data));
    },
    loadItemsFromLocalStorage() {
      const data = JSON.parse(localStorage.getItem("forumItemsData"));
      if (data) {
        const currentTime = new Date().getTime();
        const expiryTime = 4 * 60 * 60 * 1000; // 4小時
        if (currentTime - data.timestamp < expiryTime) {
          this.items = data.items;
        } else {
          localStorage.removeItem("forumItemsData");
        }
      }
    },
  },
};
</script>

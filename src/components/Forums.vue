<template>
  <v-container>
    <v-row>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
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
    };
  },
};
</script>

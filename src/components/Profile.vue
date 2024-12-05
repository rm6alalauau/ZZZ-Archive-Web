<template>
  <v-row justify="end">
    <v-col>
      <v-card rounded="xl">
        <v-card-title
          class="headline"
          style="font-size: 1rem; font-weight: bold"
        >
          使用者
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" v-if="!isSubmitted">
            <v-text-field
              v-model="ltoken_v2"
              :rules="[(v) => !!v || 'This field is required']"
              label="ltoken_v2"
              required
            ></v-text-field>
            <v-text-field
              v-model="ltuid_v2"
              :rules="[(v) => !!v || 'This field is required']"
              label="ltuid_v2"
              required
            ></v-text-field>
            <v-btn @click="submitData">送出</v-btn>
          </v-form>
          <div v-else>
            <v-row>
              <v-col>
                <v-card
                  v-if="apiData"
                  rel="noopener"
                  :subtitle="loadingSubtitle"
                  target="_blank"
                  rounded="xl"
                >
                  <template v-slot:title>
                    <span style="font-size: 1rem; font-weight: bold">
                      {{ apiData.nickname || "我知道你很急" }}
                    </span>
                  </template>
                  <template v-slot:prepend>
                    <v-avatar size="48">
                      <v-img
                        :src="apiData.icon || '//placehold.it/48x48'"
                        style="height: 48px; width: 48px"
                      ></v-img>
                    </v-avatar>
                  </template>
                  <template v-slot:append>
                    <v-row
                      class="d-flex align-center"
                      style="font-size: 0.9rem; font-weight: bold"
                    >
                      <v-icon class="mr-1" color="yellow">mdi-flash</v-icon>
                      <span>
                        {{ apiData.currentEnergy || "急急急急" }} /
                        {{ apiData.maxEnergy || "我是急急國王" }}
                      </span>
                    </v-row>
                  </template>
                </v-card>
              </v-col>
            </v-row>
            <v-btn @click="clearData">登出</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data() {
    return {
      valid: false,
      ltoken_v2: "",
      ltuid_v2: "",
      isSubmitted: false,
      apiData: {},
    };
  },
  computed: {
    // 動態生成 subtitle，如果資料尚未加載則顯示載入中
    loadingSubtitle() {
      const region = this.apiData?.region || "但是你...";
      const gameRoleId = this.apiData?.gameRoleId || "先別急...";
      return `${region}．UID ${gameRoleId}`;
    },
  },
  created() {
    // 在組件創建時從 cookies 中取得資料
    this.ltoken_v2 = Cookies.get("ltoken_v2") || "";
    this.ltuid_v2 = Cookies.get("ltuid_v2") || "";
    if (this.ltoken_v2 && this.ltuid_v2) {
      this.isSubmitted = true;
      this.fetchApiData();
    }
  },
  methods: {
    async submitData() {
      if (this.$refs.form.validate()) {
        // 將資料儲存到 cookies 中
        Cookies.set("ltoken_v2", this.ltoken_v2, { expires: 3650 }); // 3650 天 = 10 年
        Cookies.set("ltuid_v2", this.ltuid_v2, { expires: 3650 }); // 3650 天 = 10 年
        this.isSubmitted = true;
        await this.fetchApiData();
      }
    },
    async fetchApiData() {
      const apiUrl = `https://script.google.com/macros/s/AKfycbxs43mStDw6TAzbp-_T2bN8cV2RsZoRFPtgVbz9UgF03UixQibb23JxaaFz7i35l_ZZ/exec?ltoken_v2=${this.ltoken_v2}&ltuid_v2=${this.ltuid_v2}`;
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        console.log(result); // 確保 API 回應資料結構正確
        if (result && result.data) {
          this.apiData = {
            region: result.data.region,
            gameRoleId: result.data.gameRoleId,
            nickname: result.data.nickname,
            icon: result.data.icon,
            currentEnergy: result.data.currentEnergy,
            maxEnergy: result.data.maxEnergy,
          };
        } else {
          console.error("Invalid API response:", result);
          this.apiData = null;
        }
      } catch (error) {
        console.error("Error fetching API data:", error);
        this.apiData = null;
      }
    },
    clearData() {
      // 清除 cookies 中的資料
      Cookies.remove("ltoken_v2");
      Cookies.remove("ltuid_v2");
      this.ltoken_v2 = "";
      this.ltuid_v2 = "";
      this.isSubmitted = false;
      this.apiData = null;
      alert("Data cleared!");
    },
  },
};
</script>

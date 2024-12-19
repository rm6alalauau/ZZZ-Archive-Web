<template>
  <v-row justify="end">
    <v-col>
      <v-card
        rounded="xl"
        :style="{
          backgroundImage: apiData.card
            ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${apiData.card})`
            : 'none',
          backgroundSize: apiData.card ? 'cover' : 'initial',
          backgroundPosition: apiData.card ? 'center' : 'initial',
          backgroundRepeat: apiData.card ? 'no-repeat' : 'initial',
        }"
      >
        <!-- 標題 -->
        <v-card-title
          class="headline"
          :style="{
            backgroundImage: `linear-gradient(#${
              apiData.mainColor || 'f58661'
            }, #${apiData.bottomColor || 'fe357b'})`,
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1rem',
            fontWeight: 'bold',
          }"
        >
          {{ apiData.title || "傳奇繩匠" }}
        </v-card-title>

        <!-- 卡片內容 -->
        <v-card-text>
          <!-- 表單 -->
          <v-form
            ref="form"
            v-model="valid"
            v-if="!isSubmitted"
            variant="outlined"
          >
            <v-text-field
              v-model="ltoken_v2"
              :rules="[(v) => !!v || 'This field is required']"
              label="ltoken_v2"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="ltuid_v2"
              :rules="[(v) => !!v || 'This field is required']"
              label="ltuid_v2"
              required
              outlined
            ></v-text-field>
            <v-btn @click="submitData" variant="outlined">送出</v-btn>
          </v-form>

          <!-- API 資料展示 -->
          <div v-else>
            <v-row>
              <v-col>
                <v-card
                  v-if="apiData"
                  rel="noopener"
                  target="_blank"
                  rounded="xl"
                  variant="outlined"
                  style="background-color: rgba(255, 255, 255, 0.2)"
                >
                  <template v-slot:title>
                    <span style="font-size: 1rem; font-weight: bold">
                      {{ apiData.nickname || "Loading" }}
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
                        {{ apiData.currentEnergy || "Loading" }} /
                        {{ apiData.maxEnergy || "Loading" }}
                      </span>
                    </v-row>
                  </template>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn @click="clearData" variant="outlined">登出</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      ltoken_v2: "",
      ltuid_v2: "",
      isSubmitted: false,
      apiData: {},
      cacheValidityDuration: 60 * 60 * 1000,
    };
  },
  computed: {
    loadingSubtitle() {
      const region = this.apiData?.region || "Loading...";
      const gameRoleId = this.apiData?.gameRoleId || "Loading...";
      return `${region}．UID ${gameRoleId}`;
    },
  },
  created() {
    // 從 localStorage 中加載 ltoken_v2 和 ltuid_v2
    this.ltoken_v2 = this.decryptData(localStorage.getItem("ltoken_v2")) || "";
    this.ltuid_v2 = this.decryptData(localStorage.getItem("ltuid_v2")) || "";

    // 嘗試加載 API 資料，如果緩存有效則使用緩存
    const cachedData = JSON.parse(localStorage.getItem("apiData")) || {};
    const cacheTimestamp = localStorage.getItem("apiDataTimestamp");

    if (
      this.ltoken_v2 &&
      this.ltuid_v2 &&
      cachedData &&
      cacheTimestamp &&
      new Date().getTime() - cacheTimestamp < this.cacheValidityDuration
    ) {
      // 緩存有效，使用緩存的資料
      this.apiData = cachedData;
      this.isSubmitted = true;
    } else if (this.ltoken_v2 && this.ltuid_v2) {
      // 無緩存或緩存過期，重新取得 API 資料
      this.isSubmitted = true;
      this.fetchApiData();
    }
  },
  methods: {
    getRegionName(region) {
      // region 對應
      const regionMap = {
        prod_gf_us: "America",
        prod_gf_eu: "Europe",
        prod_gf_jp: "Asia",
        prod_gf_sg: "TW,HK,MO",
      };
      return regionMap[region] || "Unknown Region";
    },
    encryptData(data) {
      return btoa(data); // Base64 編碼（可替換為更強的加密方式）
    },
    decryptData(data) {
      return data ? atob(data) : ""; // Base64 解碼
    },
    async submitData() {
      if (this.$refs.form.validate()) {
        // 加密後儲存到 localStorage
        localStorage.setItem("ltoken_v2", this.encryptData(this.ltoken_v2));
        localStorage.setItem("ltuid_v2", this.encryptData(this.ltuid_v2));
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
            region: this.getRegionName(result.data.region),
            gameRoleId: result.data.gameRoleId,
            nickname: result.data.nickname,
            icon: result.data.icon,
            card: result.data.card,
            title: result.data.title,
            mainColor: result.data.mainColor,
            bottomColor: result.data.bottomColor,
            currentEnergy: result.data.currentEnergy,
            maxEnergy: result.data.maxEnergy,
          };

          // 將資料存入 localStorage 並記錄時間戳
          localStorage.setItem("apiData", JSON.stringify(this.apiData));
          localStorage.setItem(
            "apiDataTimestamp",
            new Date().getTime().toString()
          );
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
      // 清除 ltoken_v2 和 ltuid_v2
      localStorage.removeItem("ltoken_v2");
      localStorage.removeItem("ltuid_v2");
      this.ltoken_v2 = "";
      this.ltuid_v2 = "";

      // 清除 API 資料緩存
      localStorage.removeItem("apiData");
      localStorage.removeItem("apiDataTimestamp");

      this.isSubmitted = false;
      this.apiData = null;
      location.reload(); // 避免殘留狀態，刷新頁面
    },
  },
};
</script>

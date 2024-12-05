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
                  rel="noopener"
                  :subtitle="`${apiData.region}．UID ${apiData.gameRoleId}`"
                  target="_blank"
                  rounded="xl"
                >
                  <template v-slot:title>
                    <span style="font-size: 1rem; font-weight: bold">
                      {{ apiData.nickname }}
                    </span>
                  </template>
                  <template v-slot:prepend>
                    <v-avatar size="48">
                      <v-img
                        src="//placehold.it/48x48"
                        style="height: 48px; width: 48px"
                      ></v-img>
                    </v-avatar>
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
      apiData: null,
    };
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
        const data = await response.json();
        this.apiData = {
          region: data.region,
          gameRoleId: data.gameRoleId,
          nickname: data.nickname,
        };
      } catch (error) {
        console.error("Error fetching API data:", error);
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

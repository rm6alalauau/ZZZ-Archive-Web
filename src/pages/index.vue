<template>
  <Banner
    type="warning"
    message="這是一個警告通知"
    :visible="warningVisible"
    @update:visible="warningVisible = $event"
    url="https://github.com/mrfatworm/ZZZ-Archive"
  />

  <v-container>
    <v-row class="ga">
      <v-col cols="12" md="6" class="d-flex flex-column">
        <News class="flex-grow-1" />
        <Profile />
        <PixivCard />
        <Scratch />
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column">
        <Forums class="flex-grow-1" />
        <v-row justify="end">
          <v-col>
            <v-card rounded="xl">
              <v-card-title
                class="headline"
                style="font-size: 1rem; font-weight: bold"
                >代理人</v-card-title
              >
              <div
                style="
                  overflow-x: auto;
                  white-space: nowrap;
                  scrollbar-width: thin;
                  scrollbar-color: #5c8a10 #000000;
                "
              >
                <div
                  v-for="(imageUrl, i) in list"
                  :key="i"
                  class="d-inline-block mx-2 text-center"
                >
                  <v-img
                    :src="imageUrl"
                    height="100"
                    width="100"
                    class="d-block mx-auto"
                  ></v-img>
                  <div>{{ i + 1 }}</div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col>
            <v-card rounded="xl">
              <v-card-title
                class="headline"
                style="font-size: 1rem; font-weight: bold"
                >音擎</v-card-title
              >
              <div
                style="
                  overflow-x: auto;
                  white-space: nowrap;
                  scrollbar-width: thin;
                  scrollbar-color: #5c8a10 #000000;
                "
              >
                <div
                  v-for="(imageUrl, i) in list"
                  :key="i"
                  class="d-inline-block mx-2 text-center"
                >
                  <v-img
                    :src="imageUrl"
                    height="100"
                    width="100"
                    class="d-block mx-auto"
                  ></v-img>
                  <div>{{ i + 1 }}</div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col>
            <v-card rounded="xl">
              <v-card-title
                class="headline"
                style="font-size: 1rem; font-weight: bold"
                >邦布</v-card-title
              >
              <div
                style="
                  overflow-x: auto;
                  white-space: nowrap;
                  scrollbar-width: thin;
                  scrollbar-color: #5c8a10 #000000;
                "
              >
                <div
                  v-for="(imageUrl, i) in list"
                  :key="i"
                  class="d-inline-block mx-2 text-center"
                >
                  <v-img
                    :src="imageUrl"
                    height="100"
                    width="100"
                    class="d-block mx-auto"
                  ></v-img>
                  <div>{{ i + 1 }}</div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col>
            <v-card rounded="xl">
              <v-card-title
                class="headline"
                style="font-size: 1rem; font-weight: bold"
                >驅動光碟</v-card-title
              >
              <div
                style="
                  overflow-x: auto;
                  white-space: nowrap;
                  scrollbar-width: thin;
                  scrollbar-color: #5c8a10 #000000;
                "
              >
                <div
                  v-for="(imageUrl, i) in list"
                  :key="i"
                  class="d-inline-block mx-2 text-center"
                >
                  <v-img
                    :src="imageUrl"
                    height="100"
                    width="100"
                    class="d-block mx-auto"
                  ></v-img>
                  <div>{{ i + 1 }}</div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!--<ImageCard title="代理人" />-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
  },
};
</script>

<style scoped>
.flex-grow-1 {
  flex-grow: 1; /* 使組件填滿剩餘空間 */
}
</style>

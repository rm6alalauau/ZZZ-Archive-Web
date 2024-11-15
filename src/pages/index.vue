<template>
  <Banner
    type="warning"
    message="這是一個警告通知"
    :visible="warningVisible"
    @update:visible="warningVisible = $event"
    url="https://github.com/mrfatworm/ZZZ-Archive-Asset"
  />

  <v-container>
    <v-row class="ga">
      <v-col cols="12" md="6">
        <news />
        <v-row>
          <v-col>
            <v-card
              rel="noopener"
              subtitle="Asia．UID 00000001"
              target="_blank"
              rounded="xl"
            >
              <template v-slot:title>
                <span style="font-size: 1rem; font-weight: bold">惡意課金玩家</span>
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
        <PixivCard />
      </v-col>
      <v-col cols="12" md="6">
        <v-row justify="end">
          <v-col>
            <v-carousel
              height="300"
              show-arrows="hover"
              cycle
              hide-delimiter-background
            >
              <v-carousel-item v-for="(imageUrl, i) in imageUrls" :key="i">
                <v-card flat tile rounded="xl">
                  <v-img :src="imageUrl" max-height="300"></v-img>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
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
    return {
      imageUrls: [
        "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      ],
      list: [
        "https://placehold.it/100x100",
        "https://placehold.it/100x100",
        "https://placehold.it/100x100",
        "https://placehold.it/100x100",
        "https://placehold.it/100x100",
        "https://placehold.it/100x100",
        "https://placehold.it/100x100",
      ],
    };
  },
};
</script>

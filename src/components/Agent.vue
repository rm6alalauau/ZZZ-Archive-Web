<template>
  <v-row justify="end">
    <v-col>
      <v-card rounded="xl">
        <v-card-title
          class="headline"
          style="font-size: 1rem; font-weight: bold"
        >
          代理人
        </v-card-title>
        <div
          style="
            overflow-x: auto;
            white-space: nowrap;
            scrollbar-width: thin;
            scrollbar-color: #5c8a10 #000000;
          "
        >
          <div
            v-for="(imageUrl, i) in imageUrls"
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
</template>

<script>
export default {
  data() {
    return {
      imageUrls: [],
    };
  },
  async created() {
    const response = await fetch("https://r2.zzz-archive-back-end.workers.dev");
    const data = await response.json();
    this.imageUrls = data.map((item) => item.url);
  },
};
</script>

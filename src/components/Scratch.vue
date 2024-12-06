<template>
  <v-row>
    <v-col>
      <v-card rounded="xl" class="position-relative scratch-card">
        <v-card-title
          class="headline"
          style="font-size: 1rem; font-weight: bold"
        >
          刮刮樂
        </v-card-title>
        <v-card-text>
          <div class="scratch-container" ref="scratchContainer">
            <!-- 背景圖層 -->
            <canvas ref="backgroundCanvas" class="background-canvas"></canvas>
            <!-- 刮刮樂圖層 -->
            <canvas ref="scratchCanvas" class="scratch-canvas"></canvas>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.png";
import image5 from "@/assets/5.png";
import overlayImage from "@/assets/cover.png";

export default {
  data() {
    return {
      images: [image1, image2, image3, image4, image5],
      selectedImage: "",
      scratchPercentage: 0,
    };
  },
  mounted() {
    this.selectedImage =
      this.images[Math.floor(Math.random() * this.images.length)];
    this.initScratchCard();
  },
  methods: {
    initScratchCard() {
      const backgroundCanvas = this.$refs.backgroundCanvas;
      const scratchCanvas = this.$refs.scratchCanvas;

      if (!backgroundCanvas || !scratchCanvas) {
        console.error("Canvas elements not found");
        return;
      }

      const bgCtx = backgroundCanvas.getContext("2d");
      const scratchCtx = scratchCanvas.getContext("2d");

      if (!bgCtx || !scratchCtx) {
        console.error("Failed to get canvas contexts");
        return;
      }

      const img = new Image();
      img.src = this.selectedImage;

      img.onload = () => {
        const containerWidth = this.$refs.scratchContainer.clientWidth;
        const scale = containerWidth / img.width;

        backgroundCanvas.width = containerWidth;
        backgroundCanvas.height = img.height * scale;
        scratchCanvas.width = containerWidth;
        scratchCanvas.height = img.height * scale;

        // 設置容器高度以適應圖片
        this.$refs.scratchContainer.style.height = `${img.height * scale}px`;

        // 繪製背景圖片
        bgCtx.drawImage(img, 0, 0, containerWidth, img.height * scale);

        // 初始化塗層
        this.drawOverlay(scratchCtx, containerWidth, img.height * scale);
      };
    },
    drawOverlay(ctx, width, height) {
      const overlay = new Image();
      overlay.src = overlayImage;

      overlay.onload = () => {
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(overlay, 0, 0, width, height);
        this.setupScratchArea(ctx);
      };
    },
    setupScratchArea(ctx) {
      ctx.globalCompositeOperation = "destination-out"; // 設定為透明擦除

      const handleScratch = (e) => {
        e.preventDefault();

        const rect = this.$refs.scratchCanvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();

        this.calculateScratchPercentage(ctx);
      };

      this.$refs.scratchCanvas.addEventListener("mousemove", handleScratch);
      this.$refs.scratchCanvas.addEventListener("touchmove", handleScratch);
    },
    calculateScratchPercentage(ctx) {
      const canvas = this.$refs.scratchCanvas;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const totalPixels = imageData.width * imageData.height;
      let scratchedPixels = 0;

      for (let i = 0; i < totalPixels; i++) {
        if (imageData.data[i * 4 + 3] === 0) {
          scratchedPixels++;
        }
      }

      this.scratchPercentage = (scratchedPixels / totalPixels) * 100;

      if (this.scratchPercentage > 80) {
        this.revealImage(ctx);
      }
    },
    revealImage(ctx) {
      ctx.clearRect(
        0,
        0,
        this.$refs.scratchCanvas.width,
        this.$refs.scratchCanvas.height
      );
    },
  },
};
</script>

<style scoped>
.scratch-card {
  overflow: visible;
  height: auto;
}
.scratch-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
}
.background-canvas {
  position: absolute;
  z-index: 1;
}
.scratch-canvas {
  position: absolute;
  z-index: 2;
}
</style>

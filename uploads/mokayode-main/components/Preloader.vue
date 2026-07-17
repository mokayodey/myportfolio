
<template>
  <div v-if="showPreloader" class="preloader">
    <h1 class="relative z-20 text-5xl md:text-8xl font-bold text-center">WELCOME I AM KAYODE</h1>
    <h2 class="countdown-background">{{ countdown }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: 5, // Start countdown at 5 seconds
      showPreloader: true,
    };
  },
  mounted() {
    // Countdown logic
    const interval = setInterval(() => {
      if (this.countdown > 1) {
        this.countdown--;
      } else {
        clearInterval(interval);
        this.showPreloader = false;
        this.$emit("preloader-finished"); // Notify parent that preloader is done
      }
    }, 1000); // 1000ms = 1 second
  },
};
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.title {
  position: relative;
  z-index: 2; /* Ensures this text is above the countdown */
  font-size: 8rem; /* Large font size for "I am Kayode" */
  font-weight: bold;
  text-align: center;
}

.countdown-background {
  position: absolute;
  z-index: 1; /* Behind "I am Kayode" */
  font-size: 20rem; /* Huge for background effect */
  font-weight: bold;
  color: rgba(
    255,
    255,
    255,
    0.1
  ); /* Subtle transparency for the background effect */
  animation: scaleEffect 1s linear infinite; /* Smooth animation for each second */
}

@keyframes scaleEffect {
  from {
    opacity: 0.7;
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

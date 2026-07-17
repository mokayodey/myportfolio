<template>
  <Mainlayouts class="">
    <div class="mt-5 flex flex-col gap-y-28">
      <Hero />
      <Client />
      <About />
      <News />
      <Mentorship/>
    </div>
  </Mainlayouts>
</template>

<script setup>
import Mainlayouts from "../layouts/Mainlayouts.vue";
import Hero from "../components/Home/Hero.vue";
import Client from "../components/Home/Clirnt.vue";
import About from "../components/Home/About.vue";
import News from "../components/Home/News.vue";
import Mentorship from "~/components/Home/Mentorship.vue";
</script>

<style lang="scss" scoped>
</style>
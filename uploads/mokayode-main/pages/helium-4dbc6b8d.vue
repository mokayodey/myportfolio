<template>
  <Mainlayouts>
    <div class="w-full flex justify-center items-center">
      <div class="w-[90%] flex justify-between flex-col gap-y-16 items-center">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div class="flex justify-start w-full md:w-[40%]">
            <h1 class="text-3xl md:text-6xl name">HELIUM HEALTH</h1>
          </div>
          <div class="w-full md:w-[60%] flex flex-col md:flex-row gap-6">
            <p class="w-full md:w-[60%] text-sm md:text-base text-[#808080]">
              BRAND REFRESH, PRODUCT DESIGN, RESEARCH, USABILITY TESTING, DESIGN
              SYSTEM DEVELOPEMENT & INTEGRATION, BRAND DESIGN, UI DESIGN & UI
              KIT DEVELOPMENT.
            </p>
            <div class="w-full md:w-[40%] flex flex-col gap-3">
              <div class="flex flex-col gap-2">
                <span class="text-[#808080]">ROLE</span>
                <span>PRODUCT DESIGN LEAD</span>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[#808080]">TIME PERIOD</span>
                <span>2021 - PRESENT</span>
              </div>
            </div>
          </div>
        </div>
        <Background />
        <Datas/>
        <managing />
        <Patient />
      </div>
    </div>
  </Mainlayouts>
</template>

<script setup>
import Mainlayouts from "~/layouts/Mainlayouts.vue";
import Background from "~/components/helium/Background.vue";
import Datas from "~/components/helium/Data.vue";
import managing from "~/components/helium/managing.vue";
import Patient from "~/components/helium/Patient.vue";
</script>

<style lang="scss" scoped>
</style>
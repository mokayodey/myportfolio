<template>
  <Mainlayouts>
    <div class="w-full flex justify-center items-center">
      <div class="w-[90%] flex justify-between flex-col gap-y-16 items-center">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div class="flex justify-start w-full md:w-[40%]">
            <h1 class="text-3xl md:text-6xl name">HELIUM OS</h1>
          </div>
          <div class="w-full md:w-[60%] flex flex-col md:flex-row gap-6">
            <p class="w-full md:w-[60%] text-sm md:text-base text-[#808080]">
              PRODUCT DESIGN, RESEARCH, USER INTERVIEWS, PRODUCT DISCOVERY AND
              DESIGN SYSYTEM MAINTENANCE, FOR HELIUM EMR, HELIUM CREDIT, HELIUM
              PLUS, HELIUM DOC & PUBLIC HEALTH PRODUCTS
            </p>
            <div class="w-full md:w-[40%] flex flex-col gap-3">
              <div class="flex flex-col gap-2">
                <span class="text-[#808080]">ROLE</span>
                <span>SENIOR PRODUCT DESIGNER </span>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[#808080]">TIME PERIOD</span>
                <span>2021 - PRESENT</span>
              </div>
            </div>
          </div>
        </div>
        <Background />
        <div class="w-full flex justify-center items-center flex-col gap-12">
          
         <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="750" src="https://embed.figma.com/deck/v2F3fS2fDXnwN3h142BjbO/Helium-mum%2FANC?kind=deck&node-id=1-238&embed-host=share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </Mainlayouts>
</template>

<script setup>
import Mainlayouts from "~/layouts/Mainlayouts.vue";
import Background from "~/components/HelliumMum/Background.vue";
</script>

<style lang="scss" scoped>
</style>
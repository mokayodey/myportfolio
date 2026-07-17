<template>
  <Mainlayouts>
    <div class="w-full flex justify-center items-center">
      <div class="w-[90%] flex justify-between flex-col gap-y-16 items-center">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div class="flex justify-start w-full md:w-[40%]">
            <h1 class="text-3xl md:text-6xl name">SIGNATURE BANK</h1>
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
                <span>2021 - 2022</span>
              </div>
            </div>
          </div>
        </div>
        <Background />
        <Branding />
        <Onboarding />
        <SendMoneyVue />
        <CardCenter />
        <PayBils />
        <Token />

        <!-- <Persona />
        <Dashboard />
        <SendMoneyVue />
        <Userbility /> -->

        <figma />
      </div>
    </div>
  </Mainlayouts>
</template>

<script setup>
import Mainlayouts from "~/layouts/Mainlayouts.vue";
import Background from "~/components/signaturebank/Background.vue";
import Branding from "~/components/signaturebank/Branding.vue";
import Token from "~/components/signaturebank/Persona.vue";
import CardCenter from "~/components/signaturebank/Dashboard.vue";
import Onboarding from "~/components/signaturebank/Onboarding.vue";
import PayBils from "~/components/signaturebank/PayBils.vue";
import SendMoneyVue from "~/components/signaturebank/SendMoney.vue";
import Userbility from "~/components/Gkala/Userbility.vue";

import figma from "../components/signaturebank/Figma.vue";
</script>

<style lang="scss" scoped>
</style>
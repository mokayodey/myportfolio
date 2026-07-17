<template>
  <Mainlayouts>
    <div class="w-full flex justify-center items-center">
      <div class="w-[90%] flex justify-between flex-col gap-y-16 items-center">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div class="flex justify-start w-full md:w-[40%]">
            <h1 class="text-3xl md:text-8xl name">MKOBO</h1>
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
        <BrandRevitilisation />
        <Product />
        <Persona />
        <Info />
        <Lowfidelity />
        <Onboarding />
        <PayBils />
        <SendMoneyVue />
        <EarlyPayVue />
        <Pay />
        <LinkAccount />
        <figma />
      </div>
    </div>
  </Mainlayouts>
</template>

<script setup>
import Mainlayouts from "~/layouts/Mainlayouts.vue";
import Background from "~/components/Mkobo/Background.vue";
import BrandRevitilisation from "~/components/Mkobo/BrandRevitilisation.vue";
import Product from "~/components/Mkobo/Product.vue";
import Persona from "~/components/Mkobo/Persona.vue";
import Info from "~/components/Mkobo/Info.vue";
import Lowfidelity from "~/components/Mkobo/Lowfidelity.vue";
import Onboarding from "~/components/Mkobo/Onboarding.vue";
import PayBils from "~/components/Mkobo/PayBils.vue";
import SendMoneyVue from "~/components/Mkobo/SendMoney.vue";
import EarlyPayVue from "~/components/Mkobo/EarlyPay.vue";
import Pay from "../components/Mkobo/Pay.vue";
import LinkAccount from "../components/Mkobo/LinkAccount.vue";
import figma from "../components/Mkobo/Figma.vue";
</script>

<style lang="scss" scoped>
</style>
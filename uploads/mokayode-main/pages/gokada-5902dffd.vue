<template>
  <Mainlayouts>
    <div class="w-full flex justify-center items-center flex-col gap-16 na">
      <div class="w-[90%] flex justify-center flex-col gap-y-3 items-center">
        <h1
          class="text-lg md:text-3xl text-[#000] text-left md:text-center font-semibold"
        >
          USER INTERFACE & EXPERIENCE DESIGN
        </h1>
        <p class="text-sm md:text-[16px] leading-1 text-center">
          Gokada is a ride-hailing service company that provides commuters in
          Lagos access to hail motorcycles and take safe and affordable rides to
          any part of Lagos. To better serve their users, Gokada felt the need
          to add more services to their current one. These services include
          delivery, mobile wallet, food ordering, bill payment and a few more.
        </p>
      </div>
      <div class="w-[90%] flex justify-center flex-col gap-y-3 items-center">
        <h1
          class="text-lg md:text-3xl text-[#000] text-left md:text-center font-semibold"
        >
          MY TASK
        </h1>
        <p class="text-sm md:text-[14px] leading-1 text-center text-light">
          To build all these new services (delivery, mobile wallet, food
          ordering, bill payment) into one app. Making it convenient for users
          to access them without having to shuffle through different apps. We
          needed to design an app that could easily scale at the point of
          introducing new services to the market
        </p>
      </div>
      <div class="w-[90%] flex justify-center flex-col gap-y-3 items-center">
        <h1
          class="text-lg md:text-3xl text-[#00c73557] text-left md:text-center font-semibold"
        >
          BRAND ASSETS
        </h1>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
          <div class="w-full flex justify-center items-center flex-col gap-3">
            <h1 class="text-[#bdbdbd]">BRAND COLORS</h1>
            <div class="w-1/2">
              <img src="/assets/images/gokada/brandcolo.svg" alt="" />
            </div>
          </div>
          <div class="w-full flex justify-center items-center flex-col gap-3">
            <h1 class="text-[#bdbdbd]">DESIGNED APP ICONS</h1>
            <div class="w-1/2">
              <img src="/assets/images/gokada/designapp.svg" alt="" />
            </div>
          </div>
          <div class="w-full flex justify-center items-center flex-col gap-3">
            <h1 class="text-[#bdbdbd]">BRAND TYPOGRAPHY</h1>
            <span>Montserrat</span>
            <div class="capitalize flex gap-4">
              <span class="font-light">regular</span>
              <span class="font-medium">medium</span>
              <span class="font-semibold">semibold</span>
              <span class="font-bold">bold</span>
            </div>
          </div>
          <div class="w-full flex justify-center items-center flex-col gap-3">
            <h1 class="text-[#bdbdbd]">SERVICE ICONS</h1>
            <div class="w-1/2">
              <img src="/assets/images/gokada/service.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col md:flex-row bg-[#004935]">
        <div class="md:w-[40%] flex justify-center py-16">
          <div class="w-[80%] flex flex-col gap-y-3">
            <h1 class="text-[#00c79557] text-3xl font-semibold">WIREFRAMES</h1>
            <p class="text-white">
              To understand and test our assumptions we designed a skeletal
              structure of the proposed solution
            </p>
          </div>
        </div>
        <div class="md:w-[60%]">
          <img src="/assets//images/gokada/wireframe.png" alt="" />
        </div>
      </div>
      <div class="w-[90%] flex justify-center flex-col gap-y-16 items-center">
        <h1
          class="text-lg md:text-3xl text-[#000] text-left md:text-center font-semibold"
        >
          HIGH-FIDELITY DESIGN
        </h1>
        <div class="w-[90%] flex justify-center items-center flex-col gap-5">
          <h1
            class="text-[#bdbdbd] text-2xl text-left md:text-center font-light"
          >
            ONBOARDING & AUTHENTICATION
          </h1>
          <p class="text-sm md:text-[16px] leading-1 text-center">
            The authentication was built to get a user onboard within two
            minutes. The process took just two- five minutes from sign up to
            ordering a service
          </p>
          <img src="/assets/images/gokada/auth.png" alt="" />
        </div>
      </div>
      <div class="w-[90%] flex justify-center items-center flex-col gap-5">
        <div class="flex flex-col gap-3">
          <h1
            class="text-[#bdbdbd] text-2xl text-left md:text-center font-light"
          >
            DASHBOARD
          </h1>
          <p class="text-sm md:text-[16px] leading-1 text-center">
            To deliver a seamless user experience, it was essential to create a
            dashboard that serves as a gateway to all the services. The
            dashboard was designed to showcase different services and allow
            users identify them easily. It was also designed to accommodate new
            services at any point in time making it easy for Gokada to scale.
          </p>
        </div>
        <span class="text-sm md:text-[16px] leading-1 text-center"
          >We added promotions to the dashboard to help the marketing team
          showcase promo offers when user visit to use the app. We believed this
          would drive sales within the app</span
        >
        <img src="/assets/images/gokada/dasj.png" alt="" />
      </div>
      <div class="w-[90%] flex justify-center items-center flex-col gap-5">
        <div class="flex flex-col gap-3">
          <h1
            class="text-[#3fc70057] text-3xl text-left md:text-center font-semibold"
          >
            WALLET SERVICE
          </h1>
        </div>
        <div class="flex flex-col gap-5">
          <span
            class="text-[#bdbdbd] text-lg text-left md:text-center font-light"
            >WALLET USER FLOW</span
          >
          <img src="/assets/images/gokada/wallet.png" alt="" />
        </div>
        <div class="flex flex-col gap-5">
          <span
            class="text-[#bdbdbd] text-lg text-left md:text-center font-light"
            >USER INTERFACE</span
          >
          <img src="/assets/images/gokada/user.png" alt="" />
        </div>
      </div>
    </div>
  </Mainlayouts>
</template>

<script setup>
import Mainlayouts from "~/layouts/Mainlayouts.vue";
// import MainlayoutsVue
</script>

<style  scoped>
.na {
  font-family: "Oswald", sans-serif;
}
</style>
<template>
  <div class="flex w-full flex-col justify-center items-center gap-4">
    <div
      class="w-[100%] max-w-screen-2xl flex flex-col justify-center items-center"
    >
      <Header />
      <div>
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
</script>


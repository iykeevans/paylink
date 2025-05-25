<template>
  <motion.div
    :initial="{ x: -50, opacity: 0 }"
    :animate="{ x: 0, opacity: 1 }"
    :exit="{ x: -50, opacity: 0 }"
    class="h-[100dvh] bg-[#1D1D1DD1] fixed w-[80%] lg:w-[300px] z-10 top-0 pt-5 animation-slide-in sidebar"
  >
    <div class="flex justify-end pr-5">
      <button
        class="bg-white w-8 h-8 rounded-full text-black flex items-center justify-center"
        @click="$emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div
      class="h-[80px] w-[80px] bg-gray-100 text-black text-2xl font-bold rounded-full flex items-center justify-center mx-auto"
    >
      JD
    </div>

    <p class="font-bold text-2xl mt-3 text-center">Hello Jordan</p>

    <div class="mt-16 pl-5 text-lg font-medium flex flex-col gap-y-8">
      <router-link to="/profile">Personal information</router-link>
      <router-link to="/payment">Payment information</router-link>
      <router-link to="/security">Security and privacy</router-link>
      <router-link to="/contact">Contact us</router-link>
    </div>

    <div class="mt-10">
      <button class="ml-5 text-lg">Logout</button>
      <p class="mt-16 ml-5">Version 2.1.4.0. Copyrights 2021</p>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
</script>

<style scoped>
.sidebar {
  left: 0;
}

@media (width >= 64rem /* 1024px */) {
  .sidebar {
    left: unset;
  }
}
</style>

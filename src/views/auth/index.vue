<template>
  <main class="bg-black">
    <section class="bg-gray-100 relative" style="height: calc(100dvh - 100px)">
      <img
        src="@/assets/images/pl-bg.png"
        alt="background"
        class="h-full w-full object-cover"
      />
      <div
        class="absolute w-[190px] h-[54px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      >
        <img src="@/assets/images/pl-splash-logo.png" alt="splash-logo" />
      </div>
    </section>

    <section class="flex items-center gap-3 px-5" style="height: 100px">
      <Button
        class="flex-1 h-[52px] bg-white text-black font-semibold hover:bg-[#eee] cursor-pointer"
        @click="$router.push('/auth/login')"
      >
        LOG IN
      </Button>

      <Button
        class="flex-1 h-[52px] font-semibold cursor-pointer"
        @click="$router.push('/auth/signup')"
        >REGISTER</Button
      >
    </section>
  </main>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<style scoped></style>

<template>
  <div class="pt-10 pb-14 flex flex-col h-full">
    <h1 class="text-center font-bold text-[34px] mt-8">Enter OTP</h1>
    <p class="text-[#3C3C43] opacity-60 text-center mt-5 px-4">
      Mel ea numquam efficiendi appellantur, eu vix reque inermis propriae,
      animal scaevola.
    </p>

    <form class="px-5 mt-12 flex flex-col h-full" @submit.prevent="">
      <div class="">
        <input-field label="Enter OTP" />
      </div>

      <div class="mt-16">
        <Button
          @click="$router.push('/auth/register')"
          class="bg-[#007AFF] h-[56px] font-semibold w-full cursor-pointer"
          >Continue</Button
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import inputField from "@/components/customs/input-field.vue";
import { Button } from "@/components/ui/button";
</script>

<style scoped></style>

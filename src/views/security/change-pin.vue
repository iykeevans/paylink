<template>
  <div class="min-h-[100dvh] bg-[#1D1D1D] text-white pt-5 px-5 pb-14">
    <button @click="$router.back()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>

    <header class="mt-6">
      <h2 class="text-xl font-bold">Change pin</h2>
    </header>

    <div>
      <section
        class="bg-[#5A5A5A82] rounded-md py-5 px-5 mt-5 max-h-[521px] overflow-y-scroll"
        v-if="currentStep === 1"
      >
        <label class="flex flex-col space-y-2">
          <span class="text-sm">Enter OTP</span>
          <Input class="bg-[#5A5A5A82] border-none" />
        </label>

        <Button
          class="bg-[#007AFF] w-full mt-3.5 cursor-pointer"
          @click="currentStep = 2"
          >Done</Button
        >

        <div class="flex justify-end mt-2">
          <small>Didn't get an sms</small>
        </div>
      </section>

      <section
        v-if="currentStep === 2"
        class="bg-[#5A5A5A82] rounded-md pt-5 pb-10 px-5 space-y-5 mt-5 max-h-[521px] overflow-y-scroll"
      >
        <label class="flex flex-col space-y-2">
          <span class="text-sm">Current pin</span>
          <Input class="bg-[#5A5A5A82] border-none" />
        </label>

        <label class="flex flex-col space-y-2">
          <span class="text-sm">New pin</span>
          <Input class="bg-[#5A5A5A82] border-none" />
        </label>

        <label class="flex flex-col space-y-2">
          <span class="text-sm">Repeat pin</span>
          <Input class="bg-[#5A5A5A82] border-none" />
        </label>

        <Button class="bg-[#007AFF] w-full">Done</Button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ref } from "vue";

const currentStep = ref(1);
</script>

<style lang="scss" scoped></style>

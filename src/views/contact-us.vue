<template>
  <div class="min-h-[100dvh] bg-[#1D1D1D] text-white pt-5 px-5 pb-14">
    <button @click="$router.push('/dashboard')">
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

    <div>
      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Subject</span>
        <Input class="bg-[#5A5A5A82] border-none" />
      </label>

      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Message</span>
        <Textarea class="bg-[#5A5A5A82] border-none" />
      </label>

      <Button class="mt-5 w-full bg-[#007AFF]">Send</Button>
    </div>
  </div>
</template>

<script setup>
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
</script>

<style lang="scss" scoped></style>

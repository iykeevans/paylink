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

    <header class="flex items-center justify-between mt-6">
      <h2 class="text-xl font-bold">Edit Profile</h2>

      <div
        class="w-[50px] h-[50px] rounded-full bg-white text-black font-bold flex justify-center items-center text-2xl"
      >
        JD
      </div>
    </header>

    <div>
      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Name</span>
        <Input
          class="bg-[#5A5A5A82] border-none"
          default-value="Jordan Dean"
          readonly
          disabled
        />
      </label>

      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Username</span>
        <Input class="bg-[#5A5A5A82] border-none" default-value="@jdean293" />
      </label>

      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Age</span>
        <Input
          class="bg-[#5A5A5A82] border-none"
          default-value="18/06/1987"
          disabled
        />
      </label>

      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Home address</span>
        <Textarea
          class="bg-[#5A5A5A82] border-none"
          default-value="4346 Westfall Avenue
Albuquerque, NM 87102
Usa"
        />
      </label>

      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Phone Number</span>
        <Input
          class="bg-[#5A5A5A82] border-none"
          default-value=" +1 712 512 7384"
        />
      </label>

      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Email</span>
        <Input
          class="bg-[#5A5A5A82] border-none"
          default-value="jdean290@gmail.com"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
</script>

<style lang="scss" scoped></style>

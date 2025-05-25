<template>
  <div class="pt-10 pb-14 flex flex-col h-full">
    <h1 class="text-center font-bold text-[34px]">Register</h1>

    <form class="px-5 mt-12 flex flex-col h-full" @submit.prevent="">
      <div>
        <input-field label="First Name" />
      </div>

      <div class="mt-8">
        <input-field label="Last Name" />
      </div>

      <div class="mt-8">
        <input-field label="Date of Birth" />
      </div>

      <div class="mt-8">
        <input-field label="Phone" />
      </div>

      <div class="mt-8">
        <input-field label="Address" />
      </div>

      <div class="mt-8">
        <input-field label="Post Code" />
      </div>
      <div class="mt-8">
        <input-field label="Country" />
      </div>

      <div class="mt-16">
        <Button
          class="bg-[#007AFF] h-[56px] font-semibold w-full"
          @click="$router.push('/dashboard')"
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

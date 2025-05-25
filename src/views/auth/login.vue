<template>
  <div class="pt-10 pb-14 flex flex-col h-full">
    <div class="w-[36px] h-[45px] mx-auto">
      <img src="@/assets/images/pl-logo.png" alt="logo" />
    </div>

    <h1 class="text-center font-bold text-[34px] mt-8">Login</h1>
    <p class="text-[#3C3C43] opacity-60 text-center mt-5">Welcome back,</p>
    <p class="text-[#3C3C43] opacity-60 text-center">
      Sign in to continue etiam tacimates sed ad
    </p>

    <form class="px-5 mt-12 flex flex-col h-full" @submit.prevent="">
      <div class="">
        <input-field label="Email" />
      </div>

      <div class="mt-8">
        <input-field label="Password" />
      </div>

      <div class="mt-16">
        <Button
          @click="$router.push('/dashboard')"
          class="bg-[#007AFF] h-[56px] font-semibold w-full cursor-pointer"
          >Sign In</Button
        >

        <p class="text-[#8E8E93] text-center mt-6 text-[15px]">
          Don't have an account?
          <span class="text-[#007AFF] font-semibold"
            ><router-link to="/auth/signup">Create account</router-link></span
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import inputField from "@/components/customs/input-field.vue";
import { Button } from "@/components/ui/button";
</script>

<style scoped></style>

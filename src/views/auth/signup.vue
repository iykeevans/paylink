<template>
  <div class="pt-10 pb-14 flex flex-col h-full">
    <div class="w-[36px] h-[45px] mx-auto">
      <img src="@/assets/images/pl-logo.png" alt="logo" />
    </div>

    <h1 class="text-center font-bold text-[34px] mt-8">Create account</h1>
    <p class="text-[#3C3C43] opacity-60 text-center mt-5 px-4">
      Nec nihil affert partiendo ne, quo no iisque etiam tacimates sed
      conceptam.
    </p>

    <form class="px-5 mt-12 flex flex-col h-full" @submit.prevent="">
      <div class="">
        <input-field label="Email" />
      </div>

      <div class="mt-8">
        <input-field label="Password" />
      </div>

      <div class="mt-8">
        <input-field label="Verify Password" />
      </div>

      <div class="flex items-center space-x-2 mt-8">
        <Checkbox id="terms" />
        <Label for="terms"
          >I agree with our
          <span class="text-[#007AFF] font-semibold">Terms</span> and
          <span class="text-[#007AFF] font-semibold">Conditions</span></Label
        >
      </div>

      <div class="mt-16">
        <Button
          class="bg-[#007AFF] h-[56px] font-semibold w-full cursor-pointer"
          @click="$router.push('/auth/otp')"
          >Create account</Button
        >

        <p class="text-[#8E8E93] text-center mt-6 text-[15px]">
          Already have an account?
          <span class="text-[#007AFF] font-semibold"
            ><router-link to="/auth/login">Sign in</router-link></span
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import inputField from "@/components/customs/input-field.vue";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox/index";
</script>

<style scoped></style>

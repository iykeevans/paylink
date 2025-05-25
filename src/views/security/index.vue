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

    <header class="mt-6">
      <h2 class="text-xl font-bold">Security & Privacy Options</h2>
    </header>

    <div>
      <section class="bg-[#5A5A5A82] rounded-md pt-5 pb-16 px-5 space-y-8 mt-5">
        <button
          class="flex items-center gap-3"
          @click="$router.push('/security/password')"
        >
          <ChangeCircle class="size-6" />
          <p class="text-sm font-semibold">Change password</p>
        </button>

        <button
          class="flex items-center gap-3"
          @click="$router.push('/security/pin')"
        >
          <KeyChange class="size-6" />
          <p class="text-sm font-semibold">Change transaction pin</p>
        </button>

        <div class="flex items-center gap-3">
          <FaceId class="size-6" />
          <p class="text-sm font-semibold">Sign in with Face ID</p>
        </div>

        <button
          class="flex items-center gap-3"
          @click="$router.push('/security/terms')"
        >
          <Notes class="size-6" />
          <p class="text-sm font-semibold">Terms & conditions</p>
        </button>

        <button
          class="flex items-center gap-3"
          @click="$router.push('/security/privacy')"
        >
          <Privacy class="size-6" />
          <p class="text-sm font-semibold">Privacy policy</p>
        </button>
      </section>

      <section
        class="bg-[#5A5A5A82] rounded-md py-4 px-5 mt-5 flex items-center gap-3"
      >
        <HeartBreak />
        <p class="text-sm font-semibold">Close account</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import ChangeCircle from "@/assets/svg-components/change-circle.vue";
import FaceId from "@/assets/svg-components/face-id.vue";
import HeartBreak from "@/assets/svg-components/heart-break.vue";
import KeyChange from "@/assets/svg-components/key-change.vue";
import Notes from "@/assets/svg-components/notes.vue";
import Privacy from "@/assets/svg-components/privacy.vue";
import { Button } from "@/components/ui/button";
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <Step1 v-if="currentStep === 1" @progress="currentStep = 2" />
    <Step2 v-if="currentStep === 2" @progress="currentStep = 3" />
    <Step3 v-if="currentStep === 3" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Step1 from "./components/step-1.vue";
import Step2 from "./components/step-2.vue";
import Step3 from "./components/step-3.vue";

const currentStep = ref(1);
</script>

<style scoped></style>

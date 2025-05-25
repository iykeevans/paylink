<template>
  <div class="grid grid-cols-3 gap-x-5 gap-y-10 mt-8">
    <div
      v-for="reward in rewards"
      :key="reward.id"
      class="text-center flex flex-col items-center"
    >
      <Tag />
      <p class="text-lg font-bold mt-2 space-grotesk">{{ reward.name }}</p>
      <p class="text-xs mt-3">{{ reward.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from "@/assets/svg-components/tag.vue";

const rewards = [
  { id: 1, name: "NIKE", description: "25% discount on all sales." },
  { id: 2, name: "PUMA", description: "35% discount on all sales." },
  { id: 3, name: "Avon", description: "15% discount on all sales." },
  { id: 3, name: "Apple", description: "12% discount on all sales." },
  { id: 3, name: "Uber", description: "19% discount on all sales." },
  { id: 3, name: "EE", description: "15% discount on all sales." },
  { id: 3, name: "Gucci", description: "15% discount on all sales." },
  { id: 3, name: "Prada", description: "23% discount on all sales." },
  { id: 3, name: "JD", description: "15% discount on all sales." },
];
</script>

<style scoped></style>

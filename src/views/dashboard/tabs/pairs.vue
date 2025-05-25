<template>
  <div>
    <div class="flex gap-3 text-sm mt-8">
      <button class="bg-[#83BF4F] px-2 py-1 rounded-md font-medium">
        All pairs
      </button>
      <button class="bg-[#007AFF] px-2 py-1 rounded-md">Compare pairs</button>
      <button class="bg-[#ED4C5C] px-2 py-1 rounded-md">All pairs</button>
    </div>

    <section class="space-y-8 mt-10">
      <div v-for="pair in currencyPairs" :key="pair.slug">
        <h3 class="font-semibold space-grotesk">{{ pair.slug }}</h3>
        <p class="text-[#5A5A5A] font-medium text-sm">{{ pair.name }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const currencyPairs = [
  { slug: "EURUSD", name: "EURO / U.S. DOLLAR" },
  { slug: "USDJPY", name: "U.S. DOLLAR / JAPANESE YEN" },
  { slug: "GBPUSD", name: "BRITISH POUND / U.S. DOLLAR" },
  { slug: "AUDUSD", name: "AUSTRALIAN DOLLAR / U.S. DOLLAR" },
  { slug: "USDCAD", name: "U.S. DOLLAR / CANADIAN DOLLAR" },
  { slug: "USDCHF", name: "U.S. DOLLAR / SWISS FRANC" },
];
</script>

<style scoped></style>

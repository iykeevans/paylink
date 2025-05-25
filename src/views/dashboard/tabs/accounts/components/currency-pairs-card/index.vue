<template>
  <section class="bg-[#5A5A5A82] rounded-md py-5 px-3 space-y-6">
    <div
      class="flex items-center justify-between"
      v-for="pair in data"
      :key="pair.id"
    >
      <div class="flex items-center gap-3">
        <div class="w-[75px] h-[68px] shrink-0">
          <img :src="pair.flag" alt="flags" class="w-full object-cover" />
        </div>

        <div class="text-xs w-[75px]">
          <p>{{ pair.currencyPair }}</p>
          <p class="break-all">{{ pair.currencyPairFull }}</p>
        </div>
      </div>

      <div class="flex items-center gap-1">
        <div>
          <MarketChart />
        </div>

        <div>
          <p class="text-xs text-right">0.73342</p>
          <div class="bg-blue-500 p-1 rounded-lg text-[10px] mt-1">CHANGE</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MarketChart from "@/assets/svg-components/market-chart.vue";

import IMAGE_EURUSD from "@/assets/images/eu-us-flags.png";
import IMAGE_USDNGN from "@/assets/images/us-ng-flags.png";

const data = [
  {
    id: 1,
    flag: IMAGE_EURUSD,
    currencyPair: "EURUSD",
    currencyPairFull: "EURO / U.S. DOLLAR",
  },
  {
    id: 2,
    flag: IMAGE_USDNGN,
    currencyPair: "USDNGN",
    currencyPairFull: "U.S. DOLLAR / NIGERIAN NAIRA",
  },
];
</script>

<style scoped></style>

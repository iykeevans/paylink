<template>
  <div>
    <TransactionsCard />

    <div class="text-sm mt-5 mb-2.5 flex justify-between">
      <h2 class="font-semibold">Currency Pairs</h2>
      <p class="text-[#007AFF]">See All</p>
    </div>

    <CurrencyPairsCard />

    <div class="text-sm mt-5 mb-2.5 flex justify-between">
      <h2 class="font-semibold">Recent Payments</h2>
      <p class="text-[#007AFF]">See All</p>
    </div>

    <section
      class="bg-[#5A5A5A82] rounded-md py-5 px-3 flex gap-2 overflow-x-auto"
    >
      <div class="w-[124px] flex flex-col items-center shrink-0">
        <div
          class="h-[80px] w-[80px] bg-[#5A5A5A] rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            />
          </svg>
        </div>

        <p class="text-[10px] text-center mt-2">Helen Osamudiamwen</p>
      </div>

      <div class="w-[124px] flex flex-col items-center shrink-0">
        <div
          class="h-[80px] w-[80px] bg-[#5A5A5A] rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            />
          </svg>
        </div>

        <p class="text-[10px] text-center mt-2">Senior Man</p>
      </div>

      <div class="w-[124px] flex flex-col items-center shrink-0">
        <div
          class="h-[80px] w-[80px] bg-[#5A5A5A] rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            />
          </svg>
        </div>

        <p class="text-[10px] text-center mt-2">Ju Man</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TransactionsCard from "./components/transactions-card.vue";
import CurrencyPairsCard from "./components/currency-pairs-card/index.vue";
</script>

<style scoped></style>

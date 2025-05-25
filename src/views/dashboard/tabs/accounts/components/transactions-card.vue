<template>
  <section class="bg-[#5A5A5A82] rounded-md py-5 px-3">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-bold space-grotesk flex items-center gap-3">
          <span>£ British Pounds</span>

          <ChevronDown />
        </h2>
        <p class="text-sm mt-1">Base Currency</p>
      </div>

      <div>
        <BritainFlag />
      </div>
    </div>

    <div class="flex gap-3 mt-3">
      <Button>
        <Plus />
        Place Order</Button
      >

      <Button class="bg-white text-black font-semibold">
        <ArrowRightUp />

        Send</Button
      >
    </div>

    <div class="flex justify-between mt-6 text-sm">
      <p>Transactions</p>
      <p class="text-[#007AFF]">See All</p>
    </div>

    <div class="flex justify-between mt-5">
      <div class="flex items-center gap-3">
        <Reload />

        <div>
          <p class="text-[15px] font-semibold">Bought EUR with GBP</p>
          <p class="text-xs mt-1">Today, 15:22</p>
        </div>
      </div>

      <div>
        <p class="text-[15px] font-semibold">+ €126.67</p>
        <p class="text-xs mt-1 text-right">- £108.67</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import BritainFlag from "@/assets/svg-components/britain-flag.vue";
import Reload from "@/assets/svg-components/reload.vue";
import ArrowRightUp from "@/assets/svg-components/arrow-right-up.vue";
import Plus from "@/assets/svg-components/plus.vue";
import ChevronDown from "@/assets/svg-components/chevron-down.vue";
</script>

<style scoped></style>

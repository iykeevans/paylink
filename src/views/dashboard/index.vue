<template>
  <div class="min-h-[100dvh] bg-[#1D1D1D] text-white pt-5 px-5 pb-14">
    <AnimatePresence>
      <SideBar v-if="showSidebar" @close="showSidebar = false" />
    </AnimatePresence>

    <header class="flex items-center justify-between">
      <div
        class="cursor-pointer h-[40px] w-[40px] bg-gray-100 rounded-full text-black font-bold flex items-center justify-center"
        @click="showSidebar = !showSidebar"
      >
        JD
      </div>

      <div class="flex gap-5 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z"
            />
          </svg>
        </div>

        <div>
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
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>

        <div>
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
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
      </div>
    </header>

    <section class="h-[40px] relative mt-8">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 absolute top-1/2 -translate-y-1/2 left-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <Input
        class="border-none bg-[#5A5A5A82] rounded-3xl h-full pl-11 pr-8"
        placeholder="Search"
      />
    </section>

    <section class="mt-8">
      <Tabs default-value="account" class="w-full">
        <TabsList class="w-full bg-[#5A5A5A82] text-white">
          <TabsTrigger value="account">Accounts</TabsTrigger>
          <TabsTrigger value="exchange">Exchange</TabsTrigger>
          <TabsTrigger value="pairs">Pairs</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Accounts />
        </TabsContent>

        <TabsContent value="exchange">
          <Exchange />
        </TabsContent>

        <TabsContent value="pairs">
          <Pairs />
        </TabsContent>

        <TabsContent value="rewards">
          <Rewards />
        </TabsContent>
      </Tabs>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Accounts from "./tabs/accounts/index.vue";
import Exchange from "./tabs/exchange/index.vue";
import Pairs from "./tabs/pairs.vue";
import Rewards from "./tabs/rewards.vue";
import SideBar from "@/components/customs/side-bar.vue";
import { ref } from "vue";
import { AnimatePresence } from "motion-v";

const showSidebar = ref(false);
</script>

<style scoped></style>

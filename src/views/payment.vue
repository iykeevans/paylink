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
      <h2 class="text-xl font-bold">Edit payment information</h2>
    </header>

    <div>
      <section class="bg-[#5A5A5A82] rounded-md py-4 px-5 space-y-2 mt-10">
        <small class="text-[10px]">Payment Type</small>
        <p class="text-sm font-semibold">Bank account</p>

        <small class="text-[10px]">Bank Name</small>
        <p class="text-sm font-semibold">Lloyds Bank</p>

        <small class="text-[10px]">Account Name</small>
        <p class="text-sm font-semibold">Jordan Dean</p>

        <small class="text-[10px]">Account Number</small>
        <p class="text-sm font-semibold">12***687</p>

        <small class="text-[10px]">Sort Code</small>
        <p class="text-sm font-semibold">*0-*8-95</p>
      </section>

      <div class="flex justify-end">
        <Button class="bg-white text-black mt-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          Remove this payment option</Button
        >
      </div>
    </div>

    <div>
      <section class="bg-[#5A5A5A82] rounded-md py-4 px-5 space-y-2 mt-10">
        <small class="text-[10px]">Payment Type</small>
        <p class="text-sm font-semibold">Debit card</p>

        <small class="text-[10px]">Card Type</small>
        <p class="text-sm font-semibold">Visa</p>

        <small class="text-[10px]">Cardholder's Name</small>
        <p class="text-sm font-semibold">Jordan Dean</p>

        <small class="text-[10px]">Card No</small>
        <p class="text-sm font-semibold">3129*************6870</p>

        <small class="text-[10px]">Expiry Date</small>
        <p class="text-sm font-semibold">15/09/20245</p>

        <small class="text-[10px]">CVV</small>
        <p class="text-sm font-semibold">***</p>
      </section>

      <div class="flex justify-end">
        <Button class="bg-white text-black mt-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          Remove this payment option</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
</script>

<style lang="scss" scoped></style>

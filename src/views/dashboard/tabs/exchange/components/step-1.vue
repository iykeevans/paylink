<template>
  <div class="pt-8">
    <label class="flex flex-col space-y-2">
      <span class="text-sm">Home currency</span>

      <Select class="w-full">
        <SelectTrigger class="w-full bg-[#5A5A5A82] border-none">
          <SelectValue placeholder="Select a currency" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">£ British Pounds</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </label>

    <label class="flex flex-col space-y-2 mt-5">
      <span class="text-sm">Currency pair</span>

      <Select class="w-full">
        <SelectTrigger class="w-full bg-[#5A5A5A82] border-none">
          <SelectValue placeholder="Select a currency pair" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="USDNGN">USDNGN</SelectItem>
            <SelectItem value="USDJPY">USDJPY</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </label>

    <label class="flex flex-col space-y-2 mt-5">
      <span class="text-sm">Rates Enter desired rate or use auto finder</span>

      <div class="flex flex-wrap gap-5 justify-start">
        <Button class="bg-white text-black flex-1">Lowest</Button>

        <Button class="flex-1 bg-[#5A5A5A82]">Highest</Button>

        <Button class="bg-[#5A5A5A82] flex-1">Auto</Button>
      </div>
    </label>

    <Button class="bg-[#007AFF] w-full mt-16" @click="$emit('progress')"
      >Continue</Button
    >
  </div>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
</script>

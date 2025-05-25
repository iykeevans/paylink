<template>
  <div class="pt-8">
    <Select class="w-full">
      <SelectTrigger class="w-full bg-[#5A5A5A82] border-none">
        <SelectValue placeholder="Pay From Account" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="Pay From Account">Pay From Account</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <div class="flex gap-5 justify-start mt-5">
      <Select>
        <SelectTrigger class="flex-1 bg-[#5A5A5A82] border-none">
          <SelectValue placeholder="Country" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="britain">Britain</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select v-model="selectedRegion">
        <SelectTrigger class="flex-1 bg-[#5A5A5A82] border-none">
          <SelectValue placeholder="Region" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="uk">UK</SelectItem>
            <SelectItem value="america">America</SelectItem>
            <SelectItem value="EU">EU</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="mt-6" v-if="selectedRegion">
      <p class="font-bold mb-5">To</p>

      <label class="flex flex-col space-y-2">
        <span class="text-sm">Bank name</span>
        <Input class="bg-[#5A5A5A82] border-none" />
      </label>

      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Account holder's name</span>
        <Input class="bg-[#5A5A5A82] border-none" />
      </label>

      <label class="flex flex-col space-y-2 mt-5">
        <span class="text-sm">Account number</span>
        <Input class="bg-[#5A5A5A82] border-none" />
      </label>

      <label
        class="flex flex-col space-y-2 mt-5"
        v-if="selectedRegion === 'asia' || selectedRegion === 'america'"
      >
        <span class="text-sm">Routing number</span>
        <Input class="bg-[#5A5A5A82] border-none" />
      </label>

      <label
        class="flex flex-col space-y-2 mt-5"
        v-if="selectedRegion === 'EU'"
      >
        <span class="text-sm">IBAN</span>
        <Input class="bg-[#5A5A5A82] border-none" />
      </label>

      <label
        class="flex flex-col space-y-2 mt-5"
        v-if="selectedRegion === 'uk'"
      >
        <span class="text-sm">Sort Code</span>
        <Input class="bg-[#5A5A5A82] border-none" />
      </label>
    </div>

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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ref } from "vue";

const selectedRegion = ref("");
</script>

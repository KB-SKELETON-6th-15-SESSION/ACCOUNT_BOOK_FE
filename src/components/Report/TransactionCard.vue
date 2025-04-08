<template>
  <div class="bg-white p-3 rounded-xl flex items-center">
    <div class="bg-[#f3edfd] rounded-full h-10 w-10"></div>
    <div class="flex justify-center items-center gap-4">
      <div>
        <div class="text-xs text-gray-500">{{ category }}</div>
        <div class="text-md font-semibold">{{ title }}</div>
        <div class="text-xs text-gray-400">{{ date }}</div>
      </div>
      <div
        class="text-sm font-semibold"
        :class="isIncome ? 'text-blue-500' : 'text-red-500'"
      >
        {{ amountDisplay }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  category: String,
  title: String,
  date: String,
  amount: Number,
  isIncome: Boolean,
});

const amountDisplay = computed(() => {
  return `${props.isIncome ? "+" : "-"}${props.amount?.toLocaleString() ?? 0}`;
});
</script>

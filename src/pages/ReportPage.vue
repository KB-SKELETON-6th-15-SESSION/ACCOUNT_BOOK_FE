<template>
  <div class="container">
    <div class="w-[375px] h-full border-solid border-2 rounded-[40px] p-4">
      <div class="mb-4 space-y-2">
        <div
          class="flex justify-between items-center p-2 rounded-xl border gap-2"
        >
          <span class="text-sm text-gray-500">기간 설정</span>
          <input
            type="date"
            class="appearance-none w-[130px] text-sm text-center border rounded-md [&::-webkit-calendar-picker-indicator]:hidden"
          />
          <p>-</p>
          <input
            type="date"
            class="appearance-none w-[130px] text-sm text-center border rounded-md [&::-webkit-calendar-picker-indicator]:hidden"
          />
        </div>
        <div class="flex gap-3 justify-center items-center">
          <button class="rounded-full px-3 py-1 border">전체</button>
          <p class="text-lg text-gray-400">|</p>
          <div class="flex gap-1 justify-between">
            <button class="rounded-full px-3 py-1 border">식비</button>
            <button class="rounded-full px-3 py-1 border">교통비</button>
            <button class="rounded-full px-3 py-1 border">월급</button>
          </div>
        </div>
      </div>

      <div class="mb-4 flex w-full justify-end">
        <button
          @click="selected = 'income'"
          :class="[
            'px-4 py-1 border rounded-tl-xl rounded-bl-xl',
            selected === 'income' ? 'bg-black text-white' : '',
          ]"
        >
          수입
        </button>
        <button
          @click="selected = 'expense'"
          :class="[
            'px-4 py-1 border rounded-tr-xl rounded-br-xl',
            selected === 'expense' ? 'bg-black text-white' : '',
          ]"
        >
          지출
        </button>
      </div>

      <div class="mb-4 text-sm flex justify-between">
        <span>15건</span>
        <span class="font-semibold">+2,142,200</span>
      </div>
      <div class="flex flex-col gap-2">
        <TransactionCard
          category="식비"
          title="일품순대국"
          date="2025년 4월 30일"
          :amount="15300"
          :isIncome="false"
        />
        <TransactionCard
          category="월급"
          title="무한상사"
          date="2025년 5월 01일"
          :amount="2300300"
          :isIncome="true"
        />
        <TransactionCard
          category="교통비"
          title="교통비"
          date="2025년 5월 01일"
          :amount="75900"
          :isIncome="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TransactionCard from "@/components/Report/TransactionCard.vue";
import { ref } from "vue";
const selected = ref("income");
</script>

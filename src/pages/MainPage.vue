<template>
  <div class="layout" style="max-width: 400px">
    <Header />
    <!-- 상단 유저 인사 -->
    <div class="mb-9 flex-col flex gap-2">
      <p class="text-3xl">
        <strong>{{ name }}</strong
        >님
      </p>
      <p class="text-3xl">화창한 날씨네요.</p>
      <p class="text-3xl">오늘 나들이 어떠세요?</p>
    </div>

    <!-- 상세내역 보기 버튼 -->
    <div class="d-grid mb-3">
      <button
        class="btn btn-light text-black rounded-[10px] fw-medium border h-[50px]"
        style="background: linear-gradient(90deg, #e8deff, #e0d6ff)"
        @click="toReport"
      >
        상세내역 보기
      </button>
    </div>

    <!-- 총 수입/지출 카드 -->
    <div class="flex justify-between mb-2">
      <!-- 수입 -->
      <div
        class="w-[49%] rounded-[10px] p-4 flex flex-col gap-3"
        style="background: #b54ce9"
      >
        <p class="text-xl text-white">총 수입</p>
        <p class="text-xl text-white">{{ totalAmount.toLocaleString() }}원</p>
      </div>
      <!-- 지출 -->
      <div
        class="w-[49%] rounded-[10px] p-4 flex flex-col gap-3"
        style="background: #7c4ce9"
      >
        <p class="text-xl text-white">총 지출</p>
        <p class="text-xl text-white">{{ totalExpense.toLocaleString() }}원</p>
      </div>
    </div>

    <!-- 순수익 -->

    <div
      class="border p-3 mb-2 d-flex justify-content-between align-items-center rounded-[10px]"
    >
      <span class="fw-medium">순수익</span>
      <span class="fw-semibold"
        >{{ (totalAmount - totalExpense).toLocaleString() }}원</span
      >
    </div>

    <!-- 새로운 거래내역 추가 -->

    <button
      class="w-full border p-3 rounded-[10px] font-bold"
      @click="toCreate"
    >
      새로운 거래내역 추가하기
    </button>
  </div>
</template>

<script setup>
import Header from '@/components/Shared/Header.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const userId = localStorage.getItem('id');
const route = useRouter();
const totalAmount = ref(0);
const totalExpense = ref(0);
const name = localStorage.getItem('name');

async function calAllAmount() {
  const res = await axios.get(
    `https://json-server-api-6wsp.onrender.com/transaction?memberId=${userId}&type=true`
  );
  const data = await res.data;

  data.forEach((e) => {
    totalAmount.value += e.amount;
  });
}
calAllAmount();

async function calAllExpense() {
  const res = await axios.get(
    `https://json-server-api-6wsp.onrender.com/transaction?memberId=${userId}&type=false`
  );
  const data = await res.data;
  data.forEach((e) => {
    totalExpense.value += e.amount;
  });
}
calAllExpense();

function toReport() {
  route.push('/report');
}
function toCreate() {
  route.push('/create');
}
</script>

<style scoped>
.border-light-purple {
  border-color: #e0d6ff;
}
</style>

<template>
  <div class="container py-4" style="max-width: 400px">
    <!-- 상단 유저 인사 -->
    <div class="mb-4">
      <h5 class="fw-bold">강민재님</h5>
      <p class="mb-0">화창한 날씨네요.<br />오늘 나들이 어떠세요?</p>
    </div>

    <!-- 상세내역 보기 버튼 -->
    <div class="d-grid mb-4">
      <button
        class="btn btn-light text-dark fw-medium border border-light-purple"
        style="background: linear-gradient(90deg, #e4d5ff, #e0d6ff)"
        @click="toReport"
      >
        상세내역 보기
      </button>
    </div>

    <!-- 총 수입/지출 카드 -->
    <div class="d-flex justify-content-between mb-4">
      <!-- 수입 -->
      <div
        class="card text-white text-center me-2 flex-fill"
        style="background: linear-gradient(135deg, #a66cff, #8f3cff)"
      >
        <div class="card-body p-3">
          <small>총 수입</small>
          <h5 class="card-title">{{ totalAmount.toLocaleString() }}원</h5>
        </div>
      </div>
      <!-- 지출 -->
      <div
        class="card text-white text-center flex-fill"
        style="background: linear-gradient(135deg, #6f79ff, #4951e1)"
      >
        <div class="card-body p-3">
          <small>총 지출</small>
          <h5 class="card-title">{{ totalExpense.toLocaleString() }}원</h5>
        </div>
      </div>
    </div>

    <!-- 순수익 -->
    <div class="card mb-4">
      <div class="card-body d-flex justify-content-between align-items-center">
        <span class="fw-medium">순수익</span>
        <span class="fw-semibold"
          >{{ (totalAmount - totalExpense).toLocaleString() }}원</span
        >
      </div>
    </div>

    <!-- 새로운 거래내역 추가 -->
    <div class="d-grid">
      <button class="btn btn-outline-dark fw-medium" @click="toCreate">
        새로운 거래내역 추가하기
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const userId = localStorage.getItem('id');
const route = useRouter();
const totalAmount = ref(0);
const totalExpense = ref(0);

async function calAllAmount() {
  const res = await axios.get(
    `http://localhost:3000/transaction?userId=${userId}&type=true`
  );
  const data = await res.data;
  data.forEach((e) => {
    totalAmount.value += e.amount;
  });
}
calAllAmount();

async function calAllExpense() {
  const res = await axios.get(
    `http://localhost:3000/transaction?userId=${userId}&type=false`
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

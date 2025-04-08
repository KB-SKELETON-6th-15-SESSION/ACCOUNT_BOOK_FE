<template>
  <div
    class="container p-4 rounded-lg border-solid border-2"
    style="max-width: 400px"
  >
    <Header />
    <BackButton @click="goBack" />
    <!-- 기간 설정 -->
    <div class="mb-4">
      <div class="d-flex justify-content-between align-items-center rounded-3">
        <span class="fw-semibold small">기간 설정</span>
        <div class="d-flex align-items-center">
          <input
            type="date"
            class="form-control form-control-sm"
            style="width: 120px"
            v-model="startDate"
            @change="toInteger"
          />
          <span class="mx-1">-</span>
          <input
            type="date"
            class="form-control form-control-sm"
            style="width: 120px"
            v-model="endDate"
            @change="toInteger"
          />
        </div>
      </div>
    </div>

    <!-- 카테고리 선택 -->
    <div class="mb-4 d-flex justify-start align-items-center gap-2">
      <button
        class="btn btn-sm border rounded-pill px-3 flex-shrink-0"
        :class="selectedCategory === '전체' ? 'bg-custom-purple' : 'bg-white'"
        @click="selectedCategory = '전체'"
      >
        전체
      </button>
      <span class="text-muted">|</span>
      <div
        class="d-flex gap-2 overflow-auto flex-nowrap"
        style="max-width: 230px"
      >
        <button
          v-for="category in categories"
          :key="category"
          class="btn btn-sm border rounded-pill px-3 flex-shrink-0"
          :class="
            selectedCategory === category ? 'bg-custom-purple' : 'bg-white'
          "
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- 수입/지출 토글 -->
    <div class="mb-4 d-flex justify-content-end">
      <button
        class="btn btn-sm text-black px-3 border border-gray-400 rounded-start-pill"
        :class="selected ? 'bg-custom-purple' : 'bg-white'"
        @click="selected = true"
      >
        수입
      </button>
      <button
        class="btn btn-sm text-black px-3 border border-gray-400 border-start-0 rounded-end-pill"
        :class="!selected ? 'bg-custom-purple' : 'bg-white'"
        @click="selected = false"
      >
        지출
      </button>
      <button
        class="btn btn-sm border rounded-pill px-3 flex-shrink-0"
        @click="getData"
      >
        조회
      </button>
    </div>

    <!-- 요약 정보 -->
    <div
      class="mb-4 border rounded px-3 py-2 d-flex justify-content-between small"
    >
      <span>{{ allData.length }}건</span>
      <span class="fw-bold">{{ sumAmount.toLocaleString() }}</span>
    </div>

    <!-- 거래 내역 카드 -->
    <div class="d-flex flex-column gap-2">
      <TransactionCard
        v-for="data in allData"
        :key="data.id"
        :category="data.category"
        :title="data.name"
        :date="data.date"
        :amount="data.amount"
        :isIncome="data.type"
      />
    </div>
  </div>
</template>

<script setup>
import TransactionCard from '@/components/Report/TransactionCard.vue';
import BackButton from '@/components/Shared/BackButton.vue';
import Header from '@/components/Shared/Header.vue';
import axios from 'axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.push('/main');
};

const selected = ref(true);
const selectedCategory = ref('전체');
const startDate = ref('2025-01-01');
const endDate = ref('2025-04-08');
const selectedStartDate = ref(1);
const selectedEndDate = ref(999999999);
const sumAmount = ref(0);

localStorage.setItem('id', 1);
const userId = localStorage.getItem('id');

const categories = ['공과금', '경조사비', '식비', '월급', '여가비', '기타'];

const allData = ref([
  {
    amount: 0,
    category: '',
    date: 0,
    memo: '',
    name: '',
    type: true,
  },
]);

function calTotalSum() {
  sumAmount.value = 0;
  allData.value.forEach((e) => {
    sumAmount.value += e.amount;
  });
}

function toInteger() {
  selectedStartDate.value = Number(startDate.value.replaceAll('-', ''));
  selectedEndDate.value = Number(endDate.value.replaceAll('-', ''));
}

async function getData() {
  let res = '';
  if (selectedCategory.value === '전체') {
    res = await axios.get(
      `http://localhost:3000/transaction?memberId=${userId}&date_gte=${selectedStartDate.value}&date_lte=${selectedEndDate.value}&type=${selected.value}`
    );
  } else {
    res = await axios.get(
      `http://localhost:3000/transaction?memberId=${userId}&date_gte=${selectedStartDate.value}&date_lte=${selectedEndDate.value}&category=${selectedCategory.value}&type=${selected.value}`
    );
  }
  allData.value = res.data;
  calTotalSum();
  selected.value
    ? (sumAmount.value = '+' + sumAmount.value.toLocaleString())
    : '-' + sumAmount.value.toLocaleString();
  console.log(allData.value);
}

getData();

watch(selectedCategory, (newVal) => {
  console.log('선택된 카테고리:', newVal);
});
</script>

<style>
.bg-custom-purple {
  background-color: #f3edfd;
}
</style>

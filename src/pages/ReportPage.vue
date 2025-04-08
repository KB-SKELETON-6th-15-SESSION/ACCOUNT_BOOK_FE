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
          />
          <span class="mx-1">-</span>
          <input
            type="date"
            class="form-control form-control-sm"
            style="width: 120px"
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
        :class="selected === 'income' ? 'bg-custom-purple' : 'bg-white'"
        @click="selected = 'income'"
      >
        수입
      </button>
      <button
        class="btn btn-sm text-black px-3 border border-gray-400 border-start-0 rounded-end-pill"
        :class="selected === 'expense' ? 'bg-custom-purple' : 'bg-white'"
        @click="selected = 'expense'"
      >
        지출
      </button>
    </div>

    <!-- 요약 정보 -->
    <div
      class="mb-4 border rounded px-3 py-2 d-flex justify-content-between small"
    >
      <span>15건</span>
      <span class="fw-bold">+2,142,200</span>
    </div>

    <!-- 거래 내역 카드 -->
    <div class="d-flex flex-column gap-2">
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
</template>

<script setup>
import TransactionCard from "@/components/Report/TransactionCard.vue";
import BackButton from "@/components/Shared/BackButton.vue";
import Header from "@/components/Shared/Header.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.back();
};

const selected = ref("income");
const selectedCategory = ref("전체");

const categories = [
  "식비",
  "교통비",
  "월급",
  "기타1",
  "기타2",
  "기타3",
  "식비2",
  "교통비2",
  "월급2",
];

watch(selectedCategory, (newVal) => {
  console.log("선택된 카테고리:", newVal);
});
</script>

<style>
.bg-custom-purple {
  background-color: #f3edfd;
}
</style>

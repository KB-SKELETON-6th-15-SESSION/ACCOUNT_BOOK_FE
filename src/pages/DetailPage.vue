<template>
  <div class="layout" style="max-width: 400px">
    <Header />

    <!-- 카테고리 -->
    <div class="text-[24px] font-semibold text-gray-700 mb-1 mt-2">
      {{ category }}
    </div>

    <div class="mb-5">
      <!-- 이름 -->
      <p class="font-bold text-[40px] mb-1">{{ name }}</p>

      <!-- 가격 -->
      <p class="font-semibold text-[32px] mb-3">
        {{ typeSymbol }} {{ amount.toLocaleString() }}원
      </p>

      <!-- 날짜 -->
      <p class="text-[20px] text-gray-500 mb-4">{{ formattedDate }}</p>
    </div>

    <div class="h-[250px] flex flex-col gap-3">
      <p class="text-[20px] font-semibold">메모</p>

      <!-- 메모 -->
      <p class="flex-wrap leading-[30px]">{{ memo }}</p>
    </div>

    <MainButton @click="check">확인</MainButton>
  </div>
</template>

<script setup>
import Header from "@/components/Shared/Header.vue";
import MainButton from "@/components/Shared/MainButton.vue";
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 상태 정의
const category = ref("");
const amount = ref(0);
const date = ref("");
const memo = ref("");
const type = ref(false);
const name = ref("");

// 날짜 포맷 함수
function formatDate(dateNum) {
  const str = dateNum.toString();
  return `${str.slice(0, 4)}년 ${str.slice(4, 6)}월 ${str.slice(6)}일`;
}

// 데이터 요청
onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:3000/transaction/1");
    const data = res.data;

    category.value = data.category;
    amount.value = data.amount;
    date.value = data.date;
    memo.value = data.memo;
    type.value = data.type;
    name.value = data.name;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
  }
});

const formattedDate = computed(() => formatDate(date.value));
const typeSymbol = computed(() => (type.value ? "+" : "-"));

function check() {
  router.push({ name: "Report" });
}
</script>

<style></style>

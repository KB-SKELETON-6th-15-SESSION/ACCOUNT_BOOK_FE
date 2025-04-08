<template>
  <div
    class="container p-4 rounded-lg border-solid border-2"
    style="max-width: 400px"
  >
    <Header />

    <div class="text-[24px] font-semibold text-gray-700 mb-1 mt-2">식비</div>
    <div class="mb-5">
      <p class="font-bold text-[40px] mb-1">일품순대국</p>
      <p class="font-semibold text-[32px] mb-3">+ 15,300원</p>

      <p class="text-[20px] text-gray-500 mb-4">2025년 4월 30일</p>
    </div>

    <div class="h-[250px] flex flex-col gap-3">
      <p class="text-[20px] font-semibold">메모</p>
      <p class="flex-wrap leading-[30px]">
        지은이와 밥 먹고 N빵한 것지은이와 밥 먹고 N빵한 것지은이와 밥 먹고 N빵한
        것지은이와 밥 먹고 N빵한 것지은이와 밥 먹고 N빵한 것지은이와 밥 먹고
        N빵한 것지은이와 밥 먹고 N빵한 것지은이와 밥 먹고 N빵한 것
      </p>
    </div>

    <MainButton @click="check">확인</MainButton>
  </div>
</template>

<script setup>
import Header from "@/components/Shared/Header.vue";
import MainButton from "@/components/Shared/MainButton.vue";
import { useRouter } from "vue-router";
const router = useRouter();

function check() {
  return router.push({ name: "Report" });
}
</script>

<style></style>

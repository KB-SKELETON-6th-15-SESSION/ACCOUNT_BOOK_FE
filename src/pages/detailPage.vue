<template>
    <div class="container py-4" style="max-width: 400px;">
      <!-- 헤더 부분 -->
      <div class="mb-2">
        <div class="text-muted small">강민재님 &rarr;</div>
      </div>
      <hr />

      <!-- 카테고리 -->
      <div class="text-muted mb-1 mt-2">식비</div>

      <!-- 거래 내역 제목 -->
      <h4 class="fw-bold mb-1">일품순대국</h4>

      <!-- 금액 -->
      <h5 class="fw-semibold text-success mb-3">+ 15,300원</h5>

      <!-- 날짜 -->
      <div class="text-muted mb-4">2025년 4월 30일</div>

      <!-- 메모 -->
      <div class="mb-1 fw-bold">메모</div>
      <p>지은이와 밥 먹고 N빵한 것</p>

      <!-- 확인 버튼 -->
      <div class="d-grid mt-5">
        <button @click="check" class="btn text-white fw-bold" 
        style="background-color: #A34EE0; border-radius: 2rem;">
          확인
        </button>
      </div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 확인 버튼 클릭시 report 페이지로 이동
function check() {
    return router.push({ name: report });
}

</script>

<style scoped></style>
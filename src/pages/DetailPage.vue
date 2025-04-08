<template>
    <div class="container py-4" style="max-width: 400px;">
      <!-- 헤더 부분 -->
      <div class="mb-2">
        <div class="text-muted small">강민재님 &rarr;</div>
      </div>
  
      <hr />
  
      <!-- 카테고리 -->
      <div class="text-muted mb-1 mt-2">{{ category }}</div>
  
      <!-- 거래 내역 제목 : db.json에 데이터 추가해서 수정필요-->
      <h4 class="fw-bold mb-1">일품순대국</h4>
  
      <!-- 금액 -->
      <h5 class="fw-semibold text-success mb-3">+ {{ amount.toLocaleString() }}원</h5>
  
      <!-- 날짜 -->
      <div class="text-muted mb-4">{{ date }}</div>
  
      <!-- 메모 -->
      <div class="mb-1 fw-bold">메모</div>
      <p>{{ memo }}</p>
  
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
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  const router = useRouter();
  
  // 거래 데이터 상태 정의
  const category = ref('');
  const amount = ref(0);
  const date = ref('');
  const memo = ref('');
  
  // 날짜 포맷 함수
  function formatDate(dateNum) {
    const str = dateNum.toString();
    return `${str.slice(0, 4)}년 ${str.slice(4, 6)}월 ${str.slice(6)}일`;
  }
  
  // 마운트 시 데이터 가져오기
  onMounted(async () => {
    try {
      const res = await axios.get('http://localhost:3000/transaction/1'); // 동적 라우팅으로 수정 필요
      const data = res.data;
      category.value = data.category;
      amount.value = data.amount;
      date.value = formatDate(data.date);
      memo.value = data.memo;
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
    }
  });
  
  // 확인 버튼 클릭 시 /report 페이지로 이동
  function check() {
    router.push('/report');
  }
  </script>
  
  
  <style scoped></style>
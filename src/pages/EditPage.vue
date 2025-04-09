<template>
  <div class="layout" style="max-width: 400px">
    <Header />
    <BackButton @click="goBack" />
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label font-bold">제목 *</label>
        <input
          type="text"
          class="form-control h-[45px]"
          placeholder="제목을 입력하세요"
          v-model="title"
        />
      </div>

      <div class="mb-3 flex gap-2">
        <label class="form-label font-bold w-[100px] m-auto">금액 *</label>
        <div class="input-group">
          <input type="number" class="form-control h-[45px]" v-model="amount" />
          <span class="input-group-text fw-bold bg-white">원</span>
        </div>
      </div>

      <div class="mb-3 flex gap-2">
        <label class="form-label font-bold w-[100px] m-auto">카테고리 *</label>
        <select class="form-select h-[45px]" v-model="category">
          <option disabled value="">카테고리를 선택하세요</option>
          <option
            v-for="option in categoryOptions"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <div class="mb-3 flex justify-between">
        <label class="form-label fw-bold d-block">거래 유형 *</label>
        <div class="btn-group" role="group">
          <input
            type="radio"
            class="btn-check"
            id="income"
            value="수입"
            v-model="type"
          />
          <label class="btn btn-outline-secondary" for="income">수입</label>

          <input
            type="radio"
            class="btn-check"
            id="expense"
            value="지출"
            v-model="type"
          />
          <label class="btn btn-outline-secondary" for="expense">지출</label>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label font-bold">메모</label>
        <textarea
          class="form-control"
          style="resize: none"
          rows="4"
          v-model="memo"
        ></textarea>
      </div>
      <div class="w-full m-auto flex flex-col justify-center items-center">
        <MainButton type="submit">수정하기</MainButton>
      </div>
    </form>
  </div>
</template>
<script setup>
import BackButton from '@/components/Shared/BackButton.vue';
import Header from '@/components/Shared/Header.vue';
import MainButton from '@/components/Shared/MainButton.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute(); // URL 파라미터 사용
const transactionId = route.params.id; // /edit/:id 에서 id 추출

const title = ref('');
const amount = ref('');
const category = ref('');
const type = ref('');
const memo = ref('');

const categoryOptions = [
  '공과금',
  '경조사비',
  '식비',
  '여비교통비',
  '월급',
  '여가비',
  '기타',
];

const goBack = () => {
  router.back();
};

onMounted(async () => {
  try {
    const res = await axios.get(
      `https://json-server-api-6wsp.onrender.com/transaction/${transactionId}`
    );
    const data = res.data;

    title.value = data.name;
    amount.value = data.amount;
    category.value = data.category;
    memo.value = data.memo;
    type.value = data.type ? '수입' : '지출';
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
});

const handleSubmit = async () => {
  const memberId = localStorage.getItem('id');

  if (!title.value || !amount.value || !category.value || !type.value) {
    alert('필수 항목을 모두 입력해주세요.');
    return;
  }

  const updatedTransaction = {
    name: title.value,
    amount: Number(amount.value),
    date: Number(new Date().toISOString().slice(0, 10).replace(/-/g, '')),
    category: category.value,
    memo: memo.value,
    type: type.value === '수입',
    memberId: Number(memberId),
  };

  try {
    const response = await axios.put(
      `https://json-server-api-6wsp.onrender.com/transaction/${transactionId}`,
      updatedTransaction
    );
    console.log('수정 성공:', response.data);
    alert('거래내역이 수정되었습니다!');
    router.push(`/detail/${transactionId}`);
  } catch (error) {
    console.error('수정 실패:', error);
    alert('수정 중 오류가 발생했습니다.');
  }
};
</script>

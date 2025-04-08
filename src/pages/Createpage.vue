<template>
  <div
    class="container p-4 rounded-lg border-solid border-2"
    style="max-width: 400px"
  >
    <Header />
    <BackButton @click="goBack" />
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label font-bold">제목</label>
        <input
          type="text"
          class="form-control h-[45px]"
          placeholder="제목을 입력하세요"
          v-model="title"
        />
      </div>

      <div class="mb-3 flex gap-2">
        <label class="form-label font-bold w-[100px] m-auto">금액</label>
        <div class="input-group">
          <input type="number" class="form-control h-[45px]" v-model="amount" />
          <span class="input-group-text fw-bold bg-white">원</span>
        </div>
      </div>

      <div class="mb-3 flex gap-2">
        <label class="form-label font-bold w-[100px] m-auto">카테고리</label>
        <select class="form-select h-[45px]" v-model="category">
          <option disabled value="">카테고리를 선택하세요</option>
        </select>
      </div>

      <div class="mb-3 flex justify-between">
        <label class="form-label fw-bold d-block">거래 유형</label>
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

      <!-- <button
        type="submit"
        class="btn w-100 py-2 font-bold"
        :style="{ backgroundColor: '#B25AE7', color: 'white' }"
      >
        등록하기
      </button> -->
      <MainButton type="submit">등록하기</MainButton>
    </form>
  </div>
</template>

<script setup>
import BackButton from "@/components/Shared/BackButton.vue";
import Header from "@/components/Shared/Header.vue";
import MainButton from "@/components/Shared/MainButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref("");
const amount = ref("");
const category = ref("");
const type = ref("");
const memo = ref("");

const goBack = () => {
  router.back();
};

const handleSubmit = () => {
  console.log({
    title: title.value,
    amount: amount.value,
    category: category.value,
    type: type.value,
    memo: memo.value,
  });

  // 실제 저장 로직 추가 가능
};
</script>

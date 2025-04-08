<template>
  <div class="container my-4">
    <h5 class="fw-bold mb-3">강민재님</h5>
    <hr />

    <div class="mb-3 d-flex align-items-center" role="button" @click="goBack">
      <i class="bi bi-arrow-left me-2"></i>
      <span>뒤로가기</span>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label fw-bold">제목</label>
        <input type="text" class="form-control" v-model="title" />
      </div>

      <div class="mb-3">
        <label class="form-label fw-bold">금액</label>
        <div class="input-group">
          <input type="number" class="form-control" v-model="amount" />
          <span class="input-group-text fw-bold">원</span>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label fw-bold">카테고리</label>
        <select class="form-select" v-model="category">
          <option disabled value="">카테고리를 선택하세요</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label fw-bold d-block">거래 유형</label>
        <div class="btn-group w-100" role="group">
          <input type="radio" class="btn-check" id="income" value="수입" v-model="type" />
          <label class="btn btn-outline-secondary" for="income">수입</label>

          <input type="radio" class="btn-check" id="expense" value="지출" v-model="type" />
          <label class="btn btn-outline-secondary" for="expense">지출</label>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label fw-bold">메모</label>
        <textarea class="form-control" rows="4" v-model="memo"></textarea>
      </div>

      <button type="submit" class="btn w-100 py-2 fw-bold" :style="{ backgroundColor: '#B25AE7', color: 'white' }">
        등록하기
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('')
const amount = ref('')
const category = ref('')
const type = ref('')
const memo = ref('')

const goBack = () => {
  router.back()
}

const handleSubmit = () => {
  console.log({
    title: title.value,
    amount: amount.value,
    category: category.value,
    type: type.value,
    memo: memo.value,
  })

  // 실제 저장 로직 추가 가능
}
</script>

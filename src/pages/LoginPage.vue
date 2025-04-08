<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
    <div class="bg-white text-dark rounded-4 p-5" style="width: 400px;">
      <h1 class="fw-bold text-center mb-5">텅장지킴이</h1>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="이메일을 입력하세요"
            v-model="email"
            required
          />
        </div>

        <div class="mb-4">
          <input
            type="password"
            class="form-control"
            placeholder="비밀번호를 입력하세요"
            v-model="password"
            required
          />
        </div>

        <button type="submit" class="btn btn-lg w-100" :style="{ backgroundColor: '#B25AE7', color: 'white' }">
          로그인
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('이메일:', email.value)
  console.log('비밀번호:', password.value)
  // 실제 로그인 로직 추가 가능
}
</script>

<style scoped>
input::placeholder {
  color: #aaa;
}
</style>
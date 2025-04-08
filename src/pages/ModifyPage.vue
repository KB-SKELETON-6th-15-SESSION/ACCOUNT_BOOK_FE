<template>
  <div
    class="container p-4 rounded-lg border-solid border-2"
    style="max-width: 400px"
  >
    <Header />
    <BackButton @click="goBack" />

    <div class="form mt-[50px] mb-[100px]">
      <label>이름</label>
      <input type="text" v-model="member.name" />

      <label>이메일</label>
      <input v-model="member.email" disabled />

      <label>비밀번호</label>
      <input type="password" v-model="member.password" />
    </div>

    <MainButton>프로필 수정하기</MainButton>
  </div>
</template>

<script setup>
import BackButton from '@/components/Shared/BackButton.vue';
import Header from '@/components/Shared/Header.vue';
import MainButton from '@/components/Shared/MainButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const member = ref({
  name: '강민재',
  email: 'minijae011030@gmail.com',
  password: '',
});

function goBack() {
  router.push('/profile');
}
</script>

<style scoped>
.form label {
  display: block;
  margin: 0.5rem 0 0.2rem;
  font-weight: bold;
}

.form input {
  width: 100%;
  padding: 0.7rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
}
</style>

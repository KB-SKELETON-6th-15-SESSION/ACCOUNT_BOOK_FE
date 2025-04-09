<template>
  <div class="layout pt-[50px]" style="max-width: 400px">
    <BackButton @click="goBack" />
    <p class="font-bold text-[25px] text-center mt-[100px]">회원가입</p>

    <form @submit.prevent="handleSignup" class="mb-[100px]">
      <div
        class="mt-[50px] mb-[50px] w-full justify-center flex flex-col items-center gap-4"
      >
        <input
          type="text"
          class="form-control h-[45px] w-[95%]"
          placeholder="이름을 입력하세요"
          v-model="name"
          required
        />

        <input
          type="email"
          class="form-control h-[45px] w-[95%]"
          placeholder="이메일을 입력하세요"
          v-model="email"
          required
        />

        <input
          type="password"
          class="form-control h-[45px] w-[95%]"
          placeholder="비밀번호를 입력하세요"
          v-model="password"
          required
        />

        <input
          type="password"
          class="form-control h-[45px] w-[95%]"
          placeholder="비밀번호를 다시 입력하세요"
          v-model="confirmPassword"
          required
        />
      </div>

      <div class="w-full m-auto flex flex-col justify-center items-center">
        <MainButton type="submit">회원가입하기</MainButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import BackButton from '@/components/Shared/BackButton.vue';
import MainButton from '@/components/Shared/MainButton.vue';
import axios from 'axios';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

function goBack() {
  router.push("/");
}
async function handleSignup() {
  if (password.value !== confirmPassword.value) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  try {
    if (window.confirm('회원가입 하시겠습니까?')) {
      const res = await axios.get(
        `https://json-server-api-6wsp.onrender.com/member?email=${email.value}`
      );
      if (res.data.length > 0) {
        throw new Error('이미 등록된 이메일입니다.');
      }

      const newUser = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      await axios.post(
        `https://json-server-api-6wsp.onrender.com/member`,
        newUser
      );
      alert('회원가입에 성공했습니다.');
      router.replace('/');
    }
  } catch (err) {
    alert(err.message || '회원가입 중 오류가 발생했습니다.');
  }
}
</script>

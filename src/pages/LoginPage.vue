<template>
  <div class="layout pt-[150px]" style="max-width: 400px">
    <p class="font-bold text-[45px] text-center mb-5">텅장지킴이</p>

    <form @submit.prevent="handleLogin" class="mb-[100px]">
      <div
        class="mt-[100px] mb-[50px] w-full justify-center flex flex-col items-center gap-4"
      >
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
      </div>

      <div class="w-full m-auto flex flex-col justify-center items-center">
        <MainButton type="submit">로그인</MainButton>
        <button class="mt-4 text-sm" @click="goSignUp">
          회원이 아니신가요?
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import MainButton from '@/components/Shared/MainButton.vue';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore();

function goSignUp() {
  router.push("/signup");
}

async function handleLogin() {
  try {
    await authStore.login(email.value, password.value);
    alert('로그인 성공');

    router.replace('/main');
  } catch (err) {
    alert(err.message);
  }
}
</script>

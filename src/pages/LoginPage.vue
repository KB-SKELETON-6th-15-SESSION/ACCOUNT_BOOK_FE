<template>
  <div
    class="container pt-[100px] rounded-lg border-solid border-2 w-full"
    style="max-width: 400px"
  >
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
      </div>
    </form>
  </div>
</template>

<script setup>
import MainButton from "@/components/Shared/MainButton.vue";
import { ref } from "vue";
const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("이메일:", email.value);
  console.log("비밀번호:", password.value);
  // 실제 로그인 로직 추가 가능
};
</script>

<style scoped>
input::placeholder {
  color: #aaa;
}
</style>

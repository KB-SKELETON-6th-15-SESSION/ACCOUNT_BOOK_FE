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
      </div>
    </form>
  </div>
</template>

<script setup>
import MainButton from "@/components/Shared/MainButton.vue";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const BaseURL = "http://localhost:3000"; // 실제 API URL로 변경 필요
const email = ref("");
const password = ref("");

async function handleLogin() {
  try {
    const loginURL = BaseURL + "/member";
    const loginRes = await axios.get(loginURL);
    console.log("응답 데이터:", loginRes.data);
    const userArr = loginRes.data;

    const findUser = userArr.find(function (item, index) {
      return item.email === email.value;
    });

    if (findUser === undefined) return alert("해당 ID가 없습니다.");
    if (findUser.password !== password.value)
      return alert("비밀번호가 틀립니다.");
    alert("로그인 성공");

    localStorage.setItem("auth", "true");
    localStorage.setItem("id", findUser.id);
    localStorage.setItem("name", findUser.name);
    localStorage.setItem("email", findUser.email);
    return router.replace("/main");
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
  }
}

// const handleLogin = () => {
//   console.log("이메일:", email.value);
//   console.log("비밀번호:", password.value);
//   // 실제 로그인 로직 추가 가능
// };
</script>

<style scoped>
input::placeholder {
  color: #aaa;
}
</style>

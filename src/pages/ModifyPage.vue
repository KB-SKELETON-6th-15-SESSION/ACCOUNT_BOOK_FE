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
      <input type="email" v-model="member.email" disabled />

      <label>비밀번호</label>
      <input type="password" v-model="member.password" />
    </div>

    <MainButton @click="updateMember">프로필 수정하기</MainButton>
  </div>
</template>

<script setup>
import Header from '@/components/Shared/Header.vue';
import BackButton from '@/components/Shared/BackButton.vue';
import MainButton from '@/components/Shared/MainButton.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const member = ref({
  name: '',
  email: '',
  password: '',
});

const id = localStorage.getItem('id');

onMounted(async () => {
  //   if (!id) {
  //     alert('로그인이 필요합니다');
  //     router.push('/login');
  //     return;
  //   }

  const res = await axios.get(`http://localhost:3000/member/${id}`);
  member.value = {
    name: res.data.name,
    email: res.data.email,
    password: res.data.password,
  };
});

function goBack() {
  router.push('/profile');
}

async function updateMember() {
  try {
    await axios.put(`http://localhost:3000/member/${id}`, member.value);
    alert('수정 완료');
    router.push('/profile');
  } catch (error) {
    console.error(error);
    alert('수정 실패');
  }
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

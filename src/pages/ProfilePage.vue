<template>
  <div class="layout" style="max-width: 400px">
    <Header />
    <BackButton @click="goBack" />

    <img
      src="@/assets/basic_picture.png"
      alt="기본 이미지"
      class="rounded-circle mb-3 mx-auto d-block"
      style="width: 225px; height: 225px"
    />

    <div class="flex flex-col justify-center gap-2 items-center mb-[130px]">
      <p class="text-[36px] font-bold">{{ member.name }}</p>
      <p class="text-muted mb-4">{{ member.email }}</p>
    </div>

    <MainButton @click="check">프로필 수정하기</MainButton>
    <MainButton class="mt-2" @click="logoutHandler">로그아웃</MainButton>
  </div>
</template>

<script setup>
import BackButton from '@/components/Shared/BackButton.vue';
import Header from '@/components/Shared/Header.vue';
import MainButton from '@/components/Shared/MainButton.vue';
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const route = useRoute();
const id = localStorage.getItem('id');
const authStore = useAuthStore();

const member = ref({
  id: '',
  name: '',
  email: '',
});

const goBack = () => {
  router.back();
};

const check = () => {
  router.push({ name: 'Modify' });
};

const logoutHandler = () => {
  authStore.logout();
  alert('로그아웃 되었습니다.');
  router.replace({ name: 'Login' });
};

async function fetchMember() {
  const id = localStorage.getItem('id');
  if (!id) {
    router.replace({ name: 'Login' });
    return;
  }

  const res = await axios.get(
    `https://json-server-api-6wsp.onrender.com/member/${id}`
  );
  member.value = res.data;
}

onMounted(() => {
  fetchMember();
});

watch(
  () => route.fullPath,
  () => {
    fetchMember();
  }
);
</script>

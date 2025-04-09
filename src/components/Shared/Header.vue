<template>
  <div class="w-full border-bottom py-2 mb-10 flex gap-2 items-center h-[60px]">
    <p class="font-bold text-lg">{{ name }}님</p>
    <div
      @click="goToProfile"
      class="cursor-pointer rounded-full border w-[25px] h-[25px] bg-gray-200 flex items-center justify-center"
    >
      <i class="bi bi-arrow-right text-sm"></i>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const name = localStorage.getItem('name');
const router = useRouter();

const goToProfile = () => {
  router.push('/profile');
};
</script>

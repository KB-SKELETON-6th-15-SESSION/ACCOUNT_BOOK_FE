<template>
  <div
    class="container p-4 rounded-lg border-solid border-2"
    style="max-width: 400px"
  >
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
  </div>
</template>

<script setup>
import BackButton from "@/components/Shared/BackButton.vue";
import Header from "@/components/Shared/Header.vue";
import MainButton from "@/components/Shared/MainButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const member = ref({
  name: "강민재",
  email: "minijae011030@gmail.com",
});

const goBack = () => {
  router.back();
};

const check = () => {
  router.push({ name: "Modify" });
};
</script>

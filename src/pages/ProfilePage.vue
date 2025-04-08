<template>
  <div class="container text-center py-4">
    <!-- Header 이따 컴포넌트로 -->

    <button
      class="btn btn-link mb-3 p-0"
      style="font-size: 1rem; transform: translateX(-100px)"
    >
      ← 뒤로가기
    </button>

    <img
      src="@/assets/basic_picture.png"
      alt="기본 이미지"
      class="rounded-circle mb-3 mx-auto d-block"
      style="width: 120px; height: 120px"
    />

    <h2 class="fw-bold">{{ member.name }}</h2>
    <p class="text-muted mb-4">{{ member.email }}</p>

    <button
      class="btn mt-4 px-4 py-2 rounded-pill"
      style="background-color: #a855f7; color: #fff; border: none"
    >
      프로필 수정하기
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      member: {
        name: '강민재',
        email: 'minijae011030@gmail.com',
      },
    };
  },
};
</script>

<template>
  <div class="container text-center py-4">
    <button class="btn btn-link mb-3 p-0 back-button">← 뒤로가기</button>

    <img
      src="@/assets/basic_picture.png"
      alt="기본 이미지"
      class="rounded-circle mb-3 mx-auto d-block profile-image"
    />

    <h2 class="fw-bold">{{ member.name }}</h2>
    <p class="text-muted mb-4">{{ member.email }}</p>

    <button class="btn mt-4 px-4 py-2 rounded-pill edit-button">
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
        password: '',
      },
    };
  },
};
</script>

<style scoped>
.back-button {
  font-size: 1rem;
  transform: translateX(-100px);
}

.profile-image {
  width: 120px;
  height: 120px;
}

.edit-button {
  background-color: #a855f7;
  color: #fff;
  border: none;
}
</style>

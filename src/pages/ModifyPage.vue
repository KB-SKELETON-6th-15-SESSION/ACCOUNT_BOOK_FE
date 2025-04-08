<template>
  <div class="modify-container">
    <button
      class="btn btn-link mb-3 p-0"
      style="font-size: 1rem; transform: translateX()"
    >
      ← 뒤로가기
    </button>

    <div class="form">
      <label>이름</label>
      <input type="text" v-model="member.name" />

      <label>이메일</label>
      <input type="email" v-model="member.email" disabled />

      <label>비밀번호</label>
      <input type="password" v-model="member.password" />
    </div>

    <button class="edit-btn">프로필 수정하기</button>
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
.modify-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.back-btn {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

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

.edit-btn {
  width: 100%;
  background-color: #a855f7;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;
}
</style>

import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isLogin: false,
  }),

  actions: {
    async login(email, password) {
      const res = await axios.get('http://localhost:3000/member');
      const userArr = res.data;
      const findUser = userArr.find((item) => item.email === email);

      if (!findUser) throw new Error('해당 ID가 없습니다.');
      if (findUser.password !== password)
        throw new Error('비밀번호가 틀립니다.');

      this.user = {
        id: findUser.id,
        name: findUser.name,
        email: findUser.email,
      };
      this.isLogin = true;

      localStorage.setItem('auth', 'true');
      localStorage.setItem('id', this.user.id);
      localStorage.setItem('name', this.user.name);
    },

    loadUser() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo) {
        this.user = userInfo;
        this.isLogin = true;
      }
    },
  },
});

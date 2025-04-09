import CreatePage from "@/pages/Createpage.vue";
import DetailPage from "@/pages/DetailPage.vue";
import EditPage from "@/pages/EditPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ModifyPage from "@/pages/ModifyPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import ReportPage from "@/pages/ReportPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",

      component: LoginPage,
    },
    {
      path: "/signup",
      name: "SignUp",

      component: SignUpPage,
    },
    {
      path: "/main",
      name: "Main",
      meta: { requiresAuth: true },
      component: MainPage,
    },

    {
      path: "/profile",
      name: "Profile",
      meta: { requiresAuth: true },
      component: ProfilePage,
    },
    {
      path: "/modify",
      name: "Modify",
      meta: { requiresAuth: true },
      component: ModifyPage,
    },
    {
      path: "/report",
      name: "Report",
      meta: { requiresAuth: true },
      component: ReportPage,
    },
    {
      path: "/create",
      name: "Create",
      meta: { requiresAuth: true },
      component: CreatePage,
    },
    {
      path: "/detail/:id",
      name: "Detail",
      meta: { requiresAuth: true },
      component: DetailPage,
      props: true,
    },
    {
      path: "/edit/:id",
      name: "Edit",
      meta: { requiresAuth: true },
      component: EditPage,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("auth") !== "true") {
      alert("로그인이 필요 합니다");
      return next({ name: "Login" });
    }
  }

  next();
});

export default router;

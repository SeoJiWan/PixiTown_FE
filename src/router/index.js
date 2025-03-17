import { createRouter, createWebHistory } from 'vue-router';
import mainRouter from './user/main/mainRouter';
import roomRouter from './user/room/roomRouter';

const routes = [
  ...mainRouter,
  ...roomRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 네비게이션 가드 설정
router.beforeEach((to, from, next) => {
  // 페이지 타이틀 설정
  document.title = `${to.name} | PixiTown`;
  next();
});

export default router;

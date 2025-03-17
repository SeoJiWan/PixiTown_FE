const mainRouter = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/user/main/MainView.vue'),
  }
];

export default mainRouter;

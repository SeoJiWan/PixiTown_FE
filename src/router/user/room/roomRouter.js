const roomRouter = [
  {
    path: '/room/:roomId',
    name: 'Room',
    component: () => import('@/views/user/room/RoomLayout.vue'),
    children: [
      {
        path: '',
        components: {
          sidebar: () => import('@/views/user/room/RoomSidebar.vue'),
          chat: () => import('@/views/user/room/RoomChat.vue'),
          map: () => import('@/views/user/room/RoomMap.vue'),
          controls: () => import('@/views/user/room/RoomControlBar.vue')
        }
      }
    ]
  }
];

export default roomRouter;

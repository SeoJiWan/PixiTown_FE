<script setup>
import { useRoute } from 'vue-router';
import '@/css/room.css';

const route = useRoute();
const roomId = route.params.roomId;
</script>

<template>
  <div class="room-layout">
    <div class="room-left">
      <router-view name="sidebar" />
      <router-view name="chat" />
    </div>
    <div class="room-main">
      <router-view name="map" />
      <router-view name="controls" />
    </div>
  </div>
</template>

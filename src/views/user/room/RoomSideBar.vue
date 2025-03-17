<script setup>
import { ref } from 'vue';
import '@/css/room.css';

const activeTab = ref('guest');
const guests = ref([
  { id: 1, name: 'wana1997', status: 'owner' },
  { id: 2, name: 'Guest1', status: 'guest' },
  { id: 3, name: 'Guest2', status: 'guest' },
]);
</script>

<template>
  <div class="room-sidebar">
    <div class="sidebar-header">
      <div class="tab-menu">
        <button 
          :class="['tab-btn', { active: activeTab === 'guest' }]"
          @click="activeTab = 'guest'"
        >
          피플 목록
        </button>
        <button 
          :class="['tab-btn', { active: activeTab === 'settings' }]"
          @click="activeTab = 'settings'"
        >
          설정
        </button>
      </div>
    </div>
    <div class="sidebar-content">
      <div v-if="activeTab === 'guest'" class="guest-list">
        <div v-for="guest in guests" :key="guest.id" class="guest-item">
          <div class="guest-avatar"></div>
          <div class="guest-info">
            <span class="guest-name">{{ guest.name }}</span>
            <span v-if="guest.status === 'owner'" class="guest-badge">OWNER</span>
          </div>
        </div>
      </div>
      <div v-else class="settings-panel">
        <!-- 설정 패널 내용 -->
      </div>
    </div>
  </div>
</template>

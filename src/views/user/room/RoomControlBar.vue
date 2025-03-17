<script setup>
import { ref } from 'vue';
import '@/css/room.css';

const isMuted = ref(false);
const isVideoOff = ref(false);
const isScreenSharing = ref(false);

const toggleMute = () => isMuted.value = !isMuted.value;
const toggleVideo = () => isVideoOff.value = !isVideoOff.value;
const toggleScreenShare = () => isScreenSharing.value = !isScreenSharing.value;
</script>

<template>
  <div class="control-bar">
    <div class="control-buttons">
      <button 
        :class="['control-btn', { active: isMuted }]"
        @click="toggleMute"
      >
        🎤
      </button>
      <button 
        :class="['control-btn', { active: isVideoOff }]"
        @click="toggleVideo"
      >
        📹
      </button>
      <button 
        :class="['control-btn', { active: isScreenSharing }]"
        @click="toggleScreenShare"
      >
        💻
      </button>
      <button class="control-btn">
        ⚙️
      </button>
    </div>
  </div>
</template>

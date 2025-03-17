<script setup>
import { ref } from 'vue';
import '@/css/room.css';

const messages = ref([
  { id: 1, user: 'wana1997', text: '안녕하세요!', type: 'chat' },
  { id: 2, user: 'System', text: 'Guest1님이 입장하셨습니다.', type: 'system' },
]);

const newMessage = ref('');

const sendMessage = () => {
  if (!newMessage.value.trim()) return;
  
  messages.value.push({
    id: messages.value.length + 1,
    user: 'wana1997',
    text: newMessage.value,
    type: 'chat'
  });
  
  newMessage.value = '';
};
</script>

<template>
  <div class="room-chat">
    <div class="chat-messages">
      <div 
        v-for="message in messages" 
        :key="message.id"
        :class="['message', message.type]"
      >
        <template v-if="message.type === 'chat'">
          <span class="message-user">{{ message.user }}:</span>
          <span class="message-text">{{ message.text }}</span>
        </template>
        <template v-else>
          <span class="message-system">{{ message.text }}</span>
        </template>
      </div>
    </div>
    <div class="chat-input">
      <input
        v-model="newMessage"
        type="text"
        placeholder="메시지를 입력하세요..."
        @keyup.enter="sendMessage"
      >
      <button @click="sendMessage">전송</button>
    </div>
  </div>
</template>

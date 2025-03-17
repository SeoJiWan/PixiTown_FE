<script setup>
import { ref, onMounted } from 'vue';
import '@/css/main.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRouter } from 'vue-router';

const activeTab = ref('recent');
const router = useRouter();

const spaces = ref([
  {
    id: 1,
    title: 'test2',
    type: 'OWNER',
    users: 10,
    thumbnail: '/src/assets/thumb-sample.png'
  },
  {
    id: 2,
    title: '경남에너지 마을',
    users: 15,
    thumbnail: '/src/assets/thumb-sample.png'
  },
  {
    id: 3,
    title: 'test',
    type: 'OWNER',
    users: 20,
    thumbnail: '/src/assets/thumb-sample.png'
  },
  {
    id: 4,
    title: '소개팅앱 프로젝트방',
    users: 30,
    thumbnail: '/src/assets/thumb-sample.png'
  }
]);

const carouselItems = [
  {
    id: 1,
    tag: '공식',
    title: '1,500개의 고객사가\n선택한 플랜!',
    description: '지금 프리미엄 플랜을 경험해보세요',
    image: '/src/assets/carousel-1.jpg'
  },
  {
    id: 2,
    tag: '교육',
    title: '퀴즈 게임 로비',
    description: '다양한 퀴즈 게임을 보고 프로젝트를 쉽게 독립할 수 있어요',
    image: '/src/assets/carousel-2.jpg'
  },
  {
    id: 3,
    tag: '공식',
    title: 'ZEP 학교 플랜',
    description: '학교에서 쉽게 50명! 무제한 스페이스 체험!',
    image: '/src/assets/carousel-3.jpg'
  }
  ];

const goToRoom = (roomId) => {
  router.push(`/room/${roomId}`);
};
</script>

<template>
  <div class="main-container">
    <!-- Header -->
    <header class="header">
      <div class="nav-menu">
        <img src="/src/assets/logo.svg" alt="PixiTown" class="logo" />
        <a class="nav-item">소개</a>
        <a class="nav-item">에셋 스토어</a>
        <a class="nav-item">교객지원</a>
        <a class="nav-item">둘러보기</a>
        <a class="nav-item">가격</a>
      </div>
      <button class="login-btn">로그인</button>
    </header>

    <!-- Carousel -->
    <div class="carousel">
      <Swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
      >
        <SwiperSlide v-for="item in carouselItems" :key="item.id">
          <div class="carousel-slide">
            <div class="carousel-content">
              <span class="carousel-tag">{{ item.tag }}</span>
              <h2 class="carousel-title" style="white-space: pre-line">{{ item.title }}</h2>
              <p class="carousel-description">{{ item.description }}</p>
            </div>
            <div class="carousel-image">
              <img :src="item.image" :alt="item.title" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="w-content">
      <!-- Content Header -->
      <div class="content-header">
        <div class="tab-menu">
          <div
            :class="['tab-item', { active: activeTab === 'recent' }]"
            @click="activeTab = 'recent'"
          >
            최근 방문
          </div>
          <div
            :class="['tab-item', { active: activeTab === 'my' }]"
            @click="activeTab = 'my'"
          >
            내 스페이스
          </div>
        </div>
        <div class="action-buttons">
          <div class="search-box">
            <input
              type="text"
              placeholder="방문 스페이스 검색"
              class="search-input"
            />
            <span class="search-icon">🔍</span>
          </div>
          <button class="action-btn outline-btn">코드로 입장</button>
          <button class="action-btn filled-btn">스페이스 만들기</button>
        </div>
      </div>

      <!-- Spaces Grid -->
      <div class="spaces-grid">
        <div
          v-for="space in spaces"
          :key="space.id"
          class="space-card"
          @click="goToRoom(space.id)"
        >
          <img
            :src="space.thumbnail"
            :alt="space.title"
            class="space-thumbnail"
          />
          <div class="space-info">
            <div class="space-header">
              <h3 class="space-title">{{ space.title }}</h3>
              <span v-if="space.type === 'OWNER'" class="owner-badge">
                OWNER
              </span>
            </div>
            <p class="space-users">
              접속자 {{ space.users }}명
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { 
    Application, 
    Assets,
    Container,
    Sprite,
    Texture,
    TilingSprite
} from 'pixi.js';

let app;
let mapContainer;

onMounted(async () => {
  // 애플리케이션 생성
  app = new Application();

  // 앱 초기화
  await app.init({
    background: '#87CEEB', // 하늘색 배경
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true
  });

  // DOM에 캔버스 추가
  const mapElement = document.getElementById('room-map');
  mapElement.appendChild(app.canvas);

  try {
    // 에셋 로드 - 구체적인 파일 경로 사용
    const assets = {
      tile1: '/src/assets/map1/1_Tiles/FieldsTile_01.png',
      tile2: '/src/assets/map1/1_Tiles/FieldsTile_02.png',
      // tree1: '/src/assets/map1/2_Objects/Tree_01.png',
      // tree2: '/src/assets/map1/2_Objects/Tree_02.png'
    };

    // 에셋 번들 등록
    Assets.addBundle('map-assets', assets);

    // 에셋 로드
    const resources = await Assets.loadBundle('map-assets');

    // 맵 컨테이너 생성
    mapContainer = new Container();
    
    // 기본 타일 레이어 (바닥)
    const groundLayer = new Container();
    const TILE_SIZE = 32;
    
    // 20x20 크기의 맵 생성
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 20; x++) {
        // 번갈아가며 다른 타일 사용
        const tileTexture = (x + y) % 2 === 0 ? resources.tile1 : resources.tile2;
        const tile = Sprite.from(tileTexture);
        tile.x = x * TILE_SIZE;
        tile.y = y * TILE_SIZE;
        groundLayer.addChild(tile);
      }
    }

    // 오브젝트 레이어 (나무, 바위 등)
    const objectLayer = new Container();
    
    // 랜덤하게 오브젝트 배치
    // for (let i = 0; i < 10; i++) {
    //   const treeTexture = i % 2 === 0 ? resources.tree1 : resources.tree2;
    //   const object = Sprite.from(treeTexture);
    //   object.x = Math.random() * (app.screen.width - TILE_SIZE);
    //   object.y = Math.random() * (app.screen.height - TILE_SIZE);
    //   objectLayer.addChild(object);
    // }

    // 레이어 추가
    mapContainer.addChild(groundLayer);
    mapContainer.addChild(objectLayer);
    
    // 맵 컨테이너를 화면 중앙에 배치
    mapContainer.x = (app.screen.width - mapContainer.width) / 2;
    mapContainer.y = (app.screen.height - mapContainer.height) / 2;
    
    app.stage.addChild(mapContainer);

  } catch (error) {
    console.error('에셋 로드 중 오류 발생:', error);
  }
});

// 컴포넌트가 제거될 때 정리
onBeforeUnmount(() => {
  if (app) {
    app.destroy(true);
    app = null;
  }
});
</script>

<template>
  <div id="room-map" class="room-map"></div>
</template>

<style>
.room-map {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

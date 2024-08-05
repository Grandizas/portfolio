<template>
  <NuxtLayout>
    <!-- * --- [ Cursor ] --- * -->
    <FieldsCursor />

    <!-- * --- [ Page ] --- * -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useIndexStore } from '~/stores/index';

const $basket = useIndexStore();

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  $basket.screenSize.width = window.innerWidth;
}
</script>

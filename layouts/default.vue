<template>
  <main
    class="template"
    :class="{
      'template-mobile__left-sidebar--open': $basket.screenSize.width <= 865 && state.leftSidebarExpanded,
      'template-mobile__left-sidebar--close': $basket.screenSize.width <= 865 && !state.leftSidebarExpanded,
    }"
  >
    <div class="template__background">
      <video autoplay muted loop>
        <source src="~/assets/videos/smoke.mp4" type="video/mp4" />
      </video>

      <div class="template__background--shadow" />
    </div>

    <templates-left-bar v-model:is-expanded="state.leftSidebarExpanded" />
    <div
      v-if="($basket.screenSize.width <= 865 && !state.leftSidebarExpanded) || $basket.screenSize.width > 865"
      class="template__main"
    >
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useIndexStore } from '~/stores/index';

const $basket = useIndexStore();

const state = reactive({
  leftSidebarExpanded: false,
});
</script>

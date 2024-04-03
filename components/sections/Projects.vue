<template>
  <section id="section-3">
    <div class="container__header">
      <div class="container__header__title">
        <h2><span>03</span> My projects</h2>
      </div>

      <!-- * --- Button up --- * -->
      <fields-button-scroll direction="up" @click="emit('button-click-up')" />

      <button class="container__header__burger">
        <i class="fi fi-rr-menu-burger"></i>
      </button>
    </div>

    <div class="container__body">
      <h1 class="landing-page__title">My Projects</h1>
      <p class="landing-page__description">
        Here are my projects. Some of them are made for fun, some for more serious purposes. This is not the end and
        there will be much more exciting projects!
      </p>

      <div class="container__body--projects"></div>
    </div>

    <!-- * --- Button down --- * -->
    <!-- <fields-button-scroll @click="emit('button-click')" /> -->
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  'button-click': [];
  'button-click-up': [];
}>();
</script>

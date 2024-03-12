<template>
  <div class="container landing-page">
    <div class="container__header">
      <div class="container__header__title">
        <h2><span>01</span> Landing page</h2>
      </div>
      <button class="container__header__burger">
        <i class="fi fi-rr-menu-burger"></i>
      </button>
    </div>

    <div class="container__body">
      <h1 class="landing-page__title">Front-end web developer</h1>
      <p class="landing-page__description">
        Step into the world where pixels come to life! As a front-end web developer, I specialize in weaving together
        stunning designs with seamless functionality. Dive into my portfolio to experience the artistry and precision
        behind each project. From responsive layouts to captivating user interfaces, discover how I bring visions to the
        digital realm. Let's build something extraordinary together.
      </p>
    </div>

    <!-- * --- Button down --- * -->
    <fields-button-down />

    <!-- * --- Button to the next page --- * -->
    <!-- <div class="container__footer landing-page__footer">
      <NuxtLink class="entrance-button animate-cursor-element">
        <span class="entrance-button__left">
          <span class="entrance-button__left--number">02</span>
          <span class="entrance-button__left--text">About me</span>
        </span>
        <span class="entrance-button__right">
          <span>
            <i class="fi fi-rr-arrow-right" />
          </span>
        </span>
      </NuxtLink>
    </div> -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>

<template>
  <section id="section-1">
    <div class="container__header">
      <div class="container__header__title">
        <h2><span>01</span> Landing page</h2>
      </div>

      <!-- * --- Burger menu --- * -->
      <div class="container__header--right">
        <button class="container__header__burger" @click="state.showMenu = true">
          <i class="fi fi-rr-menu-burger"></i>
        </button>

        <templates-menu v-model="state.showMenu" @switch="emit('switch', $event)" />
      </div>
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
    <fields-button-scroll @click="emit('button-click')" />
  </section>
</template>

<script setup lang="ts">
const state = reactive({
  showMenu: false,
});

const emit = defineEmits<{
  (e: 'button-click'): void;
  (e: 'switch', sectionIndex: number): void;
}>();
</script>

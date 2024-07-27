<template>
  <section id="section-6">
    <div class="container__header">
      <div class="container__header__title">
        <h2><span>06</span> Education</h2>
      </div>

      <div class="scroll-buttons">
        <!-- * --- Button up --- * -->
        <fields-button-scroll direction="up" @click="emit('button-click-up')" />
        <!-- * --- Button down --- * -->
        <fields-button-scroll @click="emit('button-click')" />
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
      <h1 class="landing-page__title">Education</h1>

      <div class="landing-page__experience">
        <div v-for="education in educations" class="landing-page__experience--card">
          <div class="landing-page__experience--card__header">{{ education.title }}</div>
          <div class="landing-page__experience--card__content">
            <p>{{ education.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import educations from '~/json/education.json';

const state = reactive({
  showMenu: false,
});

const emit = defineEmits<{
  (e: 'button-click'): void;
  (e: 'button-click-up'): void;
  (e: 'switch', sectionIndex: number): void;
}>();
</script>

<template>
  <section id="section-4">
    <div class="container__header">
      <div class="container__header__title">
        <h2><span>04</span> My skills</h2>
      </div>

      <div class="scroll-buttons">
        <!-- * --- Button up --- * -->
        <fields-button-scroll direction="up" @click="emit('button-click-up')" />
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
      <h1 class="landing-page__title">My skills</h1>
      <p class="landing-page__description">I’m a web developer. There is a list of my skills and it’s strength.</p>

      <div class="container__body--skills">
        <!-- * --- Skill items --- * -->
        <fields-skill-item v-for="(skill, index) in skills" :key="index" :skill="skill" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import skills from '~/json/skills.json';

const state = reactive({
  showMenu: false,
});

const emit = defineEmits<{
  (e: 'button-click'): void;
  (e: 'button-click-up'): void;
  (e: 'switch', sectionIndex: number): void;
}>();
</script>

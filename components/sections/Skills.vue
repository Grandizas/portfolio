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

      <button class="container__header__burger">
        <i class="fi fi-rr-menu-burger"></i>
      </button>
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

const emit = defineEmits<{
  'button-click': [];
  'button-click-up': [];
}>();
</script>

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
        Here are my projects. Some of them are made for fun, some for serious purposes. This is not the end and there
        will be much more exciting projects!
      </p>

      <div class="container__body--projects">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="container__body--projects__project animate-cursor-element"
        >
          <!-- * --- [ Project Image ] --- * -->
          <div class="container__body--projects__project--image">
            <img :src="`/projects/${project.image}`" />
          </div>

          <!-- * --- [ Project Content ] --- * -->
          <div class="container__body--projects__project--content">
            <div class="container__body--projects__project--header">{{ project.title }}</div>
            <div class="container__body--projects__project--tags">
              <div v-for="tag in project.tags" :key="tag" class="container__body--projects__project--tags__tag">
                {{ tag }}
              </div>
            </div>
            <div class="container__body--projects__project--body">
              {{ project.description }}
            </div>
            <div class="container__body--projects__project--status" :class="project.status">
              Status: {{ project.status === 'progress' ? 'In Progress' : project.status }}
            </div>
          </div>

          <!-- * --- [ Project fade in ] --- * -->
          <a :href="project.link" class="container__body--projects__project--fade-in">
            <span>Looking for more?</span>
            <span v-if="project.status === 'done'" class="regular-button">Check the project</span>
            <span v-else-if="project.status === 'progress'" class="regular-button">You will have to wait!</span>
          </a>
        </div>
      </div>
    </div>

    <!-- * --- Button down --- * -->
    <!-- <fields-button-scroll @click="emit('button-click')" /> -->
  </section>
</template>

<script setup lang="ts">
import projects from '~/json/projects.json';

const emit = defineEmits<{
  'button-click': [];
  'button-click-up': [];
}>();
</script>

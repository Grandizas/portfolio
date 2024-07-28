<template>
  <section id="section-5">
    <div class="container__header">
      <div class="container__header__title">
        <h2><span>05</span> Experience</h2>
      </div>

      <div class="scroll-buttons">
        <!-- * --- Button up --- * -->
        <fields-button-scroll direction="up" @click="emit('button-click-up')" />
        <!-- * --- Button down --- * -->
        <fields-button-scroll @click="emit('button-click')" />
      </div>

      <!-- * --- Burger menu --- * -->
      <div class="container__header--right">
        <button class="button__burger" @click="state.showMenu = true">
          <i class="fi fi-rr-menu-burger"></i>
        </button>

        <templates-menu v-model="state.showMenu" @switch="emit('switch', $event)" />
      </div>
    </div>

    <div class="container__body">
      <h1 class="landing-page__title">Experience</h1>

      <div class="landing-page__experience">
        <div class="landing-page__experience--card">
          <div class="landing-page__experience--card__header">Cherry TEAM</div>
          <div class="landing-page__experience--card__content">
            <ul>
              <li>
                What was my role? <br />
                I was responsible for building the front-end of the website using <span> Nuxt 3 </span>
                <span> SASS </span> <span> Github </span> and Typescript, and maintaining the existing codebase.
              </li>
              <li>How long have I been working here? ~2.5 years</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const state = reactive({
  showMenu: false,
});

const emit = defineEmits<{
  (e: 'button-click'): void;
  (e: 'button-click-up'): void;
  (e: 'switch', sectionIndex: number): void;
}>();
</script>

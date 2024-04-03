<template>
  <div class="container landing-page">
    <sections-landing v-show="showLandingSection" @button-click="handleSwitch(2)" />

    <sections-about
      v-show="showSectionAbout"
      @button-click="handleSwitch(3)"
      @button-click-up="handleSwitch(1, false)"
    />

    <sections-projects v-show="showSectionProjects" @button-click-up="handleSwitch(2, false)" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const state = reactive({
  section: 1,
  previousSection: 1,
  isSwitching: false,
});

const showLandingSection = computed(() => {
  return state.section === 1 || (state.isSwitching && state.previousSection === 1 && state.section === 2);
});

const showSectionAbout = computed(() => {
  return (
    state.section === 2 || (state.isSwitching && state.section === 1) || (state.isSwitching && state.section === 3)
  );
});

const showSectionProjects = computed(() => {
  return (
    state.section === 3 ||
    (state.isSwitching && state.previousSection === 3 && state.section === 2) ||
    (state.isSwitching && state.section === 4)
  );
});

function handleSwitch(section: number, isScrollingDown = true) {
  state.previousSection = state.section;
  state.section = section;
  state.isSwitching = true;

  toggleAnimation('start', section, isScrollingDown);
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    toggleAnimation('end', section, isScrollingDown);
    state.isSwitching = false;
    document.body.style.overflow = 'auto';
  }, 970);
}

function toggleAnimation(status: 'start' | 'end', section: number, isScrollingDown: boolean) {
  const firstAnimatedElement = document.querySelector(
    `#section-${isScrollingDown ? section - 1 : section}`,
  ) as HTMLElement;
  const secondAnimatedElement = document.querySelector(
    `#section-${isScrollingDown ? section : section + 1}`,
  ) as HTMLElement;

  // ------------ [ Apply animation classes ] ------------
  if (status === 'start' && firstAnimatedElement && secondAnimatedElement) {
    if (isScrollingDown) {
      firstAnimatedElement.classList.add('fade-out-section-down');
      secondAnimatedElement.classList.add('fade-in-section-down');
    } else {
      firstAnimatedElement.classList.add('fade-out-section-up');
      secondAnimatedElement.classList.add('fade-in-section-up');
    }

    // ------------ [ Remove animation classes ] ------------
  } else if (status === 'end' && firstAnimatedElement && secondAnimatedElement) {
    if (isScrollingDown) {
      firstAnimatedElement.classList.remove('fade-out-section-down');
      secondAnimatedElement.classList.remove('fade-in-section-down');
    } else {
      firstAnimatedElement.classList.remove('fade-out-section-up');
      secondAnimatedElement.classList.remove('fade-in-section-up');
    }
  }
}
</script>

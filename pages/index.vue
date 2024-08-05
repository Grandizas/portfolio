<template>
  <div class="container landing-page">
    <sections-landing v-show="showLandingSection" @button-click="handleSwitch(2)" @switch="onMenuSwitch" />

    <sections-about
      v-show="showSectionAbout"
      @switch="onMenuSwitch"
      @button-click="handleSwitch(3)"
      @button-click-up="handleSwitch(1, false)"
    />

    <sections-projects
      v-show="showSectionProjects"
      @switch="onMenuSwitch"
      @button-click="handleSwitch(4)"
      @button-click-up="handleSwitch(2, false)"
    />

    <sections-skills
      v-show="showSectionSkills"
      @switch="onMenuSwitch"
      @button-click="handleSwitch(5)"
      @button-click-up="handleSwitch(3, false)"
    />

    <sections-experience
      v-show="showSectionExperience"
      @switch="onMenuSwitch"
      @button-click="handleSwitch(6)"
      @button-click-up="handleSwitch(4, false)"
    />

    <sections-education
      v-show="showSectionEducation"
      @switch="onMenuSwitch"
      @button-click-up="handleSwitch(5, false)"
    />
  </div>
  <title>Gražvydas Žilius portfolio</title>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const state = reactive({
  section: 1,
  previousSection: 1,
  isSwitching: false,
  lastScrollTop: 0,
});

const showLandingSection = computed(() => {
  return state.section === 1 || (state.isSwitching && state.previousSection === 1 && state.section === 2);
});

const showSectionAbout = computed(() => {
  return (
    state.section === 2 ||
    (state.isSwitching && state.section === 1) ||
    (state.isSwitching && state.section === 3 && state.previousSection === 2)
  );
});

const showSectionProjects = computed(() => {
  return (
    state.section === 3 ||
    (state.isSwitching && state.previousSection === 3 && state.section === 2) ||
    (state.isSwitching && state.section === 4 && state.previousSection === 3)
  );
});

const showSectionSkills = computed(() => {
  return (
    state.section === 4 ||
    (state.isSwitching && state.previousSection === 4 && state.section === 3) ||
    (state.isSwitching && state.section === 5 && state.previousSection === 4)
  );
});

const showSectionExperience = computed(() => {
  return (
    state.section === 5 ||
    (state.isSwitching && state.previousSection === 5 && state.section === 4) ||
    (state.isSwitching && state.section === 5 && state.previousSection === 5)
  );
});

const showSectionEducation = computed(() => {
  return (
    state.section === 6 ||
    (state.isSwitching && state.previousSection === 6 && state.section === 5) ||
    (state.isSwitching && state.section === 6 && state.previousSection === 6)
  );
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function onMenuSwitch(sectionIndex: number) {
  state.previousSection = state.section;
  state.section = sectionIndex;
}

function handleScroll() {
  const scrollTop = document.documentElement.scrollTop;
  const header = document.querySelectorAll('.container__header')[state.section - 1] as HTMLElement;

  if (scrollTop > state.lastScrollTop) {
    header.classList.add('container__header--hide');
  } else if (scrollTop < state.lastScrollTop) {
    header.classList.remove('container__header--hide');
  } // else was horizontal scroll
  state.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}

function handleSwitch(section: number, isScrollingDown = true) {
  state.previousSection = state.section;
  state.section = section;
  state.isSwitching = true;

  window.scrollTo({
    top: 0,
    // behavior: 'smooth', // Optional: Smooth scrolling effect
  });
  document.body.style.overflow = 'hidden';

  toggleAnimation('start', section, isScrollingDown);

  setTimeout(() => {
    toggleAnimation('end', section, isScrollingDown);
    state.isSwitching = false;
    document.body.style.overflow = 'auto';
  }, 1970);
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

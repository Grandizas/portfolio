<template>
  <section id="section-2">
    <div class="container__header">
      <div class="container__header__title">
        <h2><span>02</span> About me page</h2>
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
      <h1 class="landing-page__title">Introduction</h1>
      <p class="landing-page__description">
        Becoming a Senior web developer is one of my dreams. I want to taste everything in programming - from mobile
        apps to desktop games. Something new always piques my interest.
        <br />
        <br />
        I started dreaming about becoming developer since I was a child (around 12 years old), when my friend showed me
        his code of Java or C++, I don't remember. It was code of a simple calculator. What I liked about the code? It
        was a code itself. Numbers, letters, calculations everything was mysterious, hard and yet so interesting. I was
        curious how to create code. I didn't even knew how to start.
        <br />
        <br />
        When did I started learning? It was around 16 years old. I remember myself being on the school stadium and then
        coming back home. I don't remember what happened that I wanted to go home and start learning so badly. I had no
        pc, so I had to learn on the phone. Thank god I had smart phone. Once I downloaded SoloLearn I started learning
        HTML. I fell in love immediately. I learned each day at least 5 hours. This time I knew that I want to become
        developer.
        <br />
        <br />
        My favorite part of web development is creating astonishing designs and create functioning code, that has great
        quality, is working and has no bugs! Also I like working with figma, this is the place, where I can play with my
        creativity.
        <br />
        <br />
        Currently I'm working as a Nuxt.js front-end web developer. My job located in Lithuania, Klaipėda.
      </p>
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

<template>
  <div v-if="modelValue" class="right-menu" v-click-outside="onClickOutside">
    <!-- * --- Burger --- * -->
    <div class="right-menu__header">
      <h2>Navigation</h2>

      <button class="container__header__burger" @click="() => emit('update:modelValue', false)">
        <i class="fi fi-rr-menu-burger"></i>
      </button>
    </div>

    <div class="right-menu__main">
      <div class="right-menu__main--links">
        <button type="button" class="right-menu__main--link animate-cursor-element" @click="switchPage(1)">
          <div class="right-menu__main--link__background" />
          <div class="right-menu__main--link__bubble" />
          <div class="right-menu__main--link__icon">
            <i class="fi fi-rr-house-night" />
          </div>
          <p>Landing page</p>
          <div class="right-menu__main--link__arrow">
            <i class="fi fi-rr-arrow-right" />
          </div>
        </button>

        <button type="button" class="right-menu__main--link animate-cursor-element" @click="switchPage(2)">
          <div class="right-menu__main--link__background" />
          <div class="right-menu__main--link__bubble" />
          <div class="right-menu__main--link__icon">
            <i class="fi fi-rr-user" />
          </div>
          <p>About me</p>
          <div class="right-menu__main--link__arrow">
            <i class="fi fi-rr-arrow-right" />
          </div>
        </button>

        <button type="button" class="right-menu__main--link animate-cursor-element" @click="switchPage(3)">
          <div class="right-menu__main--link__background" />
          <div class="right-menu__main--link__bubble" />
          <div class="right-menu__main--link__icon">
            <i class="fi fi-rr-blueprint" />
          </div>
          <p>Projects</p>
          <div class="right-menu__main--link__arrow">
            <i class="fi fi-rr-arrow-right" />
          </div>
        </button>

        <button type="button" class="right-menu__main--link animate-cursor-element" @click="switchPage(4)">
          <div class="right-menu__main--link__background" />
          <div class="right-menu__main--link__bubble" />
          <div class="right-menu__main--link__icon">
            <i class="fi fi-rr-stats" />
          </div>
          <p>Skills</p>
          <div class="right-menu__main--link__arrow">
            <i class="fi fi-rr-arrow-right" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', show: boolean): void;
  (e: 'switch', sectionIndex: number): void;
}>();

function onClickOutside() {
  emit('update:modelValue', false);
}

function switchPage(sectionIndex: number) {
  emit('switch', sectionIndex);
}
</script>

<template>
  <div v-if="modelValue" class="right-menu" v-click-outside="onClickOutside">
    <!-- * --- Burger --- * -->
    <div class="right-menu__header">
      <button class="container__header__burger" @click="() => emit('update:modelValue', false)">
        <i class="fi fi-rr-menu-burger"></i>
      </button>
    </div>

    <div class="right-menu__main">
      <div class="right-menu__main--links">
        <button type="button" class="right-menu__main--link animate-cursor-element">
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

        <button type="button" class="right-menu__main--link animate-cursor-element">
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

        <button type="button" class="right-menu__main--link animate-cursor-element">
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

        <button type="button" class="right-menu__main--link animate-cursor-element">
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
}>();

function onClickOutside() {
  emit('update:modelValue', false);
}
</script>

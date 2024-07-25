<template>
  <div v-if="modelValue" class="right-menu">
    <!-- * --- Burger --- * -->
    <div class="right-menu__header">
      <button class="container__header__burger" @click="() => emit('update:modelValue', false)">
        <i class="fi fi-rr-menu-burger"></i>
      </button>
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
</script>

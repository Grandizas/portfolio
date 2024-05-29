<template>
  <div ref="cursor" class="cursor">
    <div ref="center" class="cursor__center" />
  </div>
</template>

<script setup lang="ts">
const cursor = ref();
const center = ref();

const state = reactive({
  shouldRemoveClassAfterLeave: false,
});

onMounted(() => {
  window.addEventListener('mousemove', positionElement);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', positionElement);
});

function positionElement(e: MouseEvent) {
  if (!e || !e.target) return;

  const target = e.target as HTMLElement;

  if (target.classList.contains('animate-cursor-element') || target.closest('.animate-cursor-element')) {
    cursor.value.classList.add('animated-cursor');
    state.shouldRemoveClassAfterLeave = true;
  } else if (state.shouldRemoveClassAfterLeave) {
    cursor.value.classList.remove('animated-cursor');
  }

  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.value.style.top = `${mouseY}px`;
  cursor.value.style.left = `${mouseX}px`;
}
</script>

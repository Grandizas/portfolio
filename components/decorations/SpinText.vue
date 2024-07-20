<template>
  <div class="spin-text">
    <p class="spin-text__paragraph"></p>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  spinText();
});

function spinText() {
  const str = 'WELCOME TO MY PORTFOLIO!';
  const text = document.querySelector('.spin-text__paragraph') as HTMLElement;

  if (!text) return;

  for (let index = 0; index < str.length; index++) {
    let span = document.createElement('span');
    span.textContent = str[index];
    text.appendChild(span);
    span.style.transform = `rotate(${11 * index}deg) translate(-50%, -50%)`;
  }
}
</script>

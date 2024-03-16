<template>
  <div class="container landing-page">
    
    <sections-landing v-if="state.section === 1" @button-click="state.section++" />

    <template v-else>
      <sections-about />
    </template>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

const state = reactive({
  section: 1,
});

</script>

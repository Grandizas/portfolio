<template>
  <div class="container landing-page">
    
    <sections-landing v-if="state.section === 1" @button-click="state.section++" />

    <template v-else>
      <sections-about @button-click="state.section = 1" />
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

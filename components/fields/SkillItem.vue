<template>
  <div class="skill-item">
    <h3 class="skill-item__title">
      {{ skill.title }}
    </h3>

    <div class="skill-item__content">
      <div class="skill-item__icon">
        <img :src="`/brands/${skill.image}`" :alt="skill.title" width="40px" height="40px" />
      </div>
      <div class="skill-item__levels">
        <div
          v-for="level in 10"
          :key="level"
          class="skill-item__levels--level"
          :style="{ backgroundColor: level <= skill.level ? skill.color : '#757575' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type TSkill = {
  image: string;
  title: string;
  level: number;
  color: string;
};

defineProps({
  skill: {
    type: Object as PropType<TSkill>,
    required: true,
  },
});
</script>

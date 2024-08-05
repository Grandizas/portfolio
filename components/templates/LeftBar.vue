<template>
  <div class="template__left">
    <div class="template__left--content">
      <template v-if="$basket.screenSize.width <= 865">
        <button class="button__burger" @click="emit('update:isExpanded', !isExpanded)">
          <i class="fi fi-rr-menu-burger"></i>
        </button>
      </template>

      <template v-if="isExpanded || $basket.screenSize.width > 865">
        <!-- * --- [ Profile ] --- * -->
        <div class="template__left--profile">
          <div class="template__left--profile__image">
            <img src="@/assets/images/profile.jpg" alt="avatar" />
          </div>

          <div class="template__left--profile__info">
            <h3>Hi, my name is</h3>
            <h3>Gražvydas Žilius</h3>
          </div>
        </div>

        <!-- * --- [ Socials ] --- * -->
        <div class="template__left--socials">
          <a
            href="https://www.linkedin.com/in/gra%C5%BEvydas-%C5%BEilius-408577212/"
            target="_blank"
            class="animate-cursor-element"
          >
            <i class="fi fi-brands-linkedin" />
            <span>Linked In</span>
          </a>
          <a href="https://github.com/Grandizas" target="_blank" class="animate-cursor-element">
            <i class="fi fi-brands-github" />
            <span>Github</span>
          </a>
          <a href="https://x.com/Grandizaz" target="_blank" class="animate-cursor-element">
            <i class="fi fi-brands-twitter-alt" />
            <span>Twitter</span>
          </a>
          <a href="https://www.instagram.com/grandizas/" target="_blank" class="animate-cursor-element">
            <i class="fi fi-brands-instagram" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/grazvydas.zilius.35?locale=lt_LT"
            target="_blank"
            class="animate-cursor-element"
          >
            <i class="fi fi-brands-facebook" />
            <span>Facebook</span>
          </a>
          <a href="mailto:grazvydaszilius2001@email.com" target="_blank" class="animate-cursor-element">
            <i class="fi fi-rr-envelope-plus" />
            <span>Mail</span>
          </a>
        </div>

        <decorations-spin-text />

        <p class="copyright">© 2024 Gražvydas Žilius</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIndexStore } from '~/stores/index';

const $basket = useIndexStore();

defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'update:isExpanded', value: boolean): void;
}>();

onMounted(() => {
  if ($basket.screenSize.width > 865) {
    emit('update:isExpanded', true);
  } else {
    emit('update:isExpanded', false);
  }
});
</script>

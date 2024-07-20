<template>
  <div class="template__left">
    <div class="template__left--content">
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
        <a href="#" class="animate-cursor-element">
          <i class="fi fi-brands-linkedin"></i>
          <span>Linked In</span>
        </a>
        <a href="#" class="animate-cursor-element">
          <i class="fi fi-brands-github"></i>
          <span>Github</span>
        </a>
        <a href="#" class="animate-cursor-element">
          <i class="fi fi-brands-twitter"></i>
          <span>Twitter</span>
        </a>
        <a href="#" class="animate-cursor-element">
          <i class="fi fi-brands-instagram"></i>
          <span>Instagram</span>
        </a>
        <a href="#" class="animate-cursor-element">
          <i class="fi fi-brands-facebook"></i>
          <span>Facebook</span>
        </a>
      </div>

      <decorations-spin-text />
    </div>
  </div>
</template>

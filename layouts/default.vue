<template>
  <main class="template">
    <div class="template__background">
      <video autoplay muted loop>
        <source src="~/assets/videos/smoke.mp4" type="video/mp4" />
      </video>

      <div class="template__background--shadow" />
    </div>

    <templates-left-bar />
    <div class="template__main">
      <slot />
    </div>
  </main>
</template>

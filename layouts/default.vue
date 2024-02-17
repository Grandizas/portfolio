<template>
  <main>
    <templates-left-bar />
    <div class="template__main">
      <slot />
    </div>
  </main>
</template>

<style lang="scss">
main {
  display: flex;
  min-height: 100vh;
  background-color: red;
}
</style>

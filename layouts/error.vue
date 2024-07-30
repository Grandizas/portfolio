<template>
  <div>
    <h1>Page Not Found</h1>
    <p>Redirecting to the home page...</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Redirect to the root path after 2 seconds
setTimeout(() => {
  router.push('/');
}, 2000);
</script>

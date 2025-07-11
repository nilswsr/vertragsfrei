<template>
  <div class="min-h-screen flex flex-col">
    <Header :show-nav="showNav" />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const showNav = computed(() => route.path !== '/generator')
</script>
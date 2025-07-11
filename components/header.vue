<template>
  <header class="mb-4 sm:mb-6">
    <nav class="relative items-center pt-3 sm:pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
      <div class="flex justify-between items-center w-full">
        <a href="/" class="flex items-center">
          <img src="/logo.png" alt="vertragsfrei Logo" class="h-8 sm:h-10 w-auto object-contain" />
        </a>
        
        <!-- Desktop Navigation -->
        <div class="hidden sm:flex items-center space-x-6" v-if="showNav !== false">
          <a 
            v-for="link in navigation" 
            :key="link.id" 
            :href="link.router" 
            class="flex items-center gap-2 text-sm sm:text-base text-gray-500 hover:text-indigo-600 transition-colors duration-150"
          >
            <span>{{ link.title }}</span>
            <Icon v-if="link.icon" :name="link.icon" class="mt-0.5 sm:mt-1" size="16"></Icon>
          </a>
        </div>

        <!-- Mobile Navigation - Same line as logo -->
        <div class="sm:hidden" v-if="showNav !== false">
          <a 
            v-for="link in navigation" 
            :key="link.id" 
            :href="link.router" 
            class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-150"
          >
            <span class="hidden xs:inline">{{ link.title }}</span>
            <Icon v-if="link.icon" :name="link.icon" class="mt-0.5" size="16"></Icon>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
interface Props {
  showNav?: boolean
}
defineProps<Props>()

const navigation = [
  { title: "Zum Kündigungs-Generator", router: "/generator", id: "generator", icon: "i-heroicons-chevron-right"}
]
</script>
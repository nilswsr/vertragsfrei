<template>
  <footer class="bg-gray-50 border-t border-gray-200 mt-12 sm:mt-16">
    <div class="max-w-7xl mx-auto px-4 py-6 sm:py-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <!-- Logo and Brand -->
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="vertragsfrei Logo" class="h-7 sm:h-8 w-auto object-contain" />
        </div>
        
        <!-- Navigation Links -->
        <div class="flex items-center gap-4 sm:gap-6">
          <NuxtLink 
            to="/impressum" 
            class="text-gray-600 hover:text-indigo-600 transition-colors duration-150 text-xs sm:text-sm font-medium"
          >
            Impressum
          </NuxtLink>
          <NuxtLink 
            to="/datenschutz" 
            class="text-gray-600 hover:text-indigo-600 transition-colors duration-150 text-xs sm:text-sm font-medium"
          >
            Datenschutz
          </NuxtLink>
          <a 
            href="https://github.com/nilswsr/vertragsfrei" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-indigo-600 transition-colors duration-150 text-xs sm:text-sm font-medium flex items-center gap-1"
          >
            <Icon name="i-simple-icons-github" size="16" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional logic needed
</script> 
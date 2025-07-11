<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full text-center">
      <div class="mb-8">
        <Icon name="i-heroicons-exclamation-triangle-20-solid" size="64" class="text-red-500 mx-auto mb-4" />
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {{ error?.statusCode === 404 ? 'Seite nicht gefunden' : 'Ein Fehler ist aufgetreten' }}
        </h1>
        <p class="text-gray-600 mb-6">
          {{ error?.statusCode === 404 
            ? 'Die gesuchte Seite existiert nicht oder wurde verschoben.' 
            : 'Es tut uns leid, aber etwas ist schiefgelaufen.' 
          }}
        </p>
      </div>
      
      <div class="space-y-3">
        <button 
          @click="handleError"
          class="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-150 font-medium"
        >
          Zurück zur Startseite
        </button>
        
        <button 
          @click="goBack"
          class="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-150 font-medium"
        >
          Zurück
        </button>
      </div>
      
      <div class="mt-8 text-sm text-gray-500">
        <p>Fehlercode: {{ error?.statusCode || 'Unbekannt' }}</p>
        <p v-if="error?.message" class="mt-1">{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError()

const handleError = () => {
  clearError()
  navigateTo('/')
}

const goBack = () => {
  clearError()
  if (process.client) {
    window.history.back()
  }
}
</script> 
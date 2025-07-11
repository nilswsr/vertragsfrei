<template>
  <div>
    <!-- Loading State -->
    <div v-if="letterStore.isGenerating || (!letterStore.subject && !letterStore.body && !letterStore.error)" class="text-center py-8 sm:py-12">
      <div class="mb-4">
        <div class="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-indigo-600"></div>
      </div>
      <h3 class="text-base sm:text-lg font-semibold text-gray-800 mb-2">Kündigungsschreiben wird generiert...</h3>
      <p class="text-gray-600 text-sm sm:text-base">Bitte haben Sie einen Moment Geduld.</p>
    </div>

    <!-- Error State -->
    <div v-else-if="letterStore.error" class="text-center py-8 sm:py-12">
      <div class="mb-4">
        <Icon name="i-heroicons-exclamation-triangle-20-solid" size="40" class="sm:w-12 sm:h-12 text-red-500 mx-auto" />
      </div>
      <h3 class="text-base sm:text-lg font-semibold text-gray-800 mb-2">Fehler bei der Generierung</h3>
      <p class="text-gray-600 mb-6 text-sm sm:text-base">{{ letterStore.error }}</p>
      <button @click="retryGeneration" class="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-colors duration-150 text-sm sm:text-base">
        Erneut versuchen
      </button>
    </div>

    <!-- Success State -->
    <div v-else-if="letterStore.subject && letterStore.body" class="space-y-6 sm:space-y-8">
      <!-- Title -->
      <div class="text-center">
        <h2 class="text-lg font-bold text-gray-800 sm:text-xl mb-2">Kündigungsschreiben generiert!</h2>
        <p class="text-gray-600 text-sm sm:text-base mb-6">Ihr Kündigungsschreiben ist bereit zum Versenden</p>
        <div class="w-20 sm:w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
      </div>

      <div class="flex flex-col gap-4">
              <!-- Info Banner -->
      <div class="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
        <div class="flex items-center gap-2 mb-2">
          <Icon name="i-heroicons-information-circle-20-solid" size="18" class="sm:w-5 sm:h-5 text-gray-600" />
          <h4 class="text-sm font-semibold text-gray-800">Ihr Kündigungsschreiben ist bereit</h4>
        </div>
        <p class="text-gray-700 text-xs sm:text-sm">
          Sie können den Text anpassen, das Schreiben direkt per E-Mail versenden oder als PDF herunterladen. 
          Nutzen Sie die Bearbeiten-Buttons (Stift-Icon) um Betreff und Nachricht nach Ihren Wünschen anzupassen.
        </p>
      </div>

              <!-- PDF Download and Email Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-3">
        <button @click="handleEmailSend" class="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-indigo-600 font-medium bg-transparent border-2 border-indigo-600 hover:bg-indigo-50 cursor-pointer transition-colors duration-150 flex items-center justify-center gap-2 hover:cursor-pointer text-sm sm:text-base">
          <Icon name="i-heroicons-envelope-20-solid" size="18" class="sm:w-5 sm:h-5" />
          Per E-Mail versenden
        </button>

        <button @click="handleDownloadPDF" :disabled="isGeneratingPDF" class="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-colors duration-150 flex items-center justify-center gap-2 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base">
          <div v-if="isGeneratingPDF" class="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
          <Icon v-else name="i-heroicons-document-arrow-down-20-solid" size="18" class="sm:w-5 sm:h-5" />
          {{ isGeneratingPDF ? 'PDF wird erstellt...' : 'Als PDF herunterladen' }}
        </button>
      </div>
      </div>
      

      <div class="flex flex-col gap-2">
        <!-- Letter Editor -->
        <LetterEditor />
      </div>
    

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <button @click="handleBack" class="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150 flex items-center justify-center gap-2 hover:cursor-pointer text-sm sm:text-base w-full sm:w-auto">
          <Icon name="i-heroicons-chevron-left-20-solid" size="18" class="sm:w-5 sm:h-5" />
          Zurück
        </button>
        
        <button @click="startNewLetter" class="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150 flex items-center justify-center gap-2 hover:cursor-pointer text-sm sm:text-base w-full sm:w-auto">
          <Icon name="i-heroicons-plus-20-solid" size="18" class="sm:w-5 sm:h-5" />
          Neues Kündigungsschreiben
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGeneratorStore } from '~/stores/generator-store'
import { useLetterGeneratorStore } from '~/stores/letter-generator-store'
import { downloadPDF } from '~/utils/pdf-generator'

const emit = defineEmits(['previous', 'new-letter'])

const generatorStore = useGeneratorStore()
const letterStore = useLetterGeneratorStore()

// Reactive states for button feedback
const isGeneratingPDF = ref(false)

// No automatic generation - letter should be generated from the previous step

const retryGeneration = async () => {
  await letterStore.generateLetter(generatorStore)
}

const startNewLetter = () => {
  // Clear localStorage
  generatorStore.clearStorage()
  letterStore.reset()
  generatorStore.reset()
  
  // Reload the page
  window.location.reload()
}

const handleBack = () => {
  emit('previous')
}

const handleDownloadPDF = async () => {
  try {
    isGeneratingPDF.value = true
    await downloadPDF(generatorStore, letterStore)
  } catch (error) {
    console.error('Fehler beim PDF-Download:', error)
    alert('Fehler beim PDF-Download. Bitte versuchen Sie es erneut.')
  } finally {
    isGeneratingPDF.value = false
  }
}

const handleEmailSend = () => {
  // Get company email from store
  const companyEmail = generatorStore.companyData?.email
  
  if (!companyEmail) {
    alert('Keine E-Mail-Adresse des Anbieters verfügbar. Bitte fügen Sie die E-Mail-Adresse manuell hinzu.')
    return
  }
  
  // URL encode subject and body
  const encodedSubject = encodeURIComponent(letterStore.subject)
  const encodedBody = encodeURIComponent(letterStore.body)
  
  // Create mailto link
  const mailtoLink = `mailto:${companyEmail}?subject=${encodedSubject}&body=${encodedBody}`
  
  // Open email client in same window
  window.location.href = mailtoLink
}
</script> 
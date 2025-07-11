<template>
  <div>
    <!-- Data Summary -->
    <div class="mb-6">
      <h2 class="text-lg font-bold text-gray-800 sm:text-xl mb-2">Fast fertig!</h2>
      <p class="text-gray-600 text-base mb-6">Bitte überprüfe noch einmal alle Daten und klicke auf "Kündigungsschreiben generieren", um dein Kündigungsschreiben zu erstellen.</p>
      
      <div class="space-y-3">
        <!-- Contract Type -->
        <div class="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg p-3">
          <div class="flex items-center gap-2 mb-1">
            <Icon name="i-heroicons-document-text-20-solid" size="14" class="text-indigo-600" />
            <h4 class="text-sm font-semibold text-indigo-800">Vertragsart</h4>
          </div>
          <p class="text-indigo-900 text-sm">{{ generatorStore.contractType?.label }}</p>
        </div>
        
        <!-- Company Data -->
        <div v-if="generatorStore.companyData" class="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg p-3">
          <div class="flex items-center gap-2 mb-1">
            <Icon name="i-heroicons-building-office-2-20-solid" size="14" class="text-indigo-600" />
            <h4 class="text-sm font-semibold text-indigo-800">Anbieter</h4>
          </div>
          <p class="text-indigo-900 text-sm font-medium">{{ generatorStore.companyData.name }}</p>
          <p class="text-indigo-700 text-xs">{{ generatorStore.companyData.street }}</p>
          <p class="text-indigo-700 text-xs">{{ generatorStore.companyData.postalCode }} {{ generatorStore.companyData.city }}</p>
          <p v-if="generatorStore.companyData.email" class="text-indigo-700 text-xs">{{ generatorStore.companyData.email }}</p>
        </div>
        
        <!-- User Data -->
        <div v-if="generatorStore.userData" class="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg p-3">
          <div class="flex items-center gap-2 mb-1">
            <Icon name="i-heroicons-user-20-solid" size="14" class="text-indigo-600" />
            <h4 class="text-sm font-semibold text-indigo-800">Deine Daten</h4>
          </div>
          <p class="text-indigo-900 text-sm font-medium">{{ generatorStore.userData.fullName }}</p>
          <p class="text-indigo-700 text-xs">{{ generatorStore.userData.street }}</p>
          <p class="text-indigo-700 text-xs">{{ generatorStore.userData.postalCode }} {{ generatorStore.userData.city }}</p>
          <p v-if="generatorStore.userData.email" class="text-indigo-700 text-xs">{{ generatorStore.userData.email }}</p>
        </div>
        
        <!-- Contract Details -->
        <div v-if="generatorStore.contractDetails" class="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg p-3">
          <div class="flex items-center gap-2 mb-1">
            <Icon name="i-heroicons-clipboard-document-list-20-solid" size="14" class="text-indigo-600" />
            <h4 class="text-sm font-semibold text-indigo-800">Vertragsdetails</h4>
          </div>
          <div class="space-y-1">
            <div v-for="(value, key) in generatorStore.contractDetails" :key="key" class="flex justify-between">
              <span class="text-indigo-700 text-xs">{{ getContractDetailLabel(key) }}:</span>
              <span class="text-indigo-900 text-xs font-medium">{{ value }}</span>
            </div>
          </div>
        </div>
        
        <!-- Options -->
        <div class="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg p-3">
          <div class="flex items-center gap-2 mb-1">
            <Icon name="i-heroicons-cog-6-tooth-20-solid" size="14" class="text-indigo-600" />
            <h4 class="text-sm font-semibold text-indigo-800">Optionen</h4>
          </div>
          <div class="space-y-1">
            <div class="flex justify-between">
              <span class="text-indigo-700 text-xs">DSGVO-Datenlöschung:</span>
              <span class="text-indigo-900 text-xs font-medium">{{ generatorStore.options.includeDSGVO ? 'Ja' : 'Nein' }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-indigo-700 text-xs">Bestätigung anfordern:</span>
              <span class="text-indigo-900 text-xs font-medium">{{ generatorStore.options.includeConfirmation ? 'Ja' : 'Nein' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Action Buttons -->
    <div class="flex justify-between items-center">
      <button @click="handleBack" class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150 flex items-center gap-1">
        <Icon name="i-heroicons-chevron-left-20-solid" size="16" />
        Zurück
      </button>
      
      <button @click="handleGenerate" class="px-4 py-3 rounded-lg text-white text-md font-bold bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-colors duration-150 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed">
        <Icon name="i-heroicons-cog-8-tooth-16-solid" />
        Kündigungsschreiben generieren
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGeneratorStore } from '~/stores/generator-store'
import { useLetterGeneratorStore } from '~/stores/letter-generator-store'

const emit = defineEmits(['previous', 'next'])

const generatorStore = useGeneratorStore()
const letterStore = useLetterGeneratorStore()

const handleGenerate = async () => {
  emit('next')
  await letterStore.generateLetter(generatorStore)
}

const handleBack = () => {
  emit('previous')
}

const getContractDetailLabel = (key: string) => {
  if (!generatorStore.contractType) return key
  
  const field = generatorStore.contractType.fields.find(f => f.id === key)
  return field?.label || key
}
</script>

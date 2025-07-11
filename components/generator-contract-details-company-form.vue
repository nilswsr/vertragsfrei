<template>
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="p-1.5 bg-indigo-100 rounded-lg flex items-center justify-center">
          <Icon name="i-heroicons-building-office-2-20-solid" size="18" class="text-indigo-600" />
        </div>
        <h2 class="text-lg font-bold text-gray-800 sm:text-xl">
          {{ manuallyEntered || companyOptions.length === 0 ? 'Anbieter-Daten eingeben' : 'Anbieter-Daten überprüfen' }}
        </h2>
      </div>
      <p class="text-gray-600 text-sm">
        {{ manuallyEntered || companyOptions.length === 0 ? 'Bitte gib die Daten deines Anbieters ein. Diese Informationen werden für dein Kündigungsschreiben verwendet.' : 'Bitte überprüfe und ergänze die Daten deines Anbieters. Änderungen sind möglich.' }}
      </p>
    </div>

    <div class="space-y-4">
      <div>
        <label class="block mb-1 text-sm text-gray-700">Firmenname</label>
        <div class="relative">
          <input v-model="companyData.name"
                 class="w-full border border-gray-300 rounded p-2 pl-10 bg-white text-sm sm:text-base"
                 :class="nameError ? 'border-red-600' : 'border-gray-300'"
                 @input="nameError = ''"
          />
          <Icon name="i-heroicons-building-office-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <p v-if="nameError" class="text-sm text-red-600 mt-1">{{ nameError }}</p>
      </div>

      <div>
        <label class="block mb-1 text-sm text-gray-700">Straße</label>
        <div class="relative">
          <input v-model="companyData.street" class="w-full border border-gray-300 rounded p-2 pl-10 bg-white text-sm sm:text-base" />
          <Icon name="i-heroicons-map-pin-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label class="block mb-1 text-sm text-gray-700">PLZ</label>
          <div class="relative">
            <input v-model="companyData.postalCode" class="w-full border border-gray-300 rounded p-2 pl-10 bg-white text-sm sm:text-base" />
            <Icon name="i-heroicons-identification-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label class="block mb-1 text-sm text-gray-700">Ort</label>
          <div class="relative">
            <input v-model="companyData.city" class="w-full border border-gray-300 rounded p-2 pl-10 bg-white text-sm sm:text-base" />
            <Icon name="i-heroicons-home-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label class="block mb-1 text-sm text-gray-700">
          E-Mail
          <span class="text-sm text-gray-500">(optional)</span>
        </label>
        <div class="relative">
          <input 
            v-model="companyData.email" 
            class="w-full border border-gray-300 rounded p-2 pl-10 bg-white text-sm sm:text-base" 
            @keyup.enter="handleNext"
          />
          <Icon name="i-heroicons-envelope-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8">
      <button
        @click="handleBackToSelect"
        class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150 flex items-center justify-center gap-1 text-sm sm:text-base">
        <Icon name="i-heroicons-chevron-left-20-solid" size="16" />
        Zurück
      </button>
      <button @click="handleNext" class="px-4 py-2 rounded-lg text-white font-medium border-gray-300  bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-colors duration-150 flex items-center justify-center gap-1 text-sm sm:text-base">
        Weiter
        <Icon name="i-heroicons-chevron-right-20-solid" size="16" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { companies } from '~/data/companies'
import type {GeneratorStoreState} from "~/stores/generator-store";

const props = defineProps<{
  isManualEntry?: boolean
}>()

const emit = defineEmits(['next', 'previous', 'back-to-selection'])

const generatorStore = useGeneratorStore()

const companyOptions = computed(() => {
  if (generatorStore.contractType) {
    const contractTypeId = generatorStore.contractType.id
    const companiesFound = companies.filter(comp => comp.category.includes(contractTypeId))
    if (companiesFound.length > 0) {
      return companiesFound
    }
  }
  return []
})

const companyData = reactive<NonNullable<GeneratorStoreState["companyData"]>>({
  name: undefined,
  street: undefined,
  postalCode: undefined,
  city: undefined,
  email: undefined
})

const nameError = ref('')

const manuallyEntered = computed(() => props.isManualEntry || companyOptions.value.length === 0)

const handleBackToSelect = () => {
  if (companyOptions.value.length === 0) {
    emit('previous')
    return
  }
  resetCompanyData()
  emit('back-to-selection')
}

const resetCompanyData = () => {
  companyData.name = undefined
  companyData.postalCode = undefined
  companyData.city = undefined
  companyData.street = undefined
  companyData.email = undefined
  nameError.value = ''
}

const handleNext = () => {
  nameError.value = ''
  if (!companyData.name || companyData.name.trim() === '') {
    nameError.value = 'Dieses Feld darf nicht leer sein.'
    return
  }

  // const missing = []
  // if (!companyData.street) missing.push('Straße')
  // if (!companyData.postalCode) missing.push('PLZ')
  // if (!companyData.city) missing.push('Ort')

  generatorStore.setCompany(companyData)
  emit('next')
}

// Watch for changes in store company data and update local data
watch([() => generatorStore.companyData, () => props.isManualEntry], ([newCompanyData, isManualEntry]) => {
  console.log('Form watcher triggered:', { newCompanyData, isManualEntry })
  // Load data from store if available
  if (newCompanyData) {
    console.log('Loading company data from store:', newCompanyData)
    companyData.name = newCompanyData.name || ''
    companyData.street = newCompanyData.street || ''
    companyData.postalCode = newCompanyData.postalCode || ''
    companyData.city = newCompanyData.city || ''
    companyData.email = newCompanyData.email || ''
  }
}, { immediate: true })

// Load existing data on mount
onMounted(() => {
  // Small delay to ensure store data is loaded
  nextTick(() => {
    if (generatorStore.companyData) {
      console.log('Loading company data on mount:', generatorStore.companyData)
      companyData.name = generatorStore.companyData.name || ''
      companyData.street = generatorStore.companyData.street || ''
      companyData.postalCode = generatorStore.companyData.postalCode || ''
      companyData.city = generatorStore.companyData.city || ''
      companyData.email = generatorStore.companyData.email || ''
    }
  })
})
</script> 
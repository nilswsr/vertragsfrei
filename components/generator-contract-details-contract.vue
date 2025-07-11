<template>
  <div>
    <h2 class="text-lg font-bold text-gray-800 sm:text-xl mb-2">
      Vertragsdetails
    </h2>
    <p class="text-gray-600 text-base mb-6">
      Bitte gib die Details zu deinem Vertrag ein.
    </p>

    <div class="space-y-4">
      <div v-for="field in fields" :key="field.id">
        <label class="block mb-1 text-sm text-gray-700">{{ field.label }}<span v-if="field.required" class="text-red-600"> *</span></label>
        <input
          v-model="contractDetails[field.id]"
          class="w-full border rounded p-2 bg-white"
          :class="errors[field.id] ? 'border-red-600' : 'border-gray-300'"
        />
        <p v-if="errors[field.id]" class="text-sm text-red-600 mt-1">Dieses Feld darf nicht leer sein.</p>
      </div>
    </div>

    <div class="w-full flex justify-between mt-8">
      <button @click="handlePrevious" class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150 flex items-center gap-1">
        <Icon name="i-heroicons-chevron-left-20-solid" size="16" />
        Zurück
      </button>
      <button @click="handleNext" class="px-4 py-2 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-colors duration-150 flex items-center gap-1">
        Weiter
        <Icon name="i-heroicons-chevron-right-20-solid" size="16" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGeneratorStore } from '~/stores/generator-store'
const emit = defineEmits(['next', 'previous'])
const generatorStore = useGeneratorStore()

const contractDetails = reactive<Record<string, string>>({})
const errors = reactive<Record<string, string>>({})

const handleNext = () => {
  let hasError = false
  Object.keys(errors).forEach(key => delete errors[key])
  if (generatorStore.contractType) {
    generatorStore.contractType.fields.forEach(field => {
      if (field.required && (!contractDetails[field.id] || contractDetails[field.id].trim() === '')) {
        errors[field.id] = 'Dieses Feld darf nicht leer sein.'
        hasError = true
      }
    })
  }

  if (!hasError) {
    generatorStore.setContractDetails(contractDetails)
    emit('next')
  }
}

const fields = computed(() => {
  if (generatorStore.contractType && generatorStore.contractType.fields && generatorStore.contractType.fields.length > 0) {
    return generatorStore.contractType.fields
  }
  return []
})

const handlePrevious = () => {
  emit('previous')
}

// Watch for changes in store contract details and update local data
watch(() => generatorStore.contractDetails, (newContractDetails) => {
  if (newContractDetails) {
    console.log('Loading contract details from store:', newContractDetails)
    Object.assign(contractDetails, newContractDetails)
  }
}, { immediate: true })

// Load existing data on mount
onMounted(() => {
  // Small delay to ensure store data is loaded
  nextTick(() => {
    if (generatorStore.contractDetails) {
      console.log('Loading contract details on mount:', generatorStore.contractDetails)
      Object.assign(contractDetails, generatorStore.contractDetails)
    }
  })
})
</script>

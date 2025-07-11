<template>
  <GeneratorContractDetailsCompanySelection
    v-if="showSelection"
    @next="handleNext"
    @previous="() => emit('previous')"
    @manual-entry="handleManualEntry"
    @company-selected="handleCompanySelected"
  />
  <GeneratorContractDetailsCompanyForm
    v-else
    :is-manual-entry="isManualEntry"
    @next="() => emit('next')"
    @previous="() => emit('previous')"
    @back-to-selection="handleBackToSelection"
  />
</template>

<script lang="ts" setup>
import { companies } from '~/data/companies'

const emit = defineEmits(['next', 'previous'])

const showSelection = ref(true)
const isManualEntry = ref(false)

const generatorStore = useGeneratorStore()

// Load state from localStorage
onMounted(() => {
  if (process.client) {
    try {
      const stored = localStorage.getItem('generator-company-state')
      if (stored) {
        const parsed = JSON.parse(stored)
        showSelection.value = parsed.showSelection ?? true
        isManualEntry.value = parsed.isManualEntry ?? false
      }
    } catch (error) {
      console.error('Error loading company state:', error)
    }
  }
})

// Save state to localStorage
watch([showSelection, isManualEntry], ([show, manual]) => {
  if (process.client) {
    try {
      localStorage.setItem('generator-company-state', JSON.stringify({
        showSelection: show,
        isManualEntry: manual
      }))
    } catch (error) {
      console.error('Error saving company state:', error)
    }
  }
})

// Check if companies are available for current contract type
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

// Watch for changes in contract type and company options
watch([() => generatorStore.contractType, companyOptions], ([contractType, options]) => {
  if (contractType && options.length === 0) {
    // No companies available for this contract type, show form directly
    isManualEntry.value = true
    showSelection.value = false
  } else if (contractType && options.length > 0) {
    // Companies available, show selection
    showSelection.value = true
    isManualEntry.value = false
  }
}, { immediate: true })

const handleNext = () => {
  // This should only be called when there are no companies available
  // and we want to go directly to the next step
  emit('next')
}

const handleManualEntry = () => {
  isManualEntry.value = true
  showSelection.value = false
}

const handleBackToSelection = () => {
  isManualEntry.value = false
  showSelection.value = true
}

const handleCompanySelected = () => {
  isManualEntry.value = false
  showSelection.value = false
}
</script>
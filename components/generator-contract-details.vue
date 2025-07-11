<template>
  <div>
    <GeneratorContractDetailsCompany
      v-show="detailsStep === 1"
      @next="detailsStep++"
      @previous="handlePrevious"
    />
    <GeneratorContractDetailsUser
      v-show="detailsStep === 2"
      @previous="detailsStep--"
      @next="detailsStep++"
    />
    <GeneratorContractDetailsContract
      v-show="detailsStep === 3"
      @previous="detailsStep--"
      @next="() => emit('next')"
    />
  </div>
</template>

<script setup lang="ts">
const detailsStep = ref(1)
const generatorStore = useGeneratorStore()

const emit = defineEmits(['previous', 'next'])

// Load details step from localStorage
onMounted(() => {
  if (process.client) {
    try {
      const stored = localStorage.getItem('generator-details-step')
      if (stored) {
        detailsStep.value = parseInt(stored) || 1
      }
    } catch (error) {
      console.error('Error loading details step:', error)
    }
  }
})

// Save details step to localStorage
watch(detailsStep, (newStep) => {
  if (process.client) {
    try {
      localStorage.setItem('generator-details-step', newStep.toString())
    } catch (error) {
      console.error('Error saving details step:', error)
    }
  }
})

const handlePrevious = () => {
  emit('previous')
}
</script>
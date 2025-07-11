<template>
  <h1 class="text-gray-800 text-2xl sm:text-3xl font-semibold sm:text-4xl text-center mb-12 sm:mb-16">
    Kündigungsschreiben-Generator
  </h1>
  <GeneratorStepper :steps-items="steps" :current-step="generatorStore.currentStep" class="mb-4 sm:mb-6"/>
  <GeneratorWindow :current-step="generatorStore.currentStep">
    <GeneratorContractType
      v-show="generatorStore.currentStep === 1"
      @next="generatorStore.setCurrentStep(generatorStore.currentStep + 1)"
    />
    <GeneratorContractDetails
      v-show="generatorStore.currentStep === 2"
      @previous="generatorStore.setCurrentStep(generatorStore.currentStep - 1)"
      @next="generatorStore.setCurrentStep(generatorStore.currentStep + 1)"
    />
    <GeneratorOptions
      v-show="generatorStore.currentStep === 3"
      @previous="generatorStore.setCurrentStep(generatorStore.currentStep - 1)"
      @next="generatorStore.setCurrentStep(generatorStore.currentStep + 1)"
    />
    <GeneratorGenerate
      v-show="generatorStore.currentStep === 4"
      @previous="generatorStore.setCurrentStep(generatorStore.currentStep - 1)"
      @next="generatorStore.setCurrentStep(generatorStore.currentStep + 1)"
    />
    <GeneratorLetterResult
      v-show="generatorStore.currentStep === 5"
      @previous="generatorStore.setCurrentStep(generatorStore.currentStep - 1)"
      @new-letter="handleNewLetter"
    />
  </GeneratorWindow>
</template>

<script setup lang="ts">
const steps = ["Vertragsart", "Vertragsdetails", "Optionen", "Generieren"]
const generatorStore = useGeneratorStore()

// Load data from localStorage on page load
onMounted(() => {
  console.log('Page mounted, loading data from localStorage')
  generatorStore.loadFromStorage()
  console.log('Data loaded, current step:', generatorStore.currentStep)
})

const handleNewLetter = () => {
  generatorStore.setCurrentStep(1)
}
</script>
<template>
  <div class="max-w-2xl mx-auto w-full min-h-36 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 bg-gray-50">
    <!-- Contract Type Banner -->
    <div v-if="selectedContractType && !isContractTypeStep && !isGenerateStep && !isLetterResultStep" class="mb-4">
      <div class="bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2 flex items-center gap-2 text-xs">
        <Icon name="i-heroicons-check-circle-20-solid" size="14" class="text-indigo-600" />
        <span class="text-indigo-700 font-medium">Vertragsart:</span>
        <span class="text-indigo-900">{{ selectedContractType.label }}</span>
      </div>
    </div>
    
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentStep?: number
}>()

const generatorStore = useGeneratorStore()
const selectedContractType = computed(() => generatorStore.contractType)
const isContractTypeStep = computed(() => props.currentStep === 1)
const isGenerateStep = computed(() => props.currentStep === 4)
const isLetterResultStep = computed(() => props.currentStep === 5)
</script>
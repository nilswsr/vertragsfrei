<template>
  <div>
    <h2 class="text-lg font-bold text-gray-800 sm:text-xl mb-2">
      Vertragsart auswählen
    </h2>
    <p class="text-gray-600 text-base mb-6">
      Wähle den Vertrag aus, den du kündigen möchtest. Du kannst später noch Details anpassen.
    </p>
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="contractType in contractTypes"
        :key="contractType.id"
        @click="activeId = contractType.id"
        class="relative contract-li space-y-3 p-4 border-2 rounded-lg transition-colors duration-200 group cursor-pointer"
        :class="activeId === contractType.id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 bg-white'"
      >
        <!-- Checkbox oben rechts -->
        <span class="absolute top-2 right-2 text-indigo-600">
        <Icon
          v-if="activeId === contractType.id"
          name="i-heroicons-check-circle-20-solid"
          size="20"
        />
      </span>

        <!-- Icon -->
        <Icon
          class="flex items-center mb-2 transition-colors duration-150"
          :name="contractType.icon"
          size="25"
          :class="activeId === contractType.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'"
        />

        <h5 class="text-lg font-semibold text-gray-800">{{ contractType.label }}</h5>
      </li>
    </ul>
    <div class="w-full flex justify-end">
      <button
        class="mt-8 px-4 py-2 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-150 flex items-center gap-1"
        :disabled="!selectionDone"
        @click="handleNext"
      >
        Weiter
        <Icon name="i-heroicons-chevron-right-20-solid" size="16" />
      </button>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { contractTypes } from '~/data/contractTypes'

const emit = defineEmits(['next'])

const activeId = ref<string | null>(null)

const selectionDone = computed<boolean>(() => {
  return activeId.value != null
})

const generatorStore = useGeneratorStore()

// Load selected contract type on mount
onMounted(() => {
  if (generatorStore.contractType) {
    activeId.value = generatorStore.contractType.id
  }
})

const handleNext = () => {
  if (activeId.value) {
    const success = generatorStore.setContractType(activeId.value)
    if (success) {
      emit('next')
    }
  }
}
</script>

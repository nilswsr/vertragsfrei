<template>
  <div>
    <h2 class="text-lg font-bold text-gray-800 sm:text-xl mb-2">Zusätzliche Optionen</h2>
    <p class="text-gray-600 text-base mb-6">Möchtest du bestimmte Zusätze in dein Kündigungsschreiben aufnehmen?</p>

    <div class="space-y-6">
      <div class="flex flex-row justify-between items-center">
        <p class="mb-2">Möchtest du eine DSGVO-Datenlöschung mit beantragen?</p>
        <div class="flex gap-4">
          <button @click="setOption('includeDSGVO', true)" :class="optionClasses(options.includeDSGVO, true)">Ja</button>
          <button @click="setOption('includeDSGVO', false)" :class="optionClasses(options.includeDSGVO, false)">Nein</button>
        </div>
      </div>

      <div class="flex flex-row justify-between items-center">
        <p class="mb-2">Soll eine Bestätigung der Kündigung angefordert werden?</p>
        <div class="flex gap-4">
          <button @click="setOption('includeConfirmation', true)" :class="optionClasses(options.includeConfirmation, true)">Ja</button>
          <button @click="setOption('includeConfirmation', false)" :class="optionClasses(options.includeConfirmation, false)">Nein</button>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-between mt-8">
      <button @click="emit('previous')" class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150 flex items-center gap-1">
        <Icon name="i-heroicons-chevron-left-20-solid" size="16" />
        Zurück
      </button>
      <button @click="emit('next')" class="px-4 py-2 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-colors duration-150 flex items-center gap-1">
        Weiter
        <Icon name="i-heroicons-chevron-right-20-solid" size="16" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['next', 'previous'])
const generatorStore = useGeneratorStore()

// Make options reactive
const options = computed(() => generatorStore.options)

const setOption = (key: keyof typeof generatorStore.options, value: boolean) => {
  generatorStore.setOptions({ [key]: value })
}

const optionClasses = (current: boolean, value: boolean) => {
  return current === value
    ? 'px-4 py-2 rounded bg-indigo-600 text-white'
    : 'px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 hover:cursor-pointer'
}
</script>
<template>
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="p-1.5 bg-indigo-100 rounded-lg flex items-center justify-center">
          <Icon name="i-heroicons-user-20-solid" size="18" class="text-indigo-600" />
        </div>
        <h2 class="text-lg font-bold text-gray-800 sm:text-xl">
          Deine Daten
        </h2>
      </div>
      <p class="text-gray-600 text-sm">
        Bitte gib hier deine persönlichen Daten an, damit das Kündigungsschreiben korrekt erstellt werden kann.
      </p>
    </div>

    <div class="space-y-4">
      <div>
        <label class="block mb-1 text-sm text-gray-700">Dein vollständiger Name</label>
        <div class="relative">
          <input
            v-model="userData.fullName"
            class="w-full border rounded p-2 pl-10 bg-white"
            :class="nameError ? 'border-red-600' : 'border-gray-300'"
            @input="nameError = ''"
          />
          <Icon name="i-heroicons-user-circle-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <p v-if="nameError" class="text-sm text-red-600 mt-1">{{ nameError }}</p>
      </div>
      <div>
        <label class="block mb-1 text-sm text-gray-700">Straße</label>
        <div class="relative">
          <input v-model="userData.street" class="w-full border border-gray-300 rounded p-2 pl-10 bg-white" />
          <Icon name="i-heroicons-map-pin-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div>
          <label class="block mb-1 text-sm text-gray-700">PLZ</label>
          <div class="relative">
            <input v-model="userData.postalCode" class="w-full border border-gray-300 rounded p-2 pl-10 bg-white" />
            <Icon name="i-heroicons-identification-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div class="col-span-2">
          <label class="block mb-1 text-sm text-gray-700">Ort</label>
          <div class="relative">
            <input 
              v-model="userData.city" 
              class="w-full border border-gray-300 rounded p-2 pl-10 bg-white" 
            />
            <Icon name="i-heroicons-home-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label class="block mb-1 text-sm text-gray-700">E-Mail-Adresse</label>
        <div class="relative">
          <input 
            v-model="userData.email" 
            type="email"
            class="w-full border border-gray-300 rounded p-2 pl-10 bg-white" 
            @keyup.enter="handleNext"
          />
          <Icon name="i-heroicons-envelope-20-solid" size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>

    <div class="w-full flex justify-between mt-8">
      <button
        @click="handlePrevious"
        class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150 flex items-center gap-1">
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
const emit = defineEmits(['next', 'previous'])
const userData = reactive({ fullName: '', street: '', postalCode: '', city: '', email: ''})
const nameError = ref('')

const generatorStore = useGeneratorStore()

const handleNext = () => {
  nameError.value = ''
  if (!userData.fullName || userData.fullName.trim() === '') {
    nameError.value = 'Dieses Feld darf nicht leer sein.'
    return
  }

  // const missing = []
  // if (!userData.street) missing.push('Straße')
  // if (!userData.postalCode) missing.push('PLZ')
  // if (!userData.city) missing.push('Ort')

  generatorStore.setUserData(userData)
  emit('next')
}

const handlePrevious = () => {
  emit('previous')
}

// Watch for changes in store user data and update local data
watch(() => generatorStore.userData, (newUserData) => {
  if (newUserData) {
    console.log('Loading user data from store:', newUserData)
    userData.fullName = newUserData.fullName || ''
    userData.street = newUserData.street || ''
    userData.postalCode = newUserData.postalCode || ''
    userData.city = newUserData.city || ''
    userData.email = newUserData.email || ''
  }
}, { immediate: true })

// Load existing data on mount
onMounted(() => {
  // Small delay to ensure store data is loaded
  nextTick(() => {
    if (generatorStore.userData) {
      console.log('Loading user data on mount:', generatorStore.userData)
      userData.fullName = generatorStore.userData.fullName || ''
      userData.street = generatorStore.userData.street || ''
      userData.postalCode = generatorStore.userData.postalCode || ''
      userData.city = generatorStore.userData.city || ''
      userData.email = generatorStore.userData.email || ''
    }
  })
})
</script>

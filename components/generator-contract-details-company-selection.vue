<template>
  <div>
    <h2 class="text-lg font-bold text-gray-800 sm:text-xl mb-2">
      Ist dein Anbieter dabei?
    </h2>
    <p class="text-gray-600 text-sm sm:text-base mb-6">
      Wähle deinen Anbieter aus der Liste aus. Falls dein Unternehmen nicht dabei ist, klicke unten auf „Mein Anbieter ist nicht dabei", um die Daten manuell einzugeben.
    </p>

    <ul class="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="company in companyOptions"
        :key="company.id"
        @click="activeId = company.id"
        class="relative space-y-3 p-3 sm:p-4 border-2 rounded-lg transition-colors duration-200 group cursor-pointer flex flex-row gap-3 items-center"
        :class="activeId === company.id ? 'border-indigo-600 bg-indigo-50 shadow-none' : 'border-gray-200 bg-white shadow-sm'"
      >
      <span class="absolute top-2 right-2 text-indigo-600">
        <Icon
          v-if="activeId === company.id"
          name="i-heroicons-check-circle-20-solid"
          size="20"
        />
      </span>

        <img :src="`/logos/${company.logo}`" alt="" class="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-0" />
        <h5 class="text-base sm:text-lg font-semibold text-gray-800">{{ company.label }}</h5>
      </li>
    </ul>

    <div class="w-full flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8">
      <button
        @click="() => emit('previous')"
        class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150 flex items-center justify-center gap-1 text-sm sm:text-base"
      >
        <Icon name="i-heroicons-chevron-left-20-solid" size="16" />
        Zurück
      </button>
      <button
        @click="handleSelect(true)"
        class="px-4 py-2 rounded-lg text-gray-700 font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 cursor-pointer transition-colors duration-150 text-sm sm:text-base"
      >
        Mein Anbieter ist nicht dabei
      </button>
      <button
        class="px-4 py-2 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-150 flex items-center justify-center gap-1 text-sm sm:text-base"
        :disabled="!selectionDone"
        @click="handleSelect(false)"
      >
        Weiter
        <Icon name="i-heroicons-chevron-right-20-solid" size="16" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { companies } from '~/data/companies'
import type {GeneratorStoreState} from "~/stores/generator-store";

const emit = defineEmits(['next', 'previous', 'manual-entry', 'company-selected'])

const activeId = ref<string | null>(null)
const selectionDone = computed(() => activeId.value !== null)

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

// Remove the watcher - let the wrapper component handle this logic

const companyData = reactive<NonNullable<GeneratorStoreState["companyData"]>>({
  name: undefined,
  street: undefined,
  postalCode: undefined,
  city: undefined,
  email: undefined
})

const handleSelect = (manual?: boolean) => {
  if (manual) {
    activeId.value = null
    resetCompanyData()
    // Clear the store data when manual entry is selected
    generatorStore.setCompany(null)
    emit('manual-entry')
    return
  }
  if (activeId.value) {
    const company = companyOptions.value.find(c => c.id === activeId.value)
    if (company) {
      companyData.name = company.name
      companyData.postalCode = company.address.postalCode
      companyData.city = company.address.city
      companyData.street = company.address.line1
      companyData.email = company.email
      console.log('Selected company data:', companyData)
    }
  }
  generatorStore.setCompany(companyData)
  console.log('Store company data after set:', generatorStore.companyData)
  emit('company-selected') // Show form for review/editing
}

const resetCompanyData = () => {
  companyData.name = undefined
  companyData.postalCode = undefined
  companyData.city = undefined
  companyData.street = undefined
  companyData.email = undefined
}
</script> 
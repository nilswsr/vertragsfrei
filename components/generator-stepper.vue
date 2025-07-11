<template>
  <div class="max-w-2xl mx-auto px-4 md:px-0">
    <ul aria-label="Steps" class="items-center text-gray-600 font-medium md:flex">
      <li v-for="(item, idx) in stepsItems" :key="idx" :aria-current="currentStep == idx + 1 ? 'step' : false" class="flex-1 last:flex-none flex gap-x-2 md:items-center">
        <div class="flex items-center flex-col gap-x-2">
          <div :class="{'w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex-none flex items-center justify-center border-gray-200': true, 'bg-indigo-600 border-indigo-600': currentStep > idx + 1, 'border-indigo-600': currentStep == idx + 1}">
            <span :class="{'hidden': currentStep > idx + 1, 'text-indigo-600 text-xs sm:text-sm': currentStep == idx + 1}">
              {{ idx + 1 }}
            </span>
            <svg v-if="currentStep > idx + 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <hr :class="{'h-8 sm:h-12 border md:hidden border-gray-200': true, 'hidden': idx + 1 == stepsItems.length, 'border-indigo-600': currentStep > idx + 1}" />
        </div>
        <div class="h-6 sm:h-8 flex items-center md:h-auto">
          <h3 :class="{'text-xs sm:text-sm': true, 'text-indigo-600': currentStep == idx + 1}">
            {{ item }}
          </h3>
        </div>
        <hr :class="{'hidden mr-2 w-full border md:block border-gray-200': true, 'hidden': idx + 1 == stepsItems.length, 'border-indigo-600': currentStep > idx + 1}" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  stepsItems: string[],
  currentStep: number
}

defineProps<Props>()
</script>
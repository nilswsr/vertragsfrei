<template>
  <div class="space-y-4">
    <!-- Subject Editor -->
    <div class="bg-white border border-gray-200 rounded-lg p-4">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <Icon name="i-heroicons-envelope-20-solid" size="18" class="text-gray-600" />
          <h4 class="text-sm font-semibold text-gray-800">Betreff</h4>
        </div>
        <div class="flex gap-2">
          <button @click="copySubject" class="px-1.5 rounded transition-colors duration-150 hover:cursor-pointer" :class="subjectCopied ? 'bg-green-100 text-green-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'">
            <Icon v-if="subjectCopied" name="i-heroicons-check-20-solid" size="14" class="p-0"/>
            <Icon v-else name="i-heroicons-clipboard-document-20-solid" size="14" class="p-0"/>
          </button>
          <button @click="toggleSubjectEdit" class="px-1.5 rounded transition-colors duration-150 hover:cursor-pointer" :class="isEditingSubject ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'">
            <Icon name="i-heroicons-pencil-square-20-solid" size="14" class="p-0"/>
          </button>
        </div>
      </div>
      
      <!-- Subject Display/Edit -->
      <div v-if="!isEditingSubject" class="font-mono text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded p-3">
        {{ letterStore.subject }}
      </div>
      
      <div v-else class="space-y-3">
        <textarea 
          v-model="editedSubject" 
          class="w-full font-mono text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded p-3 resize-none"
          rows="2"
          placeholder="Betreff eingeben..."
        ></textarea>
        
        <div class="flex gap-2">
          <button @click="saveSubjectEdit" class="px-4 py-2 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-colors duration-150">
            Speichern
          </button>
          <button @click="resetSubjectEdit" class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150">
            Zurücksetzen
          </button>
          <button @click="cancelSubjectEdit" class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150">
            Abbrechen
          </button>
        </div>
      </div>
    </div>

    <!-- Message Editor -->
    <div class="bg-white border border-gray-200 rounded-lg p-4">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <Icon name="i-heroicons-chat-bubble-left-right-20-solid" size="18" class="text-gray-600" />
          <h4 class="text-sm font-semibold text-gray-800">Nachricht</h4>
        </div>
        <div class="flex gap-2">
          <button @click="copyMessage" class="px-1.5 rounded transition-colors duration-150 hover:cursor-pointer" :class="messageCopied ? 'bg-green-100 text-green-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'">
            <Icon v-if="messageCopied" name="i-heroicons-check-20-solid" size="14" class="text-gray-600" />
            <Icon v-else name="i-heroicons-clipboard-document-20-solid" size="14" class="text-gray-600" />
          </button>
          <button @click="toggleMessageEdit" class="px-1.5 rounded transition-colors duration-150 hover:cursor-pointer" :class="isEditingMessage ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'">
            <Icon name="i-heroicons-pencil-square-20-solid" size="14" class="p-0"/>
          </button>
        </div>
      </div>
      
      <!-- Message Display/Edit -->
      <div v-if="!isEditingMessage" class="whitespace-pre-line text-gray-900 leading-relaxed font-mono text-sm bg-gray-50 border border-gray-200 rounded p-4">
        {{ letterStore.body }}
      </div>
      
      <div v-else class="space-y-3">
        <textarea 
          v-model="editedMessage" 
          class="w-full whitespace-pre-line text-gray-900 leading-relaxed font-mono text-sm bg-gray-50 border border-gray-200 rounded p-4 resize-none"
          rows="12"
          placeholder="Nachricht eingeben..."
        ></textarea>
        
        <div class="flex gap-2">
          <button @click="saveMessageEdit" class="px-4 py-2 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-500 cursor-pointer transition-colors duration-150">
            Speichern
          </button>
          <button @click="resetMessageEdit" class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150">
            Zurücksetzen
          </button>
          <button @click="cancelMessageEdit" class="px-4 py-2 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors duration-150">
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLetterGeneratorStore } from '~/stores/letter-generator-store'

const letterStore = useLetterGeneratorStore()

// Reactive states for editing
const isEditingSubject = ref(false)
const isEditingMessage = ref(false)
const editedSubject = ref('')
const editedMessage = ref('')
const subjectCopied = ref(false)
const messageCopied = ref(false)

// Copy functions
const copySubject = async () => {
  try {
    await navigator.clipboard.writeText(letterStore.subject)
    subjectCopied.value = true
    console.log('Betreff in Zwischenablage kopiert')
    
    setTimeout(() => {
      subjectCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Error copying subject to clipboard:', error)
  }
}

const copyMessage = async () => {
  try {
    await navigator.clipboard.writeText(letterStore.body)
    messageCopied.value = true
    console.log('Nachricht in Zwischenablage kopiert')
    
    setTimeout(() => {
      messageCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Error copying message to clipboard:', error)
  }
}

// Subject editing functions
const toggleSubjectEdit = () => {
  if (!isEditingSubject.value) {
    editedSubject.value = letterStore.subject
  }
  isEditingSubject.value = !isEditingSubject.value
}

const saveSubjectEdit = () => {
  letterStore.updateSubject(editedSubject.value)
  isEditingSubject.value = false
}

const resetSubjectEdit = () => {
  editedSubject.value = letterStore.originalSubject
}

const cancelSubjectEdit = () => {
  editedSubject.value = letterStore.subject
  isEditingSubject.value = false
}

// Message editing functions
const toggleMessageEdit = () => {
  if (!isEditingMessage.value) {
    editedMessage.value = letterStore.body
  }
  isEditingMessage.value = !isEditingMessage.value
}

const saveMessageEdit = () => {
  letterStore.updateBody(editedMessage.value)
  isEditingMessage.value = false
}

const resetMessageEdit = () => {
  editedMessage.value = letterStore.originalBody
}

const cancelMessageEdit = () => {
  editedMessage.value = letterStore.body
  isEditingMessage.value = false
}
</script> 
import { defineStore } from 'pinia'
import type { GeneratorStoreState } from './generator-store'

export interface LetterData {
  subject: string
  body: string
  isGenerating: boolean
  error: string | null
  originalSubject: string
  originalBody: string
}

export const useLetterGeneratorStore = defineStore('letterGenerator', {
  state: (): LetterData => ({
    subject: '',
    body: '',
    isGenerating: false,
    error: null,
    originalSubject: '',
    originalBody: ''
  }),

  actions: {
    async generateLetter(generatorStore: ReturnType<typeof import('./generator-store').useGeneratorStore>) {
      this.isGenerating = true
      this.error = null
      
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Generate subject and body based on contract type
        const subject = this.generateSubject(generatorStore)
        const body = this.generateBody(generatorStore)
        
        this.subject = subject
        this.body = body
        
        // Save original content for editing
        this.saveOriginalContent()
      } catch (error) {
        this.error = 'Fehler bei der Generierung des Kündigungsschreibens'
        console.error('Error generating letter:', error)
      } finally {
        this.isGenerating = false
      }
    },

    generateSubject(generatorStore: ReturnType<typeof import('./generator-store').useGeneratorStore>): string {
      const contractType = generatorStore.contractType?.label_dativ || 'meines Vertrags'
      return `Kündigung ${contractType}`
    },

    generateBody(generatorStore: ReturnType<typeof import('./generator-store').useGeneratorStore>): string {
      const userData = generatorStore.userData
      const companyData = generatorStore.companyData
      const contractType = generatorStore.contractType
      const contractDetails = generatorStore.contractDetails
      const options = generatorStore.options

      if (!userData || !companyData || !contractType) {
        return 'Fehler: Unvollständige Daten für die Generierung des Kündigungsschreibens.'
      }

      let body = ''

      // Greeting
      body += `Sehr geehrte Damen und Herren,\n\n`

      // Main content
      body += `hiermit kündige ich ${contractType.label_body} zum nächstmöglichen Kündigungstermin.\n\n`

      // Contract details with user address
      if (contractDetails && Object.keys(contractDetails).length > 0) {
        body += 'Vertragsdetails:\n'
        contractType.fields.forEach(field => {
          const value = contractDetails[field.id]
          if (value) {
            body += `- ${field.label}: ${value}\n`
          }
        })
        body += '\n'
      }

      // DSGVO request
      if (options.includeDSGVO) {
        body += 'Zusätzlich bitte ich Sie, alle meine personenbezogenen Daten gemäß Art. 17 DSGVO zu löschen.\n\n'
      }

      // Confirmation request
      if (options.includeConfirmation) {
        body += 'Ich bitte Sie, mir eine schriftliche Bestätigung der Kündigung mit Angabe des Vertragsendes zu übersenden.\n\n'
      }

      body += 'Vielen Dank im Voraus!\n\n'

      // Closing
      body += 'Mit freundlichen Grüßen\n'
      body += `${userData.fullName}`

      return body
    },

    reset() {
      this.subject = ''
      this.body = ''
      this.isGenerating = false
      this.error = null
      this.originalSubject = ''
      this.originalBody = ''
    },

    // Save original content when first generated
    saveOriginalContent() {
      this.originalSubject = this.subject
      this.originalBody = this.body
    },

    // Update subject
    updateSubject(newSubject: string) {
      this.subject = newSubject
    },

    // Update body
    updateBody(newBody: string) {
      this.body = newBody
    },

    // Reset to original content
    resetToOriginal() {
      this.subject = this.originalSubject
      this.body = this.originalBody
    }
  }
}) 
import { defineStore } from 'pinia'
import type {ContractType} from "~/data/contractTypes";
import {contractTypes} from "~/data/contractTypes";

export interface GeneratorStoreState {
  currentStep: number,
  contractType: ContractType | null,
  companyData: null | {
    name: string | undefined,
    street: string | undefined,
    postalCode: string | undefined,
    city: string | undefined,
    email: string | undefined
  },
  userData: null | {
    fullName: string | undefined,
    street: string | undefined,
    postalCode: string | undefined,
    city: string | undefined,
    email: string | undefined
  },
  options: {
    includeDSGVO: boolean,
    includeConfirmation: boolean
  },
  contractDetails: Record<string, string> | null
}

export const useGeneratorStore = defineStore('generator', {
  state: (): GeneratorStoreState => ({
    currentStep: 1,
    contractType: null,
    companyData: null,
    userData: null,
    options: {
      includeDSGVO: false,
      includeConfirmation: true
    },
    contractDetails: null
  }),

  actions: {
    // Load data from localStorage
    loadFromStorage() {
      if (process.client) {
        try {
          const stored = localStorage.getItem('generator-store')
          if (stored) {
            const parsed = JSON.parse(stored)
            
            // Restore contract type by ID
            if (parsed.contractType?.id) {
              this.contractType = contractTypes.find(type => type.id === parsed.contractType.id) || null
            }
            
            // Restore other data - never restore step 5, max is 4
            const storedStep = parsed.currentStep || 1
            this.currentStep = storedStep > 4 ? 4 : storedStep
            this.companyData = parsed.companyData || null
            this.userData = parsed.userData || null
            this.options = parsed.options || { includeDSGVO: false, includeConfirmation: true }
            this.contractDetails = parsed.contractDetails || null
            
            console.log('Store after loading:', {
              currentStep: this.currentStep,
              contractType: this.contractType?.label,
              companyData: this.companyData,
              userData: this.userData,
              contractDetails: this.contractDetails
            })
          }
        } catch (error) {
          console.error('Error loading from localStorage:', error)
        }
      }
    },

    // Save data to localStorage
    saveToStorage() {
      if (process.client) {
        try {
                  const dataToStore = {
          currentStep: this.currentStep > 4 ? 4 : this.currentStep, // Never save step 5
          contractType: this.contractType ? { id: this.contractType.id } : null,
          companyData: this.companyData,
          userData: this.userData,
          options: this.options,
          contractDetails: this.contractDetails
        }
          localStorage.setItem('generator-store', JSON.stringify(dataToStore))
        } catch (error) {
          console.error('Error saving to localStorage:', error)
        }
      }
    },

    // Clear localStorage
    clearStorage() {
      if (process.client) {
        localStorage.removeItem('generator-store')
        localStorage.removeItem('generator-details-step')
        localStorage.removeItem('generator-company-state')
      }
    },

    setCurrentStep(step: number) {
      this.currentStep = step
      this.saveToStorage()
    },

    setContractType(id: string) {
      this.contractType = contractTypes.find(type => type.id === id) || null
      this.saveToStorage()
      return !!this.contractType
    },

    setCompany(companyData: GeneratorStoreState["companyData"]) {
      this.companyData = companyData
      this.saveToStorage()
    },

    setUserData(userData: GeneratorStoreState["userData"]) {
      this.userData = userData
      this.saveToStorage()
    },

    setContractDetails(contractDetails: GeneratorStoreState["contractDetails"]) {
      this.contractDetails = contractDetails
      this.saveToStorage()
    },

    setOptions(options: Partial<GeneratorStoreState["options"]>) {
      this.options = { ...this.options, ...options }
      this.saveToStorage()
    },

    reset() {
      this.currentStep = 1
      this.contractType = null
      this.companyData = null
      this.userData = null
      this.options.includeDSGVO = false
      this.options.includeConfirmation = true
      this.contractDetails = null
      this.clearStorage()
    },
  }
})

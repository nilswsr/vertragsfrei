export interface ContractType {
  id: ContractTypeId
  label: string
  label_dativ: string
  label_body: string
  fields: ContractTypeField[]
  attachmentsHint?: string
  icon: string
}

interface ContractTypeField {
  id: string
  label: string
  required?: boolean
}

export type ContractTypeId =
  | "mobilfunk"
  | "streaming"
  | "fitnessstudio"
  | "zeitung"
  | "internet"
  | "strom"
  | "gas"
  | "sonstiges"

export const contractTypes: ContractType[] = [
  {
    id: "mobilfunk",
    label: "Mobilfunkvertrag",
    label_dativ: "meines Mobilfunkvertrags",
    label_body: "meinen Mobilfunkvertrag",
    icon: "i-heroicons-device-phone-mobile",
    fields: [
      { id: "contract_number", label: "Vertragsnummer"},
      { id: "phone_number", label: "Mobilfunknummer"},
      { id: "customer_number", label: "Kundennummer"}
    ],
    attachmentsHint: "Falls vorhanden, füge eine Kopie des Vertrags oder der letzten Rechnung bei."
  },
  {
    id: "streaming",
    label: "Streamingdienst",
    label_dativ: "meines Abonnements",
    label_body: "mein Abonnement",
    icon: "i-heroicons-play-circle",
    fields: [
      { id: "contract_number", label: "Kundennummer oder Login-E-Mail"}
    ],
    attachmentsHint: "Falls du per E-Mail registriert bist, gib bitte dieselbe Adresse an."
  },
  {
    id: "fitnessstudio",
    label: "Fitnessstudio",
    label_dativ: "meiner Fitnessstudio-Mitgliedschaft",
    label_body: "meine Fitnessstudio-Mitgliedschaft",
    icon: "i-heroicons-heart",
    fields: [
      { id: "contract_number", label: "Mitgliedsnummer"},
      { id: "studio_location", label: "Studio / Standort" }
    ],
    attachmentsHint: "Füge bei Bedarf ein ärztliches Attest oder Umzugsnachweis für Sonderkündigungen bei."
  },
  {
    id: "zeitung",
    label: "Zeitungs-Abo",
    label_dativ: "meines Zeitungs-Abonnements",
    label_body: "mein Zeitungs-Abonnement",
    icon: "i-heroicons-newspaper",
    fields: [
      { id: "contract_number", label: "Kundennummer oder Abo-Nummer"}
    ],
    attachmentsHint: "Ein Verweis auf deine letzte Rechnung oder Abo-Referenz hilft bei der Zuordnung."
  },
  {
    id: "internet",
    label: "DSL-Vertrag",
    label_dativ: "meines DSL-Vertrags",
    label_body: "meinen DSL-Vertrag",
    icon: "i-heroicons-globe-alt",
    fields: [
      { id: "contract_number", label: "Vertragsnummer"},
      { id: "phone_number", label: "Festnetznummer" }
    ],
    attachmentsHint: "Bei einem Umzug ggf. Nachweis der neuen Adresse beilegen."
  },
  {
    id: "strom",
    label: "Stromvertrag",
    label_dativ: "meines Stromvertrags",
    label_body: "meinen Stromvertrag",
    icon: "i-heroicons-bolt",
    fields: [
      { id: "contract_number", label: "Vertragsnummer"},
      { id: "meter_number", label: "Zählernummer" }
    ],
    attachmentsHint: "Ein Foto der letzten Abrechnung oder Zählerstand kann hilfreich sein."
  },
  {
    id: "gas",
    label: "Gasvertrag",
    label_dativ: "meines Gasvertrags",
    label_body: "meinen Gasvertrag",
    icon: "i-heroicons-fire",
    fields: [
      { id: "contract_number", label: "Vertragsnummer"},
      { id: "meter_number", label: "Zählernummer" }
    ],
    attachmentsHint: "Falls du kündigst wegen Umzug oder Preiserhöhung, vermerke das im Schreiben."
  },
  {
    id: "sonstiges",
    label: "Sonstiges",
    label_dativ: "meines Vertrags",
    label_body: "meinen Vertrag",
    icon: "i-heroicons-document",
    fields: [
      { id: "contract_number", label: "Vertragsnummer"}
    ],
    attachmentsHint: "Falls vorhanden, füge eine Kopie des Vertrags oder der letzten Rechnung bei."
  }
]

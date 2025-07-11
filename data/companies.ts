import type {ContractTypeId} from "~/data/contractTypes";

export interface Company {
  id: string,
  label: string,
  logo: string,
  name: string,
  category: ContractTypeId[],
  address: {
    line1: string,
    line2?: string,
    postalCode: string,
    city: string,
  }
  email?: string
}

export const companies: Company[] = [
  {
    id: 'telekom',
    label: "Telekom",
    logo: "telekom.jpg",
    name: 'Telekom Deutschland GmbH',
    category: ['mobilfunk', 'internet'],
    address: {
      line1: 'Landgrabenweg 151',
      postalCode: '53227',
      city: 'Bonn'
    },
    email: 'kundenservice@telekom.de',
  },
  {
    id: 'vodafone',
    label: "Vodafone",
    logo: "vodafone.svg",
    name: 'Vodafone GmbH',
    category: ['mobilfunk', 'internet'],
    address: {
      line1: 'Kundenservice',
      postalCode: '40875',
      city: 'Ratingen'
    },
    email: 'impressum@vodafone.de',
  },
  {
    id: 'o2',
    label: "o2 / Telefónica",
    logo: "o2.svg",
    name: 'Telefónica Germany GmbH & Co. OHG',
    category: ['mobilfunk', 'internet'],
    address: {
      line1: 'Georg-Brauchle-Ring 50',
      postalCode: '80992',
      city: 'München'
    },
    email: 'impressum@cc.o2online.de',
  },
  {
    id: '1und1',
    label: "1&1",
    logo: "1und1.png",
    name: '1&1 Telecom GmbH',
    category: ['mobilfunk', 'internet'],
    address: {
      line1: 'Elgendorfer Str. 57',
      postalCode: '56410',
      city: 'Montabaur'
    },
    email: 'info@1und1.de',
  },
  {
    id: 'netflix',
    label: "Netflix",
    logo: "netflix.png",
    name: 'Netflix International B.V.',
    category: ['streaming'],
    address: {
      line1: 'Aaron-Bernstein-Platz 2',
      postalCode: '10117',
      city: 'Berlin'
    },
    email: 'support-de@cs.netflix.com',
  },
  {
    id: 'disney_plus',
    label: "Disney+",
    logo: "disney_plus.png",
    name: 'The Walt Disney Company (Germany) GmbH',
    category: ['streaming'],
    address: {
      line1: 'Lilli-Palmer-Str. 2',
      postalCode: '80636',
      city: 'München'
    },
    email: 'hilfeDE@disney.com',
  },
  {
    id: 'rtl_plus',
    label: "RTL+",
    logo: "rtl_plus.png",
    name: 'RTL interactive GmbH',
    category: ['streaming'],
    address: {
      line1: 'Picassoplatz 1',
      postalCode: '50679',
      city: 'Köln'
    },
    email: 'impressum@rtlplus.com',
  },
  {
    id: 'mcfit',
    label: "McFIT",
    logo: "mc_fit.jpg",
    name: 'RSG Group GmbH (McFIT)',
    category: ['fitnessstudio'],
    address: {
      line1: 'Tannenberg 4',
      postalCode: '96132',
      city: 'Schlüsselfeld'
    },
    email: 'service@mcfit.com',
  }
]

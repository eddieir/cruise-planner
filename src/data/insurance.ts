export interface Coverage {
  id: string
  name: string
  nameIt: string
  maxAmount: string
  deductible?: string
  keyConditions: string[]
  claimDeadline?: string
  whatToDo: string[]
}

export interface EmergencyContact {
  label: string
  value: string
  note?: string
}

export const insurancePolicy = {
  policyNumber: '40815Q',
  cardPrefix: 'MSCWW',
  insurer: 'Europ Assistance Italia S.p.A.',
  model: 'TAD426/2',
  productName: 'MSC Executive Web',
}

export const emergencyContacts: EmergencyContact[] = [
  {
    label: 'Emergency Line (24/7)',
    value: '+39 02.58.24.00.70',
    note: 'Medical emergencies, assistance abroad — call immediately',
  },
  {
    label: 'Free Info Line',
    value: '800-013529',
    note: 'Italy only, free of charge',
  },
  {
    label: 'Claims Portal',
    value: 'msc-sinistrionline.europassistance.it',
    note: 'Online claims submission',
  },
  {
    label: 'Claims Email',
    value: 'msc@europassistance.it',
    note: 'For sending documents',
  },
]

export const coverages: Coverage[] = [
  {
    id: 'assistenza',
    name: 'Travel Assistance',
    nameIt: 'Assistenza in Viaggio',
    maxAmount: 'Unlimited service',
    keyConditions: [
      '24/7 assistance coordination worldwide',
      'Medical repatriation if medically necessary',
      'Early return home for family emergencies',
      'Transmission of urgent messages',
      'Legal bail bond up to €5,000',
    ],
    whatToDo: [
      'Call +39 02.58.24.00.70 BEFORE taking any action',
      'Do not arrange repatriation or major treatments yourself — insurer must authorize first',
      'Give your policy number: MSCWW + 40815Q',
      'Follow their instructions for all assistance services',
    ],
  },
  {
    id: 'spese-mediche',
    name: 'Medical Expenses Abroad',
    nameIt: 'Spese Mediche',
    maxAmount: '€50,000 per person',
    deductible: '€25 per claim',
    keyConditions: [
      'Covers emergency medical/surgical expenses abroad',
      '€25 deductible applies per claim',
      'Dental: up to €200 for acute pain relief only',
      'Prescription drugs covered if prescribed by treating doctor',
      'Pre-existing conditions excluded unless acute emergency',
    ],
    claimDeadline: 'Submit within 30 days of return',
    whatToDo: [
      'Call +39 02.58.24.00.70 for prior authorization of major treatments',
      'Keep ALL original receipts, invoices, and medical reports',
      'Get a detailed diagnosis (in writing) from treating doctor',
      'Submit claim via msc-sinistrionline.europassistance.it within 30 days',
      'Send originals to msc@europassistance.it or by post',
    ],
  },
  {
    id: 'bagaglio',
    name: 'Baggage',
    nameIt: 'Bagaglio',
    maxAmount: '€3,000 total',
    deductible: '€100 per claim',
    keyConditions: [
      'Max €350 per single item (electronics, jewellery, etc.)',
      '€100 deductible per claim',
      'Baggage delay: €150 if delayed over 12 hours (outbound only)',
      'Theft must be reported to police within 24 hours',
      'Airline damage must be reported on PIR form at airport',
    ],
    claimDeadline: 'Report theft to police within 24h; submit claim within 30 days of return',
    whatToDo: [
      'For theft: file police report (denuncia) within 24 hours — required',
      'For airline damage: complete PIR (Property Irregularity Report) at airport immediately',
      'Keep all original purchase receipts for valuable items',
      'For delay: get written confirmation from airline of delay duration',
      'Submit claim with all documents within 30 days',
    ],
  },
  {
    id: 'annullamento',
    name: 'Trip Cancellation',
    nameIt: 'Annullamento Viaggio',
    maxAmount: '€50,000 per person / €120,000 per policy',
    keyConditions: [
      'Covers non-refundable costs if trip cancelled for covered reason',
      'Covered reasons: serious illness/injury, death of close relative, job loss, serious property damage at home',
      'Medical certificate required for health-related cancellations',
      'Must cancel as early as possible — late cancellation may reduce reimbursement',
    ],
    claimDeadline: 'Notify insurer within 3 days of cancellation event',
    whatToDo: [
      'Notify Europ Assistance within 3 days of the event causing cancellation',
      'Cancel with the cruise/travel company immediately to minimize penalties',
      'Get medical certificate if cancelling for health reasons',
      'Collect proof of reason (death certificate, job loss letter, etc.)',
      'Submit all documents within 30 days',
    ],
  },
  {
    id: 'rimborso-vacanze',
    name: 'Lost Holiday Reimbursement',
    nameIt: 'Rimborso Vacanze Perdute',
    maxAmount: 'Proportional to days lost',
    keyConditions: [
      'Reimburses unused portion of trip if hospitalised during cruise',
      'Applies if hospitalisation lasts 2+ consecutive days',
      'Medical documentation required',
    ],
    claimDeadline: 'Submit within 30 days of return',
    whatToDo: [
      'Keep all hospital admission/discharge documentation',
      'Get official medical reports in writing',
      'Submit claim with medical proof within 30 days of return',
    ],
  },
  {
    id: 'ritardo-aereo',
    name: 'Flight Delay',
    nameIt: 'Ritardo Aereo',
    maxAmount: '€150 flat rate',
    keyConditions: [
      'Applies to outbound flight delay of 8+ hours',
      'Fixed payment of €150 — no receipts needed',
      'Must be connecting flight to reach the cruise',
    ],
    claimDeadline: 'Submit within 30 days of return',
    whatToDo: [
      'Get written confirmation from airline stating delay and duration',
      'Keep boarding passes for all affected flights',
      'Submit airline confirmation + boarding passes within 30 days',
    ],
  },
  {
    id: 'infortuni',
    name: 'Travel Accidents',
    nameIt: 'Infortuni in Viaggio',
    maxAmount: '€25,000 (death or permanent disability)',
    deductible: '5% disability threshold',
    keyConditions: [
      'Covers accidents causing death or permanent disability',
      '5% minimum disability threshold to claim',
      'Excludes professional sports, extreme activities, pre-existing conditions',
      'Must occur during the insured trip period',
    ],
    claimDeadline: 'Notify within 30 days of accident; final claim after medical stabilisation',
    whatToDo: [
      'Notify Europ Assistance as soon as possible after accident',
      'Get complete medical documentation of injury and treatment',
      'Request specialist evaluation of permanent disability if applicable',
      'Submit full medical documentation within 30 days of stabilisation',
    ],
  },
  {
    id: 'tutela-legale',
    name: 'Legal Protection',
    nameIt: 'Tutela Legale',
    maxAmount: '€5,000',
    keyConditions: [
      'Covers legal costs for disputes arising during the trip',
      'Bail bond up to €5,000 if arrested abroad',
      'Excludes intentional acts, criminal proceedings initiated by insured',
    ],
    whatToDo: [
      'Call +39 02.58.24.00.70 immediately if you need legal assistance',
      'Do not engage a lawyer independently without prior authorization',
      'Provide full details of the situation to the assistance centre',
    ],
  },
  {
    id: 'furto-abitazione',
    name: 'Home Theft (while travelling)',
    nameIt: 'Furto Abitazione',
    maxAmount: '€5,000',
    deductible: '€150 per claim',
    keyConditions: [
      'Covers theft at primary residence while you are on the cruise',
      'Must file police report within 24 hours of discovering theft',
      '€150 deductible applies',
      'Excludes valuables left unsecured, cash',
    ],
    claimDeadline: 'Report to police within 24h; submit claim within 30 days',
    whatToDo: [
      'File police report (denuncia) within 24 hours of discovering theft',
      'Do not disturb the scene before police arrive if possible',
      'Document damages with photos',
      'Submit police report + photos + inventory of stolen items within 30 days',
    ],
  },
  {
    id: 'quarantena-covid',
    name: 'COVID-19 Quarantine',
    nameIt: 'Quarantena Covid-19',
    maxAmount: '€150/day (short trips) or €250/day (medium-long), max 15 days',
    keyConditions: [
      'Daily indemnity if ordered into quarantine during or after trip',
      'Short trips: €150/day; Medium-long trips: €250/day',
      'Maximum 15 days of indemnity',
      'Official quarantine order required (from health authority)',
      'Quarantine must start during or within 5 days of return',
    ],
    claimDeadline: 'Submit within 30 days of end of quarantine',
    whatToDo: [
      'Keep the official quarantine order/document from health authority',
      'Get positive test result documentation (official)',
      'Note start and end dates of quarantine',
      'Submit official quarantine order + test results within 30 days',
    ],
  },
  {
    id: 'ricovero-covid',
    name: 'COVID-19 Hospitalisation',
    nameIt: 'Indennitaria Ricovero Covid-19',
    maxAmount: '€1,000 lump sum',
    keyConditions: [
      'Fixed €1,000 payment if hospitalised 5+ consecutive days for COVID-19',
      'Hospitalisation must begin within 5 days of returning from cruise',
      'Requires positive PCR/antigen test and hospital admission documents',
    ],
    claimDeadline: 'Submit within 30 days of hospital discharge',
    whatToDo: [
      'Keep hospital admission and discharge documents',
      'Keep positive COVID test results (PCR preferred)',
      'Confirm that hospitalisation started within 5 days of your return date',
      'Submit hospital documents + COVID test + proof of cruise within 30 days of discharge',
    ],
  },
]

export const keyExclusions = [
  'Pre-existing medical conditions (unless acute emergency requiring immediate care)',
  'Extreme or professional sports activities',
  'Travelling against medical advice',
  'Self-inflicted injuries or illness caused by substance abuse',
  'War, terrorism (except as emergency victim)',
  'Valuables/cash left unattended or in checked baggage (for theft claims)',
  'Cosmetic or elective medical procedures',
  'Treatment that could safely wait until return home',
  'Items not reported to police within 24h for theft claims',
]

export const claimDocuments = [
  { situation: 'Any medical claim', docs: 'Original invoices, prescriptions, medical report with diagnosis, proof of payment' },
  { situation: 'Theft', docs: 'Police report filed within 24h, purchase receipts for stolen items, photos' },
  { situation: 'Luggage damage by airline', docs: 'PIR form completed at airport, photos of damage, repair/replacement invoice' },
  { situation: 'Cancellation', docs: 'Proof of reason (medical cert / death cert / letter), cancellation invoices from cruise line' },
  { situation: 'Flight delay', docs: 'Written airline confirmation of delay, boarding passes' },
  { situation: 'COVID quarantine', docs: 'Official quarantine order, positive test result' },
  { situation: 'COVID hospitalisation', docs: 'Hospital admission/discharge records, positive COVID test, proof of return date' },
]

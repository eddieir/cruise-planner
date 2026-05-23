export const bookingInfo = {
  bookingNumber: '66399145',
  ticketNumber: '1257404805',
  status: 'Confirmed',
  issuedDate: '23/05/2026',
  totalPaid: 1608.00,
  balance: 0.00,
  currency: 'EUR',
  tariffType: 'Family Group',
}

export const passengers = [
  { name: 'Peyman Iravani', dob: '13/08/1990' },
  { name: 'Mozhgan Nami Seghinsara', dob: '26/03/1994' },
]

export const shipInfo = {
  name: 'MSC Musica',
  itinerary: 'Italy · France · Spain',
  embarkPort: 'Genova, Italy',
  disembarkPort: 'Genova, Italy',
  embarkDate: '26 May 2026',
  disembarkDate: '2 June 2026',
  checkInOpens: '13:00',
  departure: '18:00',
  duration: '8 days / 7 nights',
}

export const cabinInfo = {
  number: '10142',
  deck: 10,
  category: 'BA – Cabina esterna con balcone',
  type: 'Deluxe Balcony Aurea',
  experience: 'FANTASTICA',
  moduleArea: '17.80 m²',
  cabinSurface: '13.88 m²',
  doorWidth: '0.65 m',
  bathroomSurface: '2.49 m²',
  bathroomType: 'Shower',
  balconySurface: '4.50 m²',
  extraBed: 'Single sofabed available',
  restaurant: 'Primo Turno (First Sitting)',
}

export const paymentBreakdown = [
  { label: 'Cabin fare (per passenger × 2)', amount: 1328.00 },
  { label: 'Hotel service charge (per passenger × 2)', amount: 168.00 },
  { label: 'Insurance Executive Web (per passenger × 2)', amount: 112.00 },
  { label: 'Port taxes', amount: 0.00 },
]

export const fantasticaInclusions = [
  { category: 'Booking', items: ['Cabin & position choice', '1 free cruise change (within 30 days, new cruise within 90 days)'] },
  { category: 'Comfort', items: ['Modern ship & elegant cabin', 'MSC for Me app (where available)', 'Cabin breakfast – free delivery'] },
  { category: 'Food & Drink', items: ['Main restaurant with gourmet menu (all dietary needs)', 'Buffet with international cuisines', 'Room service 24/7 (delivery fee applies)', 'Discounted drinks package available at booking'] },
  { category: 'Entertainment', items: ['Broadway-style theatre shows', 'Pool & sun deck', 'Outdoor sports facilities', 'Panoramic gym (fully equipped)', 'Adult & children entertainment', 'Kids activities'] },
  { category: 'Services', items: ['Qualified multilingual staff', 'MSC Voyagers Club points accumulation'] },
]

export const onboardPracticalInfo = [
  {
    title: 'Power Outlets',
    icon: '🔌',
    details: [
      'Voltage: 120V/60Hz and 240V/60Hz',
      'Socket types: American (US) and North European',
      'Free extension cords available on request (€30 charge if not returned)',
      'You cannot bring your own extension cord for safety reasons',
    ],
  },
  {
    title: 'Medical Centre',
    icon: '🏥',
    details: [
      'Open twice daily for clinic consultations',
      '24/7 availability for emergencies',
      'Medical costs charged directly to your cabin account',
      'Keep all receipts and medical reports for insurance claims',
      'Not a hospital — complex cases transferred to shore facilities',
    ],
  },
  {
    title: 'Mini-Bar / Fridge',
    icon: '🧊',
    details: [
      'The cabin mini-bar is NOT a refrigerator',
      'Do NOT store medicines that require refrigeration in the mini-bar',
      'Request medication storage at the medical centre (available during opening hours only)',
      'Bring ice packs for temperature-sensitive items',
    ],
  },
  {
    title: 'Medications',
    icon: '💊',
    details: [
      'Bring enough medication for 14 days after the cruise ends',
      'Keep all medicines in original packaging with labels',
      'Carry prescription copy or medication list in case of loss',
      'Refrigerated meds: store at medical centre (check availability)',
      'No marijuana, cannabis or narcotics allowed onboard',
    ],
  },
  {
    title: 'Onboard Account & Billing',
    icon: '💳',
    details: [
      'Hotel service charge (€84/person) is already fully paid',
      'All optional purchases are charged to your cruise card / cabin account',
      'Final itemised invoice delivered to cabin on the last night',
      'Review it and contact reception for any discrepancies before disembarkation',
      'Never scan your cruise card without confirming the item is included',
    ],
  },
  {
    title: 'Disembarkation',
    icon: '🚢',
    details: [
      'Arrival Genova: 08:00 on 2 June 2026',
      'Disembarkation process can take 2–3 hours',
      'Pack bags the night before and place outside cabin as instructed',
      'Take cabin breakfast before leaving',
      'Plan train connection from Genova allowing at least 3 hours after ship arrival',
    ],
  },
  {
    title: 'Lost Items & Complaints',
    icon: '📋',
    details: [
      'MSC is not responsible for lost items in cabins or on the ship',
      'For complaints during the cruise, address them directly to onboard staff immediately',
      'Damaged baggage during embarkation/disembarkation: report to staff for a damage report',
      'Keep valuables in the cabin safe',
    ],
  },
  {
    title: 'Restaurant & Dining',
    icon: '🍽️',
    details: [
      'Restaurant: Primo Turno (First Sitting) — confirm exact time onboard',
      'Cabin breakfast delivery: free of charge',
      'Room service 24/7: delivery fee applies',
      'Main restaurants best for special dietary requests — inform Maître d\'hôtel at check-in',
      'Specialty restaurant packages available (prepay up to 2 days before embarkation)',
    ],
  },
]

export const passengerRights = [
  'Cancel without fee and get full refund if a key element of the package changes substantially',
  'Transfer your booking to another person up to 7 days before departure (admin fees apply)',
  'Price increase protection: price can only rise if specific costs rise, and not within 20 days of departure; if increase >8% you can cancel for free',
  'Alternative arrangements at no extra cost if services cannot be provided as agreed during the cruise',
  'Compensation/price reduction for non-compliant service execution',
  'MSC assistance if you encounter difficulties during the trip',
  'Insolvency protection: policy 01.000047113 with S2C Spa (payments refunded if MSC becomes insolvent)',
  'MSC contact: 848 24 2490',
]

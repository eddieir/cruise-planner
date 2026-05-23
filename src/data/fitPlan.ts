export interface FitSection {
  id: string
  time: string
  title: string
  emoji: string
  items: string[]
  avoidNote?: string
  tip?: string
}

export const fitGoals = [
  'Flatter stomach appearance',
  'Lower bloating',
  'Feminine toned body',
  'Stable energy all day',
  'Feeling confident in bikini & swimwear',
]

export const fitMantra =
  'The goal is not starvation. The goal is a relaxed, feminine, toned, confident body.'

export const bestRespondsTo = [
  'Consistency',
  'Calm digestion',
  'Walking',
  'Balanced meals',
  'Posture and relaxation',
]

export const dailySections: FitSection[] = [
  {
    id: 'morning',
    time: 'On Waking',
    title: 'Morning Routine',
    emoji: '🌅',
    items: [
      '1 glass warm water after waking up',
      '5-minute deck walk or light walking',
      'Pelvic tilt ×15',
      'Cat-cow ×10',
      'Dead bug ×10 each side',
      'Glute bridge ×15',
      'Wall posture hold ×1 minute',
    ],
  },
  {
    id: 'breakfast',
    time: 'Breakfast',
    title: 'Breakfast',
    emoji: '🥚',
    items: [
      'Eggs + avocado + tea',
      'Greek yogurt + berries + almonds',
      'Omelette + small potato',
    ],
    avoidNote: 'Avoid buffet overload and too much pastry or sugar together.',
  },
  {
    id: 'lunch',
    time: 'Lunch',
    title: 'Lunch',
    emoji: '🍗',
    items: [
      'Protein-focused: chicken, fish, beef, or shrimp',
      'Small rice / potato / pasta portion',
      'Cooked vegetables',
      'Walk 15–20 minutes after lunch',
    ],
  },
  {
    id: 'pool',
    time: 'Pool Time',
    title: 'Pool & Bikini Tips',
    emoji: '🏊‍♀️',
    items: [
      'Drink water before pool time',
      'Small snack before swimming: almonds or banana',
    ],
    avoidNote: 'Avoid soda, chips, and heavy desserts before bikini/pool time.',
  },
  {
    id: 'afternoon',
    time: 'Afternoon',
    title: 'Afternoon',
    emoji: '☕',
    items: [
      'Cappuccino or tea',
      '1–2 pieces dark chocolate 90% if craving',
      'Light walking on the ship',
    ],
  },
  {
    id: 'dinner',
    time: 'Dinner',
    title: 'Dinner',
    emoji: '🐟',
    items: [
      'Grilled fish',
      'Steak / beef',
      'Chicken + small rice portion',
      'Soup',
    ],
    avoidNote: 'Avoid heavy creamy pasta and late salty snacks.',
  },
  {
    id: 'night',
    time: 'Night',
    title: 'Night Routine',
    emoji: '🌙',
    items: [
      'Warm water slowly',
      'Light fennel tea',
      'Gentle stretching',
      'Sleep well and avoid stress / body checking',
    ],
  },
]

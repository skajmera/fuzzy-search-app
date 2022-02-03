const Fuse = require('fuse.js')

// const people = [
// 	{
// 		name: "John",
// 		city: "New York"
// 	},
// 	{
// 		name: "Steve",
// 		city: "Seattle"
// 	},
// 	{
// 		name: "Bill",
// 		city: "Omaha"
// 	}
// ]

// const fuse = new Fuse(people, {
// 	keys: ['name','city']
// })
// const result = fuse.search('power')
// console.log(result)



//////////////////////////////
// const people ={
// 	"reports": [
// 		{
// 			"category": "Traits",
// 			"name": "Power vs. Endurance",
// 			"code": "power-endurance",
// 			"id": 111,
// 			"keywords": ["muscles","power", "muscle", "exercise", "skills", "skill", "ability", "strong"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "power Sweet Tooth",
// 			"code": "sweet-tooth",
// 			"id": 89,
// 			"keywords": ["sugar", "sweets", "taste", "cravings", "dental health", "tooth"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "power Traits",
// 			"name": "Motion Sickness",
// 			"code": "motion-sickness",
// 			"id": 69,
// 			"keywords": ["nausea", "car sick", "queasiness", "sick", "sea sick"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Salt Taste Sensitivity",
// 			"code": "salt-taste-sensitivity",
// 			"id": 82,
// 			"keywords": ["food", "eat", "salt intake", "blood pressure", "taste", "salt", "salty"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Photic Sneeze Reflex",
// 			"code": "photic-sneeze",
// 			"id": 70,
// 			"keywords": ["sunlight", "sun", "brightness", "light", "irritants", "sneeze"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Pain Threshold",
// 			"code": "pain-threshold",
// 			"id": 83,
// 			"keywords": ["sensitivity", "reflex", "muscle", "muscles", "pain tolerance", "pain"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Stress Reactivity",
// 			"code": "stress_reactivity",
// 			"id": 97,
// 			"keywords": ["fight or flight", "stress response", "stressors", "stress relief", "relaxation"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Freckles",
// 			"code": "freckles",
// 			"id": 73,
// 			"keywords": ["skin", "sun", "sunlight", "melanin", "uv", "uv rays"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Earwax",
// 			"code": "earwax",
// 			"id": 7,
// 			"keywords": ["ears", "wax", "wax removal", "hearing", "impaired hearing"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Back Pain",
// 			"code": "back_pain",
// 			"id": 99,
// 			"keywords": ["age", "aging", "soreness", "disc", "spine"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Body Odor",
// 			"code": "body-odor",
// 			"id": 8,
// 			"keywords": ["sweat", "BO", "smell", "odor", "hygiene", "scent"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Umami Taste",
// 			"code": "umami-taste-2",
// 			"id": 37,
// 			"keywords": ["skill", "skills", "ability", "abilities", "sweet", "sour", "bitter", "salty", "eat", "eating", "food"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Food Cravings",
// 			"code": "food-cravings",
// 			"id": 9,
// 			"keywords": ["hunger", "hungry", "overeating", "eat", "eating", "sugar", "energy", "appetite", "obesity", "overweight"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Bitter Taste",
// 			"code": "bitter-taste-2",
// 			"id": 36,
// 			"keywords": ["bitterness", "food", "eating", "eat", "diet"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Drowsy After Eating",
// 			"code": "drowsy-after-eating",
// 			"id": 10,
// 			"keywords": ["eat", "food", "sleep", "sleeping", "digestion", "overeating"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Asparagus Smell",
// 			"code": "asparagus-smell",
// 			"id": 11,
// 			"keywords": ["scent", "odor", "urine", "odor sensitivity", "nose"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Thinker vs. Do-er",
// 			"code": "thinker-doer",
// 			"id": 74,
// 			"keywords": ["stress", "worry", "dopamine", "performance", "pressure", "anxiety"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Floral Fragrance Detection",
// 			"code": "floral-smell",
// 			"id": 12,
// 			"keywords": ["smell", "odor", "scent", "odor sensitivity", "nose"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Red Hair",
// 			"code": "red-hair",
// 			"id": 14,
// 			"keywords": ["sitten", "hair", "color", "vitamin D", "melanin"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "sitten",
// 			"name": "Thick Hair",
// 			"code": "thick-hair",
// 			"id": 15,
// 			"keywords": ["hair", "thickness", "hair thickness", "thinning hair"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "music",
// 			"name": "sitten",
// 			"code": "perfect-pitch",
// 			"id": 118,
// 			"keywords": ["creativity", "musical ability", "ability", "skills", "skill", "hear", "hearing", "music", "musician"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "hitten",
// 			"name": "Brown or Blue Eyes",
// 			"code": "brown-blue-eyes",
// 			"id": 16,
// 			"keywords": ["eye color", "eyes", "beta carotene", "meanin", "color"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "midden",
// 			"name": "Mosquito Bite Size",
// 			"code": "mosquito-bites",
// 			"id": 68,
// 			"keywords": ["insect bite", "insects", "bug bite", "bug", "bump", "bumps"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "QT Interval",
// 			"code": "QT-interval",
// 			"id": 151,
// 			"keywords": ["QT", "interval", "heart", "beat", "beats", "heartbeat", "heartbeats", "ECG", "EKG", "cardio", "cardiovascular", "echo"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Blood Type",
// 			"code": "blood-type",
// 			"id": 146,
// 			"keywords": ["plasma", "blood cell", "cardio", "iron", "calcium", "folic acid", "type"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Misophonia",
// 			"code": "misophonia",
// 			"id": 96,
// 			"keywords": ["sound", "trigger", "anger", "stress", "hearing"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Impulse control",
// 			"code": "impulse-control",
// 			"id": 126,
// 			"keywords": ["impulsive", "ADHD", "brain", "dopamine", "behavior"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Facial recognition",
// 			"code": "Facial-recognition",
// 			"id": 128,
// 			"keywords": ["face", "social", "oxytocin", "extroversion", "ability", "skill"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Empathy",
// 			"code": "empathy",
// 			"id": 135,
// 			"keywords": ["oxytocin", "behavior", "healthy relationships", "relationship", "emotions"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Long-term memory",
// 			"code": "longterm-memory",
// 			"id": 136,
// 			"keywords": ["mind", "mental", "brain", "improve memory", "mental acuity"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Mathematical ability",
// 			"code": "mathematical-ability",
// 			"id": 130,
// 			"keywords": ["skills", "skill", "brain", "mental acuity", "mental"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Hand-eye coordination",
// 			"code": "hand-eye-coordination",
// 			"id": 143,
// 			"keywords": ["skills", "motor skills", "brain", "age", "aging", "memory"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Reading ability",
// 			"code": "reading-ability",
// 			"id": 139,
// 			"keywords": ["skills", "read", "brain", "mental acuity", "mental"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Supertaster",
// 			"code": "supertaster",
// 			"id": 144,
// 			"keywords": ["taste", "eat", "tongue", "sweets", "bitter", "sugar", "salt"],
// 			"is_active": 1
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Prosocial Behavior",
// 			"code": "prosocial-behavior",
// 			"id": 155,
// 			"keywords": ["oxytocin", "love", "happiness", "bonding", "mood"],
// 			"is_active": 0
// 		},
// 		{
// 			"category": "Traits",
// 			"name": "Optimism vs Pessimism",
// 			"code": "optimism-vs-pessimism",
// 			"id": 156,
// 			"keywords": ["worry", "happiness", "carbs"]}
//         ]}

//     const newData=people.reports
// const fuse = new Fuse(newData, {
// 	keys: ['name','keywords','category']
// })

// // Search
// const result = fuse.search('power')

// console.log(result)
//////////////////////////////////////


//    /// string data
// const list=["Old Man's War","old", "The Lock Artist"]
// const options = {
//     includeScore: true
//   }

//   const fuse = new Fuse(list, options)

//   const result = fuse.search('od man')
//   console.log(result)

///////////////////////////////////

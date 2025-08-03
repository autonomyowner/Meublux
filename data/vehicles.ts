import { Vehicle } from '@/types'

export const vehicles: Vehicle[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'Série 7',
    year: 2024,
    price: 125000,
    mileage: 1500,
    fuelType: 'Hybride',
    transmission: 'Automatique',
    engineSize: '3.0L',
    power: 367,
    color: 'Obsidian Black',
    images: [
      '/pics/bmw 1.jpg',
      '/pics/bmw2.jpg',
      '/pics/bmw3.jpg'
    ],
    description: 'La BMW Série 7 représente l\'excellence automobile avec son design élégant et ses technologies de pointe.',
    features: [
      'Système de navigation iDrive 8',
      'Sièges chauffants et ventilés',
      'Système audio Harman Kardon',
      'Assistance de conduite avancée',
      'Éclairage ambiant',
      'Toit panoramique'
    ],
    category: 'Luxury',
    status: 'Available',
    location: 'Paris',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    brand: 'BMW',
    model: 'M8 Competition',
    year: 2024,
    price: 185000,
    mileage: 800,
    fuelType: 'Essence',
    transmission: 'Automatique',
    engineSize: '4.4L V8',
    power: 625,
    color: 'Frozen Black',
    images: [
      '/pics/bmw4.jpg',
      '/pics/bmw5.jpg',
      '/pics/bmw6.jpg'
    ],
    description: 'La BMW M8 Competition combine performance sportive et luxe raffiné pour une expérience de conduite exceptionnelle.',
    features: [
      'Moteur V8 TwinPower Turbo',
      'Suspension M adaptative',
      'Système de freinage M',
      'Intérieur en cuir Merino',
      'Système audio Harman Kardon',
      'Technologies de conduite M'
    ],
    category: 'Sports',
    status: 'Available',
    location: 'Paris',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'RS3',
    year: 2024,
    price: 145000,
    mileage: 1200,
    fuelType: 'Essence',
    transmission: 'Automatique',
    engineSize: '2.5L Turbo',
    power: 400,
    color: 'Daytona Gray',
    images: [
      '/pics/rs3.jpg',
      '/pics/rs31.jpg',
      '/pics/bmw7.jpg'
    ],
    description: 'L\'Audi RS3 représente l\'excellence sportive avec ses performances exceptionnelles et son design agressif.',
    features: [
      'Moteur 2.5L TFSI',
      'Quattro all-wheel drive',
      'Système de freinage RS',
      'Intérieur sport RS',
      'Système audio Bang & Olufsen',
      'Technologies de conduite sportive'
    ],
    category: 'Sports',
    status: 'Available',
    location: 'Paris',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '4',
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    price: 225000,
    mileage: 500,
    fuelType: 'Essence',
    transmission: 'Automatique',
    engineSize: '3.0L Flat-6',
    power: 450,
    color: 'GT Silver Metallic',
    images: [
      '/pics/porsh.jpg',
      '/pics/porsh2.jpg',
      '/pics/porsh5.jpg'
    ],
    description: 'La Porsche 911 Carrera est l\'incarnation de la pureté sportive avec ses performances exceptionnelles et son design iconique.',
    features: [
      'Moteur 3.0L Flat-6 Turbo',
      'Aérodynamique optimisée',
      'Suspension sport adaptative',
      'Système de freinage PCCB',
      'Intérieur sport en cuir',
      'Technologies de conduite sportive'
    ],
    category: 'Sports',
    status: 'Available',
    location: 'Paris',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '5',
    brand: 'Volkswagen',
    model: 'Tiguan R-Line',
    year: 2024,
    price: 65000,
    mileage: 2000,
    fuelType: 'Essence',
    transmission: 'Automatique',
    engineSize: '2.0L Turbo',
    power: 245,
    color: 'Santorini Black',
    images: [
      '/pics/tiguan.jpg',
      '/pics/tiguan1.jpg',
      '/pics/tiguan4.jpg'
    ],
    description: 'Le Volkswagen Tiguan R-Line offre un excellent équilibre entre luxe, performance et polyvalence dans un SUV moderne.',
    features: [
      'Suspension sport adaptative',
      'Système 4MOTION all-wheel drive',
      'Intérieur R-Line sport',
      'Système audio Beats',
      'Technologies de confort avancées',
      'Capacités tout-terrain polyvalentes'
    ],
    category: 'SUV',
    status: 'Available',
    location: 'Paris',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  },

] 
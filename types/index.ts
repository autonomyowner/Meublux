export interface Vehicle {
  id: string
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuelType: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique'
  transmission: 'Manuelle' | 'Automatique'
  engineSize: string
  power: number
  color: string
  images: string[]
  description: string
  features: string[]
  category: 'Luxury' | 'Sports' | 'SUV' | 'Sedan' | 'Coupe'
  status: 'Available' | 'Reserved' | 'Sold'
  location: string
  createdAt: Date
  updatedAt: Date
}

export interface Brand {
  id: string
  name: string
  logo: string
  description: string
  country: string
  founded: number
  website: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
  vehicle?: string
  date: Date
}

export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  vehicleId?: string
  preferredContact: 'email' | 'phone'
  budget?: number
  timeline?: string
}

export interface AppointmentForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  vehicleId?: string
  preferredDate: Date
  preferredTime: string
  message?: string
  testDrive: boolean
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  role: 'customer' | 'admin'
  createdAt: Date
  updatedAt: Date
}

export interface NavigationItem {
  title: string
  href: string
  description?: string
  children?: NavigationItem[]
}

export interface FilterOptions {
  brand?: string[]
  category?: string[]
  priceRange?: [number, number]
  yearRange?: [number, number]
  fuelType?: string[]
  transmission?: string[]
  status?: string[]
}

export interface SearchParams {
  q?: string
  brand?: string
  category?: string
  minPrice?: string
  maxPrice?: string
  minYear?: string
  maxYear?: string
  fuelType?: string
  transmission?: string
  status?: string
  sort?: 'price-asc' | 'price-desc' | 'year-desc' | 'year-asc' | 'newest'
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  pagination?: PaginationInfo
}

export interface SeoData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
}

export interface SocialMedia {
  facebook?: string
  instagram?: string
  twitter?: string
  linkedin?: string
  youtube?: string
}

export interface CompanyInfo {
  name: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  socialMedia: SocialMedia
  businessHours: {
    [key: string]: string
  }
  services: string[]
  certifications: string[]
} 
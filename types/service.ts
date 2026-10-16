import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

export interface Service {
  slug: string
  name: string
  icon: LucideIcon | IconType
  tagline: string
  description: string
  deliverables: string[]
  span: string
  featured?: boolean
}
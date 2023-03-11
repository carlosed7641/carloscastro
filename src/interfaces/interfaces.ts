import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface MenuListProps {
    id: string
    icon: IconDefinition
    name?: string
    setShowMobileMenu?: (value: boolean) => void
}

export enum TypeIcon {
    skill = 'skill',
    social = 'social' 
}

export interface IconSkillsAndSocialProps {
    icon: IconDefinition
    name: string
    type: TypeIcon.skill | TypeIcon.social
    url?: string
}

export interface ProjectListProps {
    name: string
    desc: string
    languages: string[]
    repo: string
    url: string
    urlImg: string
}

export interface AppContextProps  {
    isDarkMode: boolean
    setIsDarkMode: (value: boolean) => void
}

export interface SkillsProps {
    skill: string
    description: string
    icon: IconDefinition
}


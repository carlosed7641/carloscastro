import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface MenuListProps {
    id: string
    icon: IconDefinition
    name?: string
    setIsActive?: (value: boolean) => void
}

export interface IconSkillsProps {
    icon: IconDefinition
    name: string
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


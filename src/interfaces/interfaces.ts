import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface MenuListProps {
    icon: IconDefinition
    name?: string
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


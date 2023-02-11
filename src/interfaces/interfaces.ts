import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface MenuListProps {
    icon: IconDefinition
    name?: string
}

export interface AppContextProps  {
    isDarkMode: boolean
    setIsDarkMode: (value: boolean) => void
}

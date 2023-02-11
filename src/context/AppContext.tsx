import { createContext, SetStateAction } from "react"
import { AppContextProps } from "../interfaces"



export const AppContext = createContext<AppContextProps>({} as AppContextProps)
import { useState } from 'react';
import { AppContext } from './AppContext';



interface Props {
    children: JSX.Element | JSX.Element[]
}

export const AppProvider = ({children}: Props) => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    return (
      <AppContext.Provider value={{
        isDarkMode,
        setIsDarkMode
      }}>
          {children}
      </AppContext.Provider>
    )
  }
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext<any>(undefined)

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<boolean>(true)
  const toggleTheme = () => {
    setTheme((p) => !p)
  }

  let isDark = theme ? "light" : "dark"
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark)
  }, [theme])
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

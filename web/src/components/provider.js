import React from 'react'
import { lightTheme, darkTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components'
// import useDarkMode from 'use-dark-mode'

export default ({ children }) => {
  // let darkMode = useDarkMode(false)
  const theme = lightTheme
  // darkMode = {...darkMode, theme} 
  // console.log(darkMode.value)
  // const [mounted, setMounted] = React.useState(false)

  // React.useEffect(() => {
  //   setMounted(true)
  // }, [])
    
  const body = 
    <ThemeProvider theme={ {theme} } >
      {children}
    </ThemeProvider>

  // prevents ssr flash for mismatched dark mode
  // if (!mounted) {
  //     return <div style={{ visibility: 'hidden' }}>{body}</div>
  // }

  return body
}
import React from 'react'
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Quotes from './components/Quotes'
import Footer from './components/Footer'



interface Task {
  title: string
  description: string
  isCompleted: number
}

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  const [api, setApi] = React.useState<any>({})

  React.useEffect(() => {
    fetch("https://coverxyz.herokuapp.com/api").then(res => {    // https://coverxyz.herokuapp.com/api
      if (res.status == 200) {
        return res.json()
      }
    })
    .then(data => setApi(data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Home />
        <Contact />
        <Quotes title={api.title} />
        <Footer developer={api.developer} date={api.date} />
      </div>
    </ThemeProvider>
  )
}


export default App

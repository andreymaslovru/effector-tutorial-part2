import { ThemeProvider } from '@material-ui/core'

import NotesPage from './app/pages/notes'
import theme from './app/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotesPage />
    </ThemeProvider>
  )
}

export default App

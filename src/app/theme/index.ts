import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  overrides: {
    MuiTypography: {
      colorTextSecondary: {
        color: '#FFFFFF'
      }
    },
    MuiInputBase: {
      root: {
        color: '#FFFFFF',
        border: '1px solid #237BFF'
      }
    }
  }
})

export default theme

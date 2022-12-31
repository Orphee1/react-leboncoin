import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global-styles'
import App from './App'
import store from './store'
const container = document.getElementById('root')
const root = createRoot(container)

const theme = {
  tablet: '1185px',
  large_mobile: '995px',
  mobile: '579px',
}

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>
)

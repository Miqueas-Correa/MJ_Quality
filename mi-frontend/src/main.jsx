import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import theme from './utils/theme.js'

createRoot(document.getElementById('root')).render(
  <themeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
      <App />
    </StrictMode>
  </themeProvider>
)

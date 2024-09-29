import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'styled-components'
import theme from './themes/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme.default}>
      <App />
    </ThemeProvider>
    
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import { StoreProvider } from './store/index.tsx'
import { ThemeConfigProvider } from './contexts/ThemeConfigProvider.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <ThemeConfigProvider>
      <App />
    </ThemeConfigProvider>
  </StoreProvider>,
)

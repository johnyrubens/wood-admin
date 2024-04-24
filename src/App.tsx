import './global.css'

import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routs'

export function App() {
  return (
    <ThemeProvider storageKey="woodadmin-theme" defaultTheme="system">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

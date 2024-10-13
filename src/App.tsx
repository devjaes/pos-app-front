import { addLocale, locale, PrimeReactProvider } from 'primereact/api'
import './App.css'
import AppRoutes from './presentation/routes'
import esLocale from './locales/es.locale'

function App() {
  addLocale('es', esLocale)
  locale('es')

  return (
    <PrimeReactProvider>
      <Outlet />
    </PrimeReactProvider>
  )
}

export default App

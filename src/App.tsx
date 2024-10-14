import { addLocale, locale, PrimeReactProvider } from 'primereact/api'
import AppRoutes from './core/presentation/routes'
import esLocale from './locales/es.locale'
import { Toaster } from 'react-hot-toast'

function App() {
  addLocale('es', esLocale)
  locale('es')

  return (
    <PrimeReactProvider>
      <AppRoutes isAuthorized={true} />
      <Toaster />
    </PrimeReactProvider>
  )
}

export default App

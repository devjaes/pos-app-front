import './App.css'
import { addLocale, locale, PrimeReactProvider } from 'primereact/api'
import { Dashboard } from './presentation/dashboard/components/dashboard'
import AdminLayout from './presentation/pages/dashboard/layout'
import esLocale from './locales/es.locale'

function App() {
  addLocale('es', esLocale)
  locale('es')
  return (
    <PrimeReactProvider>
      <AdminLayout>

      <Dashboard />
      </AdminLayout>
    </PrimeReactProvider>
  )
}

export default App

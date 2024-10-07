import './App.css'
import { locale, PrimeReactProvider } from 'primereact/api'
import { Dashboard } from './presentation/dashboard/components/dashboard'

function App() {
  locale('es')
  return (
    <PrimeReactProvider>
      <Dashboard />
    </PrimeReactProvider>
  )
}

export default App

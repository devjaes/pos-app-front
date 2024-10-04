import './App.css'
import { PrimeReactProvider } from 'primereact/api'
import { Dashboard } from './features/dashboard/components/dashboard'

function App() {
  const value = { locale: 'es' }
  return (
    <PrimeReactProvider value={value}>
      <Dashboard />
    </PrimeReactProvider>
  )
}

export default App

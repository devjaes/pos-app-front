import './App.css'
import { addLocale, locale, PrimeReactProvider } from 'primereact/api'
import esLocale from './locales/es.locale'
import { Outlet } from 'react-router'

function App() {
  addLocale('es', esLocale)
  locale('es')
  return (
    <PrimeReactProvider>
      <Outlet/>
    </PrimeReactProvider>
  )
}

export default App

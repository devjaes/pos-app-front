import { createRoutesFromElements, Route, Routes } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import { ThemePicker } from '../dashboard/components/theme-picker'
import { Dashboard } from '../dashboard/components/dashboard'
import AdminLayout from '../pages/dashboard/layout'

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Routes location={}>
    <Route path="/" element={<App />}  >
      <Route path='dashboard' element={<AdminLayout/>} index>
        <Route path='admin' element={<Dashboard/>} index />
        <Route path='user' element={<div/>}/>
      </Route>
      <Route path="/themes" element={<ThemePicker />} />
    </Route>
    </Routes>
  )

)

export default AppRoutes

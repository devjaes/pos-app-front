import { createRoutesFromElements, Route } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import { ThemePicker } from '../dashboard/components/theme-picker'

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/themes" element={<ThemePicker />} />
    </Route>
  )
)

export default AppRoutes

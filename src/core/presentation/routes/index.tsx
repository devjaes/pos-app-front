import { renderRoutes } from './generate-routes'
import { routes } from '@/core/contants/routes'

const AppRoutes = renderRoutes(routes)

export default AppRoutes

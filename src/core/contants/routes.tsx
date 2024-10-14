import AdminLayout from '@/core/pages/dashboard/layout'
import { ILayoutRoute } from '../interfaces/routes'

//Layouts
import HomeLayout from '@/core/pages/home/layout'

//Pages
import HomePage from '@/core/pages/home/page'
import DashboardPage from '@/core/pages/dashboard/page'
import { ThemePicker } from '../presentation/features/dashboard/components/theme-picker'

export const routes: ILayoutRoute[] = [
  {
    layout: HomeLayout,
    routes: [
      {
        name: 'Home',
        title: 'PosApp',
        component: HomePage,
        path: '/',
        isPublic: true,
      },
      {
        name: 'themes',
        title: 'themes',
        component: ThemePicker,
        path: '/themes',
        isPublic: true,
      },
    ],
  },
  {
    layout: AdminLayout,
    routes: [
      {
        name: 'dashboard',
        title: 'Dashboard',
        component: DashboardPage,
        path: '/dashboard',
      },
    ],
  },
]

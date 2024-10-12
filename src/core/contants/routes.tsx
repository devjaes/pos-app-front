import AdminLayout from '@/presentation/pages/dashboard/layout'
import { ILayoutRoute } from '../interfaces/routes'

//Layouts
import HomeLayout from '@/presentation/pages/home/layout'

//Pages
import HomePage from '@/presentation/pages/home/page'
import DashboardPage from '@/presentation/pages/dashboard/page'
import { ThemePicker } from '@/presentation/dashboard/components/theme-picker'

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

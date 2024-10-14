import flattenDeep from 'lodash/flattenDeep'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import ProtectedRoute from '../protected-route'
import { ILayoutRoute, IRoute } from '@/core/interfaces/routes'

const generateFlattenRoutes = (routes?: IRoute[]): IRoute[] => {
  if (!routes) return []
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  )
}

export const renderRoutes = (mainRoutes: ILayoutRoute[]) => {
  const Routes = ({ isAuthorized }: { isAuthorized: boolean }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes)

      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map(
            ({ component: Component, path, name, isPublic = false }) => {
              return (
                <Route
                  key={name}
                  element={
                    <ProtectedRoute
                      isPublic={isPublic}
                      isAuthorized={isAuthorized}
                    />
                  }
                >
                  {Component && path && (
                    <Route element={<Component />} path={path} />
                  )}
                </Route>
              )
            }
          )}
        </Route>
      )
    })
    return <ReactRoutes>{layouts}</ReactRoutes>
  }
  return Routes
}


export interface IRoute {
  name: string
  title: string
  component: () => React.ReactNode 
  path: string 
  isPublic?: boolean
  routes?: IRoute[]
}

export interface ILayoutRoute {
  layout: () => React.ReactNode
  routes: IRoute[]
}
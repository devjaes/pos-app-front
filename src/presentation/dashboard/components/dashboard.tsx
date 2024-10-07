import { Toolbar } from 'primereact/toolbar'
import './dashboard.css'
import { Outlet } from 'react-router'
import { PageSidebar } from './sidebar'

export const Dashboard = () => {
  return (
    <div id="dashboard">
      <Toolbar className="z-10" start={<h1>hola</h1>} end={<h2>User</h2>} />
      <div id="main-view">
        <PageSidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

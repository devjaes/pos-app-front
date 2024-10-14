import { Outlet } from 'react-router'

const HomeLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout

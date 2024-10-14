import { NavLink } from 'react-router-dom'

function Option({
  opcion,
  redirect = '/',
}: {
  opcion?: string
  redirect?: string
}) {
  if (opcion !== undefined) {
    return (
      <NavLink
        to={redirect}
        className="h-full flex items-center justify-center group "
      >
        <div className="text-gray-200 font-bold cursor-pointer group-hover:text-blue-400 ">
          {opcion}
        </div>
      </NavLink>
    )
  }
}
export default Option

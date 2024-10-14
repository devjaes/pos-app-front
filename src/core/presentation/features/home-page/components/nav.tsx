import Button from '@/shared/presentation/components/button'
import { IOption } from '@/core/interfaces/option-nav'
import { NavLink } from 'react-router-dom'
import Option from '@/shared/presentation/components/nav-option'
import { Logo } from '@/core/contants/images'

function Navegador({
  options,
  imageRedirect,
}: {
  options: IOption[]
  imageRedirect: string
}) {
  return (
    <div className="flex py-1 bg-jair">
      <div className="flex-1 ml-12">
        <div className="flex justify-start w-2/6">
          <NavLink to={imageRedirect}>
            <img className=" h-32" src={Logo} alt="logo" />
          </NavLink>
        </div>
      </div>

      <div className="flex-1 flex justify-end gap-x-4 mr-12 items-center">
        {options.map((option, index) => {
          if (option.type === 'button') {
            return (
              <div
                className="h-5/6 flex items-center justify-center gap-6 hover:bg-blue-600 my-4 rounded-md"
                key={index}
              >
                <Button
                  texto={option.label as string}
                  key={option.label as string}
                  onclick={option.redirect as () => void}
                />
              </div>
            )
          }

          if (option.type === 'option') {
            return (
              <div
                className="h-5/6 flex items-center justify-center gap-6 hover:border-green-500  hover:text-blue-400 px-4 my-4 rounded-md"
                key={index}
              >
                <Option
                  opcion={option.label}
                  redirect={option.redirect as string}
                />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Navegador

import { Logo } from '@/core/contants/images'
import { IOption } from '@/core/interfaces/option-nav'
import Galleria from '@/features/products/presentation/features/home-page/components/galleria'
import Navegador from '@/features/products/presentation/features/home-page/components/nav'
import FeatureBox from '@/shared/presentation/components/feature-box'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  const options: IOption[] = [
    { label: 'Sobre Nosotros', redirect: '/about', type: 'option' },
    { label: 'Contacto', redirect: '/contact', type: 'option' },
    { label: 'Iniciar sesión', redirect: '/login', type: 'option' },
  ]

  return (
    <div>
      <Navegador options={options} imageRedirect="/" />
      <main className="bg-slate-900 h-max  py-6 justify-center">
        <div className="container px-6 py-16 justify-center flex mx-auto ">
          <div className="w-1/2">
            <Galleria />
          </div>
          <div className="container p-12 justify-center lg:w-1/2">
            <h1 className="text-3xl  text-blue-500 font-semiboldtext-white lg:text-4xl p-2">
              POST SYSTEM <br />{' '}
              <span className="text-white ">
                {' '}
                tu facturador electrónico confiable
              </span>
            </h1>
            <p className="text-justify dark:text-gray-200 p-3">
              Simplifica tus procesos de facturación con nuestro sistema de
              facturación electrónica de vanguardia. Genera facturas precisas y
              rápidas, integra con tus sistemas existentes, envía facturas de
              forma segura, almacena y consulta documentos, cumple con los
              requisitos fiscales y cuenta con soporte técnico dedicado.
              Regístrate ahora y experimenta la comodidad y eficiencia de
              nuestra solución.
            </p>
            <div className="flex justify-start p-3">
              <NavLink to={'./contact'}>
                <button className="bg-slate-800 text-white p-4  hover:bg-slate-700 hover:text-white rounded-sm font-bold border-slate-800 hover:scale-110 transform transition-all duration-300 ">
                  Contactanos
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-slate-700 py-6">
          <div className="container px-6 py-16 justify-center  mx-auto">
            <h1 className=" text-center text-4xl font-bold animate-fade-in">
              La herramienta que necesitas para llevar tu negocio a la cima
            </h1>
            <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  justify-center">
              <FeatureBox
                texto="Ahorra tiempo cargando tus documentos de forma masiva con nuestra bandeja electrónica."
                icon="pi pi-file-excel"
              />
              <FeatureBox
                texto="Genera reportes automáticos para el SRI.."
                icon="pi pi-calculator"
              />
              <FeatureBox
                texto="Emite facturas electrónicas ilimitadas, ¡para tu negocio!"
                icon="pi pi-upload"
              />
              <FeatureBox
                texto="Envía tus documentos electrónicos a tus clientes de forma automática."
                icon="pi pi-envelope"
              />
              <FeatureBox
                texto="Integra tu sistema de facturación con tu sistema contable."
                icon="pi pi-chart-bar"
              />
              <FeatureBox
                texto="Almacena tus documentos electrónicos en la nube."
                icon="pi pi-cloud"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className=" bg-jair h-max">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <a href="#">
            <img className="w-16 h-auto" src={Logo} alt="" />
          </a>

          <p className="text-sm text-gray-300">
            © Copyright 2021. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <i className="pi pi-facebook" />
            <i className="pi pi-github" />
            <i className="pi pi-twitter" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

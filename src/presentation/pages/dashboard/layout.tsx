import { Image } from 'primereact/image'
import { MenuItem } from 'primereact/menuitem'
import { PanelMenu } from 'primereact/panelmenu'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items: MenuItem[] = [
    {
      label: 'Productos',
      icon: 'pi pi-fw pi-tag',
      items: [
        {
          label: 'Administrar Productos',
          icon: 'pi pi-fw pi-plus-circle',
          url: '/admin/products',
        },
        {
          label: 'Administrar Categorías',
          icon: 'pi pi-fw pi-plus-circle',
          url: '/admin/categories',
        },
      ],
    },
    {
      label: 'Usuarios',
      icon: 'pi pi-fw pi-user',
      url: '/admin/users',
    },
    {
      label: 'Mi Empresa',
      icon: 'pi pi-fw pi-shopping-bag',
      items: [
        {
          label: 'Administrar clientes',
          icon: 'pi pi-fw pi-plus-circle',
          url: '/admin/customer',
        },
        {
          label: 'Administrar Sucursal/Caja',
          icon: 'pi pi-fw pi-plus-circle',
          url: '/admin/branches',
        },
      ],
    },
    {
      label: 'Facturas',
      icon: 'pi pi-fw pi-wrench',
      url: '/admin/invoiceList',
    },
    {
      label: 'Configuración',
      icon: 'pi pi-fw pi-wrench',
      url: '/admin/settings',
    },
    {
      label: 'Salir',
      icon: 'pi pi-fw pi-sign-out',
      command: () => {
        window.localStorage.removeItem('user')
        window.location.href = '/'
      },
    },
  ]

  return (
    <div className="flex w-full h-full -m-8">
      <div className="min-h-screen bg-jair">
        <div className="h-full ">
          <div className="flex justify-center items-center">
            <Image
              src={'/images/PostLogo5.png'}
              alt=""
              width={'104'}
              height={'104'}
              className="py-2 "
            />
          </div>
          <PanelMenu
            model={items}
            className="w-52 md:w-25rem mb-4 bg-gray-700"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-11/12 bg-slate-600">
        {children}
      </div>
    </div>
  )
}

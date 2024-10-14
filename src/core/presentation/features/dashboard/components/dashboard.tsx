import { Card } from 'primereact/card'

export const Dashboard = () => {
  const header = (
    <img
      alt="Card"
      src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60 "
      className="h-50"
    />
  )
  const footer = (
    <p className="m-0 flex justify-center">
      Bienvenido! Aquí podrás administrar tu empresa.
    </p>
  )

  return (
    <main className="bg-primary-Jair w-11/12">
      <div className="card justify-center items-center bg-center flex h-screen">
        <Card
          header={header}
          footer={footer}
          className="w-3/6 shadow-md border-b-2 "
        >
          <h1 className="text-2xl font-bold text-center">{'POST SYSTEM'}</h1>
        </Card>
      </div>
    </main>
  )
}

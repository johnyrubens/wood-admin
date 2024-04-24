import { Outlet } from 'react-router-dom'

export function AppAuth() {
  return (
    <div className="grid max-h-screen grid-cols-2">
      <div className='h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between'>
        <h1>Autenticação</h1>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

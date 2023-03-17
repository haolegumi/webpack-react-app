import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

const Default: React.FC<PropsWithChildren> = () => {
  return (
    <main className='flex'>
      <section className='sidebar'>sidebar</section>
      <section className='content'>
        <header className=' text-red-600 font-bold'>header</header>
        <div className='content-main'>{<Outlet />}</div>
      </section>
    </main>
  )
}

export default Default

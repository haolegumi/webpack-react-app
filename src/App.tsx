import ToastMessage from '@components/toastMessage'
import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routers/routers'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div> ........Loading</div>}>
        <RouterProvider router={router} />
        <ToastMessage />
      </Suspense>
    </React.Fragment>
  )
}

export default App

import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routers/routers'

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div> ........Loading</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  )
}

export default App

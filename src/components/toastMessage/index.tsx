import React from 'react'
import { ToastContainer } from 'react-toastify'

function ToastMessage() {
  return <ToastContainer pauseOnHover={false} closeOnClick={true} autoClose={1500} draggable={true} />
}

export default ToastMessage

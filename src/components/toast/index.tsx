import React from 'react'
import styled from 'styled-components'

interface ToastProps {
  show: boolean
  label: string
}

const Toast: React.FC<ToastProps> = ({ show, label }) => {
  const ToastContainer = styled.div`
    position: fixed;
    top: 20px;
    right: 10px;
    background-color: #ffffff;
    min-height: 60px;
    min-width: 200px;
    padding: 0 15px;
    font-size: 14px;
    z-index: 10;
    box-shadow: 0px 8px 15px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    transition: 0.3s ease-in all;
    border-radius: 10px;

    transform: ${!show ? 'translateX(120%)' : ''};
  `

  return (
    <ToastContainer>
      <span>{label}</span>
    </ToastContainer>
  )
}

export default Toast

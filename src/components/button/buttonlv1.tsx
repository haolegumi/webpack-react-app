import Icon from '@ant-design/icons/lib/components/Icon'
import React from 'react'
import styled from 'styled-components'

interface ButtonLv1Props {
  label?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  icon?: string
  className?: string
  style?: string
  click?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined
}

const Button = styled.button`
  border: none;
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  &:hover {
    transition: 0.3s ease-in all;
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const ButtonLv1: React.FC<ButtonLv1Props> = ({ label, type = 'button', icon, click, className = '' }) => {
  return (
    <div className={className}>
      <Button onClick={click} type={type}>
        {icon ? <Icon type='message' /> : null}
        <span>{label ? label : 'Click'}</span>
      </Button>
    </div>
  )
}

export default ButtonLv1

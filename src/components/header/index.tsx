import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

import logoImg from '@src/assets/images/logo.svg'
import Avatar from '@components/global/avatar'

const HeaderContent = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 40px;
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const ButtonLoginSignUp = styled.div`
  font-weight: 600;
  border: 1px solid #d3d3d3;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s ease-in all;
  overflow: hidden;
  &:hover {
    background-color: #e67e22;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`

const Header: React.FC = () => {
  const { Header } = Layout

  const isLogin = false

  return (
    <React.Fragment>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          height: '80px',
          backgroundColor: '#ffffff',
          padding: 0,
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)'
        }}
      >
        <HeaderContent>
          <Logo src={logoImg} alt='img' />
          <Row>
            {isLogin ? (
              <Avatar />
            ) : (
              <ButtonLoginSignUp>
                <span>Login/Sign Up</span>
              </ButtonLoginSignUp>
            )}
          </Row>
        </HeaderContent>
      </Header>
    </React.Fragment>
  )
}

export default Header

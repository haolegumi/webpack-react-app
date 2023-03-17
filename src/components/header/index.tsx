import React from 'react'
import styled from 'styled-components'
import { Layout, Avatar } from 'antd'

import logoImg from '@src/assets/images/logo.svg'

function Header() {
  const { Header } = Layout

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
  `
  return (
    <React.Fragment>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          height: '80px',
          backgroundColor: '#f39c12',
          padding: 0
        }}
      >
        <HeaderContent>
          <Logo src={logoImg} alt='img' />
          <Avatar style={{ backgroundColor: '#87d068', cursor: 'pointer' }}>H</Avatar>
        </HeaderContent>
      </Header>
    </React.Fragment>
  )
}

export default Header

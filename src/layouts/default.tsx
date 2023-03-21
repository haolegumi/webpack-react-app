import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '@components/header'
import Loading from '@components/loading'
const Default: React.FC<PropsWithChildren> = () => {
  const { Content } = Layout

  const isLoading = false

  return (
    <Layout>
      <Header />

      <Content
        style={{
          width: '1200px',
          height: 'calc(100vh - 80px)',
          margin: '0 auto',
          padding: '0',
          overflow: 'auto',
          position: 'relative'
        }}
      >
        {isLoading ? <Loading /> : <Outlet />}
      </Content>
    </Layout>
  )
}

export default Default

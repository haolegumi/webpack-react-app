import React from 'react'
import { Layout } from 'antd'
function Footer() {
  const { Footer } = Layout
  return (
    <React.Fragment>
      <Footer
        style={{
          height: '80px',
          backgroundColor: '#f39c12',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: '1200px',
            margin: '0 auto'
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </div>
      </Footer>
    </React.Fragment>
  )
}

export default Footer

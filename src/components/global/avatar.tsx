import React from 'react'
import styled from 'styled-components'
interface AvatarProps {
  img?: string
  size?: string
}

const Container = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`

const Img = styled.img`
  width: 50px;
`

const Avatar: React.FC<AvatarProps> = ({ img }) => {
  return (
    <Container className='img-content'>{img ? <Img src={img} alt='img' /> : <span className=''>H</span>}</Container>
  )
}

export default Avatar

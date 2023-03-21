import React from 'react'
import styled from 'styled-components'
import bannerImg from '@src/assets/images/banner1.jpg'
import { showToast } from '@src/hooks'

const Banner = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const SubBanner = styled.div`
  position: absolute;
  top: 7%;
  right: 5%;
  height: 200px;
  width: 400px;
  background-color: rgba(230, 126, 34, 0.9);
  /* background-color: #ffffff; */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  .sub-text {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
  }
`

function Home() {
  // const handleShow = () => {
  //   showToast('error', 'abc')
  // }

  return (
    <div className='font-bold'>
      <Banner>
        <SubBanner>
          <span className='sub-text'>Chill With Me!</span>
        </SubBanner>
      </Banner>
    </div>
  )
}

export default Home

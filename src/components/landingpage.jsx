import React from 'react'
import welcomeImg from '../images/welcome_pic.png'

import ImageUpload from '../components/imageUpload'
import styled from 'styled-components'

const S_LandingPage = styled.div`

  position: relative;
  display:flex;

  .img{
    justify-items: center;
    margin-left: 150px;
    margin-right: 150px; 

    height: auto;
  }
  .btn{
    position: absolute;
    top: 60%;
    left: 50%;
  }


`


const LandingPage = () => {
  
  return (
    <S_LandingPage>
      <div className='landing-page'>
        <img src={welcomeImg} className='img'/>
        <div className='btn'>
          <ImageUpload/>
        </div>
        
      </div>
    </S_LandingPage>

  ) 
}

export {LandingPage}

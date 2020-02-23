import React from 'react'
import {MDBIcon} from 'mdbreact'
import styled from 'styled-components'
import logoimage from '../images/output-onlinepngtools.png'
import fblogo from '../images/facebook-3-32.png'
import searchlogo from '../images/search-3-32.png'
import  pluslogo from '../images/plus-5-32.png'
import 'mdbreact/dist/css/mdb.css'

const S_Header = styled.header`
<<<<<<< HEAD:src/components/header.jsx
    background-color: yellow;
=======
    background-color: pink;
>>>>>>> headernew:my-app/src/components/header.jsx
    height: 100px;
    padding:0;
    display: flex;
    justify-content: space-between;
    align-items: center;



    .logo{
        display:flex;
        align-items: center;
        margin-right: 10px;
        padding: 10px 15px;
        border-radius: 3px;
    }

    .social{
        .
        display:flex;
        align-items: center;
        margin-left: 10px;
        padding: 15px 10px;
        border-radius: 3px;

        .component {
            padding: 10px;
        }
    }
`
        

const HeaderComponent = () => {
    return (
        <S_Header>
<<<<<<< HEAD:src/components/header.jsx
            <div className='link'>
                Wound care logo insert here
            </div>
=======
            <div className='logo'>
                <img src={logoimage} alt="Wound Care Logo"></img>
            
            </div>
            
            <div className='social'>
                <img className='component' src={fblogo} alt="fb Logo" widt></img>
                <img className = 'component' src={searchlogo} alt="search Logo"></img>
                <img className = 'component' src={pluslogo} alt="plus Logo"></img>
               
            </div>

>>>>>>> headernew:my-app/src/components/header.jsx
        </S_Header>
    )
}

export {HeaderComponent}
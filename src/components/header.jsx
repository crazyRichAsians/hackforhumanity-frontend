import React from 'react'
import {MDBIcon} from 'mdbreact'
import styled from 'styled-components'
import logoimage from '../images/woundcarelogo1.png'
import 'mdbreact/dist/css/mdb.css'
import './header.css'

const S_Header = styled.header`

    background-color: #d7fcff;
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
        .logotitle{
            text-align: center;
            text-transform: uppercase;
            text-indent: 10px;
            letter-spacing: 2px;
            word-spacing: 2px;
            color: #474c4d;
            font-weight: 1000;
            font-size: 50px;
            font-family: "quicksand";

        }
    }

    .social{
        
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

            <div className='logo'>
                <img src={logoimage} alt="Wound Care Logo"width = "100"></img>
                <div className = 'logotitle'>WOUND CARE</div>
            
            </div>
            
            <div className='social'>
                <MDBIcon icon="facebook-square" size="3x" style={{color: 'white'}} />
                <MDBIcon icon="search" size="3x" style={{color: 'white'}} />
                <MDBIcon icon="plus" size="3x" style={{color: 'white'}} />
            </div>

        </S_Header>
    )
}

export {HeaderComponent}
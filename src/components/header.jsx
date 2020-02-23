import React from 'react'
import styled from 'styled-components'
import logoimage from '../images/output-onlinepngtools.png'
import ImageUpload from './imageUpload'
import 'mdbreact/dist/css/mdb.css'

const S_Header = styled.header`

    background-color: #4dc0d7;
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

    .header-right{
        
        display:flex;
        align-items: center;
        margin-left: 10px;
        padding: 15px 10px;
        border-radius: 3px;

        .button {
            color: white;
            font-size: 1em;
            margin: 1em;
            padding: 0.25em 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
        }
    }

    
`
        

const HeaderComponent = () => {
    return (
        <S_Header>

            <div className='logo'>
                <img src={logoimage} alt="Wound Care Logo"></img>
            </div>

            <div>
                <ImageUpload/>
            </div>

            
            {/* <div className='social'>
                <img className='component' src={fblogo} alt="fb Logo"></img>
                <img className = 'component' src={searchlogo} alt="search Logo"></img>
                <img className = 'component' src={pluslogo} alt="plus Logo"></img>
            </div> */}


        </S_Header>
    )
}

export {HeaderComponent}
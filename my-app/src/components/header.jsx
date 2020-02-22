import React from 'react'
import styled from 'styled-components'

const s_header = styled.header`
    background-color: yellow;
    height: 100px;
    padding:0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {

    }

    .link{
        display:flex;
        align-items: center;
        margin-right: 10px;
        padding: 10px 15px;
        border-radius: 3px;
        
    }
`

export const HeaderComponent = () => {
    return (
        <s_header>
            <div className='link'>
                Wound care logo insert here
            </div>
        </s_header>
    )
}
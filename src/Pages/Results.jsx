import React from 'react'
import { HeaderComponent } from '../components/header'
import ImageUpload from '../components/imageUpload'
import LandingPage  from '../components/landingpage'
import firstDeg from '../images/first-degree-result.jpeg'
import thirdDeg from '../images/third-degree-result.jpeg'
import styled from 'styled-components'

const S_Results=styled.div`
    margin-top:  10px;
    .result-table {
        display: flex;
        margin-left: 200px;
        font-size: 25px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        

        .picture-section {
            display: flex;
            flex-direction: column;
            .title {
                text-decoration: underline;
            }
            .img{
                
                
            }
        }

        .result{
            display:flex;
            margin-left: 70px;
    
        }
    }


`



const Results = ({location}) => {
    console.log(location);
    const image = location.state ? location.state.image : null;

    console.log('Result:', image)
    return (
    <div>
        <HeaderComponent/>
        <S_Results>
            {image &&
            <div className='result-table'>
                <div className='picture-section'>
                    <div className='title'>
                        <h3>Your Analysis Results</h3>
                    </div>
                    <div className='img'>
                        <img src={image}/>
                    </div>
                </div>
                <div className='result'>
                    <img src={firstDeg} width = "700px"/>
                </div>
                

</div> }
        </S_Results>
        </div>
       
     )
}

export {Results}
        
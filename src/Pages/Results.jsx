import React from 'react'
import { HeaderComponent } from '../components/header'
import firstDeg from '../images/first-degree-result.jpeg'
import thirdDeg from '../images/third-degree-result.jpeg'
import selfCare from '../images/self-care.jpeg'
import seekHelp from '../images/seek-help.jpeg'
import styled from 'styled-components'
import { connect } from "react-redux";

const S_Results=styled.div`
    margin-top:  10px;
    width: 1000px;
    background-size: contain;
    .h2 {
        margin-left: 200px;
    }
    .result-table {
        display: flex;
        flex-direction: column;
        margin-left: 200px;
        font-size: 25px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

        .imgPreview {
            text-align: center;
            margin: 50px 400px;
            height: 400px;
            width: 400px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .picture-section {
            max-width:100%;
            height:auto;
            margin-left: 120px;
        }
    }
`

class Results extends React.Component {
   

    render() {
        console.log(this.props.prediction)
    return (
        
    <div>
        <HeaderComponent/>
        <S_Results>
           
            {this.props.prediction == '1st Degree' ? (
                <div className='result-table'>
                    <div className='imgPreview'>
                        <img src={this.props.imageUrl}/>
                    </div>
                    <div className='picture-section'>
                        <img src={firstDeg} width = "950px"/>
                        <img src={selfCare}width = "946px"/>
                    </div>
                </div>

            ) : this.props.prediction == '3rd Degree' ? (
                <div className='result-table'>
                    <div className='imgPreview'>
                        <img src={this.props.imageUrl}/>
                    </div>
                    <div className='picture-section'>
                        <img src={thirdDeg} width = "950px"/>
                        <img src={seekHelp} width = "941x"/>
                    </div>
                </div>
            ) : (
                <h2> No Image Found</h2>

            )
            }
        </S_Results>
        </div>
     )
    }
}

const mapStateToProps = state => ({
    prediction: state.prediction,
    imageUrl: state.imageUrl
});
  
export default connect(mapStateToProps, null)(Results);


import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import {Results} from '../Pages/Results'


export const S_ImageUpload = styled.div`
    margin: 10px;

    .fileInput {
        padding: 10px;
        margin: 15px;
        cursor: pointer;
    }
    
    .imgPreview {
    text-align: center;
    margin: 5px 15px;
    height: 200px;
    width: 500px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .submitButton {
        padding: 12px;
        margin-left: 10px;
        background: white;
        border-color: black;
        border-width: 3px;
        margin-top: 30px;
        border-radius: 5px;
        font-weight: 1000;
        font-size: 15pt;
        /* font-family: 'marker felt'; */
        cursor: pointer;
        &:hover {
            background: #efefef
        }
        .centerText {
            text-align: center;
            width: 500px;
        }
    }

`

 class ImageUpload extends React.Component {

    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }

    state = {
        redirect: false
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        console.log('uploaded')
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
          redirect: true
        });
      }
  
      reader.readAsDataURL(file)
    }

    

    renderRedirect = () => {
        if (this.state.redirect) {
            return (
            <div>
                <Redirect
                    to={{
                        pathname: '/results',
                        state: { hello: 'hi', image: this.state.imagePreviewUrl }
                    }} />
            </div>
            )
        }
    }

  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      //let history = useHistory()
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
        
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <S_ImageUpload>
            <div className="previewComponent">
                {this.renderRedirect()}
            <form onSubmit={(e)=>this._handleSubmit(e)}>
                <label className="submitButton">
                <input className="fileInput" 
                    type="file" 
                    onChange={(e)=> {
                        this._handleImageChange(e)
                    }}
                style= {{display: 'none'}} />
                    Analyze Now
                </label>
            </form>
             {/* <div className="imgPreview">
                {$imagePreview}
            </div>  */}
          
            </div>
        </S_ImageUpload>
        )
    }
  }

  export default ImageUpload
    
import React from 'react'
import styled from 'styled-components'

const S_ImageUpload = styled.div`
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
        background: #d7fcff;
        margin-top: 30px;
        border-radius: 5px;
        font-weight: 1000;
        font-size: 15pt;
        font-family: 'Open Sans';
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
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <S_ImageUpload>
            <div className="previewComponent">
            <form onSubmit={(e)=>this._handleSubmit(e)}>
                <label className="submitButton">
                
                        <input className="fileInput" 
                        type="file" 
                        onChange={(e)=>this._handleImageChange(e)}
                        style= {{display: 'none'}} />
                
                    Analyze Now
                </label>
            </form>
            {/* <div className="imgPreview">
                {$imagePreview}
            </div> */}
          
            </div>
        </S_ImageUpload>
      )
    }
  }

  export default ImageUpload
    
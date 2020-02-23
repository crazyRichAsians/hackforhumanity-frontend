// import React, { useState, Component } from "react"
// import styled from "styled-components"
// import { Redirect } from "react-router-dom"
// import axios from "axios"
// import { connect } from "react-redux"
// import { updatePrediction, updateImageUrl } from "../actions/actions"


// export const S_ImageUpload = styled.div`
//   margin: 10px;

//   .fileInput {
//     padding: 10px;
//     margin: 15px;
//     cursor: pointer;
//   }

//   .imgPreview {
//     text-align: center;
//     margin: 5px 15px;
//     height: 200px;
//     width: 500px;
//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//     .submitButton {
//         padding: 12px;
//         margin-left: 10px;
//         background: white;
//         border-color: black;
//         border-width: 3px;
//         margin-top: 30px;
//         border-radius: 5px;
//         font-weight: 1000;
//         font-size: 15pt;
//         /* font-family: 'marker felt'; */
//         cursor: pointer;
//         &:hover {
//             background: #efefef
//         }
//         .centerText {
//             text-align: center;
//             width: 500px;
//         }

//     }
// `

// class ImageUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: "",
//       imagePreviewUrl: "",
//       isUploading: false,
//       redirect: false,
//       prediction: ""
//     };
//   }

//   _handleSubmit(e) {
//     e.preventDefault();
//     console.log("handle uploading-", this.state.file);
//   }
//     // constructor(props) {
//     //   super(props);
//     //   this.state = {file: '',imagePreviewUrl: ''};
//     // }

//     // state = {
//     //     redirect: false
//     // }
  
//     // _handleSubmit(e) {
//     //   e.preventDefault();
//     //   console.log('handle uploading-', this.state.file);
//     // }
  
//     // _handleImageChange(e) {
//     //   e.preventDefault();
  
//     //   let reader = new FileReader();
//     //   let file = e.target.files[0];
  
//     //   reader.onloadend = () => {
//     //     console.log('uploaded')
//     //     this.setState({
//     //       file: file,
//     //       imagePreviewUrl: reader.result,
//     //       redirect: true
//     //     });
//     //   }
  
//     //   reader.readAsDataURL(file)
//     // }

    

//     // renderRedirect = () => {
//     //     if (this.state.redirect) {
//     //         return (
//     //         <div>
//     //             <Redirect
//     //                 to={{
//     //                     pathname: '/results',
//     //                     state: { hello: 'hi', image: this.state.imagePreviewUrl }
//     //                 }} />
//     //         </div>
//     //         )
//     //     }
//     // }

  
//     // render() {
//     //   let {imagePreviewUrl} = this.state;
//     //   let $imagePreview = null;
//     //   //let history = useHistory()
//     //   if (imagePreviewUrl) {
//     //     $imagePreview = (<img src={imagePreviewUrl} />);

//   _handleImageChange = e => {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     const scope = this;
//     reader.onloadend = () => {
//       scope.props.updateImageUrl(reader.result);
//       //   scope.setState({
//       //     file: file,
//       //     imagePreviewUrl: reader.result
//       //   });
//     };

//     const data = new FormData();
//     data.append("file", file);
//     axios.post("http://172.31.123.174:5000/predict", data).then(result => {
//       console.log(result);
//       if (result.data["prediction"] == "1st Degree") {
//         // this.setState({ prediction: "1st Degree" });
//         this.props.updatePrediction("1st Degree");
//       } else {
//         this.props.updatePrediction("3rd Degree");
//         // this.setState({ prediction: "3rd Degree" });
//       }
//     });
//     reader.readAsDataURL(file);
//   };

//   renderRedirect = () => {
//     if (this.state.redirect) {
//       console.log(this.state);
//       return (
//         <S_ImageUpload>
//             <div className="previewComponent">
//                 {this.renderRedirect()}
//             <form onSubmit={(e)=>this._handleSubmit(e)}>
//                 <label className="submitButton">
//                 <input className="fileInput" 
//                     type="file" 
//                     onChange={(e)=> {
//                         this._handleImageChange(e)
//                     }}
//                 style= {{display: 'none'}} />
//                     Analyze Now
//                 </label>
//             </form>
//              {/* <div className="imgPreview">
//                 {$imagePreview}
//             </div>  */}
          
//             </div>
//         </S_ImageUpload>
//         )
//     //     <Redirect
//     //       to={{
//     //         pathname: "/results",
//     //         state: {
//     //           prediction: this.state.prediction,
//     //           imageUrl: this.state.imagePreviewUrl
//     //         }
//     //       }}
//     //     />
//     //   );

//     }
//     this.state.redirect = false;
//   };

//   render() {
//     let { imagePreviewUrl } = this.state;
//     let $imagePreview = null;
//     //let history = useHistory()
//     if (imagePreviewUrl) {
//       $imagePreview = <img src={imagePreviewUrl} />;
//     } else {
//       $imagePreview = (
//         <div className="previewText">Please select an Image for Preview</div>
//       );
//     }

//     return (
//       <S_ImageUpload>
//         <div className="previewComponent">
//           {this.renderRedirect()}
//           <form onSubmit={e => this._handleSubmit(e)}>
//             <label className="submitButton">
//               <input
//                 className="fileInput"
//                 type="file"
//                 onChange={e => {
//                   this.state.isUploading = true;
//                   this._handleImageChange(e);
//                   console.log("uploaded");
//                   this.setState({ redirect: true });
//                   this.state.isUploading = false;
//                 }}
//                 style={{ display: "none" }}
//               />
//               Analyze Now
//             </label>
//           </form>
//         </div>
//       </S_ImageUpload>
//     );
//   }
// }

// const mapDispatchToProps = {
//   updatePrediction: prediction => updatePrediction(prediction),
//   updateImageUrl: imageUrl => updateImageUrl(imageUrl)
// };

// export default connect(null, mapDispatchToProps)(ImageUpload);

import React, { useState, Component } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updatePrediction, updateImageUrl } from "../actions/actions";

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
    this.state = {
      file: "",
      imagePreviewUrl: "",
      isUploading: false,
      redirect: false,
      prediction: ""
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    const scope = this;
    reader.onloadend = () => {
      scope.props.updateImageUrl(reader.result);
      //   scope.setState({
      //     file: file,
      //     imagePreviewUrl: reader.result
      //   });
    };

    const data = new FormData();
    data.append("file", file);
    axios.post("https://woundcarebackend.azurewebsites.net/predict", data).then(result => {
      console.log(result);
      if (result.data["prediction"] == "1st Degree") {
        // this.setState({ prediction: "1st Degree" });
        this.props.updatePrediction("1st Degree");
      } else {
        this.props.updatePrediction("3rd Degree");
        // this.setState({ prediction: "3rd Degree" });
      }
    });
    reader.readAsDataURL(file);
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      console.log(this.state);
      return (
        <Redirect
          to={{
            pathname: "/results",
            state: {
              prediction: this.state.prediction,
              imageUrl: this.state.imagePreviewUrl
            }
          }}
        />
      );
    }
    this.state.redirect = false;
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    //let history = useHistory()
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <S_ImageUpload>
        <div className="previewComponent">
          {this.renderRedirect()}
          <form onSubmit={e => this._handleSubmit(e)}>
            <label className="submitButton">
              <input
                className="fileInput"
                type="file"
                onChange={e => {
                  this.state.isUploading = true;
                  this._handleImageChange(e);
                  console.log("uploaded");
                  this.setState({ redirect: true });
                  this.state.isUploading = false;
                }}
                style={{ display: "none" }}
              />
              Analyze Now
            </label>
          </form>
        </div>
      </S_ImageUpload>
    );
  }
}

const mapDispatchToProps = {
  updatePrediction: prediction => updatePrediction(prediction),
  updateImageUrl: imageUrl => updateImageUrl(imageUrl)
};

export default connect(null, mapDispatchToProps)(ImageUpload);

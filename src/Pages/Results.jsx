import React from "react";
import { HeaderComponent } from "../components/header";
import { connect } from "react-redux";

class Results extends React.Component {
  render() {
    // if (this.state.imageUrl) {
    //   $imagePreview = (<img src={this.state.imageUrl} />);
    // } else {
    //   $imagePreview = (<div className="previewText">Your image failed to upload</div>);
    // }
    return (
      <div className="wound-care">
        <p>{this.props.prediction}</p>
        <img src={this.props.imageUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prediction: state.prediction,
  imageUrl: state.imageUrl
});

export default connect(mapStateToProps, null)(Results);

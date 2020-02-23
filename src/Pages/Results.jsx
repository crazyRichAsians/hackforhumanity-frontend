import React from "react";
import { HeaderComponent, StyleSheet } from "../components/header";
import { connect } from "react-redux";
import windowSize from "react-window-size";

class Results extends React.Component {
  render() {
    return (
      <div className="wound-care">
        <p style={{ textAlign: "center", fontSize: "30px", color: "red" }}>
          {this.props.prediction}
        </p>
        <img
          src={this.props.imageUrl}
          style={{
            width: "50%",
            height: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            border: "5px solid black"
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prediction: state.prediction,
  imageUrl: state.imageUrl
});

export default connect(mapStateToProps, null)(Results);

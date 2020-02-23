import React from "react";
import styled from "styled-components";
import ImageUpload, { S_ImageUpload } from "./imageUpload";
import logoimage from "../images/woundcarelogo.jpeg";
import "mdbreact/dist/css/mdb.css";
import "./header.css";

const S_Header = styled.header`
  background-color: #d7fcff;
  height: 100px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 10px 15px;
    border-radius: 3px;
    .logotitle {
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

  .header-right {
    display: flex;
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
`;

const HeaderComponent = () => {
  return (
    <S_Header>
      <div className="logo">
        <img src={logoimage} alt="Wound Care Logo" height="100"></img>
      </div>
      <div>
        <ImageUpload />
      </div>
    </S_Header>
  );
};

export { HeaderComponent };

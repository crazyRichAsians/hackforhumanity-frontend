import React from 'react';
import { HeaderComponent } from './components/header'

import ConvertImage from 'react-convert-image'
import ImageUpload from './components/imageUpload'
//import { SideBar } from './components/sidebar'
import './App.css';

class App extends React.Component {
  render() {

      return (
        <div className="wound-care">
          <HeaderComponent/>
          {/* <Sidebar/> */}

        </div>
      )
  }
  
}

export default App;


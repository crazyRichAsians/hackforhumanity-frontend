import React from 'react';
import { HeaderComponent } from './components/header'
//import { SideBar } from './components/sidebar'
import SideNav from './components/sideNav/SideNav'
import { Sidebar } from './components/sidebar'
import './App.css';

class App extends React.Component {
  render() {
      return (
        <div className="Wound-care">
          <HeaderComponent/>
          <Sidebar/>
        </div>
      )
  }
  
}

export default App;

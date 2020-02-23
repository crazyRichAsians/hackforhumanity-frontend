import React from 'react';
import { HeaderComponent } from './components/header'
//import { SideBar } from './components/sidebar'
import SideNav from './components/sideNav/SideNav'
import { Sidebar } from './components/sidebar'
import LandingPage  from './components/landingpage'
import './App.css';

class App extends React.Component {
  render() {
      return (
        <div className="Wound-care">
          <HeaderComponent/>
          <Sidebar/>
          <LandingPage/>
        </div>
      )
  }
  
}

export default App;

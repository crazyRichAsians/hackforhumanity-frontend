import React from 'react'
import { HeaderComponent } from '../components/header'
import {LandingPage}  from '../components/landingpage'
import {StatsPage} from '../components/stats'


export default class Home extends React.Component {
    render() {
        return (
        <div className="wound-care">
          <HeaderComponent/>
          <LandingPage/>
          <StatsPage/>
        </div>

        )
    }

}

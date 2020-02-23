import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {MDBIcon} from 'mdbreact'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import styled from 'styled-components'

const Sidebar = () => {
    return (
            <SideNav 
                    style={{
                        top: '100px',
                        //background: '#fff',
                    }}
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="aboutus">
                    <NavItem eventKey="aboutus">
                        <NavIcon>
                            <MDBIcon icon="info-circle" style={{color: 'white'}}/>
                        </NavIcon>
                        <NavText>
                            About Us
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="woundsandinjury">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Wounds and Injury
                        </NavText>
                        <NavItem eventKey="woundsandinjury/analysis">
                            <NavText>
                                Analysis
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="woundsandinjury/information">
                            <NavText>
                                More Information
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    )
}

export {Sidebar}
import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {MDBIcon} from 'mdbreact'
import info from '../images/1828558.svg'
import aid from '../images/2231230.svg'

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
                        <NavIcon >
                            <img className='info-icon' src={info} alt="About Us" 
                                style={{
                                    height: '35px', 
                                    width: '35px',
                                    margin: '7px 0 0 0'
                                     }}></img>
                        </NavIcon>
                        <NavText>
                            About Us
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="woundsandinjury">
                        <NavIcon>
                            <img className='aid-icon' src={aid} alt="Aid Icon" 
                            style={{height: '35px', 
                                    width: '35px',
                                    margin: '7px 0 0 0'}}></img>
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
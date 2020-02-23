import React from 'react'
import styled from 'styled-components'
import {MDBIcon} from 'react-icons/md'
import {NavLink} from 'react-router-dom'

//Components
import ROUTES from '../constants/routes'


const sideNavStyles = {
    iconWidth: '20px',
    iconMarginRight: '10px',
    navItemPad_V: '15px',
    navItemPad_H: '13px',
}

const S_SideNav = styled.aside`
    position: absolute;
    z-index:1;
    background: yellow;
    height: 100%;

    nav {
        display: none;
    }

    &.active {
        box-shadow: 5px 0 5px #ccc;
        nav {
            display: block;
            position: sticky;
            top: 0;
            min-width: ${sideNavMinWidth};
            padding: 10px 0;
        }
    }

    .nav-item {
        margin-bottom: 10px;
        &:hover,
        &.active {
            background: #e7e7e7;
        }
        &.active {
            .nav-link {
                &:hover {
                    background: #d7d7d7;
                }
            }
            font-weight: bold;
            .secondary-links {
                display: block;
            }
        }
    }

    .nav-link {
        display: flex;
        align-items: center;
        padding: 11px 13px;
        font-size: 16px;
        font-size: 18px;

        svg {
            margin-right: ${sideNavStyles.iconMarginRight};
            width: ${sideNavStyles.iconWidth};
            height: ${sideNavStyles.iconWidth};
        }
    }

    .secondary-links {
        display: none;
    }

    .secondary-link {
        font-size: 16px;
        padding-left: ${sideNavStyles.secondaryLinkPadLeft};
        font-weight: normal;
        &.active {
            background: #d7d7d7;
            font-weight: bold;
        }
    }

    @media (min-width: ${sideNav_desktop}) {
        position: sticky;
        top: 0;
        display: block;
        min-height: calc(100vh);
        min-width: ${sideNavMinWidth};
        padding: ${pageContentsPadTop} 0;
        border-right: 1px solid #ddd;

        &.active {
            box-shadow: none;
            nav {
                padding: 0;
            }
        }

        nav {
            display: block;
            position: static;
        }
    }

    @media print {
        display: none;
    }
`

const navLinks = [
    {
        label: 'Analysis',
        route: ROUTES.analysis,
        icon: 'report'

    },
    {
        label: 'Wound Types',
        routes: ROUTES.information,
        icon: 'information'
    }
]

const iconMap = {
    report: <MDBIcon icon="file-medical-alt" />,
    information: <MDBIcon icon="info-circle" />

}

const getIcon = (iconType='report') => {
    return iconMap[iconType]
}

const SideBar = ({}) => {
    return (
        <S_SideNav className={isOpen? 'active' : ''}>
            <nav>
                <NavLink to={route} className="link nav-link" activeClassName="active-nav-link">
                    {icon && getIcon(icon)}
                    {label}
                </NavLink>

            </nav>
        </S_SideNav>
    )
}

export {SideBar}
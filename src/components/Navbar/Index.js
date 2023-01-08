import React, { useState } from 'react'
import './styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const MENU = [
        {
            title: 'Home',
            link: '#'
        },
        {
            title: 'Portfolio',
            link: '#'
        },
        {
            title: 'About Me',
            link: '#'
        },
        {
            title: 'Contact',
            link: '#'
        }
    ]

    const handleOnClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav>
            <div className='logo'>
                Arslan Farooq
            </div>
            <ul className='desktop-menu'>
                {
                    MENU.map((menuItem) => {
                        return <li><a href={menuItem.link}>{menuItem.title}</a></li>
                    })
                }
            </ul>
            {isMobileMenuOpen ? <FontAwesomeIcon className='mobile-menu-button' icon={faXmark} onClick={handleOnClick} /> : <FontAwesomeIcon className='mobile-menu-button'  icon={faBars} onClick={handleOnClick} />}
            {
                isMobileMenuOpen ? <ul className='mobile-menu'>
                {
                    MENU.map((menuItem) => {
                        return <li><a href={menuItem.link}>{menuItem.title}</a></li>
                    })
                }
                </ul> : ''
            }
        </nav>
    )
}

export default Navbar
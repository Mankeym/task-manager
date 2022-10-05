import React from 'react';
import './Navbar.sass'
import {NavLink} from "react-router-dom";
import {userRoute} from "../../routes";
const Navbar = () => {
    const toggleButtonNavbar = () => {
        const buttonContainer = document.querySelector('.navbar__button-container')
        const navbar = document.querySelector('.navbar')
        buttonContainer.classList.toggle('active')
        navbar.classList.toggle('active')
    }
    const clickToggleActiveLink = (e) =>{
        const arrayElements = document.querySelectorAll(`.${e.currentTarget.className.split(' ')[0]}`)
        arrayElements.forEach((elem)=>{
            if(elem.classList.contains('active-link')) {
                elem.classList.remove('active-link')
            }
        })
        e.currentTarget.classList.toggle('active-link')
    }
    return (
            <div className={'navbar'}>
                <div className={'navbar__button-container'}>
                    <button onClick={toggleButtonNavbar} className={'navbar__button'}>

                    </button>
                </div>
                <div className={'navbar__image-container'}>

                </div>
                <div className={'navbar__link-container'}>
                    {
                        userRoute.map((route) =>
                            <div onClick={clickToggleActiveLink} className={'navbar__link-element'}>
                                <NavLink onClick={clickToggleActiveLink} className={'navbar__link'} to={route.path}>
                                    <img className={'navbar__link-image navbar__link-image_white'} src={route.image} alt={route.name} />
                                    <img className={'navbar__link-image navbar__link-image_black'} src={route.imageBlack} alt={route.name} />
                                    <span>{route.name}</span>
                                    <div className={'navbar__dop-top'}></div>
                                    <div className={'navbar__dop-bottom'}></div>
                                </NavLink>

                            </div>

                        )
                    }
                </div>
            </div>
    );
};

export default Navbar;

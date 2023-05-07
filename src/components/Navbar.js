import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import '../styles/navbar.css';
import {
    ArrangeVertical,
    ArrowLeft2,
    Category,
    Chart1,
    I3DCubeScan,
    Logout,
    Setting2,
    Wallet,
    Add,
    HambergerMenu
} from "iconsax-react";

function Navbar() {
    const [mainMenuToggle, setMainMenuToggle] = useState(true);
    const [accountMenuToggle, setAccountMenuToggle] = useState(true);
    const [mobileVersion, setMobileVersion] = useState(false);
    const [mobileNavBar, setMobileNavBar] = useState(false);
    const [openNavbar, setOpenNavbar] = useState(false);
    const handleMobileNavBar = () => {
        if (window.innerWidth <= 576) setMobileNavBar(true)
        else setMobileNavBar(false)
    }
    const handleMobileVersion = () => {
        if (window.innerWidth <= 960 && window.innerWidth > 576) setMobileVersion(true)
        else setMobileVersion(false)
    }
    const handleMobileVersionOnClick = () => {
        setOpenNavbar(!openNavbar)
    }
    window.addEventListener('resize', handleMobileVersion);
    window.addEventListener('resize', handleMobileNavBar);
    useEffect(() => {
        handleMobileVersion()
        handleMobileNavBar()
    }, []);
    return (
        <nav className="navbar__container">
            <div className="navbar__container__top">
                <Link to='/'>
                    <div className="navbar__logo">
                        <span className="navbar__logo__span">One</span>
                        <span className="navbar__logo__span colored__logo">
                            {mobileVersion ? <Wallet size={40}/> : "Wallet"}
                    </span>
                    </div>
                </Link>
                {
                    mobileNavBar ?
                        <button
                            className={"btn"}
                            style={{padding: ".5rem .8rem "}}
                            type={"button"}
                            onClick={handleMobileVersionOnClick}>
                            {
                                openNavbar ? <Add style={{rotate : "-45deg"}} size={30}/> :<HambergerMenu size={30}/>
                            }
                        </button>
                        : ""
                }
            </div>
            <div className={mobileNavBar ? !openNavbar ? "navbar__mobile__container hide" : "navbar__mobile__container" : "navbar__mobile__container" }>
                <div className="navbar__logo__and__nav">
                    <div className="navbar__group">
                        <div className="navbar">
                            {!mobileVersion ?
                                <div className="navbar__button" onClick={() => setMainMenuToggle(!mainMenuToggle)}>
                                    <span className="navbar__header">Main Menu</span>
                                    <span
                                        className={mainMenuToggle ? "navbar__header__icon  active" : "navbar__header__icon "}><ArrowLeft2
                                        size={20}/></span>
                                </div> : ""}
                            <ul className={mainMenuToggle ? "navbar__list active" : "navbar__list"}>
                                <li className="navbar__item">
                                    <NavLink to='/dashboard'
                                             className={({isActive}) => isActive ? "navbar__link active" : "navbar__link"}>
                                        <span><Category size={20}/></span>
                                        {!mobileVersion ? <span>Dashboard</span> : ""}
                                    </NavLink>
                                </li>
                                <li className="navbar__item">
                                    <NavLink to='/transactions'
                                             className={({isActive}) => isActive ? "navbar__link active" : "navbar__link"}>
                                        <span><ArrangeVertical size={20}/> </span>
                                        {!mobileVersion ? <span>Transactions</span> : ""}
                                    </NavLink>
                                </li>
                                <li className="navbar__item">
                                    <NavLink to='/statistics'
                                             className={({isActive}) => isActive ? "navbar__link active" : "navbar__link"}>
                                        <span><Chart1 size={20}/> </span>
                                        {!mobileVersion ? <span>Statistics</span> : ""}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar">
                            {!mobileVersion ? <div className="navbar__button"
                                                   onClick={() => setAccountMenuToggle(!accountMenuToggle)}>
                                <span className="navbar__header">Account Menu</span>
                                <span
                                    className={accountMenuToggle ? "navbar__header__icon active" : "navbar__header__icon"}><ArrowLeft2
                                    size={20}/></span>
                            </div> : ""}

                            <ul className={accountMenuToggle ? "navbar__list active" : "navbar__list"}>
                                <li className="navbar__item">
                                    <NavLink to='/categories'
                                             className={({isActive}) => isActive ? "navbar__link active" : "navbar__link"}>
                                        <span><I3DCubeScan size={20}/> </span>
                                        {!mobileVersion ? <span>Categories</span> : ""}
                                    </NavLink>
                                </li>
                                <li className="navbar__item">
                                    <NavLink to='/settings'
                                             className={({isActive}) => isActive ? "navbar__link active" : "navbar__link"}>
                                        <span><Setting2 size={20}/> </span>
                                        {!mobileVersion ? <span>Settings</span> : ""}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar__logout__container">
                    <Link to='logout'>
                        <div className="navbar__logout__button">
                            <span><Logout size={20}/></span>
                            {!mobileVersion ? <span>Logout</span> : ""}
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
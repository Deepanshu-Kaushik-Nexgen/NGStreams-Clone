import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import Nglogo from '../../Assets/NGSlogo.c9d0f1eb.svg'
import iconDown from '../../Assets/icons/Icon Size.svg'
import Triangle from '../../Assets/icons/Polygon1.de8d66a4.svg'
import Burger from '../../Assets/icons/Burger.svg'
import Cross from '../../Assets/icons/Cross.svg'
import Instagram from '../../Assets/icons/Instagram.svg'
import Linkedin from '../../Assets/icons/Linkedin.svg'
import Twitter from '../../Assets/icons/Twitter.svg'
import Youtube from '../../Assets/icons/Youtube.svg'
import { Link } from 'react-router-dom'

const Index = () => {
    const [handleArrow, setHandleArrow] = useState(false)
    const [showProducts, setShowProducts] = useState(false)
    const [showCompany, setShowCompany] = useState(false)
    const [mobMenu, setMobMenu] = useState(false)
    const [mobShowProducts, setMobShowProducts] = useState(false)
    const [mobShowCompany, setMobShowCompany] = useState(false)


    const toggleProductMenu = () => {
        setHandleArrow(!handleArrow)
        setShowCompany(false)
        setShowProducts(!showProducts)
        if (showProducts === true) {
            setShowCompany(false)
        } else if (showCompany === true) {
            setShowProducts(false)
        }
    }

    const toggleCompanyMenu = () => {
        setHandleArrow(!handleArrow)
        setShowProducts(false)
        setShowCompany(!showCompany)
        if (showProducts === true) {
            setShowCompany(false)
        } else if (showCompany === true) {
            setShowProducts(false)
        }
    }

    const toggleMobProductMenu = () => {
        setHandleArrow(!handleArrow)
        setMobShowCompany(false)
        setMobShowProducts(!mobShowProducts)
        // if (showProducts === true) {
        //     setShowCompany(false)
        // } else if (showCompany === true) {
        //     setShowProducts(false)
        // }
    }

    const toggleMobCompanyMenu = () => {
        setHandleArrow(!handleArrow)
        setMobShowProducts(false)
        setMobShowCompany(!mobShowCompany)
        // if (showProducts === true) {
        //     setShowCompany(false)
        // } else if (showCompany === true) {
        //     setShowProducts(false)
        // }
    }

    const btnRef = useRef()

    useEffect(() => {
        const closeDropdown = e => {
            if (!btnRef.current.contains(e.target)) {
                // setIsOpen(false);
                setShowProducts(false)
                setShowCompany(false)
            }
        }
        document.body.addEventListener('click', closeDropdown)
        return () => document.body.removeEventListener('click', closeDropdown)
    }, [])

    return (
        <>
            {console.log(handleArrow)}
            {console.log(mobMenu)}

            <nav>
                <div  ref={btnRef} className="navContainer">
                    <img className="BurgerMenu" src={mobMenu ? Cross : Burger} alt="" onClick={() => setMobMenu(!mobMenu)} />
                    <div className="nav-left">
                        <div className="NgLogo">
                            <Link to='/'>
                            <img src={Nglogo} alt="NgStreams" />
                            </Link>
                        </div>
                        <div className="itemsList">
                            <div className={`products ${handleArrow ? "active" : ""}`} onClick={toggleProductMenu}>
                                <Link to='/products'>  Products</Link>
                                <img className='img' src={iconDown} alt="Icon" />
                                <ul className={showProducts ? "products-listActive" : "products-list"}>
                                <li><a href='#AdInsertion'>Ad Insertion And Targeting</a></li>
                                <li>Smart Meta Data</li>
                                <li>CRA</li>
                                <li>VR OTT Watch</li>
                                <li>SetTop Box</li>
                            </ul>

                            </div>
                            <div className="products">
                                Services
                            </div>
                            <div className="products" onClick={toggleCompanyMenu}>
                                Company
                                <img src={iconDown} alt="Icon" />

                                <ul className={showCompany ? "company-listActive" : "company-list"}>
                                <li><a href='#AdInsertion'>About Us</a></li>
                                <li>Contact</li>
                            </ul>
                            </div>
                        </div>
                        <div className="unwanted"></div>
                    </div>
                    <div className="nav-right">
                        <div className="button">
                            <button className='Nav-btn'>Contact Sales</button>
                        </div>
                    </div>
                </div>

            </nav>

            <div className={mobMenu ? "mobileMenu" : "none"}>
                <div className="mobMenuContainer">
                    <div className="Mobnav-First">
                        <img className="BurgerMenu" src={mobMenu ? Cross : Burger} alt="" onClick={() => setMobMenu(!mobMenu)} />
                        <img src={Nglogo} alt="NgStreams" />
                        <div className="Unwanted"></div>
                    </div>

                    <div className="mob-itemsList">
                        <div className={`mobItems`} onClick={toggleMobProductMenu}>
                            Products
                            <img className='img' src={iconDown} alt="Icon" />

                            <ul className={mobShowProducts ? "mobProductActive" : "none"}>
                                <li>Ad Insertion And Targeting</li>
                                <li>Smart Meta Data</li>
                                <li>CRA</li>
                                <li>VR OTT Watch</li>
                                <li>SetTop Box</li>
                            </ul>

                        </div>
                        <div className="mobItems">
                            Services
                        </div>
                        <div className="mobItems" onClick={toggleMobCompanyMenu}>
                            Company
                            <img src={iconDown} alt="Icon" />
                            <ul className={mobShowCompany ? "mobCompanyActive" : "none"}>
                                <li>About Us</li>
                                <li>Contact</li>
                            </ul>

                        </div>
                        <div className="mobItems">Contact Sales</div>
                    </div>

                    <div className="contactUS">
                        <div className="callUs">
                            <div className="item"><b>Call Us</b></div>
                            <div className="item"> +91 0000000000</div>
                        </div>
                        <div className="emailUs">
                            <div className="item"><b>Email Us</b></div>
                            <div className="item">sales@ngstreams.com</div>
                            <div className="item">support@ngstreams.com</div>
                        </div>
                        <div className="social">
                            <div className="item"><b>We are Social</b></div>
                            <div className="icons">
                                <img src={Twitter} alt="" />
                                <img src={Instagram} alt="" />
                                <img src={Youtube} alt="" />
                                <img src={Linkedin} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        Copyright 2023 © NGStreams. All right reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
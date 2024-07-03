import React, { useState } from 'react'
import './style.css'
import Nglogo from '../../Assets/NGSlogo.c9d0f1eb.svg'
import iconDown from '../../Assets/icons/Icon Size.svg'
import Triangle from '../../Assets/icons/Polygon1.de8d66a4.svg'

const Index = () => {
    const [handleArrow, setHandleArrow] = useState(false)
    const [showProducts, setShowProducts] = useState(false)
    const [showCompany, setShowCompany] = useState(false)

    const toggleProductMenu = () => {
        setHandleArrow(!handleArrow)
        setShowCompany(false)
        setShowProducts(!showProducts)
        if(showProducts === true){
            setShowCompany(false)
        } else if (showCompany === true) {
            setShowProducts(false)
        }
    }

    const toggleCompanyMenu = () => {
        setHandleArrow(!handleArrow)
        setShowProducts(false)
            setShowCompany(!showCompany)
            if(showProducts === true){
                setShowCompany(false)
            } else if (showCompany === true) {
                setShowProducts(false)
            }
    }
    return (
        <>
            {console.log(handleArrow)}
            <nav>
                <div className="navContainer">
                    <div className="nav-left">
                        <div className="NgLogo">
                            <img src={Nglogo} alt="NgStreams" />
                        </div>
                        <div className="itemsList">
                            <div className={`products ${handleArrow ? "active" : ""}`} onClick={toggleProductMenu}>
                                Products
                                <img className='img' src={iconDown} alt="Icon" />
                                
                                    <img src={Triangle} alt="Tri" className={showProducts? "TriangleActive":"Triangle"}/>
                                    <ul className={showProducts ? "products-listActive" : 'products-list'}>
                                        <li>Ad Insertion And Targeting</li>
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

                                <img src={Triangle} alt="Tri" className={showCompany? "TriangleActive":"Triangle"}/>
                                    <ul className={showCompany ? "company-listActive" : 'company-list'}>
                                        <li>About Us</li>
                                        <li>Contact</li>
                                    </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="button">
                            <button className='Nav-btn'>Contact Sales</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Index
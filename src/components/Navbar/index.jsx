import React, { useState } from 'react'
import './style.css'
import Nglogo from '../../Assets/NGSlogo.c9d0f1eb.svg'
import iconDown from '../../Assets/icons/Icon Size.svg'

const Index = () => {
    const [handleArrow, setHandleArrow] = useState(false)

    const toggleArrow = () => {
        setHandleArrow(!handleArrow)
    }
    return (
        <>
            {console.log(handleArrow)}
            <nav>
                <div className="container">
                    <div className="nav-left">
                        <div className="NgLogo">
                            <img src={Nglogo} alt="NgStreams" />
                        </div>
                        <div className="itemsList">
                            <div className={`products ${handleArrow ? "active" : ""}`} onClick={toggleArrow}>
                                Products
                                <img className='img' src={iconDown} alt="Icon" />
                            </div>
                            <div className="products">
                                Services
                            </div>
                            <div className="products">
                                Company
                                <img src={iconDown} alt="Icon" />
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
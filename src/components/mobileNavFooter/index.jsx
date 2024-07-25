import React, { useEffect, useState } from 'react'
import './style.scss'
import Home from '../../Assets/icons/Mobile-Footer/Home.svg'
import Products from '../../Assets/icons/Mobile-Footer/Products.svg'
import Company from '../../Assets/icons/Mobile-Footer/Company.svg'
import Services from '../../Assets/icons/Mobile-Footer/Services.svg'
import FreeDemo from '../../Assets/icons/Mobile-Footer/FreeDemo.svg'


const Index = () => {
    const [isMob, setIsMob] = useState(true)
    let Width = window.innerWidth

   useEffect(() => {
    const switchMob = () => {
        if (Width <= 600) {
            setIsMob(true)
            console.log("Yess")
        } else {
            setIsMob(false)
        }
    }
    switchMob()
console.log(Width)
   }, [Width])
   
    return (
        <>
            <div className={isMob ? "footerDiv" : "none"}>
                <div className="items">
                    <div className="item">
                        <img src={Home} alt="" />
                        Home
                    </div>
                    <div className="item">
                        <img src={Products} alt="" />
                        Products
                    </div>
                    <div className="item">
                        <img src={Company} alt="" />
                        Company
                    </div>
                    <div className="item">
                        <img src={Services} alt="" />
                        Services
                    </div>
                    <div className="item">
                        <img src={FreeDemo} alt="" />
                        Free Demo
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
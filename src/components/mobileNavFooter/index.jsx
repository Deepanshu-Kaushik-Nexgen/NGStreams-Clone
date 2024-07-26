import React, { useEffect, useState } from 'react'
import './style.scss'
import Home from '../../Assets/icons/Mobile-Footer/Home.svg'
import Products from '../../Assets/icons/Mobile-Footer/Products.svg'
import Company from '../../Assets/icons/Mobile-Footer/Company.svg'
import Services from '../../Assets/icons/Mobile-Footer/Services.svg'
import FreeDemo from '../../Assets/icons/Mobile-Footer/FreeDemo.svg'


const Index = () => {
    const [isMob, setIsMob] = useState(true)
    // const [width, setWidth] = useState(window.innerWidth)

    // useEffect(() => {

    //     const switchMob = () => {
    //         if (width <= 600) {
    //             setIsMob(true)
    //             console.log("Yess")
    //         // console.log(width)

    //             setIsMob(false)
    //         }
    //     }
    //     switchMob()

    //     const handleResize = () => {
    //         setWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     // return () => {
    //     //     window.removeEventListener('resize', handleResize);
    //     // }
    //      },[width])
   
    //      console.log(width)


    const [width, setWidth] = useState(window.innerWidth);
    // console.log(window.innerWidth, "Before")
    // console.log(width,"checker")
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };


    const switchMob = () => {
        if (width <= 600) {
            setIsMob(!isMob)
        } else {
            setIsMob(false)
        }
    }
    switchMob()
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };

    }, [width]);
    console.log(width, "After")


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
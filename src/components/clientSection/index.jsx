import React from 'react'
import './style.scss'

export default function index() {
    let client = [
        {
            index: 1,
            title: (
                <>
                    `Increased viewing sessions upto {<span className='WordColor'>72%</span>} and managing over {<span className='WordColor'>72 million+</span>} streaming sessions annually`
                </>
            )
        },
        {
            index: 2,
            title: (
                <>
                    `Transcoded more than {<span className='WordColor'>5 million+</span>} hours of media content in multiple formats in {<span className='WordColor'>HDR10</span>}`
                </>
            )

        },
        {
            index: 3,
            title: (
                <>
                    `Enriched {<span className='WordColor'>20 million+</span>} metadata entries resulting in fantastic user engagement up to{<span className='WordColor'>93%</span>}`
                </>
            )
        },
        {
            index: 4,
            title: (
                <>
                    `Enabled seamless streaming for{<span className='WordColor'>10 million+</span>} households with {<span className='WordColor'>45%</span>} increase in user satisfaction`
                </>
            )
        },
        {
            index: 5,
            title: (
                <>
                    `Analyzed over {<span className='WordColor'>17 million+</span>} social interactions, contributing to a {<span className='WordColor'>96%</span>} efficiency in platform strategies`
                </>
            )
        },
        {
            index: 6,
            title: (
                <>
                    `Handled over {<span className='WordColor'><br/>5 billion+ <br/></span>} concurrent sessions, ensuring{<span className='WordColor'>88%</span>} less zaptime during peak loads`
                </>
            )
        },
        {
            index: 7,
            title: (
                <>
                    Delivering to {<span className='WordColor'>10 million+</span>} global users, providing a {<span className='WordColor'>58% <br/></span>} increase in content consumptions
                </>
            )
        },
    ]
    return (
        <>
            <div className="clientMain-Container">
                <div className="client-Container">
                    {client.map((item) => {
                        return <div key={index} className="client-Card">
                            <p>{item.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

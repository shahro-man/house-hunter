import React from 'react'
import './Footer.css'
const Footer=()=> {
  return (
    <section className="f-wrapper">
        <div className="paddings flexCenter innerWidth f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className='secondaryText'>Our vision to make all people<br/>
                the best place to live for them</span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span><span className='secondaryText'>145 New York 5467,USA</span>
            </div>
        </div>
    </section>
  )
}

export default Footer
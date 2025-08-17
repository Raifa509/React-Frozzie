import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
    <section style={{backgroundColor:'rgba(41, 11, 72, 0.72)',minHeight:'14rem'}}>
        <div className='d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center pt-5 px-5 text-light'>
            <div >
                <h4 className='size text-start d-none d-md-block'>Frozzie🍦</h4>
            <p className='size text-center d-none d-md-block'>Scoops of Happiness!</p>
         

            </div>
            <div className='size text-center' >
                <h6 className='size'>OPEN HOURS</h6>
                <p className='size'>Monday-Saturday : 9:00 - 00:00</p>
                <p className='size'>Sunday : 9:00 - 20:00 </p>
            </div>
            <div>
                <h6 className='size'>Follow us on</h6>
                <div className='d-flex justify-content-around'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaXTwitter />
                    <FaWhatsapp />
                </div>
            </div>
            
            

        </div>
        <p id='reserve' className='text-center text-light'>© 2025 frozzieIceCreams. All rights reserved.</p>
        
    </section></>
  )
}

export default Footer
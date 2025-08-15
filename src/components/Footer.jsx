import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
    <section style={{backgroundColor:'rgba(41, 11, 72, 0.72)',height:'18rem'}}>
        <div className='d-flex justify-content-between pt-5 px-5 text-light'>
            <div>
                <h4>Frozzie🍦</h4>
            <p>Scoops of Happiness!</p>
         

            </div>
            <div className='text-center' >
                <h6>OPEN HOURS</h6>
                <p>Monday-Saturday : 9:00 - 00:00</p>
                <p>Sunday : 9:00 - 20:00 </p>
            </div>
            <div>
                <h6>Follow us on</h6>
                <div className='d-flex justify-content-around'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaXTwitter />
                    <FaWhatsapp />
                </div>
            </div>
            
            

        </div>
        <p className='text-center text-light' style={{marginTop:'6rem'}}>© 2025 frozzieIceCreams. All rights reserved.</p>
        
    </section></>
  )
}

export default Footer
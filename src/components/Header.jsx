import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Header() {
    return (
        <>
            <section id='landing' className='container-fluid' style={{ height: '120px' }}>

                <div className='d-flex justify-content-between align-items-center'>

                    <div className='d-flex align-items-center'>
                        <img src="/logo.png" alt="" width={'95px'} style={{ height: '95px' }} />
                        <span style={{ marginLeft: '-20px', fontSize: '22px', fontWeight: '600', fontFamily: '"Atma", system-ui', color: 'rgba(38, 4, 75, 0.834)' }}>Frozzie</span>
                    </div>

                    <div>
                        <ul className='list-unstyled d-flex m-0 gap-4'>
                            <li className="nav-item">Home</li>
                            <li className="nav-item">About us</li>
                            <li className="nav-item">Flavours</li>
                            <li className="nav-item">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <MdShoppingCart className='nav-icon me-4' style={{ fontSize: '28px' }} />
                        <FaUser className='nav-icon me-2' style={{ fontSize: '22px' }} />
                    </div>

                </div>
            </section>

        </>
    )
}

export default Header
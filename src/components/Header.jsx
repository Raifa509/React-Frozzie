import React, { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id='landing' className='container-fluid' style={{ height: '120px' }}>
            <div className='d-flex justify-content-between align-items-center'>

 
                <div className='d-flex align-items-center'>
                    <img src="/logo.png" alt="logo" width='95px' style={{ height: '95px' }} />
                    <span style={{ marginLeft: '-20px', fontSize: '22px', fontWeight: '600', fontFamily: '"Atma", system-ui', color: 'rgba(38, 4, 75, 0.834)' }}>
                        Frozzie
                    </span>
                </div>

            
                <ul className='list-unstyled d-none d-md-flex m-0 gap-4 align-items-center mx-auto'>
                    <li className="nav-item"><a href='#' className='text-decoration-none'>Home</a></li>
                    <li className="nav-item"><a href='#about' className='text-decoration-none'>About us</a></li>
                    <li className="nav-item"><a href='#flavour' className='text-decoration-none'>Flavours</a></li>
                    <li className="nav-item"><a href='#contact' className='text-decoration-none'>Contact</a></li>
                </ul>

           
                <div className='d-none d-md-flex gap-3'>
                    <MdShoppingCart className='nav-icon' style={{fontSize:'25px'}}/>
                    <FaUser className='nav-icon' style={{fontSize:'22px'}}/>
                </div>

          
                <div className='d-md-none position-relative d-flex align-items-center gap-2'>
                    <button
                        className='btn btn-outline-none'
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ fontSize: '24px', background: 'none', border: 'none' }}
                    >
                        ☰
                    </button>

                    <MdShoppingCart className='nav-icon'/>
                    <FaUser className='nav-icon'/>

                    {isOpen && (
                        <ul
                            className='list-unstyled position-absolute bg-white p-2 shadow'
                            style={{ right: 0, top: '40px', minWidth: '120px' }}
                        >
                            <li><a href='#' onClick={() => setIsOpen(false)} className='text-decoration-none d-block py-1 px-2' style={{ color: 'rgba(38, 4, 75, 0.834)' }}>Home</a></li>
                            <li><a href='#about' onClick={() => setIsOpen(false)} className='text-decoration-none d-block py-1 px-2' style={{ color: 'rgba(38, 4, 75, 0.834)' }}>About us</a></li>
                            <li><a href='#flavour' onClick={() => setIsOpen(false)} className='text-decoration-none d-block py-1 px-2' style={{ color: 'rgba(38, 4, 75, 0.834)' }}>Flavours</a></li>
                            <li><a href='#contact' onClick={() => setIsOpen(false)} className='text-decoration-none d-block py-1 px-2' style={{ color: 'rgba(38, 4, 75, 0.834)' }}>Contact</a></li>
                        </ul>
                    )}
                </div>

            </div>
        </section>
    );
}

export default Header;

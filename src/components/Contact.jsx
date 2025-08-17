import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';




function Contact() {
    return (
        <>
            <section className='p-5 container' id='contact'>
                <div className="row">
                    <div className="col-6 p-5">
                        <h1>Get In Touch</h1>
                        <div className='mb-5' style={{ height: '3px', width: '100px', backgroundColor: 'rgba(99, 20, 93, 0.92)' }}></div>

                        <p style={{ fontSize: '15px', color: '#555', marginTop: '16px', textAlign: 'justify' }}>
                            We'd love to hear from you. Please reach out with any questions or feedback.
                        </p>
                        <p style={{ color: '#555' }}><MdOutlineMail className='fs-4 me-2' />infofrozzie@gmail.com</p>
                        <p style={{ color: '#555' }}><MdLocalPhone className='fs-4 me-2' />971 05456328</p>
                        <p style={{ color: '#555' }}><MdLocationCity className='fs-4 me-2' />123 Frosty Lane, Sweetville, Icecreamia, 45678</p>
                    </div>
                    <div className="col-6 p-5">

                        <Paper className='p-5'>
                            <h6 style={{ color: 'rgba(99, 20, 93, 0.92)' }} className='pb-3 text-center'>Send Us a Message</h6>
                            <TextField id="standard-basic" label="Name" variant="standard" className='w-100 pb-3' />

                            <TextField id="standard-basic" label="Email ID" variant="standard" className='w-100 pb-3' />

                            <TextField id="standard-basic" label="Comment/Questions" multiline variant="standard" rows={2} className='w-100 pb-3' />
                        
                            <div className='text-center p-3 mt-4'><button className="btn px-4 py-1" style={{ backgroundColor: 'rgba(99, 20, 93, 0.92)',color:'white'}}>Submit</button></div>
                        </Paper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='my-5 '>
            <h2>Contact Us</h2>
            <form>
                <input className='mt-3 rounded' type="email" name="" placeholder='Your Email' required id="" /><br />
                <input className='mt-3 rounded' type="text" name="" placeholder='Your opinion' required id="" /><br />
                <Button className='mt-3 rounded-pill px-3' variant='primary'>Send</Button>
            </form>
        </div>
    );
};

export default Contact;
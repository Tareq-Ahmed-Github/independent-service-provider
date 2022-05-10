import React from 'react';
import { Button } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div>
            <form className='mt-5'>
                <input className='mb-1' type="text" name="" placeholder='package name' id="" /><br />
                <input className='mb-1' type="text" name="" placeholder='quantity' id="" /><br />
                <input className='mb-1' type="text" name="" placeholder='Your Bkash transaction ID' id="" /><br />
                <Button variant='primary'>Confirm</Button>
            </form>
        </div>
    );
};

export default Checkout;
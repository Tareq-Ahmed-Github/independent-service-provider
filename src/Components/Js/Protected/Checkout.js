import React from 'react';
import { Button } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div>
            <form>
                <input type="text" name="" placeholder='package name' id="" />
                <input type="text" name="" placeholder='quantity' id="" />
                <Button variant='primary'>Confirm</Button>
            </form>
        </div>
    );
};

export default Checkout;
import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { image, name, description, price } = service;
    return (
        <CardGroup>
            <Card className='rounded'>
                <Card.Img variant="top" src={image} height={300} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-start'>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Title className=''>${price}</Card.Title>
                    <Link to='/checkout'><Button variant='primary rounded-pill px-5'>buy</Button></Link>
                    
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Service;
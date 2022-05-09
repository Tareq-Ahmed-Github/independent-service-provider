import React from 'react';
import { Button, Card, CardGroup, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div id='services' className='flex'>
            <h2 className='my-5'>Our Services</h2>
            <CardGroup className='h-75 w-75 mx-auto'>
                <Row md={2}>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" />
                        <Card.Body>
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant='primary'>buy</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" />
                        <Card.Body>
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>price</Card.Text>
                            <Button variant='primary'>buy</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" />
                        <Card.Body>
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            <Button variant='primary'>buy</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" />
                        <Card.Body>
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            <Button variant='primary'>buy</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </CardGroup>

        </div>
    );
};

export default Services;
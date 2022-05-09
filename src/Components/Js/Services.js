import React from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div id='services' className='flex'>
            <h2>Our Services</h2>
            <CardGroup>
                <Row md={2}>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/qFZjJx7/young-fitness-man-studio.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </CardGroup>

        </div>
    );
};

export default Services;
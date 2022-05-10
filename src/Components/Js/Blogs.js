import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div className='mx-5 mt-2'>
                <Row>
                    <Col className='border mx-1'>
                        <h2 className='text-start'>Difference between authorization and authentication?</h2>
                        <p className='text-start'><strong>Authentication</strong> is about validating your credentials like User Name/User ID and password to verify your identity. The system determines whether you are what you say you are using your credentials. The system authenticates the user identity via login passwords.</p>
                        <p className='text-start'><strong>Authorization</strong> decides if you have permission to access a resources if your your identity is successfully authenticated by the system which ultimately want to gives you full permission to access the resources such as information, files, databases almost anything.Once your identity is verified by the system after successful authentication, you are then authorized to access the resources of the system.</p>
                    </Col>

                    <Col className='border mx-1'>
                        <h2 className='text-start'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p className="text-start">Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. It has many features like Realtime database, Cloud functions, Analytics, hosting etc.Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.</p>
                    </Col>

                    <Col className='border mx-1'>
                        <h2 className='text-start'>What other services does firebase provide other than authentication</h2>
                        <p className="text-start">There are many services which Firebase provides, Most useful of them are:</p>
                        <ul className='text-start'>
                            <li>Cloud Firestore</li>
                            <li>Cloud Function</li>
                            <li>Authentication</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analysis</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default Blogs;
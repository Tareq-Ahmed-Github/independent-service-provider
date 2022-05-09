import React from 'react';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Fitness Guru</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/checkout">Checkout</Nav.Link>
                        <Form className="d-flex me-4">
                            {user ? <Link to='/login' onClick={logout} className="mx-1">LOG OUT</Link>
                                : <Link to="/login"  className="mx-1 text-decoration-none">Login</Link>}
                            <Link to="/signup"  className="mx-1 text-decoration-none">Signup</Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
import React from 'react';
import { Container, Navbar, Form } from 'react-bootstrap';
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
                        <Link to="/home" className="mx-1 text-decoration-none">Home</Link>
                        <Link to="/about" className="mx-1 text-decoration-none">About</Link>
                        <Link to="/contact" className="mx-1 text-decoration-none">Contact</Link>
                        <Link to="/services" className="mx-1 text-decoration-none">Services</Link>
                        <Link to="/checkout" className="mx-1 text-decoration-none">Checkout</Link>
                        <Link to="/blogs" className="mx-1 text-decoration-none">Blogs</Link>
                        <Form className="d-flex ms-auto">
                            {user ? <Link to='/login' onClick={logout} className="mx-1 text-decoration-none">Log out</Link>
                                : <Link to="/login" className="mx-1 text-decoration-none">Login</Link>}
                            <Link to="/signup" className="mx-1 text-decoration-none">Signup</Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
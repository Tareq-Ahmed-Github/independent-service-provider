import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import SocialSign from './SocialLogin';


const Login = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    const emailRef = useRef('');
    const nameRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    if (user) {
        console.log(user)
        navigate('/home')
    }
    if (loading || updating) {
        return <div className='d-flex m-5 align-items-center justify-content-center mx-auto'><Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }
    if (error || updateProfileError) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'>
            <Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >OOPS {error.message}</h4>
        </div>
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;

        const email = emailRef.current.value;

        const password = passRef.current.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    }
    const navigateLogin = event => {
        navigate('/login')
    }
    return (
        <div >
            <h1 className='text-center m-3'>Create Account</h1>
            <Form onSubmit={handleLogin} className="w-50 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef} required type="password" placeholder="Password" />
                </Form.Group>
                <div className='w-50 text-center mx-auto'>
                    <Button variant="text-light px-5 w-100 btn-outline-dark fw-bold hover-color btn-light rounded-pill" type="submit">
                        Confirm
                    </Button>
                </div>
                <p className='m-2'>Already have an account? <Link to='/login' className=' text-danger' onClick={navigateLogin}>Login</Link></p>
            </Form>
            <hr className='w-50 mx-auto' />

            <SocialSign></SocialSign>
        </div>
    );
};

export default Login;
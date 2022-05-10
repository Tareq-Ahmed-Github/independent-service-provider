import React from 'react';
import Contact from '../Contact';
import Services from '../Services';
import Header from '../Shared/Header';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div className='mb-5'>
                <Banner></Banner>
                <Services></Services>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;
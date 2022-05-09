import React from 'react';
import Services from '../Services';
import Header from '../Shared/Header';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div className='mb-5'>
                <Banner></Banner>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;
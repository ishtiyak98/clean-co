import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <>
            <Navbar>
                <Banner></Banner>
            </Navbar>
        </>
    );
};

export default Home;
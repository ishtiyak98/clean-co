import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import Banner from './Banner';
import InputGroups from './InputGroups';

const Home = () => {
    return (
        <>
            <Navbar>
                <Banner></Banner>
                <InputGroups></InputGroups>
            </Navbar>
        </>
    );
};

export default Home;
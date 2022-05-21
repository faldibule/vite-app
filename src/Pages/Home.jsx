import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <p>Ini Halaman Home</p>
            <Link to="/">
                Back
            </Link>

        </div>
    );
};

export default Home;
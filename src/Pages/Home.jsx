import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold text-blue-600">
                    Home Page
                </h1>
                <Link className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800' to="/">
                    Back
                </Link>
            </div>

        </div>
    );
};

export default Home;
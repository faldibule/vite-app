import React from 'react';
import { Link } from 'react-router-dom';

const Welocome = () => {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold text-blue-600">
                    Welcome to React App created with Vite & Tailwind
                </h1>
                <Link className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800' to="/home">
                    Home
                </Link>
            </div>
            <div className='w-full min-h-screen bg-gradient-to-r from-slate-500 to-slate-50'>
                <p className='text-4xl m-auto'>Gradient nih bos</p>
            </div>
        </div>
    );
};

export default Welocome;
import React from 'react';
import { Link } from 'react-router-dom';

const Welocome = () => {
    return (
        <div>
            <p>Selamat Datang Di Aplikasi React dengan Vite</p>
            <Link to="/home">
                Home
            </Link>
        </div>
    );
};

export default Welocome;
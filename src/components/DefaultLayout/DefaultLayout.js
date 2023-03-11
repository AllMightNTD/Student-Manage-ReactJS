import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
const DefaultLayout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;

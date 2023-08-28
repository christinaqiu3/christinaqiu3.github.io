import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function Alice() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">ALICE</h1>
            </div>



            <Footer />

        </>
    );
}
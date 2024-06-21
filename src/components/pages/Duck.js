import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function Duck() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">Physics Scattering UE5 Tool</h1>
            </div>



            <Footer />

        </>
    );
}
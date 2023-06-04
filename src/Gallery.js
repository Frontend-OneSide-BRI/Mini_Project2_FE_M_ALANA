import logo from './logo.svg';
import Navbar from './navbar';
import Banner from './banner';
import React from 'react';
import Highlight from './highlight';
import Footer from './footer';
import Img1 from './assets/img1.jpg';
import Img2 from './assets/img2.jpg';
import Img3 from './assets/img3.jpg';

import './Gallery.css'

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: "https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        },
        {
            id: 5,
            imgSrc: "https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        },
        {
            id: 6,
            imgSrc: "https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        },
        {
            id: 7,
            imgSrc: "https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        }
    ]

    return(
        <>
        <Navbar />
        <Highlight />
        <div className="gallery">
            {
                data.map((item, index) => {
                    return(
                        <div className="gallery-item" key={index}>
                            <img src={item.imgSrc} alt="gallery" style={{width: '100%'}} />
                        </div>
                    )
                })
            }
        </div>
        <Footer />
        </>
    )
}

export default Gallery;
import React, { useState } from 'react';

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpuMOS60xZ0EqjIf-F0_Iu5e-ZKzpO6FQbfXQIoXJC2RaUfdUpndL4rTuU77sYsnIusM&usqp=CAU',
    'https://res.cloudinary.com/soar-communications-group-ltd/image/upload/c_scale,w_500,h_198,dpr_2/f_auto,q_auto/v1655784118/goodmagazine.co.nz/good_magazine_orange_outlines.png?_i=AA',
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/MARKCAPITALMANAGEMENT.png',
    'https://thumbs.dreamstime.com/b/please-text-one-single-word-printable-graphic-tee-design-print-vector-monoline-calligraphy-style-illustration-black-115809095.jpg',
];
export  function Optiune1() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(images.length - 1);
        }
    };
    return (
        <div className="container2">
            <button className="button" onClick={goToPreviousImage}>&#8592;</button>
            <img src={images[currentImageIndex]} alt="Slider" />
            <button className="button" onClick={goToNextImage}>&rarr;</button>
        </div>
    );
}



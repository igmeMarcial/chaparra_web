"use client";
import React from 'react'
import img1 from "../public/banner1.jpg"
import img2 from "../public/banner2.jpg"
import img3 from "../public/banner3.jpg"
import Carousel from './Carousel';

function Banner() {
  const slides = [img1, img2, img3];
 
  return (
    <div className="relative">
      <div className="w-full">
        <Carousel slides={slides.map(img => img.src)} />
        
      </div>
    </div>
  )
}

export default Banner
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarosuelData';



const items = MainCarouselData.map((item) => <img class="cursor-pointer" src={item.image} alt="/"/>)

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
    />
);

export default MainCarousel;
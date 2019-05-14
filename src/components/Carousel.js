import React, { Component } from 'react';
import '../App.scss';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.scss"; 
import "../../node_modules/slick-carousel/slick/slick-theme.scss";

class Carousel extends Component {

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 1,
            speed: 400,
            focusOnSelect: true
        };

        let images = [
            {
                destination: 'Croatia',
                imgSrc: '/images/croatia.jpeg'
            },
            {
                destination: 'Corsica',
                imgSrc: '/images/amalfi-coast.jpeg'
            },
            {
                destination: 'Cuba',
                imgSrc: '/images/cuba.jpeg'
            },
            {
                destination: 'Florida',
                imgSrc: '/images/florida.jpeg'
            }
        ]

        return (
            <div className='carousel-div'>
                <Slider {...settings}>
                    <div className='img-div'>
                        <div className='destination-div'>
                            <h2 className='destination'>{images[0].destination}</h2>
                            <a href='#'><p className='destination view-itinerary'>View Itinerary</p></a>
                        </div>
                        <img className='img' src={images[0].imgSrc} />
                    </div>
                    <div className='img-div'>
                        <div className='destination-div' >
                            <h2 className='destination'>{images[1].destination}</h2>
                            <a href='#'><p className='destination view-itinerary'>View Itinerary</p></a>
                        </div>
                        <img className='img' src={images[1].imgSrc} />
                    </div>
                    <div className='img-div'>
                        <div className='destination-div' >
                            <h2 className='destination'>{images[2].destination}</h2>
                            <a href='#'><p className='destination view-itinerary'>View Itinerary</p></a>
                        </div>
                        <img className='img' src={images[2].imgSrc} />
                    </div>
                    <div className='img-div'>
                        <div className='destination-div' >
                            <h2 className='destination'>{images[3].destination}</h2>
                            <a href='#'><p className='destination view-itinerary'>View Itinerary</p></a>
                        </div>
                        <img className='img' src={images[3].imgSrc} />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Carousel;
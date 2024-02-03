import React from 'react';
import './portfolio.css';
import { Data } from './Data';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Portfolio = () => {
  return (
    <div id="portfolio">
        <section className="portfolio container section">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My Projects</span>
            
            <Swiper className="portfolio__container"
            loop = {true}
            grabCursor = {true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              }
            }}
            modules={[Pagination]}
            >
                {Data.map(({id, title, description, link}) => {
                    return (
                        <SwiperSlide className="portfolio__card" key={id}>
                            <h3 className="portfolio__name">{title}</h3>
                            <p className="portfolio__description">{description}</p>
                            <span className="portfolio__link">{link}</span>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    </div>
  )
}

export default Portfolio
import React from 'react';
import './portfolio.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Portfolio = () => {
  return (
    <div id="projects">
        <section className="portfolio container section">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle"></span>
            
            <Swiper className="portfolio__container"
            loop = {true}
            grabCursor = {true}
            spaceBetween={24}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
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
            modules={[Pagination, Navigation, Autoplay]}
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
                
                <div className="swiper-button-next portfolio__nav-arrow"></div>
                <div className="swiper-button-prev portfolio__nav-arrow"></div>
            </Swiper>
        </section>
    </div>
  )
}

export default Portfolio
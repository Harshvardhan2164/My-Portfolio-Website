// import React, { useState } from 'react';
import './quali.css';

const Quali = () => {
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle"></span>

        <div className="qualification__container container">
            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">B.Tech in Data Science and Artificial Intelligence</h3>
                            <span className="qualification__subtitle">International Institute of Information Technology (IIIT) Naya Raipur</span>
                            <span className="qualification__res">CGPA: 9.41</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present 
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">12<sup>th</sup> CBSE</h3>
                            <span className="qualification__subtitle">Ryan International School, Raipur</span>
                            <span className="qualification__res">Grade: 97.2%</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">10<sup>th</sup> CBSE</h3>
                            <span className="qualification__subtitle">Bharatiya Vidya Bhavan's R.K Sarda Vidya Mandir, Raipur</span>
                            <span className="qualification__res">Grade: 95.4%</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2010 - 2020
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quali
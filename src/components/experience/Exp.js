import './exp.css';

const Exp = () => {
  return (
    <section className="experience section" id="experience">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle"></span>

        <div className="experience__container container">
            <div className="experience__sections">
                <div className="experience__content experience__content-active">
                    <div className="experience__data">
                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div>
                            <h3 className="experience__title">Internship Trainee</h3>
                            <span className="experience__subtitle">Amazon ML Summer School</span>
                            <ul className="experience__desc">
                                <li>
                                    Completed a competitive internship program focused on machine learning and artificial intelligence, gaining hands-on experience with AWS services and ML frameworks.
                                </li>
                            </ul>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Aug 2025
                            </div>
                        </div>
                    </div>

                    <div className="experience__data">
                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div>
                            <h3 className="experience__title">Project Intern</h3>
                            <span className="experience__subtitle">Proactive Technologies</span>
                            <ul className="experience__desc">
                                <li>
                                    Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React, Node.js) and Amazon S3 for cloud storage.
                                </li>
                                <li>
                                    Implemented key e-commerce functionalities including Role-Based Access Control (RBAC), real-time order tracking, customer query management.
                                </li>
                                <li>
                                    Secure invoice viewing to enhance user experience and operational efficiency.
                                </li>
                            </ul>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2025 - Jun 2025
                            </div>
                        </div>
                    </div>

                    <div className="experience__data">
                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="experience__title">Data Analyst Intern</h3>
                            <span className="experience__subtitle">Cloud Counselage</span>
                            <ul className="experience__desc">
                                <li>
                                    Analyzed large datasets using Python libraries such as Pandas and NumPy to extract actionable insights for business decision-making.
                                </li>
                                <li>
                                    Created interactive data visualizations using Matplotlib and Seaborn to effectively communicate findings to stakeholders.
                                </li>
                            </ul>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Jun 2024 - Jul 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exp
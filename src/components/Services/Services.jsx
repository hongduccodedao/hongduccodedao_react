import React, { useState } from "react";

import "./Services.scss";

const Services = () => {

    // eslint-disable-next-line no-unused-vars
    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Frontend <br /> Developer
                        </h3>
                    </div>

                    <span
                        className="services__button"
                        onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div
                        className={
                            toggle === 1
                                ? "services__modal active-modal"
                                : "services__modal"
                        }>
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => setToggle(0)}></i>

                            <h3 className="services__modal-title">
                                Front-end Developer
                            </h3>
                            <p className="services__modal-description">
                                Service with more 1 year of experience.
                                Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interactions.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-servers services__icon"></i>
                        <h3 className="services__title">
                            Backend <br></br> Developer
                        </h3>
                    </div>

                    <span
                        className="services__button"
                        onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div
                        className={
                            toggle === 2
                                ? "services__modal active-modal"
                                : "services__modal"
                        }>
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => setToggle(0)}></i>

                            <h3 className="services__modal-title">
                                Back-end Developer
                            </h3>
                            <p className="services__modal-description">
                                Experience in using Discord.js and handling
                                logic or data storage of projects.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Use Node.js and packages on projects
                                        that require data and processing logic.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-discord services__icon"></i>
                        <h3 className="services__title">
                            Discord.js <br></br> Developer
                        </h3>
                    </div>

                    <span
                        className="services__button"
                        onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div
                        className={
                            toggle === 3
                                ? "services__modal active-modal"
                                : "services__modal"
                        }>
                        <div className="services__modal-content">
                            <i
                                className="uil uil-times services__modal-close"
                                onClick={() => setToggle(0)}></i>

                            <h3 className="services__modal-title">
                                Discord.js Coder
                            </h3>
                            <p className="services__modal-description">
                                Using Discord and learning about Discord.js for
                                almost 1 year. Application to management and
                                entertainment.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop bots using Discord.js.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Use bots to manage and entertain the
                                        Discord server.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

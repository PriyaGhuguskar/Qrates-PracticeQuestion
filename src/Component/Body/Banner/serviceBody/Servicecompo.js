import React from 'react'
import ServicePic from '../../../../Asset/our_services.jpg'
import './Service.css'

const Servicecompo = () => {
    return (
        <div className="p-why__services c-grid--center">
            <div className="c-grid__container">
                <section className="c-column--center__inner p-why__services-left">
                    <div className="c-label--pages--white">OUR SERVICES</div>
                    <h3 className="c-column--center__title p-why__services-heading">YOU MAKE MUSIC.
                        <br />WE DO THE REST.</h3>
                    <div className="c-column__image--photo-left" style={{ width: '60%' }}>
                        <img src={ServicePic} alt='ServicePic' />
                    </div>
                    <p className="c-column--center__explanation" style={{ marginTop: '40px' }}>
                        <span className="f-adjust-ja">We want you to be able to put all your energy into the creative side of making music. So we created a one-stop shop for everything else.</span>
                    </p>
                    <a className="c-button--large c-button--white-line-black" href="/services/design">LEARN MORE</a>
                </section>

            </div>
            <div className="c-grid__container">
                <div className="c-column__inner">
                    <div>
                        <div className="services-tabs">
                            <div className="services-tabs__category">
                                <div className="services-tabs__category-link">Making Records &amp; Cassettes</div>
                                <ul className="services-tabs__category-list">
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Design &amp; Customization</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">With over 40 colors and over 120,000 variations, control what your record will look like.</div>
                                            <a href="/services/design" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Mastering</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">Have your music mastered by engineers who specialize in mastering for vinyl.</div>
                                            <a href="/services/mastering" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Artwork Assistance</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">Our team can help you optimize your artwork and packaging so your vinyl looks as good as it sounds.</div>
                                            <a href="/" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Vinyl Pressing &amp; Cassette Duplication</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">We've selected partners around the globe to provide products and services at
                                                reasonable prices and with excellent sound quality. With uncompromising partners, Qrates provides the best prices while
                                                maintaining our commitment to quality.
                                            </div>
                                            <a href="/" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="services-tabs__category">
                                <div className="services-tabs__category-link">Storage &amp; Distribution</div>
                                <ul className="services-tabs__category-list">
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Free Storage</button>
                                        {/* <div className="services-tabs__tab-content">

                                            <div className="services-tabs__description">At our warehouses in US, UK, and Japan, with no minimums or fees.&nbsp;</div>
                                            <a href="/" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Sell with Qrates</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">Sell your record in the Qrates shop, directly connecting with an established community of music lovers and stores worldwide.</div>
                                            <a href="/" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Digital Downloads</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">Make your music available for digital download in our store too.</div>
                                            <a href="/" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Retail Distribution</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">Simply create a Qrates page, and start your project to collect orders from 150 affiliated record stores and distributors worldwide. Let us handle the fulfillment and shipping and you focus on selling records!</div>
                                            <a href="/" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="services-tabs__category">
                                <div className="services-tabs__category-link">Support</div>
                                <ul className="services-tabs__category-list">
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Customer Support</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">Our dedicated customer care team is ready to help--from order updates to refunds, returns, or exchanges. We'll handle it.</div>
                                            <a href="/services/customer-support" className="services-tabs__tab-content-link c-link">LEARN MORE →</a>
                                        </div> */}
                                    </li>
                                    <li className="services-tabs__item">
                                        <button className="services-tabs__tab-link" type="button">Artist Support</button>
                                        {/* <div className="services-tabs__tab-content">
                                            <div className="services-tabs__description">Our Qrates team can guide you through all the technical details, making the production process low stress and hassle-free.</div>
                                            <a href="/services/artist-support" className="services-tabs__tab-content-link c-link">LEARN MORE →
                                            </a>
                                        </div> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Servicecompo
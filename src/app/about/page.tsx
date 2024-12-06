import React from "react";

const About = () => {
    return (
        <div>
            <section className="about" style={{ backgroundImage: "url(about-bg.jpeg)" }}>
                <div className="about-content">
                    <h2 className="fade-in">About Our Craft</h2>
                    <p>
                        <span>
                            <b style={{ color: "pink" }}>
                                Welcome to Crockery Elegance, where artistry meets functionality!
                            </b>
                        </span>
                        <br />
                        At Crockery Elegance, we are passionate about bringing timeless designs and premium-quality tableware into your home. With a curated collection of crockery that blends traditional craftsmanship and modern aesthetics, we aim to make every meal a celebration.
                    </p>
                    <div className="stats">
                        <div>
                            <h3>10+</h3>
                            <p>Years of Craftsmanship</p>
                        </div>
                        <div>
                            <h3>500+</h3>
                            <p>Unique Designs</p>
                        </div>
                        <div>
                            <h3>1000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

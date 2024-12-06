import React from "react";

const Contact = () => {
    return(
        <div>   
            <section className="contact-form">
                <h2 className="fade-in">Contact Us</h2>
                <form>
                    <input type="text" placeholder = "Full Name" required />
                    <input type="email" placeholder = "Email" required/>
                    <input type="text" placeholder = "Phone Number"/>
                    <textarea placeholder="Your message" rows={5}></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>
        </div>
    )
}

export default Contact
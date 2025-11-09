import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

const ContactSection = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_psnlo86",     // Your EmailJS Service ID
        "template_n32bpcc",    // Your EmailJS Template ID
        form.current,
        "ZhLYam6kiTTdac6wn"    // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          setIsSending(false);
          setIsSubmitted(true);
          e.target.reset();
          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.error("❌ Failed to send message:", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side - Google Map */}
        <div className="contact-map">
          <iframe
            title="Brinix Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2094956959567!2d79.36864607572356!3d10.346251189792756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b000202a9879515%3A0x9d2225f211bc89bd!2sNaduvikadu%20Rd%2C%20Tamil%20Nadu%20614701!5e0!3m2!1sen!2sin!4v1731155306000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <div className="form-header">
            <h2>Let’s Connect with <span>Brinix</span></h2>
            <p>
              Have a project in mind? Tell us about it — we’ll respond within 24 hours.  
              Let’s build something amazing together!
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="form-content">
            <div className="form-grid">
              <input type="text" name="user_name" placeholder="Full Name" required />
              <input type="email" name="user_email" placeholder="Email Address" required />
            </div>
            <div className="form-grid">
              <input type="tel" name="user_phone" placeholder="Phone Number" required />
              <input type="text" name="user_service" placeholder="Service Interested In" required />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? <span className="spinner"></span> : "Send Message"}
            </button>

            {isSubmitted && (
              <p className="success-message">✅ Your message has been sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import "./TestimonialsSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Ahsan",
    title: "Business Company",
    review:
      "Working with this team was a seamless experience. Their attention to detail and creativity made our project a success.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Amalnass",
    title: "Managing Director",
    review:
      "They transformed our digital presence beautifully. Every step was handled professionally and efficiently.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "IT Company",
    title: "Managing Director",
    review:
      "A fantastic experience! Their design approach truly brought our brand to life — highly recommend their services.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Aananth",
    title: "Co-Founder",
    review:
      "The UI/UX design exceeded expectations. Everything feels intuitive and perfectly aligned with our brand.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Business Company",
    title: "Managing Director",
    review:
      "Excellent collaboration and creative thinking throughout. The team was responsive and innovative.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Shipping Company",
    title: "Managing Director",
    review:
      "They delivered exactly what we envisioned and more. The end result speaks volumes of their expertise.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button className="arrow prev" onClick={onClick} aria-label="Previous">
    <ArrowLeft size={22} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="arrow next" onClick={onClick} aria-label="Next">
    <ArrowRight size={22} />
  </button>
);

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: false, dots: true },
      },
    ],
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <motion.div
        className="testimonial-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          What our <span>customers are saying</span>
        </h2>
        <p>
          Hear from our clients who achieved success through our design,
          development, and creative services.
        </p>
      </motion.div>

      <motion.div
        className="testimonial-slider"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#FFD700" stroke="none" size={18} />
                ))}
              </div>
              <p className="review">“{item.review}”</p>
              <div className="client-info">
                <img src={item.image} alt={item.name} />
                <div className="client-text">
                  <h4>{item.name}</h4>
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;

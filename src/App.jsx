import { useState } from "react";
import people from "../data";
import { FaCircle } from "react-icons/fa";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const App = () => {
  const [testimonials, setTestimonials] = useState(people);
  const [indice, setIndice] = useState(0);
  // one sample
  console.log(people[0]);

  const nextSlide = () => {
    setIndice((oldIndice) => {
      let indice = oldIndice + 1;
      if (indice > testimonials.length - 1) {
        indice = 0;
      }
      return indice;
    });
  };

  const prevSlide = () => {
    setIndice((oldIndice) => {
      let indice = oldIndice - 1;
      if (indice < 0) {
        indice = testimonials.length - 1;
      }
      return indice;
    });
  };

  return (
    <main>
      <section className="title">
        <h2>Testimonial Slider</h2>
      </section>
      <section className="section-center">
        <div className="testimonial-container">
          {testimonials.map((testimonial, testimonialIndex) => {
            const { id, image, quote, title, name } = testimonial;
            let position = "nextSlide";
            if (testimonialIndex === indice) {
              position = "activeSlide";
            }
            if (
              testimonialIndex === indice - 1 ||
              (indice === 0 && testimonialIndex === testimonials.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className="photo" />
                <div className="people-info">
                  <p className="person-quote">{quote}</p>
                  <h4 className="person-name">{name}</h4>
                  <h5 className="person-title">{title}</h5>
                </div>
              </article>
            );
          })}

          <button className="prev">
            <AiOutlineLeft className="fa-icon" onClick={prevSlide} />
          </button>
          <button className="next">
            <AiOutlineRight className="fa-icon" onClick={nextSlide} />
          </button>
          <div className="dots">
            <FaCircle className="fa-dot" />
          </div>
        </div>
      </section>
    </main>
  );
};
export default App;

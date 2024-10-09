import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import { quotes } from "../assets";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h1>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card, id) => (
          <div
            key={id}
            className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback_card"
          >
            <img
              src={quotes}
              alt="Feedback Quotes"
              className="w-[42px] h-[27px] object-contain"
            />
            <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
              {card.content}
            </p>
            <div className="flex flex-row items-center">
              <img
                src={card.img}
                alt="Card Image"
                className="w-[48px] h-[48px] rounded-full"
              />
              <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                  {card.name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

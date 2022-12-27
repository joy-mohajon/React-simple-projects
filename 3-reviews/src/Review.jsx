import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const randomIndex = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex = newIndex - 1 < 0 ? newIndex + 1 : newIndex - 1;
    }
    setIndex(newIndex);
    console.log(index);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button
          className="prev-btn"
          onClick={() =>
            setIndex((preIndex) => (preIndex - 1 < 0 ? preIndex : preIndex - 1))
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() =>
            setIndex((preIndex) =>
              preIndex + 1 < people.length ? preIndex + 1 : preIndex
            )
          }
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          randomIndex();
        }}
      >
        Surprise me
      </button>
    </article>
  );
};

export default Review;

import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [show, setShow] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {show ? "" : <p>{info}</p>}
    </article>
  );
};

export default Question;

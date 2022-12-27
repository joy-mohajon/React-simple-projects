import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(typeof count);
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 1;
    }
    if (amount > 11) {
      amount = 11;
    }
    const newText = data.slice(0, amount);
    setText(newText);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

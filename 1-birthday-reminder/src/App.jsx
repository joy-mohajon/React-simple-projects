import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [peoples, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{peoples.length} birthdays today</h3>
        <List peoples={peoples} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;

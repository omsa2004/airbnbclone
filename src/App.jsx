import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./components/data";
function App() {
  const cards = Data.map((item) => {
    return (
      <Card
        key = {item.id}
        {...item}
      />
    );
  });

  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="CardList">{cards}</section>
    </div>
  );
}

export default App;

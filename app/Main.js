import React from "react";
import ReactDOM from "react-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Form from "./components/HomeGuest";
// import Excercise from "./components/Exercise";

function Main() {
  return (
    <>
      <Header />
      {/* <Excercise /> */}
      <HomeGuest />
      <Footer />
    </>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}

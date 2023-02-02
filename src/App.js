import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import Footer from "./components/Footer";

const ApplayoutComponent = () => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplayoutComponent />);

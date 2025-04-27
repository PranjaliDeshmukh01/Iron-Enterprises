import React from "react";
import "./Card.css";
import CardItem from "./CardItem";
import image3 from "../images/image3.jpg";
import image7 from "../images/image7.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image4 from "../images/image4.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>
        <center>Check out our machinary!</center>
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image3}
              text="Gas Cutting Nozzel machine for basic shape cutting"
              label="Cutting"
              path="/services"
            />
            <CardItem
              src={image7}
              text="Gas Cutting CNC Machine for complex job cutting"
              label="CNC"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image5}
              text="Gas Cutting torch hadndy tool for cutting small intricate cuts"
              label="Free Cutting"
              path="/services"
            />
            <CardItem
              src={image6}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Press"
              path="/about"
            />
            <CardItem
              src={image4}
              text="Free style cutting for longer cuts and plates"
              label="Cutting"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

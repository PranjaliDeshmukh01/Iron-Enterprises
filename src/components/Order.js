import React from "react";
import MachineLeft from "../images/image2.jpg";
import "./Order.css";

function Order() {
  return (
    <div className="order">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${MachineLeft})` }}
      ></div>
      <div className="rightSide">
        <h4>Order Here</h4>
        <form id="order-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />

          <label htmlFor="attachment">Attachment (optional)</label>
          <input
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.png" // you can limit the file types accepted
          />

          <h5>Put the object dimensions or attach the drawing below</h5>
          {/* Length, Width, and Height Fields */}
          <div className="dimensions">
            <div className="dimension-item">
              <label htmlFor="length">Length (mm)</label>
              <input
                name="length"
                placeholder="Length"
                type="number"
                min="0"
                required
              />
            </div>
            <div className="dimension-item">
              <label htmlFor="width">Width (mm)</label>
              <input
                name="width"
                placeholder="Width"
                type="number"
                min="0"
                required
              />
            </div>
            <div className="dimension-item">
              <label htmlFor="height">Height (mm)</label>
              <input
                name="height"
                placeholder="Height"
                type="number"
                min="0"
                required
              />
            </div>
          </div>

          <label htmlFor="message">Message</label>
          <textarea
            rows="2"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Order;

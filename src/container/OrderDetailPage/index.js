import React, { useState, useEffect } from 'react';
import Icon from '../../components/icon';
import './orderDetailPage.scss';
import OrderDetails from '../OrderDetailCards';

function orderDetailPage() {

  const [activeSection, setActiveSection] = useState("")

  const handleScroll = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element.scrollIntoView();
  }

  return (
    <div className="container">
      <div className="section-1">
        <div className="bar-options">
          <div>
            <p>ORDER ID: 1234</p>
          </div>
          <div className="top-bar-options">
            <div>
              <p>Activity Log</p>
            </div>
            <div>
              <p>Deliver Order</p>
            </div>
            <div>
              <p>Cancel Order</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="status-bar">
          <div className="title">ORDER STATUS</div>
        </div>
        <div className="card-container">
          <div className="row1">
            <div className="card">
              <OrderDetails/>
            </div>
            <div className="card">

            </div>
          </div>
        </div>
        <div className="right-navbar">
          <button className={activeSection === "section1" ? "active": null} onClick={() => handleScroll("section1")}><Icon name="CLogo" /></button>
          <button className={activeSection === "section2" ? "active" : null} onClick={() => handleScroll("section2")}><Icon name="RLogo" /></button>
          <button className={activeSection === "section3" ? "active" : null} onClick={() => handleScroll("section3")}><Icon name="DLogo" /></button>
        </div>
      </div>
      <div id="section1" className="customer">
        customer
      </div>
      <div id="section2" className="retailer">
        retailer
      </div>
      <div id="section3" className="delivery-agent">
        delivery agent
      </div>
    </div>
  )
}

export default orderDetailPage;

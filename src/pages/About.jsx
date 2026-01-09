import React from 'react';

export const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="text-primary">About <span className="text-dark">ShopCart</span></h1>
        <p className="lead text-muted">Inspired by Meesho & Flipkart – built for every Indian shopper</p>
      </div>

      {/* Section 1: Our Vision */}
      <div className="row mb-5">
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/mobile-shopping-concept-illustration_114360-1084.jpg"
            alt="Our Vision"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h3 className="text-success">Our Mission & Vision</h3>
            <p>
              At <strong>ShopCart</strong>, we aim to make online shopping easy, affordable, and accessible for everyone. 
              Whether you're a student, homemaker, or reseller, our platform supports your needs with reliable service and great deals.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: What We Offer */}
      <div className="bg-light rounded p-4 shadow mb-5">
        <h4 className="text-info mb-3">🛒 What We Offer</h4>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <h6 className="card-title">Fashion</h6>
                <p className="card-text">Trendy clothes, shoes & accessories</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <h6 className="card-title">Electronics</h6>
                <p className="card-text">Mobiles, gadgets & tech deals</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <h6 className="card-title">Home & Kitchen</h6>
                <p className="card-text">Essentials for every home</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <h6 className="card-title">Beauty & Health</h6>
                <p className="card-text">Skincare, wellness & more</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Why ShopKart */}
      <div className="row text-center my-5">
        <div className="col-md-3 mb-3">
          <div className="p-3 bg-white shadow rounded">
            <h6>🚚 Fast Delivery</h6>
            <p className="text-muted small">All over India</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 bg-white shadow rounded">
            <h6>💰 Best Prices</h6>
            <p className="text-muted small">Budget-friendly products</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 bg-white shadow rounded">
            <h6>🔒 Secure Payment</h6>
            <p className="text-muted small">100% safe transactions</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-3 bg-white shadow rounded">
            <h6>📞 24/7 Support</h6>
            <p className="text-muted small">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Final Thank You Note */}
      <div className="text-center mt-4">
        <p className="text-muted">
          Thank you for being a part of the ShopCart family. Your trust motivates us to grow and serve better every day!
        </p>
      </div>
    </div>
  );
};

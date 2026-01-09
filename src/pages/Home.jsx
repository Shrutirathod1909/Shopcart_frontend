import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../Image/Img1.webp";
import Img2 from "../Image/Img2.webp";
import Img4 from "../Image/Img4.webp";

export const Home = () => {
  const [products, setProducts] = useState([]);

 useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("API Response:", data); // ✅ still useful for debugging
     setProducts(data);
; // ✅ this fixes the map() error
    })
    .catch((err) => {
      console.error("Failed to fetch products", err);
    });
}, []);



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="container-fluid px-3 px-md-5 mt-4">
      {/* 🔝 Slider */}
      <div className="mb-5">
        <Slider {...sliderSettings}>
          {[Img1, Img2, Img4].map((img, index) => (
            <div key={index}>
              {/* For Mobile */}
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="img-fluid d-block d-sm-none"
                style={{
                  height: "120px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              {/* For Desktop/Tablet */}
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="img-fluid d-none d-sm-block"
                style={{
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* 👋 Welcome */}
      <div className="bg-light p-5 shadow rounded text-center mb-5">
        <h1 className="fw-bold mb-3">
          Welcome to <span className="text-primary">ShopCart</span>
        </h1>
        <p className="lead">Your one-stop shop for electronics, fashion, and more!</p>
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.FWN0EC5sXwpY3vdkzh-qdQHaGD?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="ShopKart Banner"
          className="img-fluid mt-4 rounded shadow"
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
      </div>

      {/* 🛍 Products */}
      <h2 className="text-center mb-4">🛒 Trending Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <div className="overflow-hidden rounded-top-4">
<img
  src={product.image}
  alt={product.title}
  className="w-100 p-3"
  style={{ height: "250px", objectFit: "contain" }}
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/220x220.png?text=Image+Not+Found";
  }}
/>


                
              </div>
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <h6 className="card-title text-truncate mb-2">{product.title}</h6>
                <p className="text-success fw-semibold mb-3">₹{product.price}</p>
                <button className="btn btn-sm btn-outline-primary rounded-pill px-4">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./OurModal.css";
import Cross from "../../assets/cross.png";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import LOGO_1 from "../../assets/logo1.svg";
import LOGO_2 from "../../assets/logo2.svg";
import Rupee from "../../assets/rupee.svg";
import LIBRARY_LOGO from "../../assets/librarylogo.svg";
import NewLogo1 from "../../assets/NewLogo1.svg";
import Cycletrack1 from "../../assets/Cycletrack1.svg";
import HeatedPool from "../../assets/HeatedPool.svg";
import TreeMuseum from "../../assets/TreeMuseum.svg";

import Map from "../../assets/map.png";


const imgItems = [
  { text: "Children's Library", image: LIBRARY_LOGO },
  { text: "Ampitheare", image: NewLogo1 },
  { text: "Basket ball,volley ball", image: TreeMuseum },
  { text: "Heated pool", image: HeatedPool },
  { text: "Tree Museum", image: LIBRARY_LOGO },
  { text: "Cycling track", image: Cycletrack1 },
  { text: "Jogging track", image: LIBRARY_LOGO },
  { text: "Pet park", image: LIBRARY_LOGO },
];

const OurModal = ({ handleModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);
 const [show, setShow] = useState(false);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const itemsToShow= show ? imgItems : imgItems.slice(0, 2);
  return (
    <div className="modal-overlay" onClick={handleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleModal}>
          <img src={Cross} alt="" />
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <Carousel activeIndex={activeIndex} onSelect={handleImageClick}>
              {[Image1, Image2, Image3].map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 car-image"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="img-container">
              {[Image1, Image2, Image3].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>

          <div className="modal-info">
            <h4 className="heading top">Tangled Up In Green</h4>
            <h4 className="heading">Tangled Up In Green</h4>
            <p>
              Tangled Up In Green, a vision of Total Environment, is a luxury
              plotted development nestled amidst the lush landscapes of
              Devanahalli. This peaceful hideaway in North Bangalore sits on 115
              acres and has exclusive residential plots with a modern design and
              green living blend. The plots range from 1800 sq. ft. to 7200 sq.
              ft. You could be fascinated by the botanical wonders found at the
              Tree Museum or…
            </p>
            <hr />

            <div className="inner-container">
              <div className="inner-container_left">
                <div className="desktop">
                  <div className="upper-div">
                    <div className="box">
                      <h3>
                        <img src={Rupee} alt="" /> 1.4 Cr
                      </h3>
                      <p>(₹ 6,990 / Sq Ft )</p>
                    </div>
                    <div className="box">
                      <h3>
                        <img src={LOGO_1} alt="" />
                        Plot Size
                      </h3>
                      <p>1,800 to 7,200 Sq Ft</p>
                    </div>
                    <div className="box">
                      <h3>
                        <img src={LOGO_2} alt="" />
                        Area
                      </h3>
                      <p>115 Acres</p>
                    </div>
                  </div>
                  <hr className="separator" />
                  <div className="lower-div">
                    <div className="box">
                      <h3>Total Units</h3>
                      <p>968</p>
                    </div>
                    <div className="box">
                      <h3>Project Type</h3>
                      <p>Plotted Development</p>
                    </div>
                    <div className="box">
                      <h3>Status</h3>
                      <p>Newly Launched</p>
                    </div>
                  </div>
                </div>

                <div className="mobile">
                  <div className="single-div">
                    <div className="box">
                      <h4>
                        <img src={Rupee} alt="" /> 1.4 Cr
                      </h4>
                      <p>(₹ 6,990 / Sq Ft )</p>
                    </div>
                    <div className="box">
                      <h4>
                        <img src={LOGO_1} alt="" />
                        Plot Size
                      </h4>
                      <p>1,800 to 7,200 Sq Ft</p>
                    </div>
                    <div className="box">
                      <h4>
                        <img src={LOGO_2} alt="" />
                        Area
                      </h4>
                      <p>115 Acres</p>
                    </div>
                    <div className="box">
                      <h4>Total Units</h4>
                      <p>968</p>
                    </div>
                    <div className="box">
                      <h4>Project Type</h4>
                      <p>Plotted Development</p>
                    </div>
                    <div className="box">
                      <h4>Status</h4>
                      <p>Newly Launched</p>
                    </div>
                  </div>
                </div>

                <hr className="divider" />
                <div className="amnities-container">
                  <button onClick={()=>setShow(!show)} className="desktop">30+ Amenities</button>

                  <div className="card-container">
                    {itemsToShow.map((item, index) => (
                      <div className="card" key={index}>
                        <img src={item.image} alt="" width={36} height={36} />
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inner-container_right">
                <img src={Map} alt="" />
              </div>
            </div>
            <div className="desktop">
              <div className="button-container">
                <button className="button transparent">Chat Now</button>
                <button className="button transparent">Call Now</button>
                <button className="button regular">Schedule Site Visit</button>
              </div>
            </div>
            <div className="mobile mobile-btn-container">
              <div className="button-container">
                <button className="button transparent">Know More</button>
                <button className="button regular">Schedule Site Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurModal;

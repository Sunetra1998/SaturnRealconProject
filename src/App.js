import React, { useState } from "react";
import "./styles.css";
import OurModal from "./components/Modal/OurModal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <button className="Button" onClick={handleModal}>
        GET STARTED
      </button>
      {isOpen && <OurModal isOpen={isOpen} handleModal={handleModal} />}
    </div>
  );
}

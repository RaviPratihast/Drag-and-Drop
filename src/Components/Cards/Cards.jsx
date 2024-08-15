// src/Cards/Cards.jsx
import { useState } from "react";
import Modal from "react-modal";
import "./Cards.css";
// import { Draggable } from "react-draggable"; // Ensure this is installed
import Draggable from "react-draggable";
const Card = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowMore = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Draggable>
      <div className="card-container">
        <p>{text}</p>
        <button onClick={handleShowMore}>Show More</button>

        <Modal
          isOpen={isOpen}
          onRequestClose={handleClose}
          contentLabel="Card Details"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              padding: "20px",
            },
          }}
        >
          <h2>Dummy Text</h2>
          <p>{text}</p>
          <button onClick={handleClose}>Close</button>
        </Modal>
      </div>
    </Draggable>
  );
};

export default Card; // Ensure this line is present

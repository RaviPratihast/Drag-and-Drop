import { useState } from "react";
import Modal from "react-modal";
import "./Cards.css";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

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
      <div>
        <ResizableBox
          width={200}
          height={200}
          minConstraints={[100, 100]}
          maxConstraints={[300, 300]}
          style={{ border: "1px solid black", background: "#f0f0f0" }}
        >
          <p>{text}</p>
          <button onClick={handleShowMore}>Show More</button>
        </ResizableBox>

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

export default Card;

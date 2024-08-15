// src/components/Canvas.jsx
import { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import Card from "../Cards/Cards";
import "./CardPage.css";

const CardPage = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCardText = "This is some dummy text.";
    setCards([...cards, newCardText]);
  };

  return (
    <ArcherContainer strokeColor="red">
      <div className="card-page-container" style={{ padding: "20px" }}>
        <button onClick={addCard}>Add New Card</button>
        <div
          className="card-page-cards-container"
          style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}
        >
          {cards.map((text, index) => (
            <ArcherElement
              key={index}
              id={`card-${index}`}
              relations={
                index > 0
                  ? [
                      {
                        targetId: `card-${index - 1}`,
                        targetAnchor: "right",
                        sourceAnchor: "left",
                        style: { strokeColor: "black", strokeWidth: 2 },
                      },
                    ]
                  : []
              }
            >
              <div className="cards-container">
                <Card key={index} text={text} />
              </div>
            </ArcherElement>
          ))}
        </div>
      </div>
    </ArcherContainer>
  );
};

export default CardPage;

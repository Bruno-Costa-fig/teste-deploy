import React, { useState } from 'react';

const MedicationCard = ({ medication, onMedicationClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    padding: '10px',
    width: '200px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: '30px',
    border: isHovered ? '2px solid black' : 'none',
    boxShadow: isHovered ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'border 0.3s, box-shadow 0.3s, transform 0.3s',
    cursor: 'pointer',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onMedicationClick(medication);
  };

  return (
    <div
      style={cardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <h2>{medication.name}</h2>
      <img src={medication.imageURL} alt={medication.name} style={{ width: '100px', height: '100px', alignSelf: 'center' }} />
      <p>Price: ${medication.price}</p>
      <p>Type: {medication.type}</p>
    </div>
  );
};

export default MedicationCard;

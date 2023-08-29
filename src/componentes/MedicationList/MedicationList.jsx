import React from 'react';
import MedicationCard from '../../componentes/MedicationCard/MedicationCard';

const MedicationList = ({ medications, onMedicationClick }) => {
  const medicationListStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
  };

  return (
    <div style={medicationListStyles}>
      {!!medications && medications.map((medication,index) => (
        <MedicationCard
          key={index}
          medication={medication}
          onMedicationClick={onMedicationClick}
        />
      ))}
    </div>
  );
};

export default MedicationList;

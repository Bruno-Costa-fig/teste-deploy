import React from 'react';

const MedicationDetails = ({ medication, onClose }) => {
  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    width: '400px',
  };

  const contentStyles = {
    marginTop: '10px',
  };

  const closeButtonStyles = {
    alignSelf: 'flex-end', // Adicionando alinhamento à direita
    cursor: 'pointer',
    marginTop: '10px', // Espaçamento do botão em relação ao conteúdo
  };

  return (
    <div style={modalStyles}>
      <h2>{medication.name}</h2>
      <div style={contentStyles}>
        <p>Laboratório: {medication.laboratory}</p>
        <p>Dosagem: {medication.dosage}</p>
        <p>Preço: ${medication.price}</p>
        <p>Descrição: {medication.description}</p>
      </div>
      <button style={closeButtonStyles} onClick={onClose}>
        Fechar
      </button>
    </div>
  );
};

export default MedicationDetails;

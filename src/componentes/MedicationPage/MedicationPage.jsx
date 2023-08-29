import React, { useState } from 'react';
import MenuLateral from '../../componentes/MenuLateral/MenuLateral';
import Navbar from '../NavbarTelaDeCadastro/NavbarTelaDeCadastro';
import MedicationList from '../../componentes/MedicationList/MedicationList';
import MedicationDetails from '../MedicationDetails/MedicationDetails';

const MedicationPage = ({ medications }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Geral');
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [medicamentos, setMedicamentos] = useState(medications);

    const handleCategoryFilter = () => {
        if (selectedCategory === 'Geral') {
            return medications;
        } else {
            return medications.filter(medication => medication.type === selectedCategory);
        }
    };

    const handleClearFilter = () => {
        setSelectedCategory('Geral');
        setSearchTerm('');
    };

    const handleMedicationClick = (medication) => {
        setSelectedMedication(medication);
    };

    const handleModalClose = () => {
        setSelectedMedication(null);
    };

    const categoryOptions = ['Geral', 'Analgésicos', 'Antibióticos', 'Manipulados'];

    const displayedMedications = searchTerm ? 
        medications.filter(medication =>
            medication.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) : 
        handleCategoryFilter();

    const containerStyles = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const inputStyles = {
        padding: '5px',
        flex: '1',
    };

    const buttonStyles = {
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid #ccc',
        padding: '5px 10px',
        cursor: 'pointer',
        marginLeft: '5px',
    };

    const selectStyles = {
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '5px',
        marginLeft: '5px',
        cursor: 'pointer',
    };

    const modalOverlayStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    };

    return (
        <div className="medication-page">
            <Navbar />
            <MenuLateral />
            <div className="search-bar" style={{ marginTop: '-250px' }}>
                <h1>Lista de Medicamentos</h1>
                <div style={containerStyles}>
                    <input
                        type="text"
                        placeholder="Buscar medicamento"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={inputStyles}
                    />
                    <select
                        style={selectStyles}
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categoryOptions.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <button style={buttonStyles} onClick={handleClearFilter}>
                        Limpar Filtro
                    </button>
                </div>
            </div>
            <MedicationList medications={displayedMedications} onMedicationClick={handleMedicationClick} />

            {selectedMedication && (
                <div style={modalOverlayStyles}>
                    <MedicationDetails medication={selectedMedication} onClose={handleModalClose} />
                </div>
            )}
        </div>
    );
};

export default MedicationPage;

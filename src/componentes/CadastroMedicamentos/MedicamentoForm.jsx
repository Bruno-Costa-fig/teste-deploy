import React, { useEffect, useState } from 'react';
import MenuLateral from '../../componentes/MenuLateral/MenuLateral';
import NavbarTelaDeCadastro from '../../componentes/NavbarTelaDeCadastro/NavbarTelaDeCadastro';

const CadastroMedicamentos = () => {
    const [formData, setFormData] = useState({
        id: '4',
        name: '',
        nameLab: '',
        type: '',
        description: '',
        dosage: '',
        price: '',
        imageURL: 'https://www.piramidal.com.br/blog/wp-content/uploads/2020/06/shutterstock_1606862593-648x410.jpg'
    });
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [medicamentos, setMedicamentos] = useState([]);
    useEffect(()=>{
        const lista = JSON.parse(localStorage.getItem("medicamentos")) || []
        setMedicamentos(lista)
    },[])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const novoMedicamento = { ...formData };
            const novaLista = [...medicamentos, novoMedicamento]
            setMedicamentos(novaLista);
            localStorage.setItem("medicamentos",JSON.stringify(novaLista))
            setFeedbackMessage('Medicamento cadastrado com sucesso.');
            setTimeout(() => {
                setFeedbackMessage('');
            }, 3000);

            setFormData({
                id: '4',
                name: '',
                nameLab: '',
                type: '',
                description: '',
                dosage: '',
                price: '',
                imageURL: 'https://www.piramidal.com.br/blog/wp-content/uploads/2020/06/shutterstock_1606862593-648x410.jpg'
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '100px' }}>
            <NavbarTelaDeCadastro />
            <MenuLateral />

            <h2 style={{ fontSize: '40px', marginBottom: '20px', textAlign: 'left' }}>Cadastro de Medicamentos</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <input type="text" name="name" placeholder="Nome do Medicamento *"  onChange={handleInputChange} style={{ flex: '1', marginRight: '10px', width: '50%' }} />
                    <input type="text" name="nameLab" placeholder="Laboratório *"  onChange={handleInputChange} style={{ flex: '1', width: '50%' }} />
                </div>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <input type="text" name="dosage" placeholder="Dosagem *"  onChange={handleInputChange} style={{ flex: '1', marginRight: '10px', width: '50%' }} />
                    <select name="type" onChange={handleInputChange} required style={{ flex: '1', marginRight: '10px', width: '25%' }}>
                        <option value="controlado">Medicamento controlado</option>
                        <option value="comum">Medicamento comum</option>
                    </select>
                    <input type="number" step="0.01" name="price" placeholder="Preço Unitário *"  onChange={handleInputChange} style={{ flex: '1', width: '25%' }} />
                </div>
                <div>
                    <textarea
                        name="description"
                        placeholder="Descrição"
                        
                        onChange={handleInputChange}
                        style={{ width: '100%', height: '300px', margin: '0 auto', marginBottom: '10px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#4a90e2', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px', marginTop: '10px', width: '100px' }}>Cadastrar</button>
            </form>
            {feedbackMessage && <p style={{ color: '#ff7f7f', marginTop: '10px', fontSize: '14px', marginLeft: '50px' }}>{feedbackMessage}</p>}
        </div>
    );
};

export default CadastroMedicamentos;

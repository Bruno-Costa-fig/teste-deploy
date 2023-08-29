import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavbarTelaDeCadastro/NavbarTelaDeCadastro';
import Sidebar from '../MenuLateral/MenuLateral';

const CadastroFarmacia = ({ addPharmacy }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        razaoSocial: '',
        cnpj: '',
        nomeFantasia: '',
        email: '',
        telefone: '',
        celular: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        complemento: '',
        latitude: '',
        longitude: '',
    });

    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCepBlur = async () => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${formData.cep}/json/`);
            const data = await response.json();
            setFormData((prevData) => ({
                ...prevData,
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                estado: data.uf,
            }));
        } catch (error) {
            console.error(error);
        }
    };

    const handleClearForm = () => {
        setFormData({
            razaoSocial: '',
            cnpj: '',
            nomeFantasia: '',
            email: '',
            telefone: '',
            celular: '',
            cep: '',
            logradouro: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: '',
            latitude: '',
            longitude: '',
        });
        setFeedbackMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPharmacy = {
                id: Date.now(),
                ...formData
            };

            const existingPharmacies = JSON.parse(localStorage.getItem('pharmacies')) || [];
            existingPharmacies.push(newPharmacy);

            localStorage.setItem('pharmacies', JSON.stringify(existingPharmacies));

            addPharmacy(newPharmacy);

            setFeedbackMessage('Empresa cadastrada com sucesso.');
            setTimeout(() => {
                setFeedbackMessage('');
            }, 3000);

            navigate('/MapPage', { state: { newPharmacy } });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px' }}>
            <h2 style={{ fontSize: '40px', marginBottom: '20px', textAlign: 'left' }}>Cadastro de Farmácia</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', width: '100%' }}>
                    <Navbar />
                    <Sidebar />
                    <input type="text" name="razaoSocial" placeholder="Razão Social" onChange={handleInputChange} value={formData.razaoSocial} required style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="cnpj" placeholder="CNPJ" onChange={handleInputChange} value={formData.cnpj} required style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="nomeFantasia" placeholder="Nome Fantasia" onChange={handleInputChange} value={formData.nomeFantasia} required style={{ flex: '1', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', width: '100%' }}>
                    <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} value={formData.email} style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="telefone" placeholder="Telefone" onChange={handleInputChange} value={formData.telefone} style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="celular" placeholder="Celular" onChange={handleInputChange} value={formData.celular} required style={{ flex: '1', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div><hr /></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', width: '100%' }}>
                    <input type="text" name="cep" placeholder="CEP" onChange={handleInputChange} onBlur={handleCepBlur} value={formData.cep} required style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="logradouro" placeholder="Logradouro/Endereço" onChange={handleInputChange} value={formData.logradouro} required style={{ flex: '2', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="numero" placeholder="Número" onChange={handleInputChange} value={formData.numero} required style={{ flex: '1', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', width: '100%' }}>
                    <input type="text" name="bairro" placeholder="Bairro" onChange={handleInputChange} value={formData.bairro} required style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="cidade" placeholder="Cidade" onChange={handleInputChange} value={formData.cidade} required style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="estado" placeholder="Estado" onChange={handleInputChange} value={formData.estado} required style={{ flex: '1', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', width: '100%' }}>
                    <input type="text" name="complemento" placeholder="Complemento" onChange={handleInputChange} value={formData.complemento} style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="latitude" placeholder="Latitude" onChange={handleInputChange} value={formData.latitude} required style={{ flex: '1', padding: '10px', marginRight: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                    <input type="text" name="longitude" placeholder="Longitude" onChange={handleInputChange} value={formData.longitude} required style={{ flex: '1', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', width: '100%' }}>
                    <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#4a90e2', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px', marginLeft: '700px' }}>Salvar</button>
                    <button type="button" onClick={handleClearForm} style={{ padding: '8px 12px', backgroundColor: '#4a90e2', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px', marginLeft: '10px' }}>Limpar</button>
                </div>
            </form>
            {feedbackMessage && <p style={{ color: '#ff7f7f', marginTop: '10px', fontSize: '14px' }}>{feedbackMessage}</p>}
        </div>
    );
};

export default CadastroFarmacia;

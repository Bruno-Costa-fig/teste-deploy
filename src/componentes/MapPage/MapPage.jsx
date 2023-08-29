import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Navbar from '../NavbarTelaDeCadastro/NavbarTelaDeCadastro';
import MenuLateral from '../MenuLateral/MenuLateral';
import { useLocation } from 'react-router-dom';

const redHouseIcon = new L.Icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/1200px-Map_marker.svg.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const MapPage = () => {
    const [pharmacies, setPharmacies] = useState([
        // Farmácias iniciais
    ]);

    const location = useLocation();

    const addPharmacy = (newPharmacy) => {
        setPharmacies(prevPharmacies => [...prevPharmacies, newPharmacy]);
    };

    useEffect(() => {
        if (location.state && location.state.newPharmacy) {
            addPharmacy(location.state.newPharmacy);
        }
    }, [location.state]);

    return (
        <div>
            <div style={{ width: '85vw', height: '90vh', marginTop: '80px', marginLeft: '250px' }}>
                <MapContainer center={[-23.550520, -46.633308]} zoom={12} style={{ width: '100%', height: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {pharmacies.map(pharmacy => (
                        <Marker
                            key={pharmacy.id}
                            position={[pharmacy.latitude, pharmacy.longitude]}
                            icon={redHouseIcon}
                        >
                            <Popup>
                                <div>
                                    <h2>{pharmacy.name}</h2>
                                    <p><strong>Razão Social:</strong> {pharmacy.razaoSocial}</p>
                                    <p><strong>CNPJ:</strong> {pharmacy.cnpj}</p>
                                    <p><strong>Telefone:</strong> {pharmacy.telefone}</p>
                                    {/* Outras informações da farmácia */}
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
                <Navbar />
                <MenuLateral />
            </div>
        </div>
    );
};

export default MapPage;

import  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastroFarmacia from './componentes/CadastroFarmacia/CadastroFarmacia';
import Login from './componentes/TelaDeLogin/Login';
import MedicamentoForm from './componentes/CadastroMedicamentos/MedicamentoForm';
import MainScreen from './componentes/TelaPrincipal/Principal';
import MedicationPage from './componentes/MedicationPage/MedicationPage';
import CadastroForm from './componentes/CadastroUsuario/CadastroUsuario';
import FAQ from './componentes/FAQ/FAQ'
import AcompanharEntrega from './componentes/AcompanharEntrega/AcompanharEntrega'
import Troca from './componentes/Troca/Troca';
import MapPage from './componentes/MapPage/MapPage';
import 'leaflet/dist/leaflet.css';



// Dados de exemplo para medicamentos






//useEffect(()=>{ return medications = [...medications,medication]},[medication])






function App() {
  const [remedio,setRemedio]=useState([])
  const [pharmacies, setPharmacies] = useState([]);

  let medications = [
    { id: 1, name: 'Medicamento A', 
    imageURL:'https://www.piramidal.com.br/blog/wp-content/uploads/2020/06/shutterstock_1606862593-648x410.jpg', 
    type: 'Analgésicos', 
    description: 'Os analgésicos são medicamentos essenciais na busca pelo alívio da dor. Projetados para diminuir ou bloquear temporariamente as sensações desconfortáveis, eles oferecem um alívio valioso para uma variedade de condições, desde dores de cabeça cotidianas até dores pós-operatórias. Disponíveis em diferentes formas e forças, esses medicamentos atuam interferindo nos sinais de dor transmitidos ao cérebro, proporcionando uma sensação de conforto e bem-estar. No entanto, é importante usar os analgésicos com moderação e conforme as orientações médicas, a fim de evitar efeitos colaterais indesejados.', 
    dosage: '150mg', 
    price: 'R$ 90,00'  },
    { id: 2, name: 'Medicamento B', imageURL: 'data:image/jpeg;base64,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', type: 'Antibióticos', description: 'Os antibióticos desempenham um papel vital no combate às infecções bacterianas. Projetados para eliminar ou deter o crescimento de bactérias prejudiciais, esses medicamentos são fundamentais para restaurar a saúde e prevenir complicações mais graves. Desde infecções respiratórias até infecções de pele, os antibióticos direcionam suas ações destrutivas de maneira seletiva, protegendo as células saudáveis enquanto erradicam os agentes infecciosos. No entanto, o uso responsável é crucial para evitar a resistência bacteriana, garantindo que esses medicamentos permaneçam eficazes no longo prazo, sob a supervisão médica adequada.' , dosage: '80mg', price: 'R$ 150,00'},
    { id: 3, name: 'Medicamento C', imageURL: 'https://smokebuddies.com.br/wp-content/uploads/2019/11/frasco-conta-gotas.jpg', type: 'Manipulados', description: 'Medicamentos manipulados são criações farmacêuticas personalizadas, adaptadas às necessidades individuais de cada paciente. Preparados por farmácias de manipulação, esses medicamentos oferecem uma abordagem única, ajustando dosagens, ingredientes e formas de administração de acordo com as especificidades de tratamento de cada pessoa. Essa personalização possibilita soluções mais precisas para casos em que medicamentos comerciais não atendem completamente. No entanto, a confiança em profissionais qualificados e a adesão às instruções são cruciais para garantir a segurança e eficácia desses medicamentos adaptados.', dosage: '30mg', price: 'R$ 130.00'},
  
  
    // ... outros medicamentos
  ];
  

  function receberDados() {
    
    let medication = ""
    let med = [...medications]

      medication = JSON.parse(localStorage.getItem ("medicamentos")) || [] 
      if(medication.length > 0){
        med = [...medications,...medication]

      }
      return setRemedio(med)
  
  }

  useEffect(() => {receberDados()},[])  
  
  
 

  

  const addPharmacy = (newPharmacy) => {
    setPharmacies([...pharmacies, newPharmacy]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/cadastro-farmacia" element={<CadastroFarmacia addPharmacy={addPharmacy} />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-medicamento" element={<MedicamentoForm />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/MapPage" element={<MapPage />} />
        <Route path="/troca" element={<Troca />} />
        <Route path="/AcompanharEntrega" element={<AcompanharEntrega />} />
        <Route path="/listagem-medicamentos" element={<MedicationPage medications={remedio} />} />
        <Route path="/*" element={"Sorry page not found"} />
      </Routes>
    </Router>
  );
}

export default App;




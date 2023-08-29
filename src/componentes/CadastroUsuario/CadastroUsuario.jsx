import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroForm = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [identidade, setIdentidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (senha !== confirmarSenha) {
      setAlerta('As senhas não coincidem!');
      return;
    }
    setAlerta('Usuário cadastrado com sucesso!');
    // Aqui você pode adicionar lógica para enviar os dados para o backend, se necessário
    
    // Salvar os dados no localStorage
    const userData = { nome, cpf, identidade, telefone, email };
    localStorage.setItem('userData', JSON.stringify(userData));

    setNome('');
    setCpf('');
    setIdentidade('');
    setTelefone('');
    setSenha('');
    setConfirmarSenha('');
    setEmail('');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    form: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      width: '400px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    linkButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'transparent',
      color: '#007bff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    alert: {
      marginTop: '15px',
      color: 'green',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Cadastro de Usuário</h2>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} style={styles.input} required />
        <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} style={styles.input} required />
        <input type="text" placeholder="Identidade" value={identidade} onChange={(e) => setIdentidade(e.target.value)} style={styles.input} required />
        <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} style={styles.input} required />
        <input type="email" placeholder="E-mail válido" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
        <input type="password" placeholder="Senha (8 dígitos e números)" pattern="^\d{8}$" value={senha} onChange={(e) => setSenha(e.target.value)} style={styles.input} required />
        <input type="password" placeholder="Confirmar Senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} style={styles.input} required />
        <button type="submit" style={styles.button}>Cadastrar</button>
        <button type="button" onClick={() => navigate('/')} style={styles.linkButton}>
          Ir para a página de Login
        </button>
      </form>
      {alerta && <p style={styles.alert}>{alerta}</p>}
    </div>
  );
};

export default CadastroForm;

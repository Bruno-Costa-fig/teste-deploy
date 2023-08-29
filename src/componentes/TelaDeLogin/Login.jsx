import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from '../NavbarTelaDeLogin/Navbar';
import centralImage from '../TelaDeLogin/imagem.png';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmailPattern.test(email)) {
      setErrorMessage('E-mail inválido.');
      return;
    }

    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      setErrorMessage('A senha deve conter pelo menos 8 caracteres, incluindo números e letras.');
      return;
    }

    setErrorMessage('');
    alert('Usuário autenticado com sucesso !');

    navigate('/main');
  };

  return (
    <div>
      <div className="image-container">
        <img src={centralImage} alt="Imagem Central" />
        <h3>O melhor remédio é a prevenção</h3>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Navbar />
          <div>
            <h2>Login</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">Entrar</button>

          <Link to="/cadastro">Novo Usuário</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

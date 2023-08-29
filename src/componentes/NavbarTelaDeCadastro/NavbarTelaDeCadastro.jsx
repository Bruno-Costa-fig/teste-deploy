import React from 'react';
import '../../componentes/NavbarTelaDeCadastro/NavbarTelaDeCadastro';
import MinhaImagem from '../../componentes/NavbarTelaDeCadastro/imagem.png'; // Substitua pelo caminho correto da sua imagem

const Navbar = () => {
  const imageStyle = {
    width: '50px', // Tamanho da imagem
    height: 'auto', // Mantém a proporção original da imagem
    marginRight: '1px', // Espaço à direita da imagem para separá-la do texto
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <div className="contact-info">
          {/* Aqui você pode adicionar a imagem com os estilos inline */}
          <img src={MinhaImagem} alt="Minha Imagem" style={imageStyle} />
        </div>
        <p><b>DevInPharmacy</b></p>
      </div>
    </div>
  );
}

export default Navbar;

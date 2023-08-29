import React, { useState } from 'react';
import { FiHome, FiBarChart2, FiShoppingBag, FiRefreshCcw, FiSearch, FiEdit2, FiPenTool } from 'react-icons/fi';
import { FaHandPaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isItemHovered = (index) => {
    return hoveredItem === index;
  };

  const menuItems = [
    { to: '/main', icon: <FiHome style={{ fontSize: '30px', color: 'red' }} />, label: 'Home' },
    { to: '/MapPage', icon: <FiBarChart2 style={{ fontSize: '30px', color: 'red' }} />, label: 'Farmácias' },
    { to: '/listagem-medicamentos', icon: <FiShoppingBag style={{ fontSize: '30px', color: 'red' }} />, label: 'Medicamentos' },
    { to: '/troca', icon: <FiRefreshCcw style={{ fontSize: '30px', color: 'red' }} />, label: 'Troca' },
    { to: '/AcompanharEntrega', icon: <FiSearch style={{ fontSize: '30px', color: 'red' }} />, label: 'Acompanhar Pedido' },
    { to: '/cadastro-farmacia', icon: <FiPenTool style={{ fontSize: '30px', color: 'red' }} />, label: 'Cadastro de Farmácia' },
    { to: '/cadastro-medicamento', icon: <FiEdit2 style={{ fontSize: '30px', color: 'red' }} />, label: 'Cadastro de Medicamento' },
    { to: '/FAQ', icon: <FaHandPaper style={{ fontSize: '30px', color: 'red' }} />, label: 'FAQ' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.logo}></div>
        <nav style={styles.menu}>
          <ul style={styles.menuList}>
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                style={{
                  ...styles.menuItem,
                  color: isItemHovered(index) ? '#000000' : 'white',
                  backgroundColor: isItemHovered(index) ? '#ffffff' : 'transparent',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={menuItem.to} style={styles.link}>
                  <div style={styles.iconContainer}>
                    {menuItem.icon}
                  </div>
                  <span style={{ ...styles.menuText, fontWeight: 'bold' }}>{menuItem.label}</span>
                </Link>
              </li>
            ))}
            <li
              style={{
                ...styles.menuItem,
                marginTop: 'auto',
                color: isItemHovered(menuItems.length) ? 'white' : 'white',
                backgroundColor: isItemHovered(menuItems.length) ? 'red' : 'transparent',
              }}
              onMouseEnter={() => handleMouseEnter(menuItems.length)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" style={styles.link}>
                <span style={{ ...styles.menuText, fontWeight: 'bold' }}>Sair</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  sidebar: {
    width: '240px',
    height: '100vh',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    paddingLeft: '10px',
    position: 'fixed',
    top: 0,
    left: 0,
    borderRight: '2px solid black',
  },
  logo: {
    marginTop: '50px',
    fontSize: '24px',
    marginBottom: '50px',
  },
  menu: {
    width: '100%',
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    cursor: 'pointer',
    transition: 'background-color 0.8s ease, color 0.3s ease',
    borderRadius: '4px',
  },
  menuText: {
    fontSize: '18px',
    marginLeft: '10px',
  },
  iconContainer: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
  },
};

export default Sidebar;

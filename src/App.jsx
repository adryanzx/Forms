
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiUserFill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { RiMailFill } from 'react-icons/ri';
import './Form.css';


const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpf: '',
    
  });
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log(formData);
  };

  return (
    <div className="signup-form-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <IconContext.Provider value={{ className: 'icon' }}>
            <RiUserFill />
          </IconContext.Provider>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuário"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <IconContext.Provider value={{ className: 'icon' }}>
            <RiMailFill />
          </IconContext.Provider>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <IconContext.Provider value={{ className: 'icon' }}>
            <RiUserFill />
          </IconContext.Provider>
          <input
            type="number"
            id="cpf"
            name="cpf"
            placeholder="CPF (apenas números)"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <IconContext.Provider value={{ className: 'icon' }}>
            <RiLockPasswordFill />
          </IconContext.Provider>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>

    
  );
};

export default Form;

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push('/profile');
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente.")
    }
  }
  
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Título do caso"
          />
          <textarea
            value={description}
            onChange={event => setDescription(event.target.value)}
            placeholder="Descrição"
          />
          <input
            value={value}
            onChange={event => setValue(event.target.value)}
            placeholder="Valor em reais"
          />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

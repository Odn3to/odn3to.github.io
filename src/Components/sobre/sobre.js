import React from 'react';
import './sobre.css'

import fotoWelcome from '../../assets/foto_welcome.jpg';

const descricao = `Olá! Eu sou Odilon Martins, um desenvolvedor apaixonado por criar soluções inovadoras e impactantes.
    Trabalho com projetos de desenvolvimento web desde 2021, focando em interfaces limpas e uma experiência de usuário impecável. 
    Atuo no desdenvolvimento em Javascript, Typescript, PHP, Golang, C++, entre outras. Tenho experiência em React, JQuery, Gin,
    Angular, e outros mais. Busco sempre o conhecimento e atualização das Skills e tecnologias. Amante por completo pelo desenvolvimento
    de Softawares.`

const Sobre = () => (
    <div className="sobre-container">
    <div className="sobre-conteudo">
      <h1 className="sobre-titulo">Bem-vindo.</h1>
      <p className="sobre-descricao">{descricao}
      </p>
    </div>
    <div className="sobre-imagem">
      <img 
        src={fotoWelcome}
        alt="Ilustração sobre desenvolvimento" 
        className="imagem-destaque"
      />
    </div>
    </div>
);

export default Sobre;
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>Olá! Eu sou Odilon Martins, um desenvolvedor apaixonado por criar soluções incríveis.</p>
      </section>

      <section id="projetos">
        <h2>Meus Projetos</h2>
        <div className="projeto">
          <h3>Projeto 1</h3>
          <p>Descrição breve do projeto.</p>
        </div>
        <div className="projeto">
          <h3>Projeto 2</h3>
          <p>Descrição breve do projeto.</p>
        </div>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <p>Você pode entrar em contato comigo pelo e-mail: <a href="mailto:seuemail@example.com">seuemail@example.com</a></p>
      </section>

      <footer>
        <p>&copy; 2024 Meu Portfólio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

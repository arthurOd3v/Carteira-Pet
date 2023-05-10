import React from 'react';

function App() {
  return (
    <div className="main">
      <h1 className="titulo">Carteira PET</h1>

      <div className="campos">
        {' '}
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Senha" />
        <div className="buttons">
          {' '}
          <button>Login</button>
          <a href="./">Esqueceu sua senha?</a>
        </div>
      </div>
    </div>
  );
}

export default App;

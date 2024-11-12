//App1
import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState()

  function handleChangeName(){
    let novoNome = prompt('Novo Nome:')
    setAluno(novoNome)
  }

  return (
    <div>
      <h1>Bem vindo ao app</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={ handleChangeName }>
        Mudar Nome
      </button>
    </div>
  );
}

export default App;
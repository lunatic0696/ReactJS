//App1
import { useState } from "react";

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('0')

  const [user, setUser] = useState({})

  function handleRegister(e){
    e.preventDefault();
    alert('Usuário registrado com sucesso!')
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }

  return (
  <div>
    <form onSubmit={handleRegister}>
      <label>Nome:</label><br/>
      <input 
        placeholder="Digite seu Nome:"
        value={nome}
        onChange={ (e) => setNome(e.target.value)}/><br/>
      <label>E-mail:</label><br/>
      <input 
        placeholder="Digite seu e-mail:"
        value={email}
        onChange={ (e) => setEmail(e.target.value)}/><br/>
      <label>Idade:</label><br/>
      <input 
        placeholder="Digite sua idade:"
        value={idade}
        onChange={ (e) => setIdade(e.target.value)}/><br/>

      <button type="submit">Registrar</button>
    </form>

    <br/><br/>

    <div>
      <span>Bem vindo: {user.nome}</span><br/>
      <span>E-mail: {user.email}</span><br/>
      <span>Idade: {user.idade}</span><br/>
    </div>

  </div>
  );
}

export default App;
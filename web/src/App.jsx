import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { useState } from 'react'
import Login from './pages/login/Login';
import Matricula from './pages/Matricula/Matricula';
import './styles/global.css'

const stages = [
  {id: 1, name: "login"}, 
  {id: 2, name: "user"},
  {id: 3, name: "logoff"},
]
function App() {
  const [loginStage, setLoginStage] = useState(stages[0].name);


  const user = () => {
    setLoginStage(stages[1].name);
  }
  return (
    <div>
      {loginStage === "login" && <Login user={user}/>}
      {loginStage === "user" && <Matricula />}
      
    </div>
  )
}

export default App

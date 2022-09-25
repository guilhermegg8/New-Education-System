import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaLock, FaUser } from 'react-icons/fa'

export default function Login() {

    const navigate = useNavigate();

    //6 - controlled inputs
    // 3 - gerenciamento de dados 

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const handleName = (e) => {
        setName(e.target.value);
    }
    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {

        //validação
        //envio 

        event.preventDefault();
        console.log("Enviando o formulario");
        console.log(name, password);


        if (name !== 'aluno' || password !== '12345') {

        } else {
            alert("Login realizado com sucesso");
            navigate("/aluno/matricula");

        }

        // 7 - limpar formularios 
        setName("");
        setPassword("");
        // setBio("");
        // setRole("");

    }
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='signin-signup'>

                    <form className='sign-in-form' id='form' name='form' onSubmit={handleSubmit}>
                        <h2 className='title'>
                            Login <span>-</span> Aluno
                        </h2>

                        <div className='input-field'>
                            <FaUser className='icon' />
                            <input type='text' placeholder='Usuário' id='login' name='login' required onChange={handleName} />
                        </div>

                        <div className='input-field'>
                            <FaLock className='icon' />
                            <input type='password' placeholder='Senha' id='password' name='password' required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <a className='form-a' href='#'>Esqueceu sua senha?</a>
                        <input type='submit' value='Login' className='btn solid' />
                    </form>

                    <form action='#' className='sign-up-form'>
                        <h2 className='title'>
                            Login <span>-</span> Professor
                        </h2>

                        <div className='input-field'>
                            <FaUser className='icon' />
                            <input type='text' placeholder='Usuário' />
                        </div>

                        <div className='input-field'>
                            <FaLock className='icon' />
                            <input type='password' placeholder='Senha' />
                        </div>
                        <a className='form-a' href='#'>Esqueceu sua senha?</a>
                        <input type='submit' value='Login' className='btn solid' />
                    </form>
                </div>
            </div>

            <div className='panels-container'>
                <div className='panel left-panel'>
                    <div className='content'>
                        <h3>É um professor?</h3>
                        <p>Está do lado errado desse form, só clicar no botão que será levado ao local correto
                        </p>

                        <button className='btn transparent' id='sign-up-btn' onClick={modifyLogin}>
                            Login - Prof.
                        </button>
                    </div>

                    <img className='image' src='./img/bg3.svg' alt='Get in the rocket' />
                </div>


                <div className='panel right-panel'>
                    <div className='content'>
                        <h3>É um aluno?</h3>
                        <p>Está do lado errado desse form, só clicar no botão que será levado ao local correto
                        </p>

                        <button className='btn transparent' id='sign-in-btn'>
                            Login - Aluno
                        </button>
                    </div>

                    <img className='image' src='./img/register.svg' alt='Get in the rocket' />
                </div>
            </div>
        </div>
    );
}

function modifyLogin() {
    const btn_sing_in = document.querySelector('#sign-in-btn');
    const btn_sing_up = document.querySelector('#sign-up-btn');

    const container = document.querySelector('.container');

    btn_sing_up.addEventListener('click', () => {
        container.classList.add('sign-up-mode');
    });

    btn_sing_in.addEventListener('click', () => {
        container.classList.remove('sign-up-mode');
    });
}


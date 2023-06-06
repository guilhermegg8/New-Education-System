import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaLock, FaUser } from "react-icons/fa"

export default function Login() {

    const navigate = useNavigate();

    //controlled inputs
    //gerenciamento de dados aluno 

    const [nameAluno, setNameAluno] = useState("");
    const [passwordAluno, setPasswordAluno] = useState("");

    const handleSubmitAluno = (event) => {

        //validação
        //envio 

        event.preventDefault();
        console.log("Enviando o formulario");
        console.log(nameAluno, passwordAluno);


        if (nameAluno !== "aluno" || passwordAluno !== "12345") {

        } else {
            alert("Login realizado com sucesso");
            navigate("/aluno/matricula");

        }

        //limpar formularios 
        setNameAluno("");
        setPasswordAluno("");

    }

    // -------------------------------------------------------
    // controlled inputs
    // gerenciamento de dados professor

    const [nameProfessor, setNameProfessor] = useState("");
    const [passwordProfessor, setPasswordProfessor] = useState("");

    const handleSubmitProfessor = (event) => {

        //validação
        //envio 

        event.preventDefault();
        console.log("Enviando o formulario");
        console.log(nameProfessor, passwordProfessor);


        if (nameProfessor !== "professor" || passwordProfessor !== "12345") {

        } else {
            alert("Login realizado com sucesso");
            navigate("/professor/home");
            // navigate("/professor/declaracao-notas");
            // navigate("/professor/frequencia");
        }

        //limpar formularios 
        setNameProfessor("");
        setPasswordProfessor("");

    }
    return (
        <div className="containerLogin">
            <div className="form-container">
                <div className="signin-signup">

                    <form className="sign-in-form" id="form" name="form" onSubmit={handleSubmitAluno}>
                        <h2 className="title">
                            Login <span>-</span> Aluno
                        </h2>

                        <div className="input-field">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Usuário" id="login" name="login" required onChange={(e) => setNameAluno(e.target.value)} />
                        </div>

                        <div className="input-field">
                            <FaLock className="icon" />
                            <input type="password" placeholder="Senha" id="password" name="password" required onChange={(e) => setPasswordAluno(e.target.value)} />
                        </div>
                        <a className="form-a" href="#">Esqueceu sua senha?</a>
                        <input type="submit" value="Login" className="btn solid" />
                    </form>

                    <form action="#" className="sign-up-form" onSubmit={handleSubmitProfessor}>
                        <h2 className="title">
                            Login <span>-</span> Professor
                        </h2>

                        <div className="input-field">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Usuário" onChange={(e) => setNameProfessor(e.target.value)} />
                        </div>

                        <div className="input-field">
                            <FaLock className="icon" />
                            <input type="password" placeholder="Senha" onChange={(e) => setPasswordProfessor(e.target.value)} />
                        </div>
                        <a className="form-a" href="#">Esqueceu sua senha?</a>
                        <input type="submit" value="Login" className="btn solid" />
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>É um professor?</h3>
                        <p>Está do lado errado desse form, só clicar no botão que será levado ao local correto
                        </p>

                        <button className="btn transparent" id="sign-up-btn" onClick={modifyLogin}>
                            Login - Prof.
                        </button>
                    </div>

                    <img className="image" src="./img/bg3.svg" alt="Get in the rocket" />
                </div>


                <div className="panel right-panel">
                    <div className="content">
                        <h3>É um aluno?</h3>
                        <p>Está do lado errado desse form, só clicar no botão que será levado ao local correto
                        </p>

                        <button className="btn transparent" id="sign-in-btn">
                            Login - Aluno
                        </button>
                    </div>

                    <img className="image" src="./img/register.svg" alt="Get in the rocket" />
                </div>
            </div>
        </div>
    );
}

function modifyLogin() {
    const btn_sing_in = document.querySelector("#sign-in-btn");
    const btn_sing_up = document.querySelector("#sign-up-btn");

    const container = document.querySelector(".containerLogin");

    btn_sing_up.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });

    btn_sing_in.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
}


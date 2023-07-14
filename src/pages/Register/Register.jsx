import './Register.css'
import Cat from '../../assets/cat-animate.svg'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuthentication } from '../../hooks/UseAuthentication';


// import { FaEye } from 'react-icons/fa';
// import { FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser, erro: authError}

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais")
        }

        console.log(user)
    }




    // const [inputType, setInputType] = useState('password');

    // const handleClick = () => {
    //     if (inputType === 'password') {
    //         setInputType('text');
    //     } else {
    //         setInputType('password');
    //     }
    // };

    return (
        <div>
            <div className="main-login">

                <div className="left-login">
                    <h1>Crie uma conta <br />E entre para o nosso time</h1>
                    <img src={Cat} alt="Cat" className="left-login-image" />
                </div>

                <div className="right-login">
                    <div className="card-login">
                        <h1>CRIAR CONTA</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
                            <div className="textfield">
                                <label htmlFor="user">Usuario:</label>
                                <input
                                    type="name"
                                    name="user"
                                    placeholder="Usuario"
                                    className="inputs required"
                                    required
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                />
                                {/* <span className="span-required">Digite um email válido</span> */}
                            </div>

                            <br />
                            <div className="textfield">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="inputs required"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {/* <span className="span-required">Digite um email válido</span> */}
                            </div>

                            <br />
                            <div className="textfield">
                                <label htmlFor="senha">Senha:</label>
                                <input
                                    type="password"
                                    id="input"
                                    value={password}
                                    name="password"
                                    placeholder="Senha"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {/* <span id="visible" onClick={handleClick}>
                                {inputType === 'password' ? <FaEyeSlash /> : <FaEye />}
                            </span> */}
                                <br />
                            </div>

                            <div className="textfield">
                                <label htmlFor="senha"> Repita sua Senha:</label>
                                <input
                                    id="input"
                                    type="password"
                                    name="password"
                                    placeholder="Senha"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <br />
                            </div>

                            <div className='container-btn'>
                                <button className="button-login">CRIAR</button>
                                {error && <p className='error'>{error}</p>}
                            </div>

                        </form>

                        <div className="footer">
                            <p>Você já tem uma conta?</p>
                            <Link to="/">Acesse sua conta aqui</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;
import './Register.css'
import Cat from '../../assets/cat-animate.svg'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const [inputType, setInputType] = useState('password');

    const handleClick = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
    };

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

                        <div className="textfield">
                            <label htmlFor="usuario">Email:</label>
                            <input type="email" name="Email" placeholder="Email" className="inputs required" />
                            <span className="span-required">Digite um email válido</span>
                        </div>

                        <br />

                        <div className="textfield">
                            <label htmlFor="senha">Senha:</label>
                            <input id="input" type={inputType} name="password" placeholder="Senha" />
                            <span id="visible" onClick={handleClick}>
                                {inputType === 'password' ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            <br />
                        </div>

                        <div className="textfield">
                            <label htmlFor="senha"> Repita sua Senha:</label>
                            <input id="input" type="password" name="password" placeholder="Senha" />
                            <span className="span-required">Senhas devem ser compativeis!</span>
                            <br />
                        </div>

                        <button className="btn-login">CRIAR</button>

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
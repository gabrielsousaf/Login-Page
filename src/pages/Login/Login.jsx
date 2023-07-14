import '../Register/Register.css'
import Cat from '../../assets/cat-animate.svg'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Login = () => {

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
          <h1>Faça login <br />E entre para o nosso time</h1>
          <img src={Cat} alt="Cat" className="left-login-image" />
        </div>

        <div className="right-login">
          <div className="card-login">
            <h1>LOGIN</h1>
            <br />
            <form>
              <div className="textfield">
                <label htmlFor="usuario">Email:</label>
                <input type="email" name="Email" placeholder="Email" className="inputs required" />
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

              <div className='container-btn'>
                <button className="button-login">ENTRAR</button>
              </div>
            </form>



            <div className='footer'>
              <p>Voçê não tem uma conta?</p>
              <Link to="/register">Crie uma conta aqui</Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Login;
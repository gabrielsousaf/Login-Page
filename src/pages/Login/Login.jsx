import '../Register/Register.css'
import Cat from '../../assets/cat-animate.svg'

import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/UseAuthentication';
import { Link } from 'react-router-dom';
// import { FaEye } from 'react-icons/fa';
// import { FaEyeSlash } from 'react-icons/fa';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password
    }

    const res = await creteUser(user);

    console.log(res)
  }

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError])

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
            <form onSubmit={handleSubmit}>
              <div className="textfield">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="inputs required"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}   
                />
              </div>
              <br />

              <div className="textfield">
                <label htmlFor="senha">Senha:</label>
                <input 
                  id="input"
                  name="password"
                  placeholder="Senha" 
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>

             
              <div className='container-btn'>
                {!loading && <button className='button-login'>ENTRAR</button>}
                {loading && <button className='button-login' disabled >AGUARDE...</button>}
                {error && <p className='error'>{error}</p>}
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
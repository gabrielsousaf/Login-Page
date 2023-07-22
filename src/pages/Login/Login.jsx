import { Helmet } from 'react-helmet';
import '../Register/Register.css'
import Cat from '../../assets/cat-animate.svg'

import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/UseAuthentication';
import { Link } from 'react-router-dom';

import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login, loginWithGoogle, error: authError, loading } = useAuthentication()


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password
    }

    const res = await login(user);

    console.log(res)
  }

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();

    setError('');

    console.log('Ok')

    try {
      await loginWithGoogle();
    }
    catch (error){
      setError('Ocorreu um erro no login com o Google. Por favor, tente novamente!')
    }
  }

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError])

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div>
      <Helmet> <title>Form React Login</title> </Helmet>
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
                  type={showPassword ? 'text' : 'password'}
                  id="input"
                  name="password"
                  placeholder="Senha" 
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <br />
              </div>

             
              <div className='container-btn'>
                {!loading && <button className='button-login'>ENTRAR</button>}

                {!loading && <button className='button-google' onClick={handleLoginWithGoogle}>
                  <FaGoogle className='google-icon' />
                  ENTRAR COM GOOGLE
                </button>}

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

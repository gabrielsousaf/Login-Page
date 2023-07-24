import { Helmet } from 'react-helmet';

import './Register.css'
import Cat from '../../assets/cat-animate.svg'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuthentication } from '../../hooks/UseAuthentication';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Icon_Google from '../../assets/icons8-google.svg'


const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const { createUser, loginWithGoogle, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais")
            return;
        }

        const res = await createUser(user);

        console.log(res);
    }

    const handleLoginWithGoogle = async (e) => {
        e.preventDefault();

        setError('');

        console.log('Ok')

        try {
            await loginWithGoogle();
        }
        catch (error) {
            setError('Ocorreu um erro no login com o Google. Por favor, tenete novamente!')
        }
    }

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError])

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return (
        <div>
            <Helmet> <title>Form React Sign</title> </Helmet>
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
                            </div>

                            <br />
                            <div className="textfield">
                                <label htmlFor="senha">Senha:</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="input"
                                    value={password}
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
                                {!loading && <button className='button-login'>CRIAR</button>}

                                {!loading && <span onClick={handleLoginWithGoogle} className='button-google'>
                                    <img src={Icon_Google} />
                                </span>
                                }

                                {loading && <button className='button-login' disabled >AGUARDE...</button>}
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
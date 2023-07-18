import { Helmet } from 'react-helmet';
import './Dashboard.css'
import { useAuthentication } from "../../hooks/UseAuthentication"

const Dashboard = () => {

  const { logout } = useAuthentication();

  return (
    <div className='container'>
      <Helmet> <title>Form React Logout</title> </Helmet>
      <div className='content'>
      <h1>Voçê fez login</h1>
      <button className='logout' onClick={logout}>Sair</button>
      </div>
    </div>
  )
}

export default Dashboard
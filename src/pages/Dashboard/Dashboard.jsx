import './Dashboard.css'
import { useAuthentication } from "../../hooks/UseAuthentication"

const Dashboard = () => {

  const { logout } = useAuthentication();

  return (
    <div className='container'>
      <div className='content'>
      <h1>Voçê fez login</h1>
      <button onClick={logout}>Sair</button>
      </div>
    </div>
  )
}

export default Dashboard
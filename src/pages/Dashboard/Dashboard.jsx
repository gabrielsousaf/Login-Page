import { useAuthentication } from "../../hooks/UseAuthentication"

const Dashboard = () => {

  const { logout } = useAuthentication();

  return (
    <div>
      <h1>Teste</h1>
      <button onClick={logout}>Sair</button>
    </div>
  )
}

export default Dashboard
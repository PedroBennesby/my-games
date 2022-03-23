import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <>
      <h1>Teste autenticação</h1>
      <h2>User: {user ? 'login' : 'logout'}</h2>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

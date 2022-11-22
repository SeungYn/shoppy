import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AuthContext, { useAuth } from './context/AuthContext';

function App() {
  console.log(useAuth());
  return (
    <>
      <AuthContext>
        <Header />
        <Outlet />
      </AuthContext>
    </>
  );
}

export default App;

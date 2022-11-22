import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AuthContext from './context/AuthContext';

function App() {
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

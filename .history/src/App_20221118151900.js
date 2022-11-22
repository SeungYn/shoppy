import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  console.log(useAuth());
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

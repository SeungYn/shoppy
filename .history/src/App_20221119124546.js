import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './components/context/AuthContext';
import Header from './components/Header';

function App() {
  return (
    <>
      <QueryClientProvider client={QueryClient}>
        <AuthContextProvider>
          <Header />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

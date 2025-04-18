import { Outlet } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main className="flex-grow-1 px-3">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
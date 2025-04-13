import { Outlet } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-secondary">
      <Header />

      <main className="flex-grow-1 px-3">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
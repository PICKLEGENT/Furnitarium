import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/Catalog' Component={Catalog} />
                <Route path='/Cart' Component={Cart} />
                <Route path='/404' Component={NotFound} />
            </Routes>
        </>
    );
}

export default App;

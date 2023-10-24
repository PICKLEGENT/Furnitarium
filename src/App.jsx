import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/Home' Component={Home} />
                <Route path='/Cart' Component={Cart} />
                <Route path='*' Component={NotFound} />
            </Routes>
        </>
    );
}

export default App;

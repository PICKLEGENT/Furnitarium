import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    return (
        <header>
            <div className='logo'>
                <Link to='/' className='nav-link'>
                    furnitarium
                </Link>
            </div>
            <NavBar />
            <div className='header-buttons'>
                <Link to='/cart' className='nav-link'>
                    Корзина
                </Link>
                <Link to='/cart' className='nav-link'>
                    Войти
                </Link>
            </div>
        </header>
    );
}

export default Header;

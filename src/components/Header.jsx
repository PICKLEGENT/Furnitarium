import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    return (
        <header>
            <div className='logo'>
                <Link to='/' className='logo-link'>
                    furnitarium
                </Link>
            </div>
            <NavBar />
            <div className='header-buttons'>
                <Link to='/Cart' className='header-button-link'>
                    Корзина
                </Link>
                <Link to='/' className='header-button-link'>
                    Войти
                </Link>
            </div>
        </header>
    );
}

export default Header;

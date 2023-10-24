import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
    return (
        <header>
            <div className='logo'>
                <Link to='/Home' className='nav-link'>
                    furnitarium
                </Link>
            </div>
            <NavBar />
            <div className='header-buttons'>
                <Link to='/Cart' className='nav-link'>
                    Корзина
                </Link>
                <Link to='/' className='nav-link'>
                    Войти
                </Link>
            </div>
        </header>
    );
}

export default Header;

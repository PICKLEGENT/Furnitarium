import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <main className='not-found'>
                <h1 className='not-found_heading'>404</h1>
                <h2 className='not-found_heading'>Страница не найдена</h2>
                <div className='not-found_buttons'>
                    <Link to='/Home' className='nav-link'>
                        Главная
                    </Link>
                    <Link to='/' className='nav-link'>
                        Поддержка
                    </Link>
                </div>
            </main>
        </>
    );
}

export default NotFound;

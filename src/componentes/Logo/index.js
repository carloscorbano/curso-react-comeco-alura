import logo from './../../imagens/logo.svg';
import './estilo.css';

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} 
                alt='Logo Alura Books' 
                className='logo__img'></img>
            <p className='logo__texto'><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;
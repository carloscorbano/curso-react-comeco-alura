import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../OpcoesIcones';
import './estilo.css';

function Header() {
    return (
        <header className='header'>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    );
}

export default Header;
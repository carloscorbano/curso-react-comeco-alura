import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [ {img: perfil, alt: 'perfil'}, { img: sacola, alt: 'sacola'}];

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone) => (
                <li className='icone'><img src={icone.img} alt={icone.alt}></img></li>
            )) }
        </ul>
   );
}

export default IconesHeader;
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [ {img: perfil, alt: 'perfil'}, { img: sacola, alt: 'sacola'}];

const ListaIcones = styled.ul`
    display: flex;
    align-items: center;
`;

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`;

function IconesHeader() {
    return (
        <ListaIcones>
            { icones.map( (icone) => (
                <Icone><img src={icone.img} alt={icone.alt}></img></Icone>
            )) }
        </ListaIcones>
   );
}

export default IconesHeader;
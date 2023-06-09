import { Link } from "react-router-dom";
import styled from "styled-components";

const ListaOpcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    weight: 600;

    &:visited, &:link, &:hover, &:active {
      color: #000;
    }
`;

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

function OpcoesHeader() {
    return (
        <ListaOpcoes>
          { textoOpcoes.map( (texto) => (
            <StyledLink to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></StyledLink>
          )) }
       </ListaOpcoes>
    );
}

export default OpcoesHeader;
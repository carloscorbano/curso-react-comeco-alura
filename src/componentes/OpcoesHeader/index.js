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

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

function OpcoesHeader() {
    return (
        <ListaOpcoes>
          { textoOpcoes.map( (texto) => (
            <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
          )) }
       </ListaOpcoes>
    );
}

export default OpcoesHeader;
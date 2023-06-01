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

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <ListaOpcoes>
          { textoOpcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>
          )) }
       </ListaOpcoes>
    );
}

export default OpcoesHeader;
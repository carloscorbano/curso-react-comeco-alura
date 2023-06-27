import Pesquisa from '../componentes/Pesquisa'
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 160%);
  margin: 0;
  padding: 0;
`;

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;

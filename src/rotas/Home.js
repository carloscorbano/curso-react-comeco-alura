import Pesquisa from '../componentes/Pesquisa'
import styled from 'styled-components';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 160%);
  margin: 0;
  padding: 0;
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;

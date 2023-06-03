import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa'
import styled from 'styled-components';
import UltimosLancamentos from './componentes/UltimosLancamentos';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 160%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;

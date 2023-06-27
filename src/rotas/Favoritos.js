import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 160%);
  margin: 0;
  padding: 0;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  
  async function fetchFavoritos() {
    const favoritosAPI = await getFavoritos(); 
    setFavoritos(favoritosAPI);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);


  return (
    <AppContainer>
      {
        favoritos.map( favorito => (
          <p>{favorito.nome}</p>
        ))
      }
    </AppContainer>
  );
}

export default Favoritos;

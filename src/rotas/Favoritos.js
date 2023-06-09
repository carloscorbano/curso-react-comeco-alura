import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 160%);
  margin: 0;
  padding: 0;
`;

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    text-align: center;
    padding: 10px 100px;

    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 50px 0;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  
  async function fetchFavoritos() {
    const favoritosAPI = await getFavoritos(); 
    setFavoritos(favoritosAPI);
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro de id:${id} deletado.`);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);


  return (
    <AppContainer>
       <div>
       <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoContainer>
         {
           favoritos.length !== 0 ? favoritos.map(favorito => (
             <Resultado onClick={() => deletarFavorito(favorito.id)}>
               <p>{favorito.nome}</p>
               <img src={`./imagens/${favorito.img}`} alt="Capa livro"/>
             </Resultado>
           )) : null
         }
       </ResultadoContainer>
     </div>
    </AppContainer>
  );
}

export default Favoritos;

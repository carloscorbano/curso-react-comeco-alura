import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "./../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 160%);
    color: #FFF;
    text-align: center;
    height: 100%;
    width: 100%;
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 2.5rem;
`;

const Subtitulo = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 40px;
`;

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    margin: 10vh 10vw;
`;

const CartaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #326589;
    border-radius: 2%;
    box-shadow: 2px 2px 5px #002F52;
    cursor: pointer;
    background: #002F52;
    margin-top: 10px;

&:hover {
    background: #326589;
}
`;

const CartaoTitulo = styled.p`
font-size: 1rem;
text-shadow: 1px 1px #002F52;
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, []);

    async function fetchLivros() {
        const livrosDaAPI = await getLivros();
        setLivros(livrosDaAPI);
    }

    async function insertFavorito(id) {
        try {
            await postFavorito(id);
            alert(`Livro de id: ${id} inserido!`);
        } catch(error) {
            switch(error.response.status) {
                case 304:
                    alert(`Livro ${id} não foi inserido nos favoritos pois já contêm esse livro.`);
                    break;
                default:
                    break;
            }

        }
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                type="text" 
                placeholder="Escreva sua próxima leitura" 
                onBlur={evento => { 
                    const textoDigitado = evento.target.value.toLowerCase();
                    const resultadoPesquisa = livros.filter( livro => livro.nome.toLowerCase().includes(textoDigitado));

                    setLivrosPesquisados(resultadoPesquisa);
                }}
            />
            
            <ResultadoContainer>
                {
                    livrosPesquisados.map(livro => (
                        <CartaoContainer onClick={() => insertFavorito(livro.id)} >
                            <img src={`./imagens/${livro.img}`} alt={`Capa do livro ${livro.nome}`} />
                            <CartaoTitulo>{livro.nome}</CartaoTitulo>
                        </CartaoContainer>
                    ) )
                }
            </ResultadoContainer>
        </PesquisaContainer>
    );
}

export default Pesquisa;
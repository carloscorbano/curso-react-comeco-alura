import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradiend(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
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

const ResultadoContainer = styled.section`
    width: 100%;
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 20px;
    padding: 50px;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 160%);
    align-content: space-between;
    justify-content: space-around;
`;

const CartaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #326589;
    border-radius: 2%;
    box-shadow: 2px 2px 5px #002F52;
    cursor: pointer;

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
                        <CartaoContainer>
                            <img src={livro.src} alt='capa livro' />
                            <CartaoTitulo>{livro.nome}</CartaoTitulo>
                        </CartaoContainer>
                    ) )
                }
            </ResultadoContainer>
        </PesquisaContainer>
    );
}

export default Pesquisa;
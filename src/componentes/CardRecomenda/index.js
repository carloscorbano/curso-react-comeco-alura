import styled from "styled-components";
import { Titulo } from "../Titulo";

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #c0c0c0;
border-radius: 25px;
padding: 2vh 5vw;
background-image: linear-gradient(90deg, #cfcfcf, #c0c0c0 200%);
box-shadow: 0px 0px 10px #c0c0c0;
margin-bottom: 10px;
`;

const CardAreaInterna = styled.div`
    display: flex;
    gap: 5%;
    padding: 1vh 2vw;
`;

const CardImg = styled.img`
    width: 30%;
`;

const CardDados = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Subtitulo = styled.h4`
    color: #707070;
    font-size: 1.75rem;
`;

const Descricao = styled.p`
    color: #808080;
`;

const Botao = styled.button`
margin-top: 25px;
padding: 25px 35px;
border-radius: 20px;
border: 1px solid #b0b0b0;
background: #c0c0c0;
color: #808080;
width: 100%;

&:hover {
    background: #b0b0b0;
}
`;

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
    return (
        <Card>
            <Titulo tamanhoFonte="1.5rem" cor="#808080">{titulo}</Titulo>
            <CardAreaInterna>
                <CardImg src={img} alt={`Capa do livro ${descricao}`} />
                <CardDados>
                    <Subtitulo>{subtitulo}</Subtitulo>
                    <Descricao>{descricao}</Descricao>
                    <Botao>Saiba mais</Botao>
                </CardDados>
            </CardAreaInterna>
        </Card>
    );
}

export default CardRecomenda;
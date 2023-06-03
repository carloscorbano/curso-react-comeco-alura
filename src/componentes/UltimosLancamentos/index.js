import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import styled from 'styled-components';
import livroAngularImg from "../../imagens/Angular-11-e-Firebase.png"

const UltimosLancamentosContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*background: #efefef;*/
    background-image: linear-gradient(-180deg, #e0e0e0 0%, #efefef 120%);
    box-shadow: 0px -1px 5px #000000;
`;

const CapasContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const CapaImg = styled.img`
    max-width: fit-content(10em);
    margin: 15px;
    cursor: pointer;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="2rem">
                    ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <CapasContainer>
                {
                    livros.map( livro => (
                        <CapaImg src={livro.src} alt='capa livro' />
                    ))
                }
            </CapasContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={livroAngularImg}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;
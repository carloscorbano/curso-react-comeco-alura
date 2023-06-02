import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*background: #efefef;*/
    background-image: linear-gradient(-180deg, #e0e0e0 0%, #efefef 120%);
    box-shadow: 0px -1px 5px #000000;
`;

const Titulo = styled.h2`
    width: 100%;
    text-align: center;
    color: #ffa000;
    font-size: 2rem;
`;

const CapasContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CapaImg = styled.img`
width: 15vw;
margin: 15px;
cursor: pointer;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <CapasContainer>
                {
                    livros.map( livro => (
                        <CapaImg src={livro.src} alt='capa livro' />
                    ))
                }
            </CapasContainer>
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;
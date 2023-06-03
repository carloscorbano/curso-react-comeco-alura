import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    text-align: ${ props => props.alinhamento || 'center' };
    color: ${ props => props.cor || '#000' };
    font-size: ${ props => props.tamanhoFonte || '1rem' };
`;
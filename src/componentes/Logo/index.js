import logo from './../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    gap: 10px;
    margin: 0;
    cursor: pointer;
`;

const LogoImg = styled.img`
    margin-left: 2vh;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImg 
                src={logo} 
                alt='Logo Alura Books' />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo;
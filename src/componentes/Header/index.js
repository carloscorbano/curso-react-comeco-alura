import styled from 'styled-components';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    
    &:visited {
        color: #000;
        weight: 400;
    }
`;


function Header() {
    return (
        <HeaderContainer>
            <StyledLink to="/">
                <Logo />
            </StyledLink>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    );
}

export default Header;
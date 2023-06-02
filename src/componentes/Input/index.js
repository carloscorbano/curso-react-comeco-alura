import styled from "styled-components";

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;

    &::placeholder {
        color: #FFF;
        font-size: 1rem;
    }
`;

export default Input;
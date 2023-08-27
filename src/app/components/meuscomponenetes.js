
import styled from 'styled-components';

export const BotaoNeo = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #09BAB4;
    color: #ffffff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    &:hover {
        background-color: #089590;
    }
`;
export const Menus = styled.nav`
    display: flex;
    flex-wrap: wrap; /* Permite que os itens do menu se ajustem à tela pequena */
    align-items: center;
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Menuitem = styled.a`
    text-decoration: none;
    color: #000000;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
        color: #09BAB4;
    }
`;

export const Footer = styled.a`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #000;
    padding: 10px;
`;

export const Pbranco = styled.p`
    color: #ffffff;

`;

export const Body = styled.body`
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    margin = 0;
    padding = 0;
`;

export const TituloVerdeNeo = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 60px;
    color: #09BAB4;
    font-weight: 600;
`;
'use client'
import React from 'react';
import { BotaoNeo, MenuNeoPorto, LinksNeo, Footer, Pbranco, Body, TituloVerdeNeo } from './components/meuscomponenetes'; // Importe os componentes estilizados
export default function Home() {
    return (
        <Body>
            <MenuNeoPorto>

            <LinksNeo href="#">Home</LinksNeo>
            <LinksNeo href="#">NEO Porto</LinksNeo>
            <LinksNeo href="#">Equipe</LinksNeo>

            </MenuNeoPorto>

            <TituloVerdeNeo>Conheça a NeoPorto</TituloVerdeNeo>
            <BotaoNeo>Saiba mais</BotaoNeo>
            <Footer>
                <div>
                    <Pbranco>Uma iniciativa Porto Seguro</Pbranco>
                    <Pbranco>&copy; 2023 Todos os direitos reservados.</Pbranco>
                </div>
            </Footer>
        </Body>
    );
}


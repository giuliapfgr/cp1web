'use client'
// pages/index.js
import React from 'react';
import { BotaoNeo, Menus, Menuitem, Footer, Pbranco, Body, TituloVerdeNeo } from './components/meuscomponenetes'; // Importe os componentes estilizados
export default function Home() {
    return (
        <Body>
            <Menus>
            <Menuitem href="#">Home</Menuitem>
            <Menuitem href="#">NEO Porto</Menuitem>
            <Menuitem href="#">Equipe</Menuitem>
            </Menus>
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


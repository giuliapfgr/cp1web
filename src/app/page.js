'use client'

import Image from 'next/image'
import {ImagemCelular} from './components/ImagemCelular'
import { BoxDiv1 } from './components/BoxDiv1';
import { CelularTexto } from './components/CelularTexto';
import { BoxPqNeo } from './components/BoxPqNeo';
import { TituloNeo } from './components/TituloNeo';
import {BoxSistemaRastreamento} from './components/BoxSistemaRastreamento'
import { ImageDiv1 } from './components/ImagemDiv1';
import { BoxImg1 } from './components/BoxImg1';
import {ImagemPorqueNeoPorto} from './components/ImagemPorqueNeoPorto'
import { ImageWrapper } from './components/ImageWrapper';
import { BotaoNeo, MenuNeoPorto, LinksNeo, Footer, Pbranco, Body, } from './components/meuscomponenetes';

export default function Home() {

    
    const imagemEstilo = {
        display: 'block', 
        margin: '0 auto',
        maxWidth: '50%', 
    };
    
    return (
    <Body>

        <MenuNeoPorto>
            <Image src='/logoNeoPorto.png' 
            width={90}
            height={90}
            alt="Logo neoPorto"
            style={imagemEstilo}
            /> 
        </MenuNeoPorto>

        <BoxDiv1> 
            <TituloNeo>Conheça a NeoPorto</TituloNeo>
            <p>O novo sistema de solicitação de guinchos para carros pesados da Porto Seguro!</p>
                <BoxImg1 style={{display: 'flex', flexDirection: 'row'}}>
                <ImageDiv1 src='motorista_celular.jpg'/>
                <ImageDiv1 src='guinchosite.png'/>
                </BoxImg1>
                <BotaoNeo>Visualizar</BotaoNeo>
        </BoxDiv1>

        <TituloNeo><br></br>Nossa plataforma auxiliará os usuários a fornecer as informações necessárias sobre características específicas do veículo.</TituloNeo>
        
        <div>
            <CelularTexto>
                <ImagemCelular src='imagemChat.png'/>
                <p>NeoPorto é um sistema desenvolvido especialmente para veículos pesados, com o objetivo de simplificar e tornar mais assertiva a comunicação durante a solicitação de guinchos.</p>
            </CelularTexto>
        </div>

            <BoxPqNeo>
                <ImagemPorqueNeoPorto src='imagem_caminhoneiro.jpg'/>
                <TituloNeo>Por que escolher a NeoPorto?</TituloNeo>
                <p>Ao utilizar nosso sistema, os usuários terão acesso a um processo simplificado e intuitivo. Por meio das conversas via aplicativo de nossa AI, o sistema guiará os usuários para fornecerem as informações relevantes sobre o veículo, como tamanho, peso e chassi.</p>
            </BoxPqNeo>
            <BoxSistemaRastreamento>
                <TituloNeo>Sistema de Rastreamento</TituloNeo>
                <CelularTexto>
                    <p>A NeoPorto conta com um sistema de rastreamento desde o momento que o guincho sai do local de partida até ondeo cliente está localizado, ajudando com a ansiedade do cliente.</p>
                    <ImagemCelular src='celularRastreio.png'/>
                </CelularTexto>
            </BoxSistemaRastreamento>

        <div>
            <TituloNeo>Reconhecimento de imagem</TituloNeo>
            <CelularTexto>
            <ImagemCelular src='reconhecimento_img.png'/>
            <p>A NeoPorto conta com um sistema de rastreamento desde o momento que o guincho sai do local de partida até ondeo cliente está localizado, ajudando com a ansiedade do cliente.</p>
            </CelularTexto>
        </div>
    </Body>
    );
}


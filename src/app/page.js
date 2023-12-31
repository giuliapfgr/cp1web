'use client'

import Head from 'next/head'
import Image from 'next/image'
import { BoxDiv1, BoxImg1, BoxPqNeo, BoxSistemaRastreamento, Divrow, CelularTexto } from './components/BoxDiv';
import { ImagemPorqueNeoPorto, ImageDiv1, ImagemCelular, LogoNeoPorto } from './components/Imagem';
import { TituloNeo, Titulo1 } from './components/TituloNeo';
import { MenuNeoPorto, Body, } from './components/meuscomponenetes';

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
            <Titulo1>Conheça a NeoPorto</Titulo1>
            <p>O novo sistema de solicitação de guinchos para carros pesados da Porto Seguro!</p>
                <BoxImg1 style={{display: 'flex', flexDirection: 'row'}}>
                <ImageDiv1 src='caminhoneiro_no_celular.webp'/>
                <ImageDiv1 src='guinchosite.png'/>
                </BoxImg1>
        </BoxDiv1>

        <TituloNeo>Nossa plataforma auxiliará os usuários a fornecer as informações necessárias sobre características específicas do veículo.</TituloNeo>
        
        <div>
            <CelularTexto>
                <Divrow><ImagemCelular src='dialogo.png'/>
                <p>NeoPorto é um sistema desenvolvido especialmente para veículos pesados, com o objetivo de simplificar e 
                    tornar mais assertiva a comunicação durante a solicitação de guinchos.</p></Divrow>
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
                    <Divrow>
                    <p>A NeoPorto conta com um sistema de rastreamento desde o momento que o guincho sai do local de partida até ondeo cliente está localizado, ajudando com a ansiedade do cliente.</p>
                    <ImagemCelular src='celularRastreio.png'/>
                    </Divrow>
                </CelularTexto>
            </BoxSistemaRastreamento>
        <div>
            <TituloNeo>Reconhecimento de imagem</TituloNeo>
            <CelularTexto>
                <Divrow>
            <ImagemCelular src='reconhecimento_img.png'/>
            <p>A NeoPorto conta com um sistema de rastreamento desde o momento que o guincho sai do local de partida até ondeo cliente está localizado, ajudando com a ansiedade do cliente.</p>
            </Divrow>
            
            </CelularTexto>
        </div>
    </Body>
    );
}


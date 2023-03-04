<p align="center">
  <img src="https://lh3.googleusercontent.com/jCDzmiO_lhWfIaA4XNH0d__TLPWJl-lr1h-u1sUe5WOBtESaY-8l5A-HnqN_xI81QA6DTMPONI_gt3VGqn53oKKZ8D-UHnvHNYkD3H51Ru3wi4WFdJzxZyhwZAFrYW2gEr5Wvpip=w300" />
</p>

## Descrição do Projeto💡
O objetivo deste projeto é ser um desafio composto de 3 questões, que são atualizadas diariamente, para que estudantes se preparem para o vestibular.  Essa é a primeira versão, que foi construída para web, com objetivo de validar a ideia de tornar o estudo mais divertido para estudantes que buscam aprovação nas universidades públicas brasileiras.

> Status do Projeto: Concluído ✅ 

## Funcionalidades 🏗️

- [X] Usuário pode responder 3 questões de vestibular
- [X] Usuário tem apenas  3 minutos para responder cada questão
- [X] Som é emitido ao acertar ou errar uma questão
- [X]  Ao responder, a questão é corrigida automaticamente 
- [X]  Ao responder, o usuário pode ver a porcentagem de respostas em cada alternativa da questão

## Protótipo Navegável🧪

O protótipo navegável feito no Figma pode ser acessado  [clicando aqui](https://www.figma.com/proto/F7I0FEUnjvxIuyVMLkcTj4/N%C3%A3o-Chute---MVP-v1?node-id=301:2&scaling=contain&page-id=0:1&starting-point-node-id=301:2).

![Home Não Chute](https://lh3.googleusercontent.com/zwEp3qEninWZCFyPPGG2Uy7kLyZqtXT-dZ6pQcUj_sBluU1jkfrcUisIG2ll4MsC_uuKg5Xfx-2j99ZwPPMGA4uhXpUykNm4zDmWrpDry1HW2j8VpUkK3TP5INaf2ynBQRXGcNgs=w00)

## Tecnologias utilizadas 🧑🏽‍💻

| Technology | Version |
|:---:|:---:|
|  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="50px"/>| 18.2.0 |
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" height="50px"/>| 13.0.6 |
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50px"/>| 4.9.4 |

> O layout foi estruturado utilizando a biblioteca **[Chakra UI](https://chakra-ui.com/)** 💛

## Estrutura dos componentes ⚛️
 
 Neste projeto resolvi me aventurar e fazer a utilização da [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/) para criar uma estrutura hierárquica de componentes com apenas uma responsabilidade.

```mermaid 
flowchart LR
id1(Átomos) --> id2(Moléculas) --> id3(Organismos) --> id4(Templates) --> id5(Páginas)
 ```

> Utilizando Atomic Design percebi que houve uma melhora na qualidade de código e na facilidade de manutenção  ⚙️

## Como rodar a aplicação 🚀

No terminal clone o projeto:

    git clone https://github.com/GabrielGalatti/nao-chute.git

Entre na pasta do projeto:

    cd nao-chute

Instale as dependências necessárias:

    yarn install

Execute a aplicação:

    yarn start

> ⚠️ **A aplicação necessita que seu backend esteja rodando** para que funcione em perfeito estado, mas **o repositório do backend segue privado** por enquanto ⚠️

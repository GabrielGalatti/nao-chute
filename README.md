<p align="center">
  <img src="https://lh3.googleusercontent.com/jCDzmiO_lhWfIaA4XNH0d__TLPWJl-lr1h-u1sUe5WOBtESaY-8l5A-HnqN_xI81QA6DTMPONI_gt3VGqn53oKKZ8D-UHnvHNYkD3H51Ru3wi4WFdJzxZyhwZAFrYW2gEr5Wvpip=w300" />
</p>

<p align="center">
  <a href="https://github.com/GabrielGalatti/jutsu-ui/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/GabrielGalatti/jutsu-ui"/>
  </a>
  <img alt="Github Stars" src="https://badgen.net/github/stars/GabrielGalatti/nao-chute" />
</p>

## Project description💡
The objective of this project is to be a challenge composed of 3 questions, which are updated daily, so that students can prepare for the entrance exam. This is the first version, which was built for the web, with the aim of validating the idea of making studying more fun for students seeking approval in Brazilian public universities.

> Project Status: Completed ✅ 

## Features 🏗️

- [X] User can answer 3 entrance exam questions
- [X] User has only 3 minutes to answer each question
- [X] Sound is played when getting a question right or wrong
- [X] When answering, the question is automatically corrected
- [X] When answering, the user can see the percentage of answers in each alternative of the question

## Prototype🧪

The navigable prototype made in Figma can be accessed by [clicking here](https://www.figma.com/proto/F7I0FEUnjvxIuyVMLkcTj4/N%C3%A3o-Chute---MVP-v1?node-id=301:2&scaling=contain&page-id=0:1&starting-point-node-id=301:2).

![Home Não Chute](https://lh3.googleusercontent.com/zwEp3qEninWZCFyPPGG2Uy7kLyZqtXT-dZ6pQcUj_sBluU1jkfrcUisIG2ll4MsC_uuKg5Xfx-2j99ZwPPMGA4uhXpUykNm4zDmWrpDry1HW2j8VpUkK3TP5INaf2ynBQRXGcNgs=w00)

## Technologies used 🧑🏽‍💻

| Technology | Version |
|:---:|:---:|
|  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="50px"/>| 18.2.0 |
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" height="50px"/>| 13.0.6 |
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50px"/>| 4.9.4 |

> The layout was structured using the library **[Chakra UI](https://chakra-ui.com/)** 💛

## Components Structure ⚛️
 
In this project I decided to venture out and make use of the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/) to create a hierarchical structure of components with only one responsibility.

```mermaid 
flowchart LR
id1(Atoms) --> id2(Molecules) --> id3(Organisms) --> id4(Templates) --> id5(Pages)
 ```

> Using Atomic Design I realized that there was an improvement in code quality and ease of maintenance  ⚙️

## How to run the application? 🚀

In the terminal clone the project:

    git clone https://github.com/GabrielGalatti/nao-chute.git

Enter the project folder:

    cd nao-chute

Install the required dependencies:

    yarn install

Run the application:

    yarn start

> ⚠️ **The application needs its backend to be running** for it to work in perfect condition, but **the backend repository remains private** for now ⚠️

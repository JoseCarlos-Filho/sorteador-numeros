# Desafio de Lógica - Sorteador de Números

![Imagem do prjeto](./img/ia.png)

- Menu Sorteador de Números
    - [Introdução](#Introdução)
    - [Objetivo](#Objetivo)
    - [Techs](#Techs)
    - [Aprendizado](#Aprendizado)
    - [Considerações](#Considerações)
  



## Introdução

    O sorteador de números funciona da seguinte forma: o campo quantidade de números deve
    ser informado para definir a quantidade de números a serem sorteados de acordo com o range 
    dos campos seguintes. Os campos "Do número" e "Até o número" defini o range de numeros a ser 
    sorteados.

## Objetivo

    Praticar lógica de programação com JavaScript, estruturas condicionais e de repetição,
    manipular a DOM, manipular arrays, capturar os inputs html no javascript, manipular as entradas através do
    evento de click dos botoões "Sortear" e "Reiniciar".

## Techs

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)<br>
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)<br>
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)<br>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)<br>
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)<br>
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)<br>

## Aprendizado

    - Manipular a DOM:
        Declarar variaveis que recebe os inputs através do document.querySelector("elemento");
        Declarar função de onclick definida no html dentro do documento javascript para implementar a lógica.
    
    - Crair uma lógica com estruturas de repetição e condicional
        For(let indice = 0; indice < campoQtda; indice++) {
            ...lógica
        }

        if (Condição) {
            lógica
        } else {
            lógica
        }

    - Função com passagem de parâmetro e retorno
        function geraNumero(numero) {
            lógica
            return numero;
        }

## Considerações

    Durante o aprendizado segui alguns conceitos que me ajudou a encontrar e chegar na solução final:

        - Isolar o problema em fatias menores
        - Resolver uma fatia de cada vez
        - Por mais que a sua solução para aquele pequeno pedaço da fatia seja grande, não se preocupe o importante é tentar fazer, depois sempre é possível refatorar o código.
        - Sempre comente funções ou declarações a fins de aumentar seu entendimento e de quem estiver lendo seu código
        - E por último e não menos importante, nunca desista porque o processo de aprendizado e arduo e não existe atalhos, hoje contamos com muitas tecnologias de ajuda como as IAs, grupos e comunidades techs, internet com muito conteúdo disponível, então não deixe a peteca cair.
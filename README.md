# O que é

O Base Converter é uma aplicação web simples para conversões de bases numéricas.

A aplicação foi construída usando o conceito de _Server Side Rendering_, ou **SSR**. Dessa forma, mantemos back-end e front-end juntos. Após o processamento de dados de acordo com as regras de aplicação, o servidor renderiza para o cliente uma página HTML dinâmica, de acordo com o resultado da requisição feita.

O usuário pode converter números de

- Binário para Decimal
- Decimal para Binário
- Octal para Decimal
- Decimal para Octal
- Hexadecimal para Decimal
- Decimal para Hexadecimal

# Transporte

Por se tratar de uma aplicação web, que é acessada através do protocolo HTTP na camada de aplicação, entende-se que o protocolo utilizado na camada de transporte é o TCP, padrão para aplicações que usam o HTTP, provendo assim, maior confiabilidade na entrega de pacotes.

# Tecnologias

- [EJS](https://ejs.co/)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)

## EJS

O EJS é uma _engine de visualização_ usada para incluir código Javascript no HTML de nossas páginas, dando assim, dinamicidade a aplicação.

## Typescript

O Typescript é um "plus" ao Javascript, que não possui tipagem nativamente. Através do Typescript, adicionamos tipagem ao nosso código, que a longo prazo será mais facilmente manutenível por este motivo.

## Node.js

Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados.

## Express

O Express é um framework para aplicações web feitas com Node.js. Mínimo e flexível, fornece um conjunto robusto de recursos para a criação de um servidor web.

# A aplicação

Através do Express, criamos o servidor web, configuramos as rotas e definimos o EJS como _view engine_ da aplicação.

Na pasta `routes`, criamos os arquivos responsáveis por cada funcionalidade da aplicação. Nas rotas, recebemos as requisições do cliente, e para cada rota diferente, temos um _service_, que executa uma funcionalidade da aplicação, no nosso caso, temos services cada uma das conversões citadas na sessão "[O que é](#O-que-é)".

## Rotas

| Rota                                  | Descrição                                                       |
| ------------------------------------- | --------------------------------------------------------------- |
| `/`                                   | Página principal                                                |
| `/bin`                                | Página para converter números binários                          |
| `/bin/convertDecToBin?variavel=valor` | Rota de chamada do método de conversão Decimal para Binário     |
| `/bin/convertBinToDec?variavel=valor` | Rota de chamada do método de conversão Binário para Decimal     |
| `/oct`                                | Página para converter números octais                            |
| `/oct/convertDecToOct?variavel=valor` | Rota de chamada do método de conversão Decimal para Octal       |
| `/oct/convertOctToDec?variavel=valor` | Rota de chamada do método de conversão Octal para Decimal       |
| `/hex`                                | Página para converter números hexadecimais                      |
| `/hex/convertDecToHex?variavel=valor` | Rota de chamada do método de conversão Decimal para Hexadecimal |
| `/hex/convertHexToDec?variavel=valor` | Rota de chamada do método de conversão Hexadecimal para Decimal |

## Erros

No caso de uma entrada de dados incorreta da parte do usuário, uma página de erros será exibida, mostrando algumas informações de qual tipo de erro o usuário pode ter cometido.

# Acesse

https://damp-castle-66089.herokuapp.com/

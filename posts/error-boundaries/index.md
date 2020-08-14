---
title: 'Criando uma Tela de Erro Genérica com Error Boundaries no ReactJS'
date: '2020-06-30'
thumbnail: './cover.jpg'
tags: ['react.js']
slug: 'criando-uma-tela-de-erro-generica-error-boundaries-no-react'
excerpt: ''
coverCredits:
  { link: 'https://unsplash.com/photos/3weo8qWEWOs', name: 'Unsplash' }
---

<!-- TODO make section catch less attention from the user -->

Enquanto escrevo essa postagem estou ouvindo a playlist _[Songs to Sing in the Car](https://open.spotify.com/playlist/37i9dQZF1DWWMOmoXKqHTD?si=XnUMpT22SGeyTgzxT7rF3A)_ no Spotify. É uma mix de estilos com indie, pop e alguns rocks clássicos.

## Introdução

Ninguém gosta de se deparar com uma tela que não funciona como deveria, exibindo várias textos em vermelho e códigos sem significado para o usuário. Como desenvolvedor, nós devemos prezar pela UX (Experiência do Usuário) em nossos produtos, afinal é isso que vai garantir que o usuário continue utilizando-o.

Em um mundo ideal isso não aconteceria, mas, no mundo real nós temos que fornecer meios para quando isso ocorrer, prejudicar o mínimo possível a experiência do usuário e a maioria das tecnologias que utilizamos fornece algo para lidarmos com esses casos.

TODO Adicionar GIF 1 aqui.

No **React** nós temos o _Error Boundaries¹_, e nesse artigo vamos utiliza-ló para implementar uma tela de erro genérica.

---

## O que é um Error Boundary?

Um *Error Boundary*¹ são componentes React que capturam um erro do seus componentes filhos e com essa informação ele pode submeter o erro para um serviço de log e/ou exibir uma tela de _[fallback](https://pt.stackoverflow.com/questions/152503/o-que-significa-o-termo-fallback)_.

> ¹A tradução literal seria "Limite de Erro", algo para representar um limite ou fronteira para conter o erro.

De acordo com a documentação um componente se torna um [Error Boundaries](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries) implementando um dos métodos do clico de vidas do React:

### `static getDerivedStateFromError`

Você tem acesso ao erro gerado e você deve retornar objeto para com o novo estado do seu componente.

### `componentDidCatch`

Similar ao método anterior, mas para alterar o estado do componente temos que fazer de forma explicita.

> Nota: até o momento que estou escrevendo essa postagem esses métodos de ciclo de vida não existem em componentes criados com hooks, então para criar nosso componente vamos utilizar o _old but good_ [class component](https://reactjs.org/docs/components-and-props.html#function-and-class-components).

## Iniciando............

<!-- `gist:oemersonpaiva/d585418a18db1581acd0e96ed9c0ce42#replace-html-with-component.js?highlights=4,13-24` -->

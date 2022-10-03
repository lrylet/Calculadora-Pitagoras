# Calculadora Pitagórica

O objetivo dessa aplicação era de tornar possível calcular qualquer lado de um triângulo retângulo, deixando a critério do usuário escolher qual dos lados deseja saber o resultado.

Em primeira instância, foi criado um código em Javascript, HTML e CSS, de modo mais básico e manual.

Na sequência, desenvolvi a aplicação em React, utilizando o framework de estilização chamado Tailwind CSS, na tentativa de agilizar o trabalho e tornar a produção e estilização, que são simples, mais ágeis.

Por último, fiz o deploy da calculadora no servidor do Heroku, que pode ser acessado através deste link: https://calculadora-pit.herokuapp.com/

A única parte do desafio que não consegui desenvolver até o momento foi conseguir que a requisição dos cálculos fosse consumida, como foi sugerido de ser feito com Python3 e Django ou Flask. Ainda estou estudando para tentar aplicar esses conceitos.

<hr>

  ## Sobre o que foi realizado em Javascript vs React

A diferença de funcionalidade entre os dois foi a sanitização dos inputs, não permitindo a entrada de letras e caracteres especiais. Isso foi feito visando eliminar a possibilidade de entradas negativas. Entretanto, deixei possível a entrada de ponto e vírgula, visando deixar possível contas com números racionais. Não consegui limitar apenas ao ponto, visto que a vírgula, ao passar para a função, não é reconhecida para os cálculos e a função de verificação assimila como NaN.

No mais, foi feito uma verificação de inputs nulos ao tentar enviar para a requisição, evitando-os e deixando uma mensagem de erro ao usuário. Também foi feito um esquema para que não se permita hipotenusas menores que os lados, deixando claro ao usuário que o Teorema estará sendo utilizado erroneamente.

No React, a responsividade funciona bem até a resolução de tela 768x600.
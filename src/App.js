import { useState } from "react";
import triangulo from './img/Triangulo.svg';
import ReactDOM from 'react-dom/client'

export function App() {
  let result; 

  const [ hipotenusa, setHipotenusa ] = useState('') 
  const [ catetoA, setCatetoA ] = useState('') 
  const [ catetoB, setCatetoB ] = useState('') 

  function verificar(a, b, c) {
      {/*
        O useState é um método que gerencia troca de dados de uma variável.
        Ele usará o setLado'X' para alterar os valores da variável a qual está designado. Como por exemplo,
        setHipotenusa irá gerenciar o valor da variável 'hipotenusa'
      */}
      
      
      //Esse if verificará quantos campos estão nulos. Caso tenha mais que dois campos em branco, um alert será mostrado ao usuário.
      if(a == 0 && b == 0 || a ==0 && c == 0 || b==0 && c == 0) {
        result = "Insira pelo menos dois números nos campos em branco."
        return result
      }
      
      return calcular(a, b, c);  
    }    
    
    
    function calcular(a, b, c) { // A função irá verificar qual é o campo nulo e irá usar o teorema para descobrir
                                // o valor daquele lado. Caso tudo esteja preenchido, ele verificará se a conta bate.
        if (a == 0) {
            result = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
            return result;
    
        }
        if (b == 0) {
            result = Math.sqrt(Math.pow(a, 2) - Math.pow(c, 2));
            return result;
        }
    
        if (c == 0) {
            result = result = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
            return result;
        }
        else {
          // Caso todos os valores tenham sido preenchidos, a calculadora verificará se a conta é válida neste ponto.
          if ( Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) {
              result = "Os valores são iguais!";
          } else {
            result = `O quadrado de ${a} é diferente da soma dos quadrados de ${b} e ${c}. Verifique a ordem dos números inseridos e tente novamente.`
          }
        }      
      return result;
    }

    function mostraResultado() {
      //Aqui, a função converterá os valores tipo string para inteiro.
      //Além disso, irá transformar valores 'null' em 0.
      const a = parseFloat(hipotenusa == '' ? 0 : hipotenusa)
      const b = parseFloat(catetoA == '' ? 0 : catetoA)
      const c = parseFloat(catetoB == '' ? 0 : catetoB)

      result = verificar(a, b, c)
      
      // Neste ponto, é feita a lógica que modificará o resultado da div com id='result' com o resultado na tela.
      //Ou seja, toda vez que apertarmos no botão "CALCULAR", ela irá atualizar na tela do usuário.

      const rootResultado = ReactDOM.createRoot(document.getElementById('result'));

      const element = (
        <div>
          <h2>Resultado: {result}</h2>
        </div>
      );
      rootResultado.render(element);
    }
  
  return (
    <div className="block h-[100vh] bg-[#D9D9D9] font-chivo text-[1.3rem]">
          {/* header colorida abaixo, marcando o início da página */}
      <header className="bg-rose-900 w-[100vw] p-[2.5%] text-white">
          <h1 className="text-center font-black font-chivo text-[44px]">Calculadora Pitagórica</h1>
      </header>

          {/* Parte da tela responsável por renderizar a imagem do triângulo
              que está de base para usuário inserir os valores */}

      <div className="flex h-[70%] flex gap-6 mt-5 justify-around items-center">
        <div>
          <img src={triangulo} alt="" className="w-[50vh]" />
        </div>
          {/* Parte direita da tela, onde o usuário irá inserir os valores e calcular aquilo que deseja.
              Junto a isso, também tem a parte da exibição de resultado e o botão que chama a função para calcular e fazer
              as verificações. */}
        <div className="flex flex-col w-[100vh]">
          <div>
            <p>Siga o modelo do triângulo ao lado para calcular as variáveis. Caso queira utilizar valores decimais, utilize ponto (.) ao invés de vírgula (,).</p>
            <p>Se for o caso, deixe em branco a variável que deseja descobrir:</p>
          </div>
          <div className="mt-8">
              <div className="flex gap-6 mb-4 items-center">
                <label className="w-[35%]">Hipotenusa</label>

          {/* As funções onChange{(e)...} pegará o valor dos inputs e passará para a função setLado(),
              que atualizará os valores das variáveis. Além dessa funcionalidade, foi incrementado uma
              sanitização de input,onde não permite valores negativos, letras ou quaisquer outro caractere especial*/}

                <input className="border w-[3rem] p-[3px]" type="text" min="0"id="hipotenusa" name="hipotenusa"onChange={(e) => setHipotenusa(e.target.value.replace(/[^0-9],/gi, ''))} value={hipotenusa} />
              </div>
              <div className="flex gap-6 mb-4 items-center">
                <label className="w-[35%]">Cateto a</label>
                <input className="border w-[3rem] p-[3px]" type="text" min="0" id="catetoB" name="catetoA" onChange={(e) => setCatetoA(e.target.value.replace(/[^0-9],/gi, ''))} value={catetoA} />
              </div>
              <div className="flex gap-6 mb-4 items-center">
                <label className="w-[35%]">Cateto b</label>
                <input className="border w-[3rem] p-[3px]" type="text" min="0" id="catetoC" name="catetoB"onChange={(e) => setCatetoB(e.target.value.replace(/[^0-9],/gi, ''))} value={catetoB} />
              </div>
          </div>

          {/* Nesse ponto, começa a estilização do botão e chamará a função 'mostrarResultado' */}

          <div className="self-end mr-[12.5%]">
            <button className="px-4 py-2 bg-[#6E3043] text-white font-chivo" value="Enviar" onClick={mostraResultado}>
              Calcular
            </button>
          </div>

          {/* Por fim, a div que exibirá o resultado é colocada aqui no final. */}

          <div className="mt-8">
            <div id="result">
              <h2>Resultado:</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;

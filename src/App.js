import { useState } from "react";
import triangulo from './img/Triangulo.svg';
import ReactDOM from 'react-dom/client'

export function App() {
  let result; 
  // const [ resut, setResult ] = useState('' | 0)
  const [ ladoA, setLadoA ] = useState('')
  const [ ladoB, setLadoB ] = useState('')
  const [ ladoC, setLadoC ] = useState('')

  function verificar(a, b, c) {
      {/*
        O useState é um Hook (ou seja, um método) que gerencia troca de dados de uma variável.
        Dentro dos colchetes a variável antes da vírgula (ladoA)
        é a variável final, ou seja, que conterá sempre o valor atualizado, enquanto que a segunda variável após a vírgula (setLadoA)
        é a função responsável por enviar o valor novo para a variável finally.
      */}
      
      
      // Verifica se todos os campos estão nulos
      if(a == 0 && b == 0 || a ==0 && c == 0 || b==0 && c == 0) {
        result = "Insira pelo menos dois números nos campos em branco."
        return result
      }
      
      return calcular(a, b, c);  
    }
    
    
    
    function calcular(a, b, c) { 
      console.log(a, b, c)
        if (a == 0) {
            result = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
            return result;
    
        }
        if (b == 0) {
            result = Math.sqrt(Math.pow(a, 2) - Math.pow(c, 2));
            // console.log('Imprime o Resultado quando B é vazio: ',result);
            return result;
        }
    
        if (c == 0) {
            result = result = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
            // console.log('Imprime o Resultado quando C é vazio: ',result);
            return result;
        }
        else {
          // Caso todos os valores tenham sido preenchidos, a calculadora verificará se a conta é válida.
          if ( Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) {
              result = "Os valores são iguais!";
          } else {
              result = "Os valores são diferentes, verifique os números inseridos e tente novamente.";
          }
        }      
      return result;
    }

    function mostraResultado() {
      const a = parseInt(ladoA == '' ? 0 : ladoA)
      const b = parseInt(ladoB == '' ? 0 : ladoB)
      const c = parseInt(ladoC == '' ? 0 : ladoC)

      result = verificar(a, b, c)

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
      <header className="bg-rose-900 w-[100vw] p-[2.5%] text-white">
          <h1 className="text-center font-black font-chivo text-[44px]">Calculadora Pitagórica</h1>
      </header>
      <div className="flex h-[70vh] flex gap-6 mt-5 justify-around items-center">
        <div>
          <img src={triangulo} alt="" className="w-[50vh]" />
        </div>
        <div className="flex flex-col">
          <div>
            <p>Siga o modelo do triângulo ao lado para calcular as variáveis.</p>
            <p>Se for o caso, deixe em branco a variável que deseja descobrir:</p>
          </div>
          <div className="mt-8">
              <div className="flex gap-6 mb-4 items-center">
                <label className="w-[35%]">Hipotenusa</label>
                {/* as funções 'evento' pegará o valor dos inputs e passará para a função setLado(), que atualizará os valores das variáveis */}
                <input className="border w-[3rem] p-[3px]" type="text" min="0" id="hipotenusa" name="ladoA" onChange={(e) => setLadoA(e.target.value.replace(/[^0-9]/gi, ''))} value={ladoA} />
              </div>
              <div className="flex gap-6 mb-4 items-center">
                <label className="w-[35%]">Cateto a</label>
                <input className="border w-[3rem] p-[3px]" type="text" min="0" id="catetoB" name="ladoB" onChange={(e) => setLadoB(e.target.value.replace(/[^0-9]/gi, ''))} value={ladoB} />
              </div>
              <div className="flex gap-6 mb-4 items-center">
                <label className="w-[35%]">Cateto b</label>
                <input className="border w-[3rem] p-[3px]" type="text" min="0" id="catetoC" name="ladoC" onChange={(e) => setLadoC(e.target.value.replace(/[^0-9]/gi, ''))} value={ladoC} />
              </div>
          </div>
          <div className="self-end">
            <button className="px-4 py-2 bg-[#6E3043] text-white font-chivo" value="Enviar" onClick={mostraResultado}>
              Calcular
            </button>
          </div>
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

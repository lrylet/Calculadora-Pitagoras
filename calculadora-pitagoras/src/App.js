import triangulo from './img/Triangulo.svg';

function App() {
  return (
    <div className="App">

      <header>

        <div class="titulo">
          <h1 className="text-3xl text-center">Calculadora Pitágoras</h1>
        </div>

      </header>
      <div className="flex container mx-auto mt-10 gap-16">        
        <div className="w-[40%] flex justify-center">
            <img src={triangulo} alt="" className="content-center"/>
        </div>
        <div className="w-[60%] flex flex-col">
            <p>Siga o modelo do triângulo ao lado para calcular as variáveis.</p>
            <p> Se for o caso, deixe em branco a variável que deseja descobrir: </p>

        {/* <!-- Pegar os dados inseridos pelo usuário --> */}
          <div className="row justify-between">
            
            <div className="">
              <label>Lado a</label>
              <input type="text" id="hipotenusa" className="w-[3rem] ml-[1.5%] border-solid border-2"/>
            </div>

            <div>
              <label>Lado b</label>
              <input type="text" id="catetoA" className="w-[3rem] ml-[1.5%] border-solid border-2"/>
            </div>

            <div>
              <label>Lado c</label>
              <input type="text" id="catetoB" className="w-[3rem] ml-[1.5%] border-solid border-2"/>
            </div>
            
          </div>
            <div className="flex">
              <button className="justify-end" onClick="verificar()">Calcular</button>
            </div>

        </div>
    </div>
    <div id="resultado"></div>

    </div>
  );
}

export default App;

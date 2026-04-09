
export function Welcome() {



  return (
    <main >
      <div className=" bg-red-600 justify-center" >
        <h1 className="align-text-top">Pokédex</h1>
        <h1 className="justify-self-end align-text-top">Home Pokémons Tipos</h1>
        
        </div>
        <div>
          <input
            
              type="button "
              value="busca "
              disabled
              className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."/>
        </div>
      <div className="flex justify-between p-3 ">
        <div>
          <button className="bg-yellow-400   box-border size-32 border-solid w-60 py-20">
            <h1>Pikachu</h1>
            <button className="bg-orange-600">Elétrico</button>
          </button>
        </div>
        <div>
          <button className="bg-green-500 box-border size-32 border-solid w-60 py-20">
            <h1>Bulbasaur</h1>
            <button className="bg-green-800">Planta</button>
          </button>
        </div>
        <div>
          <button className="bg-pink-400 box-border size-32 border-solid w-60 py-20">
            <h1>Charmander</h1>
            <button className="bg-red-600">fogo</button>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 box-border size-32 border-solid w-60 py-20">
            <h1>Squirtie</h1>
            <button className="bg-blue-700">Água</button>
          </button>
          </div>
      </div> 
      
    </main>
  );
}


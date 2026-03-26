
export function Welcome() {



  return (
    <main >
      <div className="w-450 bg-red-600 pl-2" >
        <h1>Pokédex</h1>
        <h1>Home</h1>
        <h1>Pokémons</h1>
        <h1>Tipos</h1>
        </div>
        <div>
          <input
              type="button"
              value="busca"
              disabled
              className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."/>
        </div>
      <div>
        <button className="bg-yellow-400   box-border size-32 border-solid ">
          <h1>Pikachu</h1>
        </button>
        <button className="bg-green-500 box-border size-32 border-solid">
          <h1>Bulbasaur</h1>
        </button>
        </div>
        
      
    </main>
  );
}


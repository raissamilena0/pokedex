
export function Welcome() {



  return (
    <main >
      <div className=" bg-red-600 justify-center" >
        <h1 className="align-text-top">Pokédex</h1>
        <h1 className="justify-self-end align-text-top">Home Pokémons Tipos</h1>
        
      </div> 

      <div className=" flex flex-col justify-between  bg-red ">
      
        <div>
          <input
            
              type="button "
              value="busca "
              disabled
              className=" bg-white text-black placeholder:text-gray-500 border-gray-300 rounded-1g p-2 m-1 w-370 "/>
        </div>
       <div className="flex justify-between p-3 ">
        <div>
          <button className="bg-yellow-400   box-border size-32 border-solid w-60 py-20 rounded-lg">
            <h1>Pikachu</h1>
            <button className="bg-orange-600">Elétrico</button>
          </button>
        </div>
        <div>
          <button className="bg-green-500 box-border size-32 border-solid w-60 py-20 rounded-lg">
            <h1>Bulbasaur</h1>
            <button className="bg-green-800">Planta</button>
          </button>
        </div>
        <div>
          <button className="bg-pink-400 box-border size-32 border-solid w-60 py-20 rounded-lg">
            <h1>Charmander</h1>
            <button className="bg-red-600">fogo</button>
          </button>
        </div>
        <div>
          <button className="bg-blue-500 box-border size-32 border-solid w-60 py-20 rounded-lg">
            <h1>Squirtie</h1>
            <button className="bg-blue-700">Água</button>
          </button>
          </div>
        </div> 
      
      <div className="bg-blue-900 justify-center">
        <h1 className="justify-center align-text-top bg-white">Pokédex - React + Tailwind</h1>
      </div>
      </div>
    </main>
  );
}


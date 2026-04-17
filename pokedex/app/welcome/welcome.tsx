
export function Welcome() {



  return (
    <main >
      <div className=" bg-red-600 justify-center text-white" >
        <h1 className="align-text-top">Pokédex</h1>
        <h1 className="justify-self-end align-text-top">Home Pokémons Tipos</h1>
        
      </div> 

      <div className=" flex flex-col justify-between  bg-red-200 min-h-[calc(107.5vh-107.5px)] ">
      
        <div className="flex h-20 items-center bg-white mx-10 rounded-lg px-5 shadow-md">
          <form className="w-full relative">
            <input
            
              type="text "
              className="w-330 p-3 pb-1 pl-10 border-b border-gray-200 focus:outline-none "/>
              <button className=" bg-red-500 text-white px-4 py-2 rounded-md houver:bg-red-600absolute right-2">Buscar</button>
          </form>
        </div>
       <div className="flex justify-between p-3 ">
        <div className="houver:scale-100 duration-300 mx-auto flex flex-col max-w-sm text-center items-center gap-x-4 rounded-xl bg-yellow-200 p-15 shadow-lg outline outline-black/5  dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="w-40 h-40 mx-auto mb-2" />
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Pikachu</h1>
              <button className="bg-green-500 rounded-lg p-0.5 text-white m-0.5">Eletrico</button>
            
          </div>
        <div className="houver:scale-100 duration-300 mx-auto flex flex-col max-w-sm text-center items-center gap-x-4 rounded-xl bg-green-400 p-15 shadow-lg outline outline-black/5  dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-40 h-40 mx-auto mb-2" />
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Bulbasaur</h1>
              <button className="bg-green-800 rounded-lg p-0.5 text-white m-0.5">Planta</button>
            
          </div>
        <div className="houver:scale-100 duration-300 mx-auto flex flex-col max-w-sm text-center items-center gap-x-4 rounded-xl bg-red-400 p-15 shadow-lg outline outline-black/5  dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" className="w-40 h-40 mx-auto mb-2" />
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Charmander</h1>
              <button className="bg-red-600 rounded-lg p-0.5 text-white m-0.5">Fogo</button>
            
          </div>
        <div className="houver:scale-100 duration-300 mx-auto flex flex-col max-w-sm text-center items-center gap-x-4 rounded-xl bg-blue-400 p-15 shadow-lg outline outline-black/5  dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" className="w-40 h-40 mx-auto mb-2" />
              <h1 className="text-center text-xl font-medium text-black dark:text-white p-10">Squirtle</h1>
              <button className="bg-blue-700 rounded-lg p-0.5 text-white m-0.5">Água</button>
            
          </div>
        </div> 
      
      <div className="flex bg-blue-900 justify-center p-3">
        <h1 className="justify-center  text-white">Pokédex - React + Tailwind</h1>
      </div>
      </div>
    </main>
  );
}


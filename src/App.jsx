import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero';
import Pokemon from './components/Pokemon';
import PokemonDetails from './components/PokemonDetails';
import LatestPokemons from './components/LatestPokemons';

const appRouter = createBrowserRouter([
 
  {
    path: '/',
    element: <Hero />,
  },
 
  {
    path: '/search',
    element: <Pokemon />,
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetails/>
  },{
    path: '/latest',
    element: <LatestPokemons/>
  }
]);

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
     
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

     
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;

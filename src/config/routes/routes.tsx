import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Pokedex } from '../../pages';
import Navbar from '../../shared/components/Layout/Navbar';


export const AppLayout = () => {
  return (
    <div className='w-screen h-screen '>
      <Navbar />
      <div className='py-[8rem] w-[90%] mx-auto text-white'>
        <Outlet />
      </div>
    </div>
  );
};

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{
      path: '/',
      element: <Pokedex />
    }]
  },
]);

import { RouterProvider } from 'react-router-dom';
import { routes } from './config/routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './shared/store/store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}

export default App;

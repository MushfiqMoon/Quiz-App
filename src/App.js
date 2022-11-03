import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}

export default App;

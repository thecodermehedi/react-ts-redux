import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from '@/routes/router';
import store from '@/redux/store';
import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>
 </StrictMode>
);

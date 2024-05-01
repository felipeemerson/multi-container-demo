import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from './App';
import OtherPage from './OtherPage';
import Fib from './Fib';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
          <Route path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}><App /></RouterProvider>
  </React.StrictMode>,
)

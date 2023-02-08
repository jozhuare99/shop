import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './404'
import Contact, {
  loader as contactLoader,
} from './routes/contact'
import { loader as rootLoader,
  action as rootAction, }  from './routes/Root'
import EditContact,  {
  action as editAction,
}  from "./routes/edit";
import { action as destroyAction } from './routes/destroy'
import Index from "./routes/index";

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        {index: true, element: <Index />},
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: 'contacts/:contactId/destroy',
          action: destroyAction,
          errorElement: <div>Oops! There was an error.</div>,
        }
      ],
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './404'
import Body from "./components/body";

// import { loader as rootLoader, action as rootAction, }  from './routes/Root'
// import Contact, {loader as contactLoader, action as contactAction} from './routes/contact'
// import EditContact,  {
//   action as editAction,
// }  from "./routes/edit";
// import { action as destroyAction } from './routes/destroy'
 
const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      // loader: rootLoader,
      // action: rootAction,
      children: [
         {
           errorElement: <ErrorPage />,
          children: [
             { index: true, element: <Body /> },
        //     {
        //       path: "contacts/:contactId",
        //       element: <Contact />,
        //       loader: contactLoader,
        //       action: contactAction,
        //     },
        //     /* the rest of the routes */
           ],
        },
        {index: true, element: <Body />},
        // {
        //   path: "contacts/:contactId",
        //   element: <Contact />,
        //   loader: contactLoader,
        //   action: contactAction
        // },
        // {
        //   path: "contacts/:contactId/edit",
        //   element: <EditContact />,
        //   loader: contactLoader,
        //   action: editAction,
        // },
        // {
        //   path: 'contacts/:contactId/destroy',
        //   action: destroyAction,
        //   errorElement: <div>Oops! There was an error.</div>,
        //  }
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

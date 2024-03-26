import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PageRead from './components/PageRead/PageRead.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Banner from './components/Banner/Banner.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pageRead",
        element: <PageRead></PageRead>,
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('../books.json')
      }
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

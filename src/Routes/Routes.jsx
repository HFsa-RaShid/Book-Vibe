import { createBrowserRouter } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PageRead from "../components/PageRead/PageRead";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishList from "../components/wishList/WishList";
import BookList from "../components/Booklist/BookList";
import FictionBooks from "../components/Fiction/FictionBooks";
import NonFictionBooks from "../components/Non-Fiction/NonFictionBooks";

export const router = createBrowserRouter([
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
          loader: () => fetch('/books.json')

        },
        {
          path: "/fiction",
          element: <FictionBooks></FictionBooks>,
          

        },
        {
          path: "/non-fiction",
          element: <NonFictionBooks></NonFictionBooks>,
          

        },
        
        {
          path: '/book/:id',
          element: <BookDetails></BookDetails>,
          loader: ()=> fetch('../books.json')
        }
        
      ],
    },
  ]);
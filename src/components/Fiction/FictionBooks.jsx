import { useState } from "react";

const FictionBooks = () => {

    const [bookCard, setBookCard] = useState([]);
    const [readBookCard, setReadBooksCard] = useState([]);
    const [wishListCard, setWishlistCard] = useState([]);
  
    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
      const storedJsonReadBookInfo = localStorage.getItem('book-read');
      const storedReadBooks = JSON.parse(storedJsonReadBookInfo) || [];
  
  
      const storedJsonWishlistBookInfo = localStorage.getItem('book-wishlist');
      const storedWishlistBooks = JSON.parse(storedJsonWishlistBookInfo) || []; 
     
      fetch('../books.json')
        .then(res => res.json())
        .then(data => setBookCard(data));
  
      const staticReadBookCard = [];
      for (const book of bookCard) {
        for (const storedReadBook of storedReadBooks) {
          if (book.bookId === parseInt(storedReadBook)) {
            staticReadBookCard.push(book);
          }
        }
      }
  
      setReadBooksCard(staticReadBookCard);
      
    return (
        <div>
            

            
        </div>
    );
};

export default FictionBooks;
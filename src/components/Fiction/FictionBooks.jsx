import { useEffect, useState } from "react";
import FictionReadBookCard from "../FictionReadBookCard/FictionReadBookCard";


const FictionBooks = () => {

    const [bookCard, setBookCard] = useState([]);
  const [readBookCard, setReadBooksCard] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    const storedJsonReadBookInfo = localStorage.getItem('book-read');
    const storedReadBooks = JSON.parse(storedJsonReadBookInfo) || [];


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

  }, [bookCard]);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
            {
                           
                 readBookCard.map(readBook =>
                    readBook.category === "Fiction" && 
                 <FictionReadBookCard key={readBook.bookId} readBook={readBook}></FictionReadBookCard>)
             }

            
        </div>
    );
};

export default FictionBooks;
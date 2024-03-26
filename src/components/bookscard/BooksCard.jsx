import { useEffect, useState } from "react";
import Book from "../book/Book";


const BooksCard = () => {
    const [books,setbooks]=useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setbooks(data))
    },[])
    return (
        <div>
            <h1  className="mb-10 mt-10 text-[40px]">Books</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    books.map(book =><Book key={book.bookId} book={book}></Book>)
                }
            </div>

            
        </div>
    );
};

export default BooksCard;
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ReadBookCard from "../readBookCard/ReadBookCard";
import WishListCard from "../wishListCard/WishListCard";
import PageRead from "../PageRead/PageRead";



const ListedBooks = () => {
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

    const staticWishlistBookCard = [];
    for (const book of bookCard) {
      for (const storedWishlistBook of storedWishlistBooks) {
        if (book.bookId === parseInt(storedWishlistBook)) {
          staticWishlistBookCard.push(book)
        }
      }
    }

    setWishlistCard(staticWishlistBookCard);
  }, [bookCard]);

    

    return (
        <div className="container mx-auto mt-7">
                        
                <div className="text-center  bg-[#1313130D]  rounded-[16px] ">
                <p className="font-bold p-5 text-[28px] text-[#131313]">Books</p>
                </div>

                <div className="text-center">
                <button className="btn btn-success text-white px-8 mt-6">Sort By</button>
                </div>

                <div>

                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <div className="text-center font-bold my-3">
                    <TabList>
                        <Tab className="">Read Books</Tab>
                        <Tab>Wishlist Books</Tab>

                    </TabList>
                    </div>
                    <div className="mt-4">
                    <TabPanel>
                        {
                           
                        readBookCard.map(readBook =><ReadBookCard key={readBook.bookId} readBook={readBook}></ReadBookCard>)
                       
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                        wishListCard.map(wishList =>
                        <WishListCard key={wishList.bookId} wishList={wishList}></WishListCard>)
                        }
                    </TabPanel>
                   

                    </div>
                    <div>
                        
                    </div>
                </Tabs>

                </div>

          
            
        </div>
        
            
            
        
    );
};

export default ListedBooks;




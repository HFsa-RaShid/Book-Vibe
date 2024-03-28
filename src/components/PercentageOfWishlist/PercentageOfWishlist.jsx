import { useEffect, useState } from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const PercentageOfWishlist = () => {
    const [bookCard, setBookCard] = useState([]);
  const [wishListCard, setWishlistCard] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    
    const storedJsonWishlistBookInfo = localStorage.getItem('book-wishlist');
    const storedWishlistBooks = JSON.parse(storedJsonWishlistBookInfo) || []; 
   
    fetch('../books.json')
      .then(res => res.json())
      .then(data => setBookCard(data));

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


    const calculateBookWishlistPercentage = (book) => {
    const wishlistCount = wishListCard.filter(wishListCard => wishListCard.bookId === book.bookId).length;
    const totalBookCount = bookCard.filter(b => b.bookId === book.bookId).length;
    const wishlistPercentage = (wishlistCount / totalBookCount) * 100;
    return wishlistPercentage.toFixed(2); 
    };

    const data = bookCard.map(book => ({
        name: book.bookName,
        wishlistPercentage: parseFloat(calculateBookWishlistPercentage(book))
    }));
    return (
        <div className="container mx-auto">
            <h2 className="text-[18px] lg:text-[24px] font-bold text-center mt-6">WishList Percentage for All Books</h2>
            <ResponsiveContainer width="100%" height={500}>
            <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="wishlistPercentage" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
            
        </div>
    );
};

export default PercentageOfWishlist;
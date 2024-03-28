import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';



const PageRead = () => {
    const [bookCard, setBookCard] = useState([]);
  const [readBookCard, setReadBooksCard] = useState([]);
    useEffect(() => {
        const storedJsonReadBookInfo = localStorage.getItem('book-read');
        const storedReadBooks = JSON.parse(storedJsonReadBookInfo) || [];

        console.log(storedReadBooks)

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
  
    },[bookCard]);
   

    
    
      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    
    return (
        <div className="mt-10 overflow-x-auto container mx-auto">
            <div className="inline-block min-w-full">
            <BarChart
            
               width={window.innerWidth <= 768 ? window.innerWidth * 0.9 : 1200}
                height={400}
                data={readBookCard}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='bookName' />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalPages" fill="#8884d8"  shape={<TriangleBar />} />
                </BarChart>

            </div>
                
    </div>
    );
};

export default PageRead;
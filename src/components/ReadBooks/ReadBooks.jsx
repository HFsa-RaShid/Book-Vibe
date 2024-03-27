import { useLoaderData } from "react-router-dom";



const ReadBooks = () => {
    const read = useLoaderData()
    
    return (
        <div>
            <p>{read.bookName}</p>
            dvbdf
            
        </div>
    );
};

export default ReadBooks;

import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId,image,bookName,author,tags,category,rating}=book;
    return (
        <Link to={`/book/${bookId}`} className="block">

                <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 bg-[#F3F3F3]">
                    <img className="w-[326px] h-[270px]" src={image} />
                </figure>
                <div className="card-body text-left">
                    <div className="flex gap-8">
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">{tags[0]}</button>
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">{tags[1]}</button>
                    </div>
                    <h2 className="card-title fonts text-[24px]">{bookName}</h2>
                    <p className="font">By: {author}</p>
                    <hr className="mt-3 mb-3"></hr>
                    
                    <div className="flex justify-between font">
                        <div>
                        <p>{category}</p>
                        </div>

                        <div className="flex items-center font">
                            <p>{rating}</p>
                            <CiStar />
                            


                        </div>
                    
                    </div>
                </div>
                </div>
        </Link>
            
            
        
    );
};

export default Book;
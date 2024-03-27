
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri"; 
import { Link } from "react-router-dom";

const WishListCard = ({wishList}) => {
    const {bookId,image,bookName,author,category,tags,totalPages,publisher,yearOfPublishing,rating}= wishList;
    return (
        <div className="mb-10">
            <div className="flex border rounded-xl h-[275px] gap-6 ">
            <div className="p-5 w-[270px]">
                <img src={image} className="h-full bg-[#1313130D] w-full rounded-xl" />
            </div>
            <div className="p-5">
                <h1 className="text-[24px] font-bold">{bookName}</h1>
                <p className="text-[#131313CC] pb-2 pt-3">By: {author}</p>
                <hr></hr>
                
                
                <div className="flex gap-8 my-3">
                    <p className="text-black font-bold">Tag</p>
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">#{tags[0]}</button>
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">#{tags[1]}</button>

                        <div className="flex items-center">
                        <CiLocationOn />
                            <p>Year of Publishing:  {yearOfPublishing}</p>
                        </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex items-center">
                    <MdOutlineManageAccounts />
                    <p>Publisher:  {publisher}</p>

                    </div>
                    <div className="flex items-center">
                    <RiPagesLine />
                        <p>Page {totalPages}</p>

                    </div>
                </div>
                <hr className="my-4"></hr>
                <div className="flex gap-10">
                    <button className="py-2 px-4 bg-[#328EFF26] text-[#328EFF] rounded-2xl">Category: {category}</button>
                    <button className="py-2 px-4 bg-[#FFAC3326] text-[#FFAC33] rounded-2xl">Rating: {rating}</button>
                    <Link to={`/book/${bookId}`}>
                    <button className="py-2 px-4 bg-[#23BE0A] text-white rounded-2xl">View Details</button></Link>
                    
                </div>
            </div>
            
        </div>

        </div>
        
    );
};

export default WishListCard;
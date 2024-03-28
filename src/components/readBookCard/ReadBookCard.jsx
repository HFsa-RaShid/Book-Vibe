import { CiLocationOn } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PageRead from "../PageRead/PageRead";

const ReadBookCard = ({readBook}) => {
    const {bookId,image,bookName,author,category,tags,totalPages,publisher,yearOfPublishing,rating}=readBook;
    return (
        <div className="mb-10 font">
            <div className="lg:flex border rounded-xl lg:h-[275px] gap-6">
            <div className="p-5 lg:w-[270px] ">
                <img src={image} className="h-full w-full bg-[#1313130D] rounded-xl" />
            </div>
            <div className="p-5">
                <h1 className="text-[24px] font-bold fonts text-center lg:text-start">{bookName}</h1>
                <p className="text-[#13131399] font-semibold pb-2 pt-3 text-center lg:text-start">By: {author}</p>
                <hr></hr>
                
                
                <div className="flex gap-5 lg:gap-8 my-3 items-center">
                    <p className="text-black font-bold">Tag</p>
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">#{tags[0]}</button>
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">#{tags[1]}</button>

                        <div className="flex items-center">
                        <CiLocationOn />
                            <p className="text-[#13131399] font-medium">Year of Publishing:  {yearOfPublishing}</p>
                        </div>
                </div>
                <div className="flex gap-5 lg:gap-8">
                    <div className="flex items-center">
                    <MdOutlineManageAccounts />
                    <p className="text-[#13131399]">Publisher:  {publisher}</p>

                    </div>
                    <div className="flex items-center">
                    <RiPagesLine />
                        <p className="text-[#13131399]">Page {totalPages}</p>

                    </div>
                </div>
                <hr className="my-4"></hr>
                <div className="flex gap-10">
                    <button className="py-2 px-4 bg-[#328EFF26] text-[#328EFF] rounded-2xl">Category: {category}</button>
                    <button className="py-2 px-4 bg-[#FFAC3326] text-[#FFAC33] rounded-2xl">Rating: {rating}</button>
                    <Link to={`/book/${bookId}`}>
                    <button className="py-2 px-4 bg-[#23BE0A] text-white rounded-2xl">View Details</button>
                    </Link>
                </div>
            </div>
            
        </div>
        

        </div>
        
    );
};

export default ReadBookCard;
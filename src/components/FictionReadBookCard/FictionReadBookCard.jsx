
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const FictionReadBookCard = ({readBook}) => {
    const {bookId,image,bookName,author}=readBook;
    return (
        <div className="mb-2 mt-10 container mx-auto">
        
        <div className="lg:flex border rounded-xl lg:h-[275px]">
            <div className="p-5 lg:w-[270px] ">
                <img src={image} className="h-full w-full bg-[#1313130D] rounded-xl" />
            </div>

            <div className="p-14">
                <h1 className="text-[24px] font-bold fonts text-center">{bookName}</h1>
                <hr className="my-2"></hr>
                <p className="text-[#13131399] font-semibold pb-2 pt-3 text-center">By: {author}</p>
                <hr className="mt-2 mb-4"></hr>
                <div className="flex justify-center">
                <Link to={`/book/${bookId}`}>
                    <button className=" py-2 px-4 bg-[#23BE0A] text-white rounded-2xl">View Details</button>
                    </Link>

                </div>
                
                
            </div>
            
        </div>
    </div>
    );
};

export default FictionReadBookCard;
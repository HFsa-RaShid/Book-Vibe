import { Link } from "react-router-dom";
import BooksCard from "../bookscard/BooksCard";


const Banner = () => {
    return (
        

        <div className="fonts">
            <div className="h-[500px] bg-[#0D0D0D0D] mt-5 lg:flex rounded-xl container mx-auto px-20">
                <div className="lg:w-[60%] pt-7 lg:mt-[120px] ">
                    <h1 className="font-bold text-[32px] lg:text-[46px] mb-[20px] lg:mb-[50px] text-center lg:text-left">Books to freshen up your bookshelf</h1>
                    <div className="flex justify-center lg:justify-start">
                    <Link to="/listedBooks">
                    <button  className=" px-5 py-3 bg-[#23BE0A] text-white rounded-2xl ">View The List</button>
                    </Link>

                    </div>
                    
 
                </div>
                <div className="lg:w-[40%] mt-[20px] lg:mt-[85px]">
                    <img src="/Images/cover.png" className="w-[80%] h-[90%] rounded-2xl"/>
                    
                </div>
            </div>

            <div>
                <BooksCard></BooksCard>
                
            </div>

        </div>
    );
};

export default Banner;
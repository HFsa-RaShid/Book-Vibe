import BooksCard from "../bookscard/BooksCard";


const Banner = () => {
    return (
        

        <div>
            <div className="h-[500px] bg-[#0D0D0D0D] mt-5 flex rounded-xl container mx-auto px-20">
                <div className="w-[60%] mt-[120px] ">
                    <h1 className="font-bold text-[46px] mb-[50px]">Books to freshen up your bookshelf</h1>
                    <button className="px-5 py-3 bg-[#23BE0A] text-white rounded-2xl">View The List</button>
                </div>
                <div className="w-[40%] mt-[85px]">
                    <img src="/Images/cover.png" className="w-[80%] h-[90%] rounded-2xl" alt="" srcset="" />
                    
                </div>
            </div>

            <div>
                <BooksCard></BooksCard>
                
            </div>

        </div>
    );
};

export default Banner;
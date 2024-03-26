import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book=books.find(book => book.bookId === idInt);
    console.log(book)
    return (
        <div className="flex h-[500px] gap-8 mt-10">
            <div className=" w-[50%] bg-[#F3F3F3] rounded-xl" >
                <img src={book.image} className=" h-full flex items-center p-2 mx-auto" alt=""  />
            </div>
            <div className="w-[50%] text-left">
                <h1 className="text-[40px] font-bold text-left">{book.bookName}</h1>
                <p className="text-[#131313CC] text-[20px] pb-2 ">By: {book.author}</p>
                <hr></hr>
                <p className="text-[#131313CC] text-[20px] text-left py-3">{book.category}</p>
                <hr></hr>
                <p className="text-[#131313CC] text-[16px] pt-2 pb-8"><span className="text-black font-bold">Review: </span>{book.review}</p>
                <div className="flex gap-8">
                    <p className="text-black font-bold">Tag</p>
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">#{book.tags[0]}</button>
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">#{book.tags[1]}</button>
                </div>
                <hr className="my-4"></hr>
                <div className="flex ">
                    <p className="w-[30%]">Number of Pages:</p>
                    <p className="font-bold text-[#131313CC]">{book.totalPages}</p>
                </div>
                <div className="flex my-3">
                    <p className="w-[30%]">Publisher:</p>
                    <p className="font-bold text-[#131313CC]">{book.publisher}</p>
                </div>
                <div className="flex">
                    <p className="w-[30%]">Year of Publishing:</p>
                    <p className="font-bold text-[#131313CC]">{book.yearOfPublishing}</p>
                </div>
                <div className="flex my-3">
                    <p className="w-[30%]">Rating:</p>
                    <p className="font-bold text-[#131313CC]">{book.rating}</p>
                </div>

                <div className="flex gap-8 mt-5">
                        <button className="text-black font-semibold px-4 py-2 rounded-xl border ">Read</button>
                        <button className=" px-4 py-2 rounded-xl text-white bg-[#50B1C9]">Wishlist</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default BookDetails;
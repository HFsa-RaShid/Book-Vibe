


const Book = ({book}) => {
    const {image,bookName,author,tags,category,rating}=book;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className="w-[326px] h-[230px]" src={image} />
                </figure>
                <div className="card-body text-left">
                    <div className="flex gap-8">
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">{tags[0]}</button>
                        <button className="bg-[#17BE0A12] px-3 py-1 rounded-3xl text-[#23BE0A]">{tags[1]}</button>
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr className="mt-3 mb-3"></hr>
                    
                    <div className="flex justify-between">
                        <div>
                        <p>{category}</p>
                        </div>

                        <div className="flex">
                            <p>{rating}</p>
                            


                        </div>
                    
                    </div>
                </div>
                </div>
            
        </div>
    );
};

export default Book;
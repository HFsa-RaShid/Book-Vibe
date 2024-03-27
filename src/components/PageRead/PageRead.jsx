import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookRead } from "../../utility/localStorageRead";


const PageRead = () => {
    const page = useLoaderData();
    useEffect( () =>{
        const storeBooksIds = getStoredBookRead();
        if(page.length >0){
            const readsBook = page.filter(read =>storeBooksIds.includes(read.id));
            console.log(page,storeBooksIds)
        }
    }, [])
    
    return (
        <div>
            fdrg
        </div>
    );
};

export default PageRead;
const getStoredBookWishlist = () =>{
    const storedBookWishlist = localStorage.getItem('book-wishlist');
    if(storedBookWishlist){
        return JSON.parse(storedBookWishlist);
    }
    return [];
}

const getStoredBookRead = () =>{
    const storedBookRead = localStorage.getItem('book-read');
    if(storedBookRead){
        return JSON.parse(storedBookRead);
    }
    return [];

}
const saveBookWishlist = id => {
    const storedBookWishlists = getStoredBookWishlist();
    const storeRead = getStoredBookRead();
    if (!storedBookWishlists.includes(id) && !storeRead .includes(id)) {
        storedBookWishlists.push(id);
        localStorage.setItem('book-wishlist', JSON.stringify(storedBookWishlists));
        return true; 
    } else {
        return false; 
    }
}


export {saveBookWishlist,getStoredBookWishlist,getStoredBookRead}




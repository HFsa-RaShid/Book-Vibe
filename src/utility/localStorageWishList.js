const getStoredBookWishlist = () =>{
    const storedBookWishlist = localStorage.getItem('book-wishlist');
    if(storedBookWishlist){
        return JSON.parse(storedBookWishlist);
    }
    return [];

}

const saveBookWishlist = id => {
    const storedBookWishlists = getStoredBookWishlist();
    if (!storedBookWishlists.includes(id)) {
        storedBookWishlists.push(id);
        localStorage.setItem('book-wishlist', JSON.stringify(storedBookWishlists));
        return true; 
    } else {
        return false; 
    }
}



export {saveBookWishlist,getStoredBookWishlist}
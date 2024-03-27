const getStoredBookRead = () =>{
    const storedBookRead = localStorage.getItem('book-read');
    if(storedBookRead){
        return JSON.parse(storedBookRead);
    }
    return [];

}

const saveBookRead = id => {
    const storedBookReads = getStoredBookRead();
    if (!storedBookReads.includes(id)) {
        storedBookReads.push(id);
        localStorage.setItem('book-read', JSON.stringify(storedBookReads));
        return true; 
    } else {
        return false; 
    }
}



export {saveBookRead,getStoredBookRead}



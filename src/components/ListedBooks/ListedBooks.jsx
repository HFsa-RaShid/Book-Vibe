import { useState } from "react";
import { Link } from "react-router-dom";



const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)



   
    
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <Link to="" onClick={() => setTabIndex(0)} role="tab" className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}>Tab 1</Link>
                <Link to={``} onClick={() => setTabIndex(1)} role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}>Tab 1</Link>
  
            </div>
        </div>
        
            
            
        
    );
};

export default ListedBooks;
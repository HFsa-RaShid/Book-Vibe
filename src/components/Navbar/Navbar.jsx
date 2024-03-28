import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
     
        <div className="navbar bg-base-100 container mx-auto mt-4 font">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="text-[18px] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
               to="/">Home</NavLink></li>
          <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]  font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
 to="/listedBooks">Listed Books</NavLink></li>
          <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        } to="/pageRead">Pages to Read</NavLink></li>
                        <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        } to="/fiction">Fiction</NavLink></li>
                        <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        } to="/non-fiction">Non-Fiction</NavLink></li>
          
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl lg:text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px]">
          
        <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
               to="/">Home</NavLink></li>
          <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]  font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
 to="/listedBooks">Listed Books</NavLink></li>
          <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        } to="/pageRead">Pages to Read</NavLink></li>
                        <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        } to="/fiction">Fiction</NavLink></li>
                        <li><NavLink  className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        } to="/non-fiction">Non-Fiction</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end flex gap-1 lg:gap-3">
        <a className="bg-[#23BE0A] px-2 lg:px-5 py-3 rounded-2xl text-white">Sign In</a>
        <a className="bg-[#59C6D2] px-2 lg:px-5 py-3 rounded-2xl text-white">Sign Up</a>
      </div>
    </div>

    

          

   
      
    );
};

export default Navbar;
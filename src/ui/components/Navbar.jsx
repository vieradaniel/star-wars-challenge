import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  const handleLogout =()=>{
     console.log('logout');
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Star Wars
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/characters">
            Characters
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className='nav-item nav-link text-primary'>
            Dany
          </span>
          <button className='nav-item nav-link btn'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Star Wars
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
           
            <button className="nav-item nav-link btn" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
    //   <Link className="navbar-brand" to="/">
    //     Star Wars
    //   </Link>

    //   <div className="navbar-collapse">
    //     <div className="navbar-nav">
    //       <NavLink className="nav-item nav-link" to="/">
    //         Characters
    //       </NavLink>
    //     </div>
    //   </div>

    //   <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
    //     <ul className="navbar-nav ml-auto">
    //       <span className="nav-item nav-link text-primary">Dany</span>
    //       <button
    //         className="nav-item nav-link btn"
    //         onClick={handleLogout}>

    //         Logout

    //       </button>
    //     </ul>
    //   </div>
    // </nav>
  );
};

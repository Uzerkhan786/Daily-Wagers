import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

import images from "../images/skillsync-connect-high-resolution-logo-white-transparent (1).png";
const Navbar = ({ Home }) => {
  const navigate = useNavigate();
  const getUser = JSON.parse(localStorage.getItem("userId"));

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#5856d7", color: "whitesmoke" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            <img
              src={images}
              style={{
                width: "170px",
                height: "40px",
                color: "white",
                fontWeight: "bold",
              }}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  <h5 style={{ color: "white" }}>About</h5>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/jobs"
                >
                  <h5 style={{ color: "white" }}>All Works</h5>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/createjob"
                >
                  <h5 style={{ color: "white" }}>Create Work</h5>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/appliedjob"
                >
                  <h5 style={{ color: "white" }}>Applied Work</h5>
                </Link>
              </li>
            </ul>
            {getUser == null && (
              <>
                <ul className="navbar-nav ">
                  <li className="nav-item active mx-2">
                    <Link style={{ color: "#5856d7" }} to="/login">
                      <button
                        className="btn btn-light  my-2 my-sm-0"
                        type="submit"
                      >
                        <h5>
                          <CiLogin />
                          login
                        </h5>
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item active mx-2">
                    <Link style={{ color: "#5856d7" }} to="/registration">
                      <button
                        className="btn btn-light  my-2 my-sm-0"
                        type="submit"
                      >
                        <h5>Signup</h5>
                      </button>
                    </Link>
                  </li>
                </ul>
              </>
            )}

            {/* #LOGOUT*/}
            {getUser ? (
              <>
                <ul className="navbar-nav ">
                  <li className="nav-item active mx-2">
                    <h1 className="btn btn-light  my-2 my-sm-0">
                      {getUser?.data?.name}
                    </h1>
                    <button
                      className="btn btn-light  my-2 my-sm-0"
                      type="submit"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

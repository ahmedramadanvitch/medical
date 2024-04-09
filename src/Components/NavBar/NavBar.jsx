import { Collapse, IconButton } from "@material-tailwind/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from "../../assets/images/logo_1.png";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import { useSelector } from "react-redux";
import { UserContext } from "../../Context/UserContext";
function NavBar() {
  let { user, setIsUser } = useContext(UserContext);
  let navigate = useNavigate();
  // Logout
  function logOut() {
    setIsUser(null);
    navigate("/login");
    localStorage.removeItem("userToken");
  }
  // fav list
  const fav = useSelector((state) => state.fav.fav);
  // cart list
  const cart = useSelector((state) => state.cart.cart);
  // total quantity
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <>
      <NavLink
        to="/"
        className="mr-5 mt-2 hover:text-white text-xl font-medium"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="mr-5 mt-2 hover:text-white text-xl font-medium"
      >
        About
      </NavLink>
      <NavLink
        to="/collection"
        className="mr-5 mt-2 hover:text-white text-xl font-medium"
      >
        Collection
      </NavLink>
      <NavLink
        to="/faqs"
        className="mr-5 mt-2 hover:text-white text-xl font-medium"
      >
        FaQs
      </NavLink>
      <NavLink
        to="/contact"
        className="mr-5 mt-2 hover:text-white text-xl font-medium"
      >
        Contact US
      </NavLink>
    </>
  );
  return (
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-[100] w-full">
      <div className="container mx-auto flex justify-between flex-wrap px-5 py-3 items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-white mb-2 md:mb-0"
        >
          <img src={logo} alt="" />
        </NavLink>

        {user ? (
          <>
            <nav className="hidden lg:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
              {navList}
            </nav>
          </>
        ) : (
          ""
        )}

        <div className="hidden lg:flex justify-center items-center">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="mr-3 hover:text-white text-xl font-medium"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="mr-5 hover:text-white text-xl font-medium"
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <div className="flex items-center mr-4">
                <div className="relative">
                  <span className="absolute right-[-5px] text-sm text-white bg-cyan-600 p-[1px] w-6 h-6 text-center flex justify-center items-center rounded-full z-20">
                    {totalQuantity}
                  </span>
                  <NavLink to="/cart">
                    <IconButton variant="text">
                      <ShoppingBagIcon
                        className={`h-7 w-7 text-gray-200 ${
                          cart.length > 0 ? "text-red-500" : "text-gray-200"
                        } `}
                      />
                    </IconButton>
                  </NavLink>
                </div>
                <div className="relative mx-2">
                  <span className="absolute right-[-12px] text-sm text-white bg-cyan-600 p-[1px] w-6 h-6 text-center flex justify-center items-center rounded-full z-20">
                    {fav.length}
                  </span>
                  <NavLink to="/fav">
                    <IconButton variant="text">
                      <i
                        className={`fa-solid fa-heart mt-1 text-2xl cursor-pointer h-7 w-7 ${
                          fav.length > 0 ? "text-red-700" : "text-gray-200"
                        } `}
                      ></i>
                    </IconButton>
                  </NavLink>
                </div>
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-7 w-7 text-gray-200" />
                  ) : (
                    <Bars3Icon className="h-7 w-7 text-gray-200" />
                  )}
                </IconButton>
              </div>
              <NavLink
                to={"/login"}
                className="mr-5 hover:text-white text-xl font-medium"
              >
                <span
                  onClick={() => {
                    logOut();
                  }}
                >
                  logout
                </span>
              </NavLink>
            </>
          )}
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-7 w-7 text-gray-200" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-gray-200" />
          )}
        </IconButton>
      </div>

      {/* mobile */}

      <div className="container mx-auto px-5">
        <Collapse open={openNav}>
          {user ? (
            <nav className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navList}
            </nav>
          ) : (
            ""
          )}

          {!user ? (
            <div className="mb-3 flex flex-col gap-3">
              <NavLink
                to="/login"
                className="mr-3 hover:text-white text-xl font-medium"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="mr-5 hover:text-white text-xl font-medium"
              >
                Register
              </NavLink>
            </div>
          ) : (
            <>
              <div className="flex items-center pb-3">
                <div className="flex items-center mr-4">
                  <div className="relative">
                    <span className="absolute right-[-5px] text-sm text-white bg-cyan-600 p-[1px] w-6 h-6 text-center flex justify-center items-center rounded-full z-20">
                      {totalQuantity}
                    </span>
                    <NavLink to="/cart">
                      <IconButton variant="text">
                        <ShoppingBagIcon className="h-7 w-7 text-gray-200" />
                      </IconButton>
                    </NavLink>
                  </div>
                  <div className="relative mx-2">
                    <span className="absolute right-[-10px] text-sm text-white bg-cyan-600 p-[1px] w-6 h-6 text-center flex justify-center items-center rounded-full z-20">
                      {fav.length}
                    </span>
                    <NavLink to="/fav">
                      <IconButton variant="text">
                        <i className="fa-solid fa-heart text-2xl mt-1 cursor-pointer h-7 w-7 text-gray-200 "></i>
                      </IconButton>
                    </NavLink>
                  </div>
                </div>
              </div>
              <NavLink
                to={"/login"}
                className="mr-5 hover:text-white text-xl font-medium"
              >
                <span
                  onClick={() => {
                    logOut();
                  }}
                  className=" block"
                >
                  logout
                </span>
              </NavLink>
            </>
          )}
        </Collapse>
      </div>
    </header>
  );
}

export default NavBar;

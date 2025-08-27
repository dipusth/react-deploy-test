import Logo from "@/assets/shoplogo2.png";
import { Link } from "react-router-dom";
import Email from "../ui/icon/Email";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 mb-20order-b-2 border-slate-200">
      <div className="header-top bg-primary text-white py-3">
        <div className="container">
          <div className="flex justify-between">
            <div className="left">
              <a
                href="mailto: admin@skillshikshya.com"
                className="flex hover:underline "
              >
                <Email className="text-2xl" />
                <span className="ml-2">admin@onlineshopping.com</span>
              </a>
            </div>
            <div className="ml-auto divider">
              <Link to="/login" className="text-base/6 font-semibold">
                Login
              </Link>
              <Link to="/register" className="text-base/6 font-semibold">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="flex items-center justify-between pt-3">
          <div className="flex lg:flex-1">
            <NavLink to={"/"} className="logo">
              <img src={Logo} alt="Online Shopping" />
            </NavLink>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="hidden lg:flex lg:gap-x-8 items-center" id="menu">
            <Link
              to="/about"
              className="text-base/6 font-semibold text-gray-900"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-base/6 font-semibold text-gray-900"
            >
              Features
            </Link>
            <Link
              to="/support"
              className="text-base/6 font-semibold text-gray-900"
            >
              Help & Support
            </Link>
            <Link
              to="/blog"
              className="text-base/6 font-semibold text-gray-900"
            >
              Blog
            </Link>

            <div className="dropdown inline-block relative">
              <button
                type="button"
                className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <span className="mr-1">Resources</span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                {[
                  { name: "Knowledge Base", img: "" },
                  { name: "Delivery", img: "" },
                  { name: "Faq's", img: "" },
                  { name: "Testimonials", img: "" },
                ].map(({ name, img }) => (
                  <li key={name}>
                    <a className="flex justify-between" href="#">
                      {name}
                      {img && (
                        <span className="icon">
                          <img src={img} alt={name} />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <Button className="btn" variant={"outline"}>
              Log in
            </Button> */}
            <NavLink
              to="/register"
              className="bg-primary btn rounded-none ml-3 text-white"
            >
              Get Started
            </NavLink>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state */}
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

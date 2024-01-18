import { Outlet,Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
 const currentLocation = useLocation();
 const currentRoute = currentLocation.pathname.split("/")[1];

 const routeParts = currentLocation.pathname.split("/").filter((data) => data !== "");

 return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-16 px-4">
        <div className="flex justify-between items-center">
          <img src="/images/home-icon.png" alt="home" className="w-48 h-14" />
          <ul className="flex items-center space-x-16">
            <li>
              <Link to="flashcard" className={`block ${currentRoute === "flashcard" ? "text-blue-600" : "text-gray-500"}`}>
                <li>Flashcard</li>
              </Link>
            </li>
            <li>
              <Link to="contact" className={`block ${currentRoute === "contact" ? "text-blue-600" : "text-gray-500"}`}>
                <li>Contact</li>
              </Link>
            </li>
            <li>
              <Link to="faq" className={`block ${currentRoute === "faq" ? "text-blue-600" : "text-gray-500"}`}>
                <li>FAQ</li>
              </Link>
            </li>
            <li>
              <Link to="login" className={`block ${currentRoute === "login" ? "text-blue-600" : "text-gray-500"}`}>
                <li>
                 <span>Login</span>
                </li>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4">
        <ul className="flex items-center space-x-8">
          <li>
            <img src="/images/home-icon.png" alt="home" className="w-10 h-10" />
            <img src="/images/right-arrow.png" alt="path" className="w-5 h-5" />
          </li>
          {routeParts.map((data, index) => (
            <li key={index}>
              {data}
              <img src="/images/right-arrow.png" alt="path" className="w-5 h-5" />
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
 );
};

export default Header;
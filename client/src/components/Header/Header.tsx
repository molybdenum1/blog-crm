import type { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <nav className="px-2 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link to="/">Blog</Link>
          <ul className="pl-0 mb-0 list-none flex">
            <li className="ml-0">
              <Link to="/login">Login</Link>
            </li>
            <li className="ml-3">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

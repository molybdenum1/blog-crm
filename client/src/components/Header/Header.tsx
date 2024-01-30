import type { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <nav className="px-2 py-4">
        <div className="max-w-screen-xl">
            <Link to="/">Blog</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

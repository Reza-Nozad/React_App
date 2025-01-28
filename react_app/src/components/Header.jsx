import Logo from "./Logo";
import Profile from "./Profile";
import Search from "./Search";

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <Logo />
      <Search />
      <Profile isLoggedIn />
    </header>
  );
}

export default Header;
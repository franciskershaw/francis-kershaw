import MobileNav from "./MobileNav";
import navLinks from "./navLinks";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary border flex justify-between items-center h-(--navbar-height) px-4 md:px-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Logo</h1>
      </div>
      <MobileNav />
      <nav className="hidden md:flex items-center gap-12">
        {navLinks.map((link) => (
          <button className="" key={link.label}>
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

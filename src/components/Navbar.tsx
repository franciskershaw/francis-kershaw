import MobileNav from "./MobileNav";
import navLinks from "./navLinks";

const Navbar = () => {
  return (
    <header className="border flex justify-between items-center p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold border">Logo</h1>
      </div>
      <MobileNav />
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button className="border" key={link.label}>{link.label}</button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

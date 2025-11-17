import MobileNav from "./MobileNav";
import navLinks from "./navLinks";

const Navbar = () => {
  return (
    <nav className="border flex justify-between items-center p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <MobileNav />
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button key={link.label}>{link.label}</button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

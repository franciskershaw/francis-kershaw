import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 border flex flex-col items-center justify-center gap-4">
      {/* Social links */}
      <div className="flex items-center gap-4 text-2xl border">
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
      {/* Designed and built by */}
      <div className="flex flex-col items-center justify-center border">
        <p className="text-sm">Designed and built by</p>
        <p className="text-sm">Francis Kershaw</p>
      </div>
    </footer>
  );
};

export default Footer;

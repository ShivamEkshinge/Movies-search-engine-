import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Movies Search Engine 🎥
    </span>
  );
};

export default Header;

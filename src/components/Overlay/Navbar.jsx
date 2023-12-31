import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar font-bebas tracking-widest">
      <div className="eye"></div>
        <ul>
            <li className="menu-items"><a href="#">// About   </a></li>
            <li className="menu-items"><a href="#">// Projects</a></li>
            <li className="menu-items"><a href="#">// Contact </a></li>
        </ul>
    </div>
  );
};
export default Navbar;

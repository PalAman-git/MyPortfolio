import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">A.</div>
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

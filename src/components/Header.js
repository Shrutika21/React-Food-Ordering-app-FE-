import image from "../../logo 2.png";
const Titile = () => {
    return (
      <a href="/">
        <img className="logo" alt="logo" src={image} />
      </a>
    );
  };
  const Header = () => {
    return (
      <div className="header">
        <Titile></Titile>
        <div className="header__nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };


export default Header;
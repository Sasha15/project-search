import "./Logo.scss";
import LogoImg from "./logo.svg";

const Logo = () => {
  return (
    <div className="app-logo">
      <img src={LogoImg} alt="logo" />
    </div>
  );
};

export default Logo;

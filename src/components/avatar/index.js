import AvatarImg from "./avatar.svg";
import "./Avatar.scss";

const Avatar = () => {
  return (
    <div className="app-avatar">
      <img src={AvatarImg} alt="avatar" />
    </div>
  );
};

export default Avatar;

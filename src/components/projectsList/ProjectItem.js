import { ReactComponent as LocationIcon } from "./location-icon.svg";
import { ReactComponent as CameraIcon } from "./camera-icon.svg";
import { ReactComponent as ClockIcon } from "./clock-icon.svg";
import ProjectLogo from "./project-logo.png";

const ProjectItem = ({ itemData }) => {
  const { API, Category, Description, Link } = itemData;
  return (
    <div className="project-item">
      <div className="project-item__inner">
        <div className="project-item__header">
          <div className="project-item__header--logo">
            <img src={ProjectLogo} alt="Project logo" />
          </div>
          <div>
            <p className="project-item__header--name">{API}</p>
            <p className="project-item__header--location">
              {<LocationIcon />}

              <span>Trollhättan, Sweden</span>
            </p>
          </div>
        </div>

        <h3 className="project-item__title">
          <a href={Link} target="_blank" rel="noreferrer">
            {Description}
          </a>
        </h3>

        <ul className="project-item__tags">
          <li className="project-item__tags--item">
            <span>{Category}</span>
          </li>
        </ul>
        <div className="project-item__footer">
          <span className="project-item__footer--videos">
            {<CameraIcon />} <span>4 videos</span>
          </span>
          <span className="project-item__footer--date">
            {<ClockIcon />} <span>22 June</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

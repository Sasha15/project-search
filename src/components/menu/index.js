import "./Menu.scss";

const Menu = () => {
  return (
    <nav className="app-nav">
      <ul className="app-nav-list">
        <li>
          <a className="app-nav-link active" href="/#">
            Explore Creators
          </a>
        </li>
        <li>
          <a className="app-nav-link" href="/#">
            My Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

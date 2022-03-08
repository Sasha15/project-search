import Logo from "./components/logo";
import Menu from "./components/menu";
import Avatar from "./components/avatar";
import HeroBanner from "./components/heroBanner";
import FormInput from "./components/formInput";
import Footer from "./components/footer";
import "./App.scss";
import ProjectList from "./components/projectsList";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <Logo />
          <Menu />
          <Avatar />
        </header>
      </div>
      <HeroBanner />
      <FormInput />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;

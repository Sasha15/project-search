import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryResultData } from "../../actions";
import "./FormInput.scss";
import { ReactComponent as SearchIcon } from "./search-icon.svg";

const FormInput = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { loading, projects } = data.data;
    if (!loading && query !== "") {
      dispatch(queryResultData(query, projects));
    }
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="app-search-form">
        <span className="app-search-form__container">
          <span className="app-search-form__icon-container">
            <SearchIcon />
          </span>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            value={query}
            placeholder="Search creative projects"
            className="app-search-input"
          />
        </span>
      </form>
    </div>
  );
};

export default FormInput;

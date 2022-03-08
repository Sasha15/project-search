import ProjectListHeader from "./ProjectListHeader";
import ProjectItem from "./ProjectItem";
import { useSelector } from "react-redux";
import "./ProjectList.scss";
import { useEffect, useState } from "react";

const ProjectList = () => {
  const data = useSelector((state) => state);
  const { projects, loading } = data.data;
  const [elementToShow, setElementToShow] = useState([]);
  const { result } = data.result;

  useEffect(() => {
    console.log(result);
    if (result && result?.length > 0) {
      setElementToShow(result);
    } else if (projects && projects.length > 0) {
      setElementToShow(projects);
    }
  }, [projects, result]);

  return (
    <div className="container">
      {loading ? (
        <div className="project-loading">Projects are Loading...</div>
      ) : (
        <>
          <ProjectListHeader
            count={elementToShow?.length > 0 && elementToShow.length}
          />
          {elementToShow?.length > 0 && (
            <div className="project-list-container">
              {elementToShow.map((item, i) => (
                <ProjectItem key={i} itemData={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectList;

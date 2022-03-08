const ProjectListHeader = ({ count }) => {
  return (
    <div className="project-list__header">
      <p className="project-list__header--result">
        All projects - {count} results
      </p>
    </div>
  );
};

export default ProjectListHeader;

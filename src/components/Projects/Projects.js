import './Projects.css';

import project_data from './project_data';

const Projects = () => {
  return (
    <div className="Projects">
      { 
        project_data.map((obj) => (
          <a
          className="Projects__item"
          rel="noreferrer"
          href={obj.link}
          target="_blank">
            <img 
            className="Projects__image"
            src={obj.image}
            alt={obj.alt} />
            <p className="Projects__description">
              {obj.description}
            </p>
            <h3 className="Projects__title">
              {obj.title}
            </h3>
          </a>
        ))
      }
    </div>
  );
}

export default Projects;
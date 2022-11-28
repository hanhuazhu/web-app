import './Portfolio.css';

import Projects from '../../components/Projects/Projects';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1>These are some of my most recent projects</h1>
      <Projects />
    </div>
  );
}

export default Portfolio;
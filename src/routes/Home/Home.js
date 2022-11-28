import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <section className="Home__header">
        <h1>Hello! I Am Han</h1>
        <h3>a student majoring in computer science</h3>
      </section>
      <section className="Home__about">
        <img className="Home__picture" src="project-0.jpg" 
        alt="This would be my face, but right now it's a dog" />
        <div>
          <h3 className='Home__description'>I am currently an aspiring <span>software 
            engineer</span> and freshman at Oregon State University,
            set to graduate in 2026</h3>
          <h3 className='Home__description'>Before then, I hope to acquire as much industry experience 
            as I can in order to <span>grow further</span> and improve the <span>practicality</span> of my code</h3>
          <h3 className='Home__description'>My mission is to apply the principles
            and theories I learn in coursework to real-life solutions, and work
            with teams as <span>passionate</span> as I am!</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
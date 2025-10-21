import { useState } from 'react';
import './App.css';


import Education from './components/Education';
import Projects from './components/Projects'
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Languages from './components/Languages';




function Section({ component }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract metadata
  const { type } = component;
  const title = type.title || "Untitled";
  const image = type.image;

  return (
    <div>
      <div
        className="section"
        style={{ backgroundImage: `url(${image})` }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="section-content">
          <h2>{title}</h2>
          {!isExpanded ? <p>Click to expand</p> : <p>Click to collapse</p>}
        </div>
      </div>

      {isExpanded && <div>{component}</div>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>My Portfolio</title>
        <div className="App-header-content">
          <h1>Welcome to Daniel's Portfolio</h1>
          <p>
            Scroll down to find information about my projects, skills, and
            professional achievements.
          </p>
          <div className="contact-info">
            <a
              href="https://github.com/HerreroRocher"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/herrero-daniel"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <p>Phone Number: 07476684465</p>
            <p>
              Email:{" "}
              <a href="mailto:danielherrero4465@gmail.com">
                danielherrero4465@gmail.com
              </a>
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hi, I'm Daniel. I'm a passionate software engineer with experience
            in various technologies. I enjoy solving complex problems and
            building innovative solutions. In my free time, I like to learn new
            skills and work on personal projects.
          </p>
          <p>
            A third-year University of Manchester undergraduate with a passion
            for programming and 6 years of semi-regular coding experience. I am
            enthusiastic about solving complex problems and am actively seeking
            a Software Engineer opportunity to apply my skills. My quick
            learning ability enables me to rapidly adapt to new technologies and
            contribute effectively to team projects. I am excited to start my
            career in computing and have a strong desire to demonstrate my
            skills in the industry.
          </p>
        </section>
        <Section component={<Education />} />
        <Section component={<Projects />} />
        <Section component={<Experience />} />
        <Section component={<Skills />} />
        <Section component={<Achievements />} />
        <Section component={<Languages />} />
      </main>
      <footer>
        <p>&copy; 2024 Daniel Herrero.</p>
      </footer>
    </div>
  );
}

export default App;

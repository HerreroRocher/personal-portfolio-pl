import { useState } from 'react';
import './App.css';


import Education from './components/Education';
import Projects from './components/Projects'
import Experience from './components/Experience';

import educationImg from './assets/education_img.jpg';
import projectsImg from './assets/projects_img.jpg';
import experienceImg from './assets/experience_img.jpg';
import achievementsImg from './assets/achievements_img.jpg';
import skillsImg from './assets/skills_img.jpg';
import languagesImg from './assets/languages_img.jpg';




function SkillsInfo() {
  return (
    <div className="information">
      <h3>Skills</h3>
      <h4>Programming</h4>
      <p>Python (PyGame, Tkinter, matplotlib), HTML/CSS, JavaScript (Node.js, React.js), MySQL, Java, Git, Unity, PHP, C, C#, Shell Scripting, Data Parsing, Algorithm Development, State Management, API Interaction.</p>
      <h4>Soft Skills</h4>
      <p>Problem-Solving, Analytical Thinking, Attention to Detail, Self-Learning, Teamwork, Time Management, Communication, Technical Communication, Project Management, Resilience, Passion for Computing.</p>
      <h4>Miscellaneous</h4>
      <p>ARM Assembly Language, Microsoft Office, Command Prompt, Git Bash, Unix-like systems, CLIs, pip, npm</p>
    </div>
  );
}

function AchievementsInfo() {
  return (
    <div className="information">
      <h3>Achievements</h3>
      <p>2016 Semi-Finalist, BBC Top Class (Similar to University Team Challenge Show) Edinburgh, UK</p>
      <p>2017 Gold, Junior Mathematical Challenge (UK Mathematics Trust) London, UK</p>
      <p>2018 Gold, Junior Mathematical Challenge (UK Mathematics Trust) London, UK</p>
      <p>2021 C1.3 Spanish Certification, Agrupación de Lengua y Cultura Españolas London, UK</p>
    </div>
  );
}

function LanguagesInfo() {
  return (
    <div className="information">
      <h3>Languages</h3>
      <p>English C2 Native</p>
      <p>Spanish C1 Fluent</p>
      <p>French B1 Intermediate</p>
      <p>Italian A1 Basic</p>
      <p>Portuguese A1 Basic</p>
    </div>
  );
}




function Section({ title, imageUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderContent = () => {
    switch (title) {
      case 'Education':
        return <Education />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Skills':
        return <SkillsInfo />;
      case 'Achievements':
        return <AchievementsInfo />;
      case 'Languages':
        return <LanguagesInfo />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="section" style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => setIsExpanded(!isExpanded)}>
        <div className="section-content">
          <h2>{title}</h2>
          {!isExpanded ? <p>Click to expand</p> : <p>Click to collapse</p>}
        </div>
      </div>

      {isExpanded && (
        <div>
          {renderContent()}
        </div>
      )}
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
            Scroll down to find information about my projects, skills, and professional achievements.
          </p>
          <div className="contact-info">
            <a href="https://github.com/HerreroRocher" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/herrero-daniel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <p>Phone Number: 07476684465</p>
            <p>Email: <a href="mailto:danielherrero4465@gmail.com">danielherrero4465@gmail.com</a></p>
          </div>
        </div>
      </header>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hi, I'm Daniel. I'm a passionate software engineer with experience in various technologies. I enjoy solving complex problems and building innovative solutions. In my free time, I like to learn new skills and work on personal projects.
          </p>
          <p>
            A third-year University of Manchester undergraduate with a passion for programming and 6 years of semi-regular coding experience. I am enthusiastic about solving complex problems and am actively seeking a Software Engineer opportunity to apply my skills. My quick learning ability enables me to rapidly adapt to new technologies and contribute effectively to team projects. I am excited to start my career in computing and have a strong desire to demonstrate my skills in the industry.
          </p>
        </section>
        <Section title="Education" imageUrl={educationImg} />
        <Section title="Projects" imageUrl={projectsImg} />
        <Section title="Experience" imageUrl={experienceImg} />
        <Section title="Skills" imageUrl={skillsImg} />
        <Section title="Achievements" imageUrl={achievementsImg} />
        <Section title="Languages" imageUrl={languagesImg} />
      </main>
      <footer>
        <p>&copy; 2024 Daniel Herrero.</p>
      </footer>
    </div>
  );
}

export default App;

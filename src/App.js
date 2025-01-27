import React, { useState } from 'react';
import './App.css';
import educationImg from './education_img.jpg'; // Ensure you have this image in the src folder
import projectsImg from './projects_img.jpg'; // Ensure you have this image in the src folder
import experienceImg from './experience_img.jpg'; // Ensure you have this image in the src folder
import achievementsImg from './achievements_img.jpg'; // Ensure you have this image in the src folder
import skillsImg from './skills_img.jpg'; // Ensure you have this image in the src folder
import languagesImg from './languages_img.jpg'; // Ensure you have this image in the src folder
import homeProjectsImg from './home_projects_img.jpg'; // Ensure you have this image in the src folder
import schoolProjectsImg from './school_projects_img.jpeg'; // Ensure you have this image in the src folder

function EducationInfo() {
  return (
    <>
    <Uni />
    <A_Levels />
    <GCSEs />
    </>
  );
}

function Uni(){
  return (
    <div className="information">
    <h4>The University of Manchester</h4>
    <p>Location: Manchester, UK</p>
    <p>Degree: BSc in Computer Science with Industrial Experience</p>
    <p>Duration: Sep 2023 ‑ Jul 2027</p>
    <p>• Expected graduation in 2027</p>
    <p>• Expected first class degree</p>
    <p>• Achieved course units: Computer Engineering(63%), Computer Architecture(77%), Programming 1(71%), First Year Team Project(78%), Data Science(75%), Operating Systems(67%), Computation(72%)</p>
    <p>• Current course units: Software Engineering, Programming Languages & Paradigms, Algorithms and Data Structures, Logic and Modelling, Intro to AI, Databases, Machine Learning, Distributed Systems</p>
  </div>
  )
}

function A_Levels(){
  return (
    <div className="information">
    <h4>Finchley Catholic High School</h4>
    <p>Location: London, UK</p>
    <p>Duration: Sep 2021 ‑ Jun 2023</p>
    <h5>A‑Levels:</h5>
    <p>• Physics - A*</p>
    <p>• Mathematics - A*</p>
    <p>• Computer Science - A</p>
    </div>
  )
}

function GCSEs(){
  return (
    <div className="information">
    <h4>Finchley Catholic High School</h4>
    <p>Location: London, UK</p>
    <p>Duration: Sep 2018 ‑ Jun 2021</p>
    <h5>GCSEs:</h5>
    <p>• Business - 9</p>
    <p>• Biology - 9</p>
    <p>• Physics - 9</p>
    <p>• Mathematics - 9</p>
    <p>• French - 8</p>
    <p>• Chemistry - 8</p>
    <p>• Computer Science - 7</p>
    <p>• English Literature - 7</p>
    <p>• English Language - 6</p>
    <p>• Religious Studies - 6</p>
    </div>
  )
}

function EmployeeManagementSystem() {
  return (
    <div className="information">
      <h4>Employee Management System (PHP and MySQL)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Nov 2024</p>
      <p>• Developed a comprehensive employee management system using PHP and MySQL, creating multiple portals for various functionalities.</p>
      <p>• Implemented an employee directory for management to search and view employee details efficiently.</p>
      <p>• Created a portal for management to grant raises and promotions to employees, streamlining the salary adjustment process.</p>
      <p>• Developed a portal for employees to request leave.</p>
      <p>• Built a portal for managers to view, approve, or deny leave requests, and to access leave statistics per department.</p>
      <p>• Designed a portal to generate comprehensive payroll summaries, enhancing payroll management and accuracy.</p>
      <p>• Implemented a portal to view current month birthdays.</p>
      <p>• Created a portal for contract terminations and auditing, ensuring compliance and thorough record-keeping.</p>
      <p>• Technical Skills: PHP, MySQL, Web Development, Database Management.</p>
      <p>• Soft Skills: Project Management, Problem-Solving, Attention to Detail, Organisational Skills.</p>
    </div>
  );
}

function HashSetVSBSTree() {
  return (
    <div className="information">
      <h4>HashSet vs BSTree Investigation and Testing (Python testing, plotting and analysis)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Nov 2024</p>
      <p>• Developed and implemented various data structures including binary search trees and hash sets, focusing on hash table sizing, load factors, and rehashing algorithms.</p>
      <p>• Created automated experiments to investigate the complexities of these data structures, using Python and the matplotlib library to visualise results.</p>
      <p>• Conducted performance comparisons between different data structures, such as binary search trees and hash sets, and analysed the results to validate hypotheses.</p>
      <p>• Utilised sorting algorithms and implemented collision resolution techniques in hash tables.</p>
      <p>• Employed data manipulation techniques and conducted thorough testing to ensure the accuracy and reliability of the data structures.</p>
      <p>• Technical Skills: Python, Data Structures, Algorithms, Performance Analysis, Matplotlib, Data Visualisation.</p>
      <p>• Soft Skills: Analytical Thinking, Problem-Solving, Research, Attention to Detail.</p>
    </div>
  );
}


function MagicBakery() {
  return (
    <div className="information">
      <h4>Magic Bakery (Java Bakery Game)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Apr 2024 ‑ May 2024</p>
      <p>• Developed a Java console simulation of Magic Bakery, incorporating JDK packages and adhering to a UML diagram.</p>
      <p>• Implemented algorithms using various class types (Enums, interfaces, abstract classes) and method modifier types (public, private, static, etc.).</p>
      <p>• Conducted thorough testing and debugging to ensure the accuracy and reliability of game mechanics.</p>
      <p>• Technical Skills: Java, Javadoc, UML Diagrams, Git, Object‑Oriented Programming (OOP), Algorithm Design.</p>
      <p>• Soft Skills: Time Management, Computational Thinking, Attention to Detail, Problem‑Solving.</p>
    </div>
  );
}

function FoodFinder() {
  return (
    <div className="information">
      <h4>Food Finder (First Year Team Project using Node.js)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Sep 2023 ‑ Apr 2024</p>
      <p>• Collaborated in an 8‑person team to create a website, which takes user input to return any dishes, or similar, in the area, and giving comparative results.</p>
      <p>• Employed algorithms in JavaScript to use with the HTML/CSS created by my teammates, for the creation of an interactive website.</p>
      <p>• Solely created and used an API to access a relational database, to return relevant data from a local database using a Node.js server.</p>
      <p>• My role was the back‑end developer, where I implemented code to retrieve data from the database, using an API to respond to requests from the front‑end, as well as dealing with sorting, limits and joining tables in the database.</p>
      <p>• Technical Skills: HTML/CSS, JavaScript (Node.js), SQL, API Development, Git.</p>
      <p>• Soft Skills: Time Management, Teamwork, Presentation Skills, Communication, Problem‑Solving.</p>
    </div>
  );
}

function Dodger() {
  return (
    <div className="information">
      <h4>Dodger (Python Tkinter Game)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Oct 2023 ‑ Nov 2023</p>
      <p>• Solely developed an interactive third‑person game using Python, which incorporates images, shapes, text, leaderboard, etc., where the user’s character has to avoid enemies to progress to the next level.</p>
      <p>• Developed random enemy generation algorithms while keeping the number of enemies and enemy speed correlated to the level number.</p>
      <p>• Implemented algorithms for collision detection, save/load, leaderboard, control changing, etc., using encapsulation and polymorphism.</p>
      <p>• Designed SQL databases to store player information (username, password hashes, scores, time remaining), to display the top five scores after the user loses the game.</p>
      <p>• Technical Skills: Python(Tkinter), File Manipulation, Git.</p>
      <p>• Soft Skills: Time Management, Computational Thinking, Problem‑solving, Creativity.</p>
    </div>
  );
}

function JungleShooter() {
  return (
    <div className="information">
      <h4>Jungle Shooter (AQA A‑Level Project using Python PyGame)</h4>
      <p>Location: London, UK</p>
      <p>Institution: Finchley Catholic High School</p>
      <p>Duration: Jun 2022 ‑ Feb 2023</p>
      <p>• Developed a third‑person shooter game where the user avoids being shot by enemies, and eliminates them to progress to the next of infinitely produced levels.</p>
      <p>• Developed random enemy generation algorithms while keeping the number of enemies and bullet speed correlated to the level number.</p>
      <p>• Encapsulated enemies, bullet and the player in separate classes, with the enemy class inheriting directly from the player class to use similar shooting, movement and collision methods of the player.</p>
      <p>• Technical Skills: Python(Pygame), SQL.</p>
      <p>• Soft Skills: Time Management, Presentation skills, Documentation, Testing.</p>
      <p>Source code available upon request.</p>
    </div>
  );
}

function ConnectFour() {
  return (
    <div className="information">
      <h4><a href= "https://github.com/HerreroRocher/connect-four" target="_blank" rel="noopener noreferrer">Connect Four</a> (Game using Unity/C#)</h4>
      <p>Duration: Aug 2024</p>
      <p>• Designed and developed a full‑featured Connect Four game using the Unity engine, implementing core gameplay mechanics such as turn‑based play, win condition detection, and an interactive user interface.</p>
      <p>• Utilised C# to manage game logic, player interactions, and dynamic UI updates, ensuring a seamless and responsive gaming experience.</p>
      <p>• Implemented advanced features, including dynamic GameObject creation, animated piece dropping, and flexible gameboard sizing to enhance player engagement.</p>
      <p>• Currently adding online multiplayer functionality and a single‑player mode against AI, expanding the game’s replayability and appeal.</p>
      <p>• Employed Unity’s physics system for realistic piece movement, and invested extensive time in debugging and testing to ensure a polished final product, with comprehensive debug logs capturing various game states.</p>
      <p>• Researched and adhered to C# naming conventions to ensure code readability and maintainability, contributing to a well‑organised and professional codebase.</p>
      <p>• Applied version control practices using Git, maintaining a clean and organised project repository on GitHub for collaborative development and issue tracking.</p>
      <p>• Technical Skills: Unity, C#, Game Development, Git.</p>
      <p>• Soft Skills: Problem‑Solving, Self‑Learning, Project Management, Attention to Detail.</p>
    </div>
  );
}

function Infoboard() {
  return (
    <div className="information">
      <h4><a href="https://herrerorocher.github.io/infoboard" target="_blank" rel="noopener noreferrer">Infoboard</a> (Web app using React.js)</h4>
      <p>Duration: Jul 2024</p>
      <p>• Solely developed a responsive web application using React.js, which integrates multiple API calls to provide users with real‑time information.</p>
      <p>• Implemented sections for current weather in any chosen location, bus times for selected bus stops, and tube service statuses for selected lines.</p>
      <p>• Employed data manipulation techniques, including sorting, filtering, and combining API responses to create a cohesive user experience.</p>
      <p>• Utilised React features like hooks, props, and dependencies, while managing state and side effects efficiently.</p>
      <p>• Incorporated recursive functions and leveraged local storage to enhance user interaction and performance.</p>
      <p>• Conducted thorough testing and debugging to ensure the reliability and accuracy of data displayed across different scenarios.</p>
      <p>• Technical Skills: HTML/CSS, JavaScript (React.js), API Interaction, Git, Responsive Design, State Management, Data Handling.</p>
      <p>• Soft Skills: Problem‑Solving, Self‑Management, Attention to Detail, User Experience Design.</p>
    </div>
  );
}

function HigherOrLowerGame() {
  return (
    <div className="information">
      <h4><a href="https://github.com/HerreroRocher/HigherOrLower" target="_blank" rel="noopener noreferrer">Higher or Lower</a> (Python Game)</h4>
      <p>Duration: Nov 2024</p>
      <p>• Developed an interactive higher or lower game using Python, allowing users to personalise game rules and settings.</p>
      <p>• Utilised Python libraries such as Tkinter for GUI development, providing an engaging and interactive user experience.</p>
      <p>• Incorporated features for tracking user scores, displaying high scores, and providing feedback on user guesses.</p>
      <p>• Ensured the game logic was robust and efficient, handling edge cases and invalid inputs gracefully.</p>
      <p>• Technical Skills: Python, Tkinter, GUI Development, Game Logic, User Interaction, Data Handling.</p>
      <p>• Soft Skills: Creativity, Problem-Solving, User Experience Design, Attention to Detail.</p>
    </div>
  );
}

function GradeCalculator() {
  return (
    <div className="information">
      <h4><a href="https://github.com/HerreroRocher/grade-calculator" target="_blank" rel="noopener noreferrer">Grade Calculator</a> (CLI Tool)</h4>
      <p>Duration: Oct 2024</p>
      <p>• Developed a command-line interface (CLI) tool in Python to calculate the minimum exam score needed to achieve a target grade based on coursework and exam splits.</p>
      <p>• Implemented functionality to input course details, including coursework/exam split, individual coursework scores, and their respective weightings.</p>
      <p>• Designed the tool to handle various grading schemes and provide accurate calculations for different course structures.</p>
      <p>• Conducted thorough testing to validate the accuracy of calculations and ensure the tool's reliability.</p>
      <p>• Technical Skills: Python, CLI Development, Data Handling, User Interaction, Error Handling.</p>
      <p>• Soft Skills: Analytical Thinking, Problem-Solving, Attention to Detail, User Experience Design.</p>
    </div>
  );
}


function CSVReader() {
  return (
    <div className="information">
      <h4><a href = "https://github.com/HerreroRocher/csv-reader" target="_blank" rel="noopener noreferrer">CSV Reader</a> (Web app using React.js)</h4>
      <p>Duration: Jul 2024</p>
      <p>• Developed a React.js application to verify ISIN numbers against a local CSV file of approved reporting offshore funds from the gov.uk website.</p>
      <p>• Learned and applied fundamental React concepts, including useEffect and useState hooks, to manage component state and side effects.</p>
      <p>• Enhanced problem‑solving skills through the development of an algorithm that checks and validates ISIN numbers.</p>
      <p>• Implemented efficient data parsing and validation techniques to ensure accurate and timely information retrieval.</p>
      <p>• Applied version control best practices using Git for collaborative development and version management.</p>
      <p>• Technical Skills: HTML/CSS, JavaScript (React.js), CSV File Handling, Git, Data Parsing, Algorithm Development, State Management.</p>
      <p>• Soft Skills: Problem‑Solving, Self‑Learning, Attention to Detail, Analytical Thinking, Technical Communication.</p>
      <p>Source code and builds are available on my public GitHub (HerreroRocher).</p>
    </div>
  );
}

function PersonalPortfolio() {
  return (
    <div className="information">
      <h4>Personal Portfolio (Web App using React.js)</h4>
      <p>Duration: Ongoing</p>
      <p>• Designed and developed a personal portfolio website using React.js, showcasing projects, skills, and professional achievements.</p>
      <p>• Implemented responsive design principles to ensure the website is accessible and visually appealing on various devices.</p>
      <p>• Utilised React components, hooks, and state management to create a dynamic and interactive user experience.</p>
      <p>• Deployed the website using GitHub Pages, ensuring continuous integration and delivery.</p>
      <p>• Applied version control practices using Git, maintaining a clean and organised project repository on GitHub.</p>
      <p>• Technical Skills: React.js, HTML/CSS, JavaScript, Git, Responsive Design.</p>
      <p>• Soft Skills: Problem‑Solving, Self‑Learning, Project Management, Attention to Detail.</p>
    </div>
  );
}

function SchoolProjects() {
  return (
    <>
      <FoodFinder />
      <HashSetVSBSTree />
      <EmployeeManagementSystem />
      <MagicBakery />
      <Dodger />
      <JungleShooter />
    </>
  );
}

function PersonalProjects() {
  return (
    <>
      <Infoboard />
      <ConnectFour />
      <PersonalPortfolio />
      <HigherOrLowerGame />
      <CSVReader />
      <GradeCalculator />
    </>
  );
}

function ExperienceInfo() {
  return (
    <>
      <Restaurant_65A />
      <MonmouthKitchen />
      <RitzRestaurant />
      <TakaMarylebone />
    </>
  )
}

function Restaurant_65A() {
  return (
    <div className="information">
      <h4>65A Restaurant</h4>
      <p>Location: London, UK</p>
      <p>Position: Waiter</p>
      <p>Duration: Jul 2024 ‑ Aug 2024</p>
      <p>• Worked as part of a team of 3‑4 waiters per service, managing my own section independently.</p>
      <p>• Assumed increased responsibilities, demonstrating serious commitment and quick learning.</p>
      <p>• Provided attentive and efficient service, handling guest interactions, managing orders, and resolving service issues.</p>
      <p>• Consistently received positive feedback from guests for hospitality and professionalism.</p>
      <p>• Soft Skills: Leadership, Teamwork, Quick Learning, Communication, Time Management, Organisation.</p>
    </div>
  );
}

function MonmouthKitchen() {
  return (
    <div className="information">
      <h4>Monmouth Kitchen</h4>
      <p>Location: London, UK</p>
      <p>Position: Waiter</p>
      <p>Duration: Aug 2023 ‑ Sept 2023</p>
      <p>• Attained employment for a role within a team of six waiters.</p>
      <p>• Attended several training sessions and engaged in additional out‑of‑work activities to maximise my potential as a waiter.</p>
      <p>• Significantly increased my leadership, teamwork, and communication skills due to much larger responsibilities than previous employment, including conversing with guests, attending to service issues, taking and managing orders, and serving guests.</p>
      <p>• Assisted in the management of my assigned section of the restaurant during open hours, ensuring efficiency and efficacy to please our guests.</p>
      <p>• Received positive reviews of my hospitality and of our team.</p>
      <p>• Soft Skills: Teamwork, Time Management, Communication, Organisation, Multi‑Tasking.</p>
    </div>
  );
}

function RitzRestaurant() {
  return (
    <div className="information">
      <h4>The Ritz Restaurant</h4>
      <p>Location: London, UK</p>
      <p>Position: Commis Waiter</p>
      <p>Duration: Oct 2021 ‑ Jan 2023</p>
      <p>• Collaborated in a team of ten Commis Waiters, for over a year, to assist in the high‑quality service provided by the Ritz Hotel Restaurant.</p>
      <p>• Collaborated with other teams (Chefs, Head Waiters, Kitchen Porters, Chefs de Rang, etc.) for a seamless service.</p>
      <p>• Engaged in important time‑sensitive duties, mainly including carrying food from kitchen to restaurant floor, polishing cutlery and plates, deep cleaning and vacuum cleaning the restaurant floor between services.</p>
      <p>• Soft Skills: Teamwork, Time Management, Communication, Patience, Multi‑Tasking.</p>
    </div>
  );
}

function TakaMarylebone() {
  return (
    <div className="information">
      <h4>Taka Marylebone</h4>
      <p>Location: London, UK</p>
      <p>Position: Runner</p>
      <p>Duration: Sept 2020 ‑ Oct 2021</p>
      <p>• Cooperated in a team of 2 Runners, for over a year, to provide the Waiters with assistance for the service of guests.</p>
      <p>• Undertook various duties to enhance the operation, speed and cleanliness of the restaurant.</p>
      <p>• Regularly engaged in important time‑sensitive duties, when commonly understaffed.</p>
      <p>• Soft Skills: Teamwork, Time Management.</p>
    </div>
  );
}

function SkillsInfo() {
  return (
    <div className="information">
      <h3>Skills</h3>
      <h4>Programming</h4>
      <p>Python (PyGame, Tkinter, matplotlib), HTML/CSS, JavaScript (Node.js, React.js), MySQL, Java, Git, Unity, PHP, C C#, Shell Scripting, Data Parsing, Algorithm Development, State Management, API Interaction.</p>
      <h4>Soft Skills</h4>
      <p>Problem‑Solving, Analytical Thinking, Attention to Detail, Self‑Learning, Teamwork, Time Management, Communication, Technical Communication, Project Management, Resilience, Passion for Computing.</p>
      <h4>Miscellaneous</h4>
      <p>ARM Assembly Language, Microsoft Office, Command Prompt, Git Bash, Unix-like systems, CLIs, pip, npm</p>
    </div>
  );
}

function AchievementsInfo() {
  return (
    <div className="information">
      <h3>Achievements</h3>
      <p>2016 Semi‑Finalist, BBC Top Class (Similar to University Team Challenge Show) Edinburgh, UK</p>
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

function SubsectionPersonalProjects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className='subsection-container'>
      <div className="subsection" style={{ backgroundImage: `url(${homeProjectsImg})` }} onClick={() => setIsExpanded(!isExpanded)}>
        <div className="section-content">
          <h3>Personal Projects</h3>
          {!isExpanded ? <p>Click to expand</p> : <p>Click to collapse</p>}
        </div>
      </div>
      </div>

      {isExpanded && (
        <div>
          <PersonalProjects />
        </div>
      )}
    </div>
  );
}

function SubsectionUniProjects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className='subsection-container'>
        <div className="subsection" style={{ backgroundImage: `url(${schoolProjectsImg})` }} onClick={() => setIsExpanded(!isExpanded)}>
          <div className="section-content">
            <h3>School Projects</h3>
            {!isExpanded ? <p>Click to expand</p> : <p>Click to collapse</p>}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div>
          <SchoolProjects />
        </div>
      )}
    </div>
  );
}

function Section({ title, imageUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderContent = () => {
    switch (title) {
      case 'Education':
        return <EducationInfo />;
      case 'Projects':
        return (
          <>
            <SubsectionUniProjects />
            <SubsectionPersonalProjects />
          </>
        );
      case 'Experience':
        return <ExperienceInfo />;
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
            A second‑year University of Manchester undergraduate with a passion for programming and 6 years of semi‑regular coding experience. I am enthusiastic about solving complex problems and am actively seeking a Software Engineer placement to apply my skills. My quick learning ability enables me to rapidly adapt to new technologies and contribute effectively to team projects. I am excited to start my career in computing and have a strong desire to demonstrate my skills in the industry.
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

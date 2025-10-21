import homeProjectsImg from "../assets/home_projects_img.jpg"; // Ensure you have this image in the src folder
import schoolProjectsImg from "../assets/school_projects_img.jpeg"; // Ensure you have this image in the src folder
import { useState } from "react";

export default function Projects() {
  return (
    <>
      <Subsection title="Personal Projects" imageUrl={homeProjectsImg} />
      <Subsection title="School Projects" imageUrl={schoolProjectsImg} />
    </>
  );
}

function Subsection({ title, imageUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);
const renderContent = () => {
    switch (title) {
      case 'Personal Projects':
        return <PersonalProjects />;
      case 'School Projects':
        return <SchoolProjects />
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="subsection-container">
        <div
          className="subsection"
          style={{ backgroundImage: `url(${imageUrl})` }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="section-content">
            <h3>{title}</h3>
            {!isExpanded ? <p>Click to expand</p> : <p>Click to collapse</p>}
          </div>
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

function EmployeeManagementSystem() {
  return (
    <div className="information">
      <h4>Employee Management System (PHP and MySQL)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Nov 2024</p>
      <p>
        • Developed a comprehensive employee management system using PHP and
        MySQL, creating multiple portals for various functionalities.
      </p>
      <p>
        • Implemented an employee directory for management to search and view
        employee details efficiently.
      </p>
      <p>
        • Created a portal for management to grant raises and promotions to
        employees, streamlining the salary adjustment process.
      </p>
      <p>• Developed a portal for employees to request leave.</p>
      <p>
        • Built a portal for managers to view, approve, or deny leave requests,
        and to access leave statistics per department.
      </p>
      <p>
        • Designed a portal to generate comprehensive payroll summaries,
        enhancing payroll management and accuracy.
      </p>
      <p>• Implemented a portal to view current month birthdays.</p>
      <p>
        • Created a portal for contract terminations and auditing, ensuring
        compliance and thorough record-keeping.
      </p>
      <p>
        • Technical Skills: PHP, MySQL, Web Development, Database Management.
      </p>
      <p>
        • Soft Skills: Project Management, Problem-Solving, Attention to Detail,
        Organisational Skills.
      </p>
    </div>
  );
}

function HashSetVSBSTree() {
  return (
    <div className="information">
      <h4>
        HashSet vs BSTree Investigation and Testing (Python testing, plotting
        and analysis)
      </h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Nov 2024</p>
      <p>
        • Developed and implemented various data structures including binary
        search trees and hash sets, focusing on hash table sizing, load factors,
        and rehashing algorithms.
      </p>
      <p>
        • Created automated experiments to investigate the complexities of these
        data structures, using Python and the matplotlib library to visualise
        results.
      </p>
      <p>
        • Conducted performance comparisons between different data structures,
        such as binary search trees and hash sets, and analysed the results to
        validate hypotheses.
      </p>
      <p>
        • Utilised sorting algorithms and implemented collision resolution
        techniques in hash tables.
      </p>
      <p>
        • Employed data manipulation techniques and conducted thorough testing
        to ensure the accuracy and reliability of the data structures.
      </p>
      <p>
        • Technical Skills: Python, Data Structures, Algorithms, Performance
        Analysis, Matplotlib, Data Visualisation.
      </p>
      <p>
        • Soft Skills: Analytical Thinking, Problem-Solving, Research, Attention
        to Detail.
      </p>
    </div>
  );
}

function MagicBakery() {
  return (
    <div className="information">
      <h4>Magic Bakery (Java Bakery Game)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Apr 2024 - May 2024</p>
      <p>
        • Developed a Java console simulation of Magic Bakery, incorporating JDK
        packages and adhering to a UML diagram.
      </p>
      <p>
        • Implemented algorithms using various class types (Enums, interfaces,
        abstract classes) and method modifier types (public, private, static,
        etc.).
      </p>
      <p>
        • Conducted thorough testing and debugging to ensure the accuracy and
        reliability of game mechanics.
      </p>
      <p>
        • Technical Skills: Java, Javadoc, UML Diagrams, Git, Object-Oriented
        Programming (OOP), Algorithm Design.
      </p>
      <p>
        • Soft Skills: Time Management, Computational Thinking, Attention to
        Detail, Problem-Solving.
      </p>
    </div>
  );
}

function FoodFinder() {
  return (
    <div className="information">
      <h4>Food Finder (First Year Team Project using Node.js)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Sep 2023 - Apr 2024</p>
      <p>
        • Collaborated in an 8-person team to create a website, which takes user
        input to return any dishes, or similar, in the area, and giving
        comparative results.
      </p>
      <p>
        • Employed algorithms in JavaScript to use with the HTML/CSS created by
        my teammates, for the creation of an interactive website.
      </p>
      <p>
        • Solely created and used an API to access a relational database, to
        return relevant data from a local database using a Node.js server.
      </p>
      <p>
        • My role was the back-end developer, where I implemented code to
        retrieve data from the database, using an API to respond to requests
        from the front-end, as well as dealing with sorting, limits and joining
        tables in the database.
      </p>
      <p>
        • Technical Skills: HTML/CSS, JavaScript (Node.js), SQL, API
        Development, Git.
      </p>
      <p>
        • Soft Skills: Time Management, Teamwork, Presentation Skills,
        Communication, Problem-Solving.
      </p>
    </div>
  );
}

function Dodger() {
  return (
    <div className="information">
      <h4>Dodger (Python Tkinter Game)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Oct 2023 - Nov 2023</p>
      <p>
        • Solely developed an interactive third-person game using Python, which
        incorporates images, shapes, text, leaderboard, etc., where the user’s
        character has to avoid enemies to progress to the next level.
      </p>
      <p>
        • Developed random enemy generation algorithms while keeping the number
        of enemies and enemy speed correlated to the level number.
      </p>
      <p>
        • Implemented algorithms for collision detection, save/load,
        leaderboard, control changing, etc., using encapsulation and
        polymorphism.
      </p>
      <p>
        • Designed SQL databases to store player information (username, password
        hashes, scores, time remaining), to display the top five scores after
        the user loses the game.
      </p>
      <p>• Technical Skills: Python(Tkinter), File Manipulation, Git.</p>
      <p>
        • Soft Skills: Time Management, Computational Thinking, Problem-solving,
        Creativity.
      </p>
    </div>
  );
}

function JungleShooter() {
  return (
    <div className="information">
      <h4>Jungle Shooter (AQA A-Level Project using Python PyGame)</h4>
      <p>Location: London, UK</p>
      <p>Institution: Finchley Catholic High School</p>
      <p>Duration: Jun 2022 - Feb 2023</p>
      <p>
        • Developed a third-person shooter game where the user avoids being shot
        by enemies, and eliminates them to progress to the next of infinitely
        produced levels.
      </p>
      <p>
        • Developed random enemy generation algorithms while keeping the number
        of enemies and bullet speed correlated to the level number.
      </p>
      <p>
        • Encapsulated enemies, bullet and the player in separate classes, with
        the enemy class inheriting directly from the player class to use similar
        shooting, movement and collision methods of the player.
      </p>
      <p>• Technical Skills: Python(Pygame), SQL.</p>
      <p>
        • Soft Skills: Time Management, Presentation skills, Documentation,
        Testing.
      </p>
      <p>Source code available upon request.</p>
    </div>
  );
}

function ConnectFour() {
  return (
    <div className="information">
      <h4>
        <a
          href="https://github.com/HerreroRocher/connect-four"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect Four
        </a>{" "}
        (Game using Unity/C#)
      </h4>
      <p>Duration: Aug 2024</p>
      <p>
        • Designed and developed a full-featured Connect Four game using the
        Unity engine, implementing core gameplay mechanics such as turn-based
        play, win condition detection, and an interactive user interface.
      </p>
      <p>
        • Utilised C# to manage game logic, player interactions, and dynamic UI
        updates, ensuring a seamless and responsive gaming experience.
      </p>
      <p>
        • Implemented advanced features, including dynamic GameObject creation,
        animated piece dropping, and flexible gameboard sizing to enhance player
        engagement.
      </p>
      <p>
        • Currently adding online multiplayer functionality and a single-player
        mode against AI, expanding the game’s replayability and appeal.
      </p>
      <p>
        • Employed Unity’s physics system for realistic piece movement, and
        invested extensive time in debugging and testing to ensure a polished
        final product, with comprehensive debug logs capturing various game
        states.
      </p>
      <p>
        • Researched and adhered to C# naming conventions to ensure code
        readability and maintainability, contributing to a well-organised and
        professional codebase.
      </p>
      <p>
        • Applied version control practices using Git, maintaining a clean and
        organised project repository on GitHub for collaborative development and
        issue tracking.
      </p>
      <p>• Technical Skills: Unity, C#, Game Development, Git.</p>
      <p>
        • Soft Skills: Problem-Solving, Self-Learning, Project Management,
        Attention to Detail.
      </p>
    </div>
  );
}

function Infoboard() {
  return (
    <div className="information">
      <h4>
        <a
          href="https://herrerorocher.github.io/infoboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Infoboard
        </a>{" "}
        (Web app using React.js)
      </h4>
      <p>Duration: Jul 2024</p>
      <p>
        • Solely developed a responsive web application using React.js, which
        integrates multiple API calls to provide users with real-time
        information.
      </p>
      <p>
        • Implemented sections for current weather in any chosen location, bus
        times for selected bus stops, and tube service statuses for selected
        lines.
      </p>
      <p>
        • Employed data manipulation techniques, including sorting, filtering,
        and combining API responses to create a cohesive user experience.
      </p>
      <p>
        • Utilised React features like hooks, props, and dependencies, while
        managing state and side effects efficiently.
      </p>
      <p>
        • Incorporated recursive functions and leveraged local storage to
        enhance user interaction and performance.
      </p>
      <p>
        • Conducted thorough testing and debugging to ensure the reliability and
        accuracy of data displayed across different scenarios.
      </p>
      <p>
        • Technical Skills: HTML/CSS, JavaScript (React.js), API Interaction,
        Git, Responsive Design, State Management, Data Handling.
      </p>
      <p>
        • Soft Skills: Problem-Solving, Self-Management, Attention to Detail,
        User Experience Design.
      </p>
    </div>
  );
}

function HigherOrLowerGame() {
  return (
    <div className="information">
      <h4>
        <a
          href="https://github.com/HerreroRocher/HigherOrLower"
          target="_blank"
          rel="noopener noreferrer"
        >
          Higher or Lower
        </a>{" "}
        (Python Game)
      </h4>
      <p>Duration: Nov 2024</p>
      <p>
        • Developed an interactive higher or lower game using Python, allowing
        users to personalise game rules and settings.
      </p>
      <p>
        • Utilised Python libraries such as Tkinter for GUI development,
        providing an engaging and interactive user experience.
      </p>
      <p>
        • Incorporated features for tracking user scores, displaying high
        scores, and providing feedback on user guesses.
      </p>
      <p>
        • Ensured the game logic was robust and efficient, handling edge cases
        and invalid inputs gracefully.
      </p>
      <p>
        • Technical Skills: Python, Tkinter, GUI Development, Game Logic, User
        Interaction, Data Handling.
      </p>
      <p>
        • Soft Skills: Creativity, Problem-Solving, User Experience Design,
        Attention to Detail.
      </p>
    </div>
  );
}

function GradeCalculator() {
  return (
    <div className="information">
      <h4>
        <a
          href="https://github.com/HerreroRocher/grade-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grade Calculator
        </a>{" "}
        (CLI Tool)
      </h4>
      <p>Duration: Oct 2024</p>
      <p>
        • Developed a command-line interface (CLI) tool in Python to calculate
        the minimum exam score needed to achieve a target grade based on
        coursework and exam splits.
      </p>
      <p>
        • Implemented functionality to input course details, including
        coursework/exam split, individual coursework scores, and their
        respective weightings.
      </p>
      <p>
        • Designed the tool to handle various grading schemes and provide
        accurate calculations for different course structures.
      </p>
      <p>
        • Conducted thorough testing to validate the accuracy of calculations
        and ensure the tool's reliability.
      </p>
      <p>
        • Technical Skills: Python, CLI Development, Data Handling, User
        Interaction, Error Handling.
      </p>
      <p>
        • Soft Skills: Analytical Thinking, Problem-Solving, Attention to
        Detail, User Experience Design.
      </p>
    </div>
  );
}

function CSVReader() {
  return (
    <div className="information">
      <h4>
        <a
          href="https://github.com/HerreroRocher/csv-reader"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSV Reader
        </a>{" "}
        (Web app using React.js)
      </h4>
      <p>Duration: Jul 2024</p>
      <p>
        • Developed a React.js application to verify ISIN numbers against a
        local CSV file of approved reporting offshore funds from the gov.uk
        website.
      </p>
      <p>
        • Learned and applied fundamental React concepts, including useEffect
        and useState hooks, to manage component state and side effects.
      </p>
      <p>
        • Enhanced problem-solving skills through the development of an
        algorithm that checks and validates ISIN numbers.
      </p>
      <p>
        • Implemented efficient data parsing and validation techniques to ensure
        accurate and timely information retrieval.
      </p>
      <p>
        • Applied version control best practices using Git for collaborative
        development and version management.
      </p>
      <p>
        • Technical Skills: HTML/CSS, JavaScript (React.js), CSV File Handling,
        Git, Data Parsing, Algorithm Development, State Management.
      </p>
      <p>
        • Soft Skills: Problem-Solving, Self-Learning, Attention to Detail,
        Analytical Thinking, Technical Communication.
      </p>
      <p>
        Source code and builds are available on my public GitHub
        (HerreroRocher).
      </p>
    </div>
  );
}

function PersonalPortfolio() {
  return (
    <div className="information">
      <h4>Personal Portfolio (Web App using React.js)</h4>
      <p>Duration: Ongoing</p>
      <p>
        • Designed and developed a personal portfolio website using React.js,
        showcasing projects, skills, and professional achievements.
      </p>
      <p>
        • Implemented responsive design principles to ensure the website is
        accessible and visually appealing on various devices.
      </p>
      <p>
        • Utilised React components, hooks, and state management to create a
        dynamic and interactive user experience.
      </p>
      <p>
        • Deployed the website using GitHub Pages, ensuring continuous
        integration and delivery.
      </p>
      <p>
        • Applied version control practices using Git, maintaining a clean and
        organised project repository on GitHub.
      </p>
      <p>
        • Technical Skills: React.js, HTML/CSS, JavaScript, Git, Responsive
        Design.
      </p>
      <p>
        • Soft Skills: Problem-Solving, Self-Learning, Project Management,
        Attention to Detail.
      </p>
    </div>
  );
}



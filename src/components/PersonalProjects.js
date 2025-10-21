export default function PersonalProjects() {
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



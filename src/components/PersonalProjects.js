import personalProjectsImage from "../assets/home_projects_img.jpg";

function PersonalProjects() {
  return (
    <>
      <MailManager />
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
      <p>Duration: August 2024</p>
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
        mode against AI, expanding the game's replayability and appeal.
      </p>
      <p>
        • Employed Unity's physics system for realistic piece movement, and
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

function MailManager() {
  return (
    <div className="information">
      <h4>
        <a
          href="https://github.com/HerreroRocher/mailmanager"
          target="_blank"
          rel="noopener noreferrer"
        >
          MailManager
        </a>{" "}
        (Outlook Email Management System using .NET & Azure)
      </h4>
      <p>Duration: August 2025 - September 2025</p>
      <p>
        • Developed a Microsoft 365-integrated email management system inspired
        by Ideagen MailManager, designed to streamline email filing and
        retrieval directly from Outlook.
      </p>
      <p>
        • Built the front end in vanilla JavaScript (npm), integrating with
        Azure Active Directory registration to obtain tokens with appropriate
        scopes for single sign-on (SSO).
      </p>
      <p>
        • Implemented OAuth 2.0 authentication through Azure AD to enable
        secure, delegated access to Microsoft 365 data.
      </p>
      <p>
        • Designed and developed a .NET MVC back end responsible for receiving
        API calls, performing file and email operations via Microsoft Graph API,
        and managing application logic and security.
      </p>
      <p>
        • Integrated PostgreSQL for persistent storage of filing locations and
        smart-suggestion data, using SQL functions to optimise database queries.
      </p>
      <p>
        • Developed middleware for robust exception handling, token validation
        and swapping, and secure communication between the client, Graph API,
        and the database.
      </p>
      <p>
        • Wrote comprehensive unit tests to validate core components, ensuring
        reliability across authentication, Graph operations, and data layers.
      </p>
      <p>
        • Deployed and hosted the application on Azure App Service, leveraging
        Microsoft's cloud platform for scalability and enterprise-level
        reliability.
      </p>
      <p>
        • Technical Skills: .NET 9, C#, JavaScript, Microsoft Graph API, Azure
        AD (OAuth 2.0), PostgreSQL, SQL Functions, Middleware, Unit Testing,
        Azure App Service, API Design.
      </p>
      <p>
        • Soft Skills: System Architecture, Problem-Solving, Secure Design,
        Integration Planning, and Code Quality.
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
        (Web app using React.js) -{" "}
        <a
          href="https://github.com/HerreroRocher/infoboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </h4>
      <p>Duration: July 2024</p>
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
      <p>Duration: November 2024</p>
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
        (Python CLI Tool)
      </h4>
      <p>Duration: October 2024</p>
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
      <h4>
        <a
          href="https://github.com/HerreroRocher/personal-portfolio-pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal Portfolio{" "}
        </a>
        (Web App using React.js)
      </h4>
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

PersonalProjects.title = "Personal Projects";
PersonalProjects.image = personalProjectsImage;

export default PersonalProjects;
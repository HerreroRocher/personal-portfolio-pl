import skillsImage from "../assets/skills_img.jpg";

function Skills() {
  return (
    <div className="information">
      <h3>Skills</h3>
      <h4>Languages</h4>
      <p>Python, HTML/CSS, JavaScript, SQL, Java, C#, C/C++, Shell Scripting</p>
      <h4>Frameworks & Libraries</h4>
      <p>Node.js, React.js, .NET, Unity</p>
      <h4>Tools & Technologies</h4>
      <p>
        Git, Azure (App Service, AD Registration), PostgreSQL, MySQL, MongoDB,
        npm, NuGet, Microsoft Graph API, Command Prompt, Git Bash, Unix-like
        systems
      </p>
      <h4>Concepts & Practices</h4>
      <p>
        API Interaction, State Management, Algorithm Development, Unit Testing,
        MVC Architecture, Object-Oriented Programming, Exception Handling
      </p>
      <h4>Soft Skills</h4>
      <p>
        Problem-Solving, Attention to Detail, Self-Learning, Teamwork, Time
        Management, Technical Communication, Project Management, Debugging and
        Troubleshooting
      </p>
    </div>
  );
}


Skills.title = "Skills";
Skills.image = skillsImage;

export default Skills;
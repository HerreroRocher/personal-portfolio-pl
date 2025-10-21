import experienceImage from "../assets/experience_img.jpg";

function Experience() {
  return (
    <>
      <Restaurant65A />
      <MonmouthKitchen />
      <RitzRestaurant />
      <TakaMarylebone />
    </>
  );
}

function Restaurant65A() {
  return (
    <div className="information">
      <h4>65A Restaurant</h4>
      <p>Location: London, UK</p>
      <p>Position: Waiter</p>
      <p>Duration: Jul 2024 - Aug 2024</p>
      <p>
        • Worked as part of a team of 3-4 waiters per service, managing my own
        section independently.
      </p>
      <p>
        • Assumed increased responsibilities, demonstrating serious commitment
        and quick learning.
      </p>
      <p>
        • Provided attentive and efficient service, handling guest interactions,
        managing orders, and resolving service issues.
      </p>
      <p>
        • Consistently received positive feedback from guests for hospitality
        and professionalism.
      </p>
      <p>
        • Soft Skills: Leadership, Teamwork, Quick Learning, Communication, Time
        Management, Organisation.
      </p>
    </div>
  );
}

function MonmouthKitchen() {
  return (
    <div className="information">
      <h4>Monmouth Kitchen</h4>
      <p>Location: London, UK</p>
      <p>Position: Waiter</p>
      <p>Duration: Aug 2023 - Sept 2023</p>
      <p>• Attained employment for a role within a team of six waiters.</p>
      <p>
        • Attended several training sessions and engaged in additional
        out-of-work activities to maximise my potential as a waiter.
      </p>
      <p>
        • Significantly increased my leadership, teamwork, and communication
        skills due to much larger responsibilities than previous employment,
        including conversing with guests, attending to service issues, taking
        and managing orders, and serving guests.
      </p>
      <p>
        • Assisted in the management of my assigned section of the restaurant
        during open hours, ensuring efficiency and efficacy to please our
        guests.
      </p>
      <p>• Received positive reviews of my hospitality and of our team.</p>
      <p>
        • Soft Skills: Teamwork, Time Management, Communication, Organisation,
        Multi-Tasking.
      </p>
    </div>
  );
}

function RitzRestaurant() {
  return (
    <div className="information">
      <h4>The Ritz Restaurant</h4>
      <p>Location: London, UK</p>
      <p>Position: Commis Waiter</p>
      <p>Duration: Oct 2021 - Jan 2023</p>
      <p>
        • Collaborated in a team of ten Commis Waiters, for over a year, to
        assist in the high-quality service provided by the Ritz Hotel
        Restaurant.
      </p>
      <p>
        • Collaborated with other teams (Chefs, Head Waiters, Kitchen Porters,
        Chefs de Rang, etc.) for a seamless service.
      </p>
      <p>
        • Engaged in important time-sensitive duties, mainly including carrying
        food from kitchen to restaurant floor, polishing cutlery and plates,
        deep cleaning and vacuum cleaning the restaurant floor between services.
      </p>
      <p>
        • Soft Skills: Teamwork, Time Management, Communication, Patience,
        Multi-Tasking.
      </p>
    </div>
  );
}

function TakaMarylebone() {
  return (
    <div className="information">
      <h4>Taka Marylebone</h4>
      <p>Location: London, UK</p>
      <p>Position: Runner</p>
      <p>Duration: Sept 2020 - Oct 2021</p>
      <p>
        • Cooperated in a team of 2 Runners, for over a year, to provide the
        Waiters with assistance for the service of guests.
      </p>
      <p>
        • Undertook various duties to enhance the operation, speed and
        cleanliness of the restaurant.
      </p>
      <p>
        • Regularly engaged in important time-sensitive duties, when commonly
        understaffed.
      </p>
      <p>• Soft Skills: Teamwork, Time Management.</p>
    </div>
  );
}

Experience.title = "Experience";
Experience.image = experienceImage;

export default Experience;

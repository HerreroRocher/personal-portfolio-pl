import educationImg from "../assets/education_img.jpg";

function Education() {
  return (
    <>
      <Uni />
      <ALevels />
      <GCSEs />
    </>
  );
}

function Uni() {
  return (
    <div className="information">
      <h4>The University of Manchester</h4>
      <p>Location: Manchester, UK</p>
      <p>Degree: BSc with Honours in Computer Science</p>
      <p>Duration: Sep 2023 - Jul 2026</p>
      <p>• Expected graduation in 2026</p>
      <p>• Expected first class degree</p>
      <p>• Achieved relevant course units: Logic and Modelling(80%), Software
        Engineering(70%), Databases(72%), Machine Learning(67%), Distributed
        Systems(66%), Algorithms and Data Structures(72%), Data Science(75%),
        First Year Team Project(78%)
      </p>
      <p>• Current relevant course units: Third Year Project Laboratory, AI and
        Games, Natural Language Processing & Understanding, Advanced Distributed
        Systems, Agile Software Pipelines
      </p>
    </div>
  );
}

function ALevels() {
  return (
    <div className="information">
      <h4>Finchley Catholic High School</h4>
      <p>Location: London, UK</p>
      <p>Duration: Sep 2021 - Jun 2023</p>
      <h5>A-Levels:</h5>
      <p>• Physics - A*</p>
      <p>• Mathematics - A*</p>
      <p>• Computer Science - A</p>
    </div>
  );
}

function GCSEs() {
  return (
    <div className="information">
      <h4>Finchley Catholic High School</h4>
      <p>Location: London, UK</p>
      <p>Duration: Sep 2018 - Jun 2021</p>
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
  );
}

Education.title = "Education";
Education.image = educationImg;

export default Education;
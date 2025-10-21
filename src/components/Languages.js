import languagesImage from "../assets/languages_img.jpg";

function Languages() {
  return (
    <div className="information">
      <h3>Languages</h3>
      <p>English C2 Native</p>
      <p>Spanish C1 Fluent</p>
      <p>French B1 Intermediate</p>
      <p>Italian A2 Basic</p>
      <p>Portuguese A1 Basic</p>
    </div>
  );
}

Languages.title = "Languages";
Languages.image = languagesImage;

export default Languages;

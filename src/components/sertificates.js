import developiaCertificate from "../assets/Images/sertificate11.jpg";
import codeAcademyCertificate from "../assets/Images/sertificate2.jpg";
import "../styles/certificate.css";
function Sertificates() {
  return (
    <div className="custom-landing-container bg-light">
      <div className="about-header display-4 text-center">Certificates</div>
      <div className="row w-100 justify-content-around gap-5 p-3">
        <div className="col-md-6 col-lg-4 col-10 certificate-container">
          <img
            className="certificate-image"
            src={developiaCertificate}
            alt="my certificate"
          />
          <img
            style={{ filter: "opacity(0)", width: "100%" }}
            src={developiaCertificate}
            alt="my certificate"
          />
          <div className="certificate-info bg-light text-center d-flex justify-content-center gap-3 flex-column">
            <div>Developia Engineering</div>
            <div>Front End Web Development</div>
            <div>
              28 September 2021 <br /> --- <br /> 28 March 2022
            </div>
            <div>Javascript , React , Redux</div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-10 certificate-container">
          <img
            className="certificate-image"
            src={codeAcademyCertificate}
            alt="my certificate"
          />
          <img
            style={{ filter: "opacity(0)", width: "100%" }}
            src={codeAcademyCertificate}
            alt="my certificate"
          />
          <div className="certificate-info bg-light text-center d-flex justify-content-center gap-3 flex-column">
            <div>Code Academy</div>
            <div>Full Stack Web Development</div>
            <div>
              14 February 2022 <br /> --- <br /> 30 June 2022
            </div>
            <div>C# , Asp.Net , SQL , EfCore</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sertificates;

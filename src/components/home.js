import "../styles/home.css";
function Home() {
  return (
    <div className="bg-light custom-landing-container">
      <div className="display-4 text-center">Front End - Back End</div>
      <div className="roboto-thin fs-2 text-center">
        'Perfectly balanced as all things should be.'
      </div>
      <div className="w-50 d-flex justify-content-center">
        <div className="loader"></div>
      </div>
    </div>
  );
}
export default Home;

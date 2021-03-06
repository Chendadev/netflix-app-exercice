import "./App.css";
import data from "./assets/data.json"; // c'est deja une variable data, pas besoin de stockeer
import logo from "./assets/img/logonetflix.jpg";
import Section from "./components/Section";

const array = ["test", "ala", "con"]
function App() {
  return (
    <div className="main">
      <div className="logo-container">
        <img alt="netflix" src={logo} />
      </div>
      {data.map((dataMovie, index) => {
        // console.log("images ?:", dataMovie.images);
        return (
          <>
            <div className="title-container">
              <h1>{dataMovie.category}</h1>
            </div>

            <div className="containerMovie">
              {dataMovie.images.map((pictureMovie, index) => {
                // console.log(pictureMovie);
                return <img index={index} src={pictureMovie} alt="movies" />;
              })}
            </div>
          </>
        )
      })}
      {/* <div>
        <Section
          {array.map((lemot, index) => {
            console.log("apartirdici :", lemot);
            return <h1 key={index}>{lemot}</h1>
          })} />
      </div> */}
    </div>
  )
}

export default App;

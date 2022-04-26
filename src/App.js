import "./App.css";
import data from "./assets/data.json"; // c'est deja une variable data, pas besoin de stockeer

function App() {
  return data.map((dataMovie, index) => {
    return <h1>{dataMovie.category}</h1>;
  });
}
export default App;

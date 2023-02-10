import Card from "../../components/Card";
import Grid from "../../components/Grid";
import { cards } from "../../data/cards";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Grid cards={cards} />
    </div>
  );
}

export default App;

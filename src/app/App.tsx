import classes from "./App.module.css"
import { MainComponent } from "../components/main/MainComponent";

const App: React.FC = () => {
  return (
    <div className={classes.App}>
      <MainComponent></MainComponent>
    </div>
  );
}

export default App;

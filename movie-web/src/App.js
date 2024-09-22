import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome React.JS</h1>
      <Button text={"계속"} />
    </div>
  );
}

export default App;
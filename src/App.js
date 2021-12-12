import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <div>
      <div className="m-3">
        <Button text="Button" />
      </div>
      <div className="m-3">
        <Card />
      </div>
    </div>
  )
}

export default App;
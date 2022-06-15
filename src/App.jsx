import "./App.css";
import CardBasic from "./component/CardBasic/CardBasic";

function App() {
  return (
    <div className="App">
      <div className="container-base">
        <h1>Primera cosa react</h1>
        <CardBasic
          name="Lorem Tittle"
          work="Lorem Work"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
          id="1"
        />

        <CardBasic
          name="Lorem Tittle"
          work="Lorem Work"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
          id="2"
        />

        <CardBasic
          name="Lorem Tittle"
          work="Lorem Work"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
          id="3"
        />
      </div>
    </div>
  );
}

export default App;

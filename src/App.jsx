import { Otro } from "./components/Otro";
import { useCatFact } from "./hooks/useCatFact";

export function App() {
  const [facts, refresFact] = useCatFact();
  const imageURL = Otro();

  const handleClick = async () => {
    refresFact();
  };

  return (
    <div className="w-[200vh] flex flex-col justify-center items-center">
      <h1 className="flex flex-row items-start justify-between text-8xl pb-9">
        App de gatos{" "}
      </h1>

      <button className="bg-zinc-500" onClick={() => handleClick()}>
        Nuevo dato random
      </button>
      {facts && <p>{facts}</p>}
      {imageURL && <img src={imageURL} />}

      <Otro />
    </div>
  );
}

export default App;

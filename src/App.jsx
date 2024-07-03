import { useCatImage } from "./hooks/UseCatImage";
import { useCatFact } from "./hooks/useCatFact";

const CAD_PREFIX = "https://cataas.com";

export function App() {
  const [facts, refresFact] = useCatFact();
  const imageURL = useCatImage({ facts });

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
      {imageURL && <img src={`${CAD_PREFIX}${imageURL}`} />}
    </div>
  );
}

export default App;

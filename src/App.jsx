import { useEffect, useState } from "react";
import { getRandomFact } from "./services/facts";
const CAD_PREFIX = "https://cataas.com";

function useCatImage({ facts }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!facts) return;
    const first_three_Word = facts.split(" ").slice(0, 3).join(" ");
    console.log(first_three_Word);

    fetch(
      `https://cataas.com/cat/says/${first_three_Word}?size=50&Color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const url = response;
        setImageUrl(url);
        console.log(url);
      });
  }, [facts]);
  return imageUrl;
}

export function App() {
  const [facts, setFacts] = useState();
  const imageURL = useCatImage({ facts });

  useEffect(() => {
    getRandomFact().then((newFact) => setFacts(newFact));
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFacts(newFact);
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

import { useEffect, useState } from "react";
const CAD_ENDPOINT_RAMNDOM_FACT = "https://catfact.ninja/fact";
const CAD_PREFIX = "https://cataas.com";

export function App() {
  const [fact, setFacts] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAD_ENDPOINT_RAMNDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFacts(fact);
        const first_three_Word = fact.split(" ").slice(0, 3).join(" ");
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
      });
  }, []);

  return (
    <div className="w-[200vh] flex flex-col justify-center items-center">
      <h1 className="flex flex-row items-start justify-between text-8xl pb-9">
        App de gatos{" "}
      </h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAD_PREFIX}${imageUrl}`} />}
    </div>
  );
}

export default App;

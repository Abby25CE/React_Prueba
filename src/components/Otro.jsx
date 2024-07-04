import { useCatImage } from "../hooks/UseCatImage";

export function Otro() {
  const imageURL = useCatImage({ facts: "Cat" });

  return;
  <>{imageURL && <img src={imageURL} />};</>;
}

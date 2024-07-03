import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
    const [fact, setFacts] = useState();

    const refresFact = () => {
        getRandomFact().then((newFact) => setFacts(newFact));
    };

    useEffect(refresFact, []);

    return [fact, refresFact];
};
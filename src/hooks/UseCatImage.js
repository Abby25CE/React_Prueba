import { useEffect, useState } from "react";
const CAD_PREFIX = "https://cataas.com";

export function useCatImage({ facts }) {
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
    return {
        imageUrl: `${CAD_PREFIX}${imageUrl}`
    };
}
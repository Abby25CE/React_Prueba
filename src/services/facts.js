const CAD_ENDPOINT_RAMNDOM_FACT = "https://catfact.ninja/fact";


export const getRandomFact = async () => {
    const res = await fetch(CAD_ENDPOINT_RAMNDOM_FACT)
    const data = await res.json()
    const { fact } = data;
    return fact

}
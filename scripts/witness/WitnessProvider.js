let witnesses = []

export const getWitness = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(
            parsedWitnesses => {
                witnesses = parsedWitnesses
            }
        )
}

export const useWitness = () => {
    return witnesses.slice()
}

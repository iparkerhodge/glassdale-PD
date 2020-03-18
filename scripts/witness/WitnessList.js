import { useWitness } from "./WitnessProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessContainer")

let visibility = false

export const WitnessList = () => {
    const witnesses = useWitness()
    render(witnesses)
}


const render = collection => {
        contentTarget.classList.add("invisible")

        contentTarget.innerHTML = `
            <div class="witnessList">
                ${collection.map(witness => {return `
                        <div class="witness" id="${witness.id}">
                            <div class="witness__name">Name: ${witness.name}</div>
                            <div class="witness__statement">Statement: ${witness.statements}</div>
                        </div>
                    `
                }).join("")}
            </div>
        `
}

eventHub.addEventListener("showWitnessStatementsClicked", e => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})
import { useWitness } from "./WitnessProvider.js"

const contentTarget = document.querySelector(".witnessContainer")

export const WitnessList = () => {
    const witnesses = useWitness()
    render(witnesses)
}


const render = collection => {
        contentTarget.innerHTML = `
            <div class="witnessButton">
                <button id="witnessStatements">Witness Statements</button>
            </div>

            <div class="witnessList" style="display:none">
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

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessStatements") {
        const witnessContainer = document.querySelector(".witnessList")
        const criminalContainer = document.querySelector(".criminalsContainer")

        if (witnessContainer.style.display === "none") {
            witnessContainer.style.display = "flex"
            criminalContainer.style.display = "none"
        }
        else {
            witnessContainer.style.display = "none"
            criminalContainer.style.display = "flex"
        }
    }
})
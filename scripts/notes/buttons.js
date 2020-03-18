const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".buttons")

export const makeButtons = () => {
    contentTarget.innerHTML = `
    <button id="noteFormButton">Make Note</button>
    <button id="showAllNotesButton">Show All Notes</button>
    <button id="showWitnessStatements">Witness Statements</button>
    `
}

eventHub.addEventListener("click", e => {
    if (e.target.id === "noteFormButton") {
        const customEvent = new CustomEvent("noteFormButtonClicked")

        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "showAllNotesButton") {
        const customEvent = new CustomEvent("showAllNotesButtonClicked")

        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "showWitnessStatements") {
        const customEvent = new CustomEvent("showWitnessStatementsClicked")

        eventHub.dispatchEvent(customEvent)
    }
})
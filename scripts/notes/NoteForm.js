import { saveNote } from "./noteDataProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

let Visibility = false

eventHub.addEventListener("noteFormButtonClicked", e => {
    Visibility = !Visibility

    if(Visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    const allCriminals = useCriminals()
    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <form>
            <fieldset class="form__set">
                <select id="criminalDropdown">
                <option value="0">Please choose a criminal...</option>
                ${
                    allCriminals.map(
                        (currentCriminalObject) => {
                            return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
                        }
                    )
                }
            </select><br>
                <label for="noteEntry">Case Note Entry</label><br>
                <textarea name="noteEntry" id="noteEntry" cols="100"></textarea>
            </fieldset>
        </form>
        <button id="saveNote" onClick="window.location.reload();">Save Note</button>
    `
}

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteEntry = document.getElementById("noteEntry")
        const criminalId = document.querySelector("#criminalDropdown").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: Date.now(),
            criminalId: parseInt(criminalId),
            text: noteEntry.value
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {
    render()
}

export default NoteForm
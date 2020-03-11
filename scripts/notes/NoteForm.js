import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <form>
            <fieldset>
                <label for="noteDate">Date</label>
                <input type="date" name="noteDate" id="noteDate">
            </fieldset>
            <fieldset>
                <label for="noteSuspect">Suspect</label>
                <input type="text" name="noteSuspect" id="noteSuspect">
            </fieldset>
            <fieldset>
                <label for="noteEntry">Case Note Entry</label><br>
                <textarea name="noteEntry" id="noteEntry" cols="100"></textarea>
            </fieldset>
        </form>
        <button id="saveNote">Save Note</button>
    `
}

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteDate = document.getElementById("noteDate")
        const noteSuspect = document.getElementById("noteSuspect")
        const noteEntry = document.getElementById("noteEntry")

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: noteDate.value,
            suspect: noteSuspect.value,
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
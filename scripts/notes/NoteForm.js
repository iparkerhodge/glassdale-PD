import { saveNote } from "./noteDataProvider.js"

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
    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
        <form>
            <fieldset class="form__set">
                <label for="noteDate">Date</label>
                <input type="date" name="noteDate" id="noteDate">
                <label for="noteSuspect">Suspect</label>
                <input type="text" name="noteSuspect" id="noteSuspect">
            </fieldset>
            <fieldset class="form__set">
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
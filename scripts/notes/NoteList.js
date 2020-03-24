import { useNotes, deleteNote, getNotes } from "./noteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteContainer")

let Visibility = false

eventHub.addEventListener("showAllNotesButtonClicked", e => {
    Visibility = !Visibility

    if(Visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
        
    if (Visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }

    getNotes().then ( () => {

        const allTheNotes = useNotes()
        const allTheCriminals = useCriminals()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {

                // Find the criminal for the current note
                const theFoundCriminal = allTheCriminals.find(
                    (currentCriminalObject) => {
                        return currentNoteObject.criminalId === currentCriminalObject.id
                    }
                )

                return Note(currentNoteObject, theFoundCriminal)
            }
        ).join("")

    })
}

export const NoteList = () => {
    render()
}

contentTarget.addEventListener("click", clickEvent => {
    const noteID = clickEvent.target.id.split("--")[1]

    if (clickEvent.target.id.includes("deleteNote")) {
        deleteNote(noteID)
    }
})
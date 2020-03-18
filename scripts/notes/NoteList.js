import { useNotes, deleteNote, getNotes } from "./noteDataProvider.js"
import { Note } from "./Note.js"

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

    getNotes().then(() => {
        const allTheNotes = useNotes()

        contentTarget.innerHTML = allTheNotes.map(note => {
            return Note(note)
        }).join("")
    })

    contentTarget.classList.add("invisible")
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
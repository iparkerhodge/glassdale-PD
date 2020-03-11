import { useNotes } from "./noteDataProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".noteContainer")

const render = noteCollection => {
    for (const noteObject of noteCollection) {
        contentTarget.innerHTML += Note(noteObject)
    }
}

export const NoteList = () => {
    const allNotes = useNotes()
    render(allNotes)
}
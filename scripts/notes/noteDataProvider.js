import { NoteList } from "./NoteList.js"

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

export const getNotes = () => {
   return fetch('http://localhost:8080/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const useNotes = () => {
    return notes.slice()
}

export const saveNote = note => {
    fetch('http://localhost:8080/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

const resetHTML = () => {
    const contentTarget = document.querySelector(".noteContainer")
    contentTarget.innerHTML = ""
}

export const deleteNote = id => {
    return fetch(`http://localhost:8080/notes/${id}`, {
        method: "DELETE",
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
    .then(NoteList)
}
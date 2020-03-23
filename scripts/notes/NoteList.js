import { useNotes, deleteNote, getNotes } from "./noteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

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

const render = (noteCollection, criminalCollection) => {
        
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.text}
            </section>
        `
    }).join("")
    
    // const allTheNotes = useNotes()
       
        // contentTarget.innerHTML = allTheNotes.map(note => {
        //     return Note(note)
        // }).join("")

    contentTarget.classList.add("invisible")
}

export const NoteList = () => {
    const notes = useNotes()
    const criminals = useCriminals()

    render(notes, criminals) 
    // render()
}

contentTarget.addEventListener("click", clickEvent => {
    const noteID = clickEvent.target.id.split("--")[1]

    if (clickEvent.target.id.includes("deleteNote")) {
        deleteNote(noteID)
    }
})
export const Note = (note) => {
    return `
    <div class="note">
        <button id="deleteNote--${note.id}">x</button>
        <div class="note__date">Date: ${note.date}</div>
        <div class="note__suspect">Suspect: ${note.suspect}</div>
        <div class="note__text">Entry: ${note.text}</div>
    </div>
    `
}
export const Note = (note) => {
    return `
    <div class="note">
        <div class="note__date">Date: ${note.date}</div>
        <div class="note__suspect">Suspect: ${note.suspect}</div>
        <div class="note__text">Entry: ${note.text}</div>
    </div>
    `
}
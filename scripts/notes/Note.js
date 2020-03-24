export const Note = (noteObject, criminal) => {
    return `
        <section class="note">
            <button id="deleteNote--${noteObject.id}">x</button>
            <header>
                <h2>${criminal.name}</h2>
            </header>
            <p>${noteObject.text}</p>
            <p>${new Date(noteObject.date).toLocaleDateString()}</p>
        </section>
    `
}
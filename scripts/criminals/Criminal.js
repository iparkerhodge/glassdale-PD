export const Criminal = (criminal) => {
    return `
        <div class="criminal">
            <div class= "criminal__detail" id="criminal__name">${criminal.name}</div>
            <div class= "criminal__detail" id="criminal__age">Age: ${criminal.age}</div>
            <div class= "criminal__detail" id="criminal__conviction">Conviction: ${criminal.conviction}</div>
            <div class= "criminal__detail" id="criminal__time">Time Served: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} to ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            <div class="criminal__button">
                <button id="button--${criminal.id}">Associate Alibis</button>
            </div>

            <dialog id="dialog--${criminal.id}">
                ${criminal.known_associates.map(
                    (associate) => {
                       return `
                       <div class="criminal__dialog">
                            <div class="criminal__detail">Associate: ${associate.name}</div>
                            <div class="criminal__detail">Alibi: ${associate.alibi}</div>
                        </div>
                       `
                    }
                    ).join("")}
                <button class="button--close">Close</button>        
            </dialog>        
        </div>
    `
}
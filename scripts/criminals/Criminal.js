export const Criminal = (criminal) => {
    return `
        <div class="criminal">
            <div class= "criminal__detail" id="criminal__name">${criminal.name}</div>
            <div class= "criminal__detail" id="criminal__age">Age: ${criminal.age}</div>
            <div class= "criminal__detail" id="criminal__conviction">Conviction: ${criminal.conviction}</div>
            <div class= "criminal__detail" id="criminal__time">Time Served: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} to ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        </div>
    `
}
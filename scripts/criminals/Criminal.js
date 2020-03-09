export const Criminal = (criminal) => {
    return `
        <div class="criminal">
            <div class="criminal__name">${criminal.name}</div>
            <div class="criminal__age">${criminal.age}</div>
            <div class="criminal__conviction">${criminal.conviction}</div>
            <div class="criminal__start">${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__end">${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
        </div>
    `
}
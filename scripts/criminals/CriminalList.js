import { useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

// Render ALL criminals initally
export const CriminalsList = () => {
    const appStateCriminals = useCriminals()
    render(appStateCriminals)
}


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('convictionSelected', event => { 
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeValue" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = useCriminals().filter((currentCriminal) => {
            if (event.detail.crimeValue === "0") {
                return true
            }
            else if ( event.detail.crimeValue === currentCriminal.conviction) {
                return true
            }
            return false
        })

        //reset innerHTML
        contentTarget.innerHTML = " "

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
        render(matchingCriminals)
    }
})


const render = criminalCollection => {
    for (const criminalObject of criminalCollection) {
        contentTarget.innerHTML += Criminal(criminalObject)
    }
}
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", event => {
    const idOfClickedElement = event.target.id

    // Only do this if the `crimeSelect` element was changed
    if (idOfClickedElement === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
            const selectedConvictionValue = event.target.value

            const message = new CustomEvent("convictionSelected", {
                detail: {
                    crimeValue: selectedConvictionValue
                }
            })
        // Dispatch to event hub
        eventHub.dispatchEvent(message)
    }
})

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(conv =>{
                    return `<option value="${conv.name}">${conv.name}</option>`
                })
             }
        </select>
    `
}


export const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
}



// const ConvictionSelect = () => {
//     // Get all convictions from application state
//     const convictions = useConvictions()

//     const render = convictionsCollection => {
//         /*
//             Use interpolation here to invoke the map() method on
//             the convictionsCollection to generate the option elements.
//             Look back at the example provided above.
//         */
//         contentTarget.innerHTML = `
//             <select class="dropdown" id="crimeSelect">
//                 <option value="0">Please select a crime...</option>
//                 ${
//                     convictionsCollection.map(conv =>{
//                         return `<option>${conv.name}</option>`
//                     })
//                  }
//             </select>
//         `
//     }

//     render(convictions)
// }

// export default ConvictionSelect
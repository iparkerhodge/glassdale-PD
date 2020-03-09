import { useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalsList = () => {
    const criminalsArray = useCriminals()

    for (const criminalObject of criminalsArray) {
        contentTarget.innerHTML += Criminal(criminalObject)
    }
}


export const initializeDetailButtonEvents = () => {
    const criminalContainer = document.querySelector(".criminalsContainer")

    criminalContainer.addEventListener("click", clickEventClose => {

        if (clickEventClose.target.className === "button--close") {
            clickEventClose.target.parentNode.close()
        } 
    })

    criminalContainer.addEventListener("click", clickEventOpen => {
        const clickEventID = clickEventOpen.target.id
        const [prefix, id] = clickEventID.split("--")
        const dialogID = `#dialog--${id}`
        const theDialog = document.querySelector(dialogID)

        if (clickEventOpen.target.id.includes("button--")) {
            theDialog.showModal()
        }
    })
}

        // const dialogSiblingSelector = `#${clickEventOpen.target.id}+dialog `
        // const theDialog = document.querySelector(dialogSiblingSelector) 



// const allCloseButtons = document.querySelectorAll(".button--close")
//     const allAssociateButtons = document.querySelectorAll("button[id^='button--']")

//     Array.from(allCloseButtons).map((closeButton) => {
//         closeButton.addEventListener("click", clickEvent => {
//             const dialogElement = clickEvent.target.parentNode
//             dialogElement.close()
//         })
//     })

//     Array.from(allAssociateButtons).map((associateBtn) => {
//         associateBtn.addEventListener("click", clickEvent => {
            // const dialogSiblingSelector = `#${clickEvent.target.id}+dialog`
//             const theDialog = document.querySelector(dialogSiblingSelector)
//             theDialog.showModal()
//         })
//     })
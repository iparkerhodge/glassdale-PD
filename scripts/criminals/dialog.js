export const initializeDetailButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close")
    const allAssociateButtons = document.querySelectorAll("button[id^='button--']")

    Array.from(allCloseButtons).map((closeButton) => {
        closeButton.addEventListener("click", clickEvent => {
            const dialogElement = clickEvent.target.parentNode
            dialogElement.close()
        })
    })

    Array.from(allAssociateButtons).map((associateBtn) => {
        associateBtn.addEventListener("click", clickEvent => {
            const dialogSiblingSelector = `#${clickEvent.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
        })
    })
}
import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

//Needed later in the growth of the app.  Will do stuff when the user chooses options.  

//When the user chooses options, the state of your data is going to change. When the state of your data changes, then all of the HTML must be regenerated to display that new state.

renderAllHTML()


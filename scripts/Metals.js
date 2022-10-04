import { getMetals, setMetal } from "./database.js"

const metals = getMetals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
 //todoInstead of showing an alert when a metal is chosen, you now need to set the corresponding property of the order builder object in application state.
            setMetal(parseInt(event.target.value))

            //window.alert(`User chose metal ${event.target.value}`)
        }
    }
)


export const Metals = () => {
    let html = "<ul>"
    
    // This is how you have been converting objects to <li> elements
    
    //The .map method acts as a for of loop and creates a new array.
    const listItems = metals.map((metal) => {
        return `<li>
        <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    })
    
    html += listItems.join("")
    html += "</ul>"
    
    return html
    
}





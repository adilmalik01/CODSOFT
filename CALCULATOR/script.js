console.log("hello world");


let allButtons = document.querySelectorAll("#input")
let displayNumbers = document.querySelector("#displayNumber")

let intoArray = Array.from(allButtons)
let string = "";

if (displayNumbers.value == "") {
    displayNumbers.value = "0"
}

intoArray.forEach((button) => {
    
    button.addEventListener("click", (e) => {
        if (e.target.value === "=") {
            string = eval(string)
            displayNumbers.value = string
        }
        else if (e.target.value === "DEL") {
            string = string.slice(0, string.length - 1)
            displayNumbers.value = string
        }
        else if (e.target.value === "AC") {
            string = string = ""
            displayNumbers.value = string
        }
        else {
            string = string + e.target.value
            displayNumbers.value = string
        }

    })
})
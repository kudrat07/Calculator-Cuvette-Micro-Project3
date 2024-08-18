const display = document.querySelector("#display")

function appendToDisplay(input) {
    display.value += input;
}

function calculate(){
    try{

        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}

function clearDisplay(){
    display.value = " ";
}

function deleteLastElement() {
    display.value = display.value.slice(0, -1)
}


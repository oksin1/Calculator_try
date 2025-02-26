let display = document.getElementById("display");

function appendCharacter(char){
    display.value += char;
}

function clearDisplay(){
    display.value = "";
}

function CalculateResult(){
    try{
        display.value = eval(display.value);
    }catch (error){
        alert("Invalid Expression");    
    }
}
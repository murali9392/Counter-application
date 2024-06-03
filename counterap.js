let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue > 0) {
        counterElement.style.color="orangered";
    }
    else if(updatedCounterValue < 0) {
        counterElement.style.color="yellow";
    }

    else {
        counterElement.style.color="black";

    }

}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) -1;
    counterElement.textContent = updatedCounterValue;

    
    if (updatedCounterValue > 0) {
        counterElement.style.color="orangered";
    }
    else if(updatedCounterValue < 0) {
        counterElement.style.color="yellow";
    }

    else {
        counterElement.style.color="black";

    }

} 

function onReset() {
    updatedCounterValue=0;
    counterElement.textContent = updatedCounterValue;  
    counterElement.style.color="black";
}
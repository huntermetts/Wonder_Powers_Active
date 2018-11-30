document.querySelector("#activate-flight").addEventListener("click", function(flightHandlerFunction){
    document.getElementById("flight").classList.replace("disabled", "enabled");
})

document.querySelector("#activate-mindreading").addEventListener("click", function(flightHandlerFunction){
    document.getElementById("mindreading").classList.replace("disabled", "enabled");
})

document.querySelector("#activate-xray").addEventListener("click", function(flightHandlerFunction){
    document.getElementById("xray").classList.replace("disabled", "enabled");
})


// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

document.getElementById("activate-all").addEventListener("click", function(flightHandlerFunction){
    var powers = document.querySelectorAll("section")

    for (i = 0; i < powers.length; i++) { 
        powers[i].classList.replace("disabled", "enabled");
    }
})

document.getElementById("deactivate-all").addEventListener("click", function(flightHandlerFunction){
    var powers = document.querySelectorAll("section")

    for (i = 0; i < powers.length; i++) { 
        powers[i].classList.replace("enabled", "disabled");
    }
})
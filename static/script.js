document.getElementById("model-dr-c1").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "116";  
    }
});

document.getElementById("model-dr-c2").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "49";  
    }
});

document.getElementById("model-dr-c3").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "42";  
    }
});


document.getElementById("model-dr-c4").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "9";  
    }
});

document.getElementById("model-dr-c5").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "84";  
    }
});

document.getElementById("model-dr-c6").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "5";  
    }
});

document.getElementById("model-dr-c7").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "3";  
    }
});

document.getElementById("model-dr-c8").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "26";  
    }
});

document.getElementById("model-dr-c9").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "11";  
    }
});

document.getElementById("model-dr-c10").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "6";  
    }
});

document.getElementById("model-dr-c11").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "6";  
    }
});

document.getElementById("model-dr-c12").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "21";  
    }
});

document.getElementById("model-dr-c13").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "17";  
    }
});

document.getElementById("model-dr-c14").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "10";  
    }
});

document.getElementById("model-dr-c15").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "2";  
    }
});

document.getElementById("model-dr-c16").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number");
    if(elements.length > 0) {
        elements[0].innerHTML = "1";  
    }
});

document.getElementById("Thick-dr-c1").addEventListener("click", function() {
    const elements = document.getElementsByClassName("number-Thick");
    if(elements.length > 0) {
        elements[0].innerHTML = "0.3";  
    }
});

document.getElementById("weight-btn").addEventListener("click", function() {
    let weight = parseFloat(document.getElementById("weight-input").value);
    let cost_per_pounds = weight * 0.59;
    document.getElementById("Weight").innerHTML = cost_per_pounds.toFixed(2);
});

document.getElementById("materials-btn").addEventListener("click", function () {
    const input1 = parseFloat(document.getElementById("materials-input1").value) || 0;
    const input2 = parseFloat(document.getElementById("materials-input2").value) || 0;
    const input3 = parseFloat(document.getElementById("materials-input3").value) || 0;
    const input4 = parseFloat(document.getElementById("materials-input4").value) || 0;

    let total = input1 + input2 + input3 + input4;

    document.getElementById("metrial_label").innerHTML = total;
});

document.getElementById("r-materials-btn").addEventListener("click", function () {
    const input1 = parseFloat(document.getElementById("r-materials-input1").value) || 0;
    const input2 = parseFloat(document.getElementById("r-materials-input2").value) || 0;
    const input3 = parseFloat(document.getElementById("r-materials-input3").value) || 0;
    const input4 = parseFloat(document.getElementById("r-materials-input4").value) || 0;

    let total = input1 + input2 + input3 + input4;

    document.getElementById("r-metrial_label").innerHTML = total;
});




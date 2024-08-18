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

document.getElementById("weight-btn2").addEventListener("click", function() {
    let weight = parseFloat(document.getElementById("weight-input2").value);
    let cost_per_pounds = weight * 0.59;
    document.getElementById("Weight-label2").innerHTML = cost_per_pounds.toFixed(2);
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
document.getElementById("Add-labour-btn").addEventListener("click", function () {
    const Labourin = parseFloat(document.getElementById("Labouinput4").value) || 0;
    document.getElementById("lab-metrial_label").innerHTML = Labourin;
});

document.getElementById("month-btn").addEventListener("click", function () {
    const Labourin2 = parseFloat(document.getElementById("month-input4").value) || 0;
    document.getElementById("month_label").innerHTML = Labourin2;
});

document.getElementById("Reduce-labour-btn").addEventListener("click", function () {
    const Labourin2 = parseFloat(document.getElementById("Labour-input4").value) || 0;
    document.getElementById("reduce-lab-metrial_label").innerHTML = Labourin2;
});

document.getElementById("total-btn").addEventListener("click", function () {

    let weight = document.getElementById("Weight-label2")

    let Added_cost = parseFloat(document.getElementById("metrial_label").innerHTML) || 0;
    let Reduced_cost = parseFloat(document.getElementById("r-metrial_label").innerHTML) || 0;

    let Added_labour = parseFloat(document.getElementById("lab-metrial_label").innerHTML) || 0 + weight;
    let Reduced_Labour = parseFloat(document.getElementById("reduce-lab-metrial_label").innerHTML) || 0 + weight;

    let No_of_months = parseFloat(document.getElementById("month_label").innerHTML) || 0;

    let Labour_saving = Added_labour - Reduced_Labour;
    let material_saving = Reduced_cost - Added_cost ;

    let saving_per_year = material_saving + Labour_saving;

    let monthly_saving = saving_per_year / 12;
    let FYE = No_of_months * monthly_saving
    
    document.getElementById("total-lab-metrial_label1").innerHTML = saving_per_year.toFixed(2);
    document.getElementById("total-lab-metrial_label2").innerHTML = (saving_per_year * 12).toFixed(2); // Assuming yearly saving
    document.getElementById("total-lab-metrial_label3").innerHTML = monthly_saving.toFixed(2);
    document.getElementById("total-lab-metrial_label4").innerHTML = FYE.toFixed(2);
});






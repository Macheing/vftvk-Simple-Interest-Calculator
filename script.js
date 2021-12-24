function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    if (principal <= 0 || String(principal) == "NaN"){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        
    }
    
    else {
            document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,"
            document.getElementById("result1").innerHTML = "at an interest rate of <mark>" + rate + "%</mark>."
            document.getElementById("result2").innerHTML = "You will receive an amount of <mark>" + interest + "</mark>,"
            document.getElementById("result3").innerHTML = "in the year <mark>" + year + "</mark>";
    }
    
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval +"%";
}
// This function resets all the values and the results when the page is refreshed
function resetInputs(){
  document.getElementById("principal").value = null;
  document.getElementById("rate").value = 10.25;
  document.getElementById("years").value = 1;
  document.getElementById("rate_val").innerHTML = "10.25%";
  document.getElementById("result").innerHTML = null;
}

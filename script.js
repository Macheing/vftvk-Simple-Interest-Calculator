function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    

    if (principal <= 0){
        return alert("Enter a positive number")
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
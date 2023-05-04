

var customerdata = [];
var volume;
var total;
var PI = 3.14;
var outputText1;
var outputText2;



function storeCustomerinfo(){
    var fName = " ";
    var lName =" ";
    var address =" ";
    var phone = 0;
    var postalCode =" ";
    var email =" ";

    fName = document.getElementById("FName").value;
    customerdata[0] = fName;

    lName = document.getElementById("LName").value;
    customerdata[1] = lName;

    address = document.getElementById("Address").value;
    customerdata[2] = address;

    phone = document.getElementById("Phone").value;
    customerdata[3] = phone;

    postalCode = document.getElementById("PostalCode").value;
    customerdata[4] = postalCode;

    email = document.getElementById("Email").value;
    customerdata[5] = email;

    alert("Customer Data Updated");
  

}

window.addEventListener("load", registerListeners, false);
var asynchrequest;

function registerListeners() {
	var span;
	span=document.getElementById("squareBed");
	span.addEventListener("click", function () { getContent("squareBed.html");}, false);
  span.addEventListener("click",function () { clearOutput(); });

	span=document.getElementById("circleBed");
	span.addEventListener("click", function () { getContent("circularBed.html");}, false);
  span.addEventListener("click",function () { clearOutput(); });

	span=document.getElementById("hSphereBed");
	span.addEventListener("click", function () { getContent("halfShpereBed.html");}, false);
  span.addEventListener("click",function () { clearOutput(); });

	span=document.getElementById("tConeBed");
	span.addEventListener("click", function () { getContent("coneBed.html");}, false);
  span.addEventListener("click",function () { clearOutput(); });

}

function getContent(infopage) {

		asynchrequest= new XMLHttpRequest();
		asynchrequest.onreadystatechange = function() {
    if (asynchrequest.readyState == 4 && asynchrequest.status == 200) {
      document.getElementById("inputs").innerHTML = asynchrequest.responseText;
    }
  };
  asynchrequest.open("GET", infopage, true);
  asynchrequest.send();
}

function CalcSquare(){

    volume = 0;
    total = 0;
    var length = document.getElementById("Lp1").value;
    var width = document.getElementById("Wp1").value;
    var height = document.getElementById("Hp1").value;
    this.volume = length * width * height;
    console.log(volume + "cm³");
    
    this.total = volume * 0.001;
    console.log("$" + total);
    this.outputText1 = 
    "A rectangular planter with dimensions <br>" + 
    length + " x " + width + " x " + height  + "<br> Volume: " + (volume.toFixed(2)) + "cm³" + "<br>";
    this.outputText2 = 
    "Cost: <br>" +
    volume + " x .001 = $" + (total.toFixed(2));
    
    console.log(outputText1);
    console.log(outputText2);
    
    outputText();

}

function CalcCircle(){
    
    volume = 0;
    total = 0;
    var radius = document.getElementById("Rp2").value;
    var height = document.getElementById("Hp2").value;
    this.volume = PI * (radius * radius) * height;
    console.log(volume + "cm³");
    
    this.total = volume * 0.0012;
    console.log("$" + total);
    
    this.outputText1 =
    "A circular planter with dimensions <br>" + 
    radius + "² x " + height + "<br> Volume: " + (volume.toFixed(2)) + "cm³" + "<br>";
    this.outputText2 =
    "Cost: <br>" + 
    (volume.toFixed(2)) + " x .0012 = $" + (total.toFixed(2));
    
    console.log(outputText1);
    console.log(outputText2);
    
    outputText();
}

function CalcHSphere() {
  
    volume = 0;
    total = 0;
    var radius = document.getElementById("R1p3").value;
    this.volume = 1/2 * (4/3 * PI * radius * radius * radius );
    console.log(volume + "cm³");

    this.total = volume *0.0015;
    console.log("$" + total);

    this.outputText1 = 
    "A hemisphere planter with dimensions <br>" + 
   "1/2 x ( 4/3 x " + radius + "³ ) " + 
   "<br> Volume: " + (volume.toFixed(2)) + "cm³" + "<br>";
    this.outputText2 = 
    "Cost: <br>" + 
    (volume.toFixed(2)) + " x .0015 = $" + (total.toFixed(2));
    
    console.log(outputText);
    console.log(outputText2);
    
    outputText();

}

function CalcTruncCone() {
   
  volume = 0;
    total = 0;

    var radius1 = document.getElementById("R1p4").value;
    var radius2 = document.getElementById("R2p4").value;
    var height = document.getElementById("Hp4").value;
    
    this.volume = 1/3 * PI * (radius1 * radius1 + radius1 * radius2 + radius2 * radius2) * height;
    console.log(volume + "cm³");
    
    this.total = volume * 0.002;
    console.log("$" + total);

    this.outputText1 = 
    "A beveled circular planter with dimensions <br>" + 
   "1/3 x ( " + radius1 + "² + " + radius1 + ") x ( " + radius2 + "² + " + radius2 + ")" + 
   "<br> Volume: " + (volume.toFixed(2)) + "cm³" + "<br>";
    this.outputText2 = 
    "Cost: <br>" +
    (volume.toFixed(2)) + " x .002 = $" + (total.toFixed(2));
    
    console.log(outputText1);
    console.log(outputText2);
    
    outputText();


}


function outputText() 
{
  clearOutput();
	if (customerdata.length != 0){
    document.getElementById("output").innerHTML = 
    "<BR>" + customerdata[0] + " " + customerdata[1] + "<BR>" +
    customerdata[2] + "<BR>" +
    customerdata[4] + "<BR>" + "<BR>";

  } else {
    document.getElementById("output").innerHTML = "Please enter personal information <br> <br>";
  }
  

	document.getElementById("output").innerHTML += outputText1;
  document.getElementById("output").innerHTML += "<br>" + outputText2;
}
function clearOutput() {
  document.getElementById("output").innerHTML= "";  
}
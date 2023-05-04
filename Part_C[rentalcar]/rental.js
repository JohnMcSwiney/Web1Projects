var outputText1;
var outputText2;

var xmlhttp = new XMLHttpRequest();
var r;
var i;

var indexvalue;

var lastname;
var firstname;
var address;
var state;
var phone;
var email;

var objectarray = [];

window.addEventListener("load", loaddata);
var asynchrequest;

function display_c() {
	var refresh = 1000;
	mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
	var x = new Date();
	(x = x.toLocaleString("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	}
    )), (document.getElementById("date-time").innerHTML = x);
	display_c();
}

function loaddata() {
	console.log("Load Data");

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			r = JSON.parse(xmlhttp.responseText);
			//displayData(r);
		}
	};
	xmlhttp.open("GET", "rentalclients.json", true);
	xmlhttp.send();
}

function DataSearch() {
	console.log("Search");
	clearOutput();
	this.objectarray = [];
	var LNAME = document.getElementById("lnameIN").value;
	var FNAME = document.getElementById("fnameIN").value;
	var found = false;
	console.log(LNAME);

    var obj;

	var objLNAME;
	var objFNAME;
	var objADDRESS;
	var objSTATE;
	var objEMAIL;
	var objPHONE;
	
	var clientobject = {
					lastname,
					firstname,
					address,
					state,
					phone,
					email,
				};
				
    var output;
    
	output = "<tr><th>Clients:</th><th></th><th></th> </tr>";
	output += "<tr><td></td><td>Last</td><td>First</td> </td>";
	// var Name = document.getElementById("Data1inp3").value;
	if (LNAME != "") {
		console.log("Lastname not null");
		if (FNAME == "") {
			console.log("Firstname null");
			for (i = 0; i < r.length; i++) {
				obj = r[i];
				clientobject = r[i];
				objLNAME = obj.last_name.toLowerCase();
				objFNAME = obj.first_name.toLowerCase();
				objADDRESS = obj.address.toLowerCase();
				objSTATE = obj.state_prov.toLowerCase();
				objEMAIL = obj.email.toLowerCase();
				objPHONE = obj.phone;

				

				clientobject.lastname = objLNAME;
				clientobject.firstname = objFNAME;
				clientobject.address = objADDRESS;
				clientobject.state = objSTATE;
				clientobject.email = objEMAIL;
				clientobject.phone = objPHONE;

				if (objLNAME.startsWith(LNAME.toLowerCase())) {
					//console.log(objectarray[i]);
					objectarray.push(clientobject);
					output += "<tr><td>";
					output += "<input type = radio ";
					output += "name = listitem ";
					output += "value = " + i + " ";
					output += " onchange = modifyItem(this.value)>";
					output +=
						"</td><td><label>" +
						obj.last_name +
						" </td><td>" +
						obj.first_name +
						"</label>" +
						"<br>";
					output += "</td></tr>";

					found = true;
				}
			}
		}

		if (FNAME != "" && LNAME != "") {
			console.log("Neither null [1]");
			for (i = 0; i < r.length; i++) {
				obj = r[i];
				clientobject = r[i];
				objLNAME = obj.last_name.toLowerCase();
				objFNAME = obj.first_name.toLowerCase();
				objADDRESS = obj.address.toLowerCase();
				objSTATE = obj.state_prov.toLowerCase();
				objEMAIL = obj.email.toLowerCase();
				objPHONE = obj.phone;

				clientobject.lastname = objLNAME;
				clientobject.firstname = objFNAME;
				clientobject.address = objADDRESS;
				clientobject.state = objSTATE;
				clientobject.email = objEMAIL;
				clientobject.phone = objPHONE;

				if (
					objLNAME.startsWith(LNAME.toLowerCase()) &&
					objFNAME.startsWith(FNAME.toLowerCase())
				) {
					//console.log(objectarray[i]);
					objectarray.push(clientobject);
					output += "<tr><td>";
					output += "<input type = radio ";
					output += "name = listitem ";
					output += "value = " + i + " ";
					output += " onchange = modifyItem(this.value)>";
					output +=
						"</td><td><label>" +
						obj.last_name +
						" </td><td>" +
						obj.first_name +
						"</label>" +
						"<br>";
					output += "</td></tr>";

					found = true;
				}
			}
		}
	}
	if (FNAME != "") {
		console.log("Firstname not null");
		if (LNAME == "") {
			console.log("lastname null");
			for (i = 0; i < r.length; i++) {
				obj = r[i];
				clientobject = r[i];
				objLNAME = obj.last_name.toLowerCase();
				objFNAME = obj.first_name.toLowerCase();
				objADDRESS = obj.address.toLowerCase();
				objSTATE = obj.state_prov.toLowerCase();
				objEMAIL = obj.email.toLowerCase();
				objPHONE = obj.phone;

				clientobject.lastname = objLNAME;
				clientobject.firstname = objFNAME;
				clientobject.address = objADDRESS;
				clientobject.state = objSTATE;
				clientobject.email = objEMAIL;
				clientobject.phone = objPHONE;

				if (objFNAME.startsWith(FNAME.toLowerCase())) {
					//console.log(objectarray[i]);
					objectarray.push(clientobject);
					output += "<tr><td>";
					output += "<input type = radio ";
					output += "name = listitem ";
					output += "value =" + i + " ";
					output += " onchange = modifyItem(this.value)>";
					output +=
						"</td><td><label>" +
						obj.last_name +
						" </td><td>" +
						obj.first_name +
						"</label>" +
						"<br>";
					output += "</td></tr>";

					found = true;
				}
			}
		}
	}
	document.getElementById("searchresults2").innerHTML = output;
	console.log(objectarray.length);
}

function modifyItem(leggonae) {
	var k = leggonae;
	//console.log(r[k]);
	console.log(objectarray.length);
	getOrderIN();
	displayClientinfo(k);

}

function getOrderIN() {
	getContent("OrderINs.html");
}

function clearpage() {

	var output = " ";
	document.getElementById("lnameIN").value = "";


	document.getElementById("fnameIN").value = "";

	document.getElementById("addressIN").disabled = true;
	document.getElementById("addressIN").value = "";

	document.getElementById("State").disabled = true;
	document.getElementById("State").value = "";

	document.getElementById("emailIN").disabled = true;
	document.getElementById("emailIN").value = "";

	document.getElementById("phoneIN").disabled = true;
	document.getElementById("phoneIN").value = "";

	document.getElementById("orderresults").innerHTML = output;
	document.getElementById("carImg").innerHTML = output;
	document.getElementById("ordercontainer").innerHTML = output;

	clearOutput();
}

function clearOutput() {
	document.getElementById("searchresults2").innerHTML = "";
}

function getContent(infopage) {

	asynchrequest = new XMLHttpRequest();
	asynchrequest.onreadystatechange = function() {
		if (asynchrequest.readyState == 4 && asynchrequest.status == 200) {
			document.getElementById("ordercontainer").innerHTML = asynchrequest.responseText;
		}
	};
	asynchrequest.open("GET", infopage, true);
	asynchrequest.send();
}


// var clientobject = {
//     lastname,
//     firstname,
//     address,
//     state,
//     phone,
//     email,
//   };
function displayClientinfo(k) {
	var obj = r[k];
	console.log(obj);
	var idk = obj.state_prov;
	console.log("Display client info");

	document.getElementById("lnameIN").disabled = false;
	document.getElementById("lnameIN").value = obj.last_name;

	document.getElementById("fnameIN").disabled = false;
	document.getElementById("fnameIN").value = obj.first_name;

	document.getElementById("addressIN").disabled = false;
	document.getElementById("addressIN").value = obj.address;

	document.getElementById("State").disabled = false;
	document.getElementById("State").value = idk;

	document.getElementById("emailIN").disabled = false;
	document.getElementById("emailIN").value = obj.email;

	document.getElementById("phoneIN").disabled = false;
	document.getElementById("phoneIN").value = obj.phone;

}



function order() {
	var days;
	var carType;
	var extra1 = false;
	var extra2 = false;
	var extra3 = false;
	var total;

	var output;
	var output0 = "<button onclick = clearpage()> Clear All </button>";
	total = 0;
	console.log("Submitted");
	days = document.getElementById("DaysIn").value;
	carType = document.getElementById("carType").value;
	var fname = document.getElementById("fnameIN").value;
	var lname = document.getElementById("lnameIN").value;
	
	console.log((document.getElementById("fnameIN").value) + " " + (document.getElementById("lnameIN").value));
	console.log("days = " + days + "  Car Price = " + carType);
	total = days * carType;


	if (document.querySelector("input[name=extra1]:checked")) {
		//extra1 = document.querySelector("input[name=extra1]:checked").value;
		extra1 = true;
		//console.log("Extra cost = " + (days * extra1));
		total += (days * extra1);
	}
	if (document.querySelector("input[name=extra2]:checked")) {
		extra2 = true;
		//console.log(extra2);
		total = total + 10;
	}
	if (document.querySelector("input[name=extra3]:checked")) {
		//this.extra3 = document.querySelector("input[name=extra3]:checked").value;
		extra3 = true;
		console.log(extra3);
	}
	console.log("Grand total of: " + total);

	output = "<tr><th>Order info</th><th></th><tr>";
	output += "<tr><td>Name: </td><td>" + fname + " " + lname + "</td><tr>";
	output += "<tr><td>Car Type: </td><td>" + " $" + carType + " /day" + "</td><tr>";
	if (extra1 != "") {
		output += "<tr><td> + Rack </td><td>" + "$5" + " /day" + "</td><tr>";
	}
	if (extra2 != false) {
		output += "<tr><td> + GPS </td><td>" + "$10" + "</td><tr>";
	}
	if (extra3 != false) {
		output += "<tr><td> + Car Seat </td><td>" + "Free" + "</td><tr>";
	}
	output += "<tr><td> Days: </td><td>" + days + " day(s)" + "</td><tr>";
	output += "<tr><th> ------------ </th><th> ------ </th><tr>";
	output += "<tr><th> Grand total: </th><th>" + " $" + total + " </th><tr>";




	document.getElementById("searchresults2").innerHTML = output0;

	document.getElementById("orderresults").innerHTML = output;

}

function enableSubmit() {
	console.log("SumbitEnable");
	document.getElementById("OrderBTN").disabled = false;
}

function disableSubmit() {
	console.log("SumbitDisable");
	document.getElementById("OrderBTN").disabled = true;
}

function displaycar() {
	var l = document.getElementById("carType").value;
	var Car = "Car1.html";
	if (l == "15") {
		console.log("15");
		Car = "Car1.html";
	}
	if (l == "20") {
		console.log("20");
		Car = "Car2.html";
	}
	if (l == "35") {
		console.log("35");
		Car = "Car3.html";
	}
	if (l == "40") {
		console.log("40");
		Car = "Car4.html";
	}
	asynchrequest = new XMLHttpRequest();
	asynchrequest.onreadystatechange = function() {
		if (asynchrequest.readyState == 4 && asynchrequest.status == 200) {
			document.getElementById("carImg").innerHTML = asynchrequest.responseText;
		}
	};
	asynchrequest.open("GET", Car, true);
	asynchrequest.send();
}
console.log("js loaded");

displayRadioValue();

var customerdata=[];
var e;
var vegNum;
var fruitNum;
var chickenNum;
var porkNum;

function storedata() {
	
	var name=document.getElementById("name").value;
	customerdata[0]=name;

	var address=document.getElementById("address").value;
	customerdata[1]=address;

    // if (document.getElementById('delivery').checked) {
    //     customerdata[2] = document.getElementById('delivery').value;
    // }
    
	vegNum=document.getElementById("vegnum").value;
	customerdata[2]=vegNum;
    
    fruitNum=document.getElementById("fruitnum").value;
	customerdata[3]=fruitNum;
    
    chickenNum=document.getElementById("chickennum").value;
	customerdata[4]=chickenNum;
    
    porkNum=document.getElementById("porknum").value;
	customerdata[5]=porkNum;
	displayRadioValue();
	runtotal();
	
}
function displayRadioValue() {
    var ele = document.getElementsByName('dtype');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        // = document.getElementById("result").innerHTML
        this.e = "Option: "+ele[i].value;
    }
}

function runtotal()
{
	var outmessage="";//this will be sent back to the page
	var veg = customerdata[2] * 30.00;
    var fruit = customerdata[3] * 20.00;
    var chicken = customerdata[4] * 7.00;
    var pork = customerdata[5] * 5.00;

    total = (veg+ fruit + chicken + pork);

    outmessage+= "<br>";
    outmessage+= "Name on order: " +customerdata[0];
    outmessage+= "<br>";
    outmessage+= "Address: " + customerdata[1];
    outmessage+= "<br>";
    outmessage+= e;
    outmessage+= "Order: ";
    outmessage+= "<br>";
    outmessage+= customerdata[2] + "Vegtable Hampers";
    outmessage+= customerdata[3] + "Fruit Hampers";
    if(customerdata[4] > 0){
        outmessage+= customerdata[4] + "Fresh Chickens";
    } 
    if(customerdata[5] > 0){
        outmessage+= customerdata[5] + "Kg Pork";
    }

    outmessage+= "<br>"

    outmessage+= "Total order: $" + total;

    alert(outmessage);

    document.getElementById("result").innerHTML=outmessage;

	// outmessage+=customerdata[0]+"<br>";
	// outmessage+="Future Value of Investement: $"+futurevalue.toFixed(2);
	// outmessage+="<br>";
	// alert(outmessage);
	// document.getElementById("result").innerHTML=outmessage;//displays 2 decimal places
	
}
/*
Allows investment form to be edited
*/

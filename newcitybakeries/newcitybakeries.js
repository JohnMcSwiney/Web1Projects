window.onload = disable_input;
window.onload = updateInfo;

// Clears all input boxes
// function clearAll() {

//     FName.value = "";
//     LName.value = "";
//     Address.value = "";
//     Phone.value = "";
//     PostalCode.value = "";
//     Email.value = "";



//     Slayers.value = "1";
//     Rlayers.value = "1";
//     Slength.value = "30";
//     Rradius.value = "15";
//     Swidth.value = "30";

// }
var customerdata = [];
var orderdata = [];
//var customers = [];
var Area = 0;
var Layers = 1;
var AreaPlus = 0;
//Sheet
var Length = 0;
var Width = 0;
//Round
var Radius = 0;
var total = 0;
// Inputs
var sDisabled = true;
var rDisabled = true;
var leggomie = 0;
// var outTotal = 0;

// var FName;
// var LName;
// var Address;
// var  Phone;
// var PostalCode;
// var Email;
// var Slayers;
// var Rlayers;
// var Slength;
// var Rradius;
// var Swidth;
    
// var extra1;
// var extra2;
// var extra3;

document.getElementById("OrderBtn").addEventListener("click", printOrderInfo({}));
//document.getElementById("clearBtn").addEventListener("click", clearAll({}));
//document.getElementsByClassName("test3").addEventListener("input")

// runs commands when updated

    FName.oninput = storeCustomerinfo;
    LName.oninput = storeCustomerinfo;
    Address.oninput = storeCustomerinfo;
    Phone.oninput = storeCustomerinfo;
    PostalCode.oninput = storeCustomerinfo;
    Email.oninput = storeCustomerinfo;
    
    Slayers.oninput = updateTotal;
    Rlayers.oninput = updateTotal;
    Slength.oninput = updateTotal;
    Rradius.oninput = updateTotal;
    Swidth.oninput = updateTotal;
    
    extra1.oninput = updateTotal;
    extra2.oninput = updateTotal;
    extra3.oninput = updateTotal;




// Stores customer info in an array
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

    //console.log("Customer Data Updated");

}
// Stores customer info in an object
//function createCustomerObj(){
    // made to see how to make
    // const Customer = {name:customerdata[0] + customerdata[1],  
    //                 address: customerdata[2],
    //                 phone: customerdata[3],
    //                 postalCode: customerdata[4],
    //                 email: customerdata[5]
    // };
//   console.log("Customer Object Created");
//}


//update user info
function updateInfo() {
    
    //Sheet
    if (document.getElementById("cakeTypeS").checked == true) {
        //enable sheet inputs
        sDisabled = false;
        rDisabled = true;

        //disable round inputs
        disable_input();

        console.log("Sheet Selected");

    }

    //Round
    if (document.getElementById("cakeTypeR").checked == true) {
        //enable round inputs
        rDisabled = false;
        sDisabled = true;
        
        //disable sheet inputs
        disable_input();

        console.log("Round Selected");
        Layers = document.getElementById("Rlayers").value;
        //orderdata[0] = Layers;

        Radius = document.getElementById("Rradius").value;
        //orderdata[1] = Radius;
    }
}

// // User order data
function storedata() {

    //Sheet
    if (document.getElementById("cakeTypeS").checked == true) {

        Layers = document.getElementById("Slayers").value;
            orderdata[0] = Layers;
        console.log("Layers = " + Layers);

        Length = document.getElementById("Slength").value;
            orderdata[1] = Length;
        console.log("Length = " + Length);

        Width = document.getElementById("Swidth").value;
            orderdata[2] = Width;
        console.log("Width = " + Width);
    }

    //Round
    if (document.getElementById("cakeTypeR").checked == true) {

        disable_input();

        Layers = document.getElementById("Rlayers").value;
            orderdata[0] = Layers;

        Radius = document.getElementById("Rradius").value;
            orderdata[1] = Radius;
    }
    runtotal();
    printOrderInfo();
}

// update total live
function updateTotal() {
    if (document.getElementById("cakeTypeS").checked == true) {

        Layers = document.getElementById("Slayers").value;
        //    orderdata[0] = Layers;
        //console.log("layers = " + Layers);

        Length = document.getElementById("Slength").value;
        //    orderdata[1] = Length;
        //console.log("Length = " + Length);

        Width = document.getElementById("Swidth").value;
        //    orderdata[2] = Width;
        //console.log("Width = " + Width);

        
        
    }

    //Round
    if (document.getElementById("cakeTypeR").checked == true) {

        disable_input();

        Layers = document.getElementById("Rlayers").value;
        //    orderdata[0] = Layers;

        Radius = document.getElementById("Rradius").value;
        //    orderdata[1] = Radius; 
    }
    runtotal();

}
// sheet cake area
function getAreaS() {
    Area = Length * Width;
    console.log(Area);
}
// round cake area
function getAreaR() {
    Area = Radius * Radius;
    Area = Area * 3.14;
}
// get total
function runtotal() {
    AreaPlus = 0;
    leggomie = 0;
    //Sheet
    if (sDisabled == false){
        getAreaS();
        AreaPlus = Area - 900;
        AreaPlus = AreaPlus * 0.02;
        AreaPlus += 18;
        total = AreaPlus;
        

        if(Layers == 2){
            leggomie = AreaPlus * 0.5;
            AreaPlus += leggomie;
            total = AreaPlus;
            
        }
        if(Layers == 3){
            leggomie = AreaPlus * 1;
            AreaPlus += leggomie;
            total = AreaPlus;
        }
        
    }

    //Round
    if (rDisabled == false){
        getAreaR();
        AreaPlus = Area - 707;
        AreaPlus = AreaPlus * 0.02;
        AreaPlus += 15;
        total = AreaPlus;

        if(Layers == 2){
            leggomie = AreaPlus * 0.5;
            AreaPlus += leggomie;
            total = AreaPlus;
            total = AreaPlus;
        }
        if(Layers == 3){
            leggomie = AreaPlus * 1;
            AreaPlus += leggomie;
            total = AreaPlus;
        }

    }

    //adding extras to total
    if(document.getElementById("extra1").checked == true){
        total += 5.00;
    }
    if(document.getElementById("extra2").checked == true){
        total += 7.00;
    }
    if(document.getElementById("extra3").checked == true){
        total += 4.00;
    }
    console.log("Total = " + (total).toFixed(2));
    outTotal.value =  (total).toFixed(2);
}
// display order info
function printOrderInfo(){
    // Used this Stack Overflow post to understand adding spaces in inner html
    // https://stackoverflow.com/questions/24263613/how-to-print-tab-t-inside-a-div-element 

    document.getElementById("ResTitle").innerHTML = "<br>" + "</br>" + "</br>";
    document.getElementById("ResTitle").innerHTML += "<br>" + "Your Order:" + "</br>";
    document.getElementById("ResTitle").innerHTML += "</br>";

    

    if(sDisabled == false){ // sheet
        document.getElementById("ResText").innerHTML +=  "Sheet cake with: </br>";
        document.getElementById("ResText").innerHTML +=  "Layers: <br>" ;                                           
        document.getElementById("ResText").innerHTML +=  "Length: <br>" ;
        document.getElementById("ResText").innerHTML +=  "Width : <br>" ;
        document.getElementById("ResText").innerHTML +=  "Total without extras: <br>";
        
        document.getElementById("ResPrice1").innerHTML +=  "<br>";
        document.getElementById("ResPrice1").innerHTML +=  Layers + "<br>";
        document.getElementById("ResPrice1").innerHTML +=  Length +"cm <br>";
        document.getElementById("ResPrice1").innerHTML +=  Width + "cm <br>";
        document.getElementById("ResPrice1").innerHTML +=  "$"+ (AreaPlus).toFixed(2) + "<br>";
    }
    if(rDisabled == false){ // round
        document.getElementById("ResText").innerHTML +=  "Round cake with:" + "</br>";
        document.getElementById("ResText").innerHTML +=   "Layers: <br>" ;
        document.getElementById("ResText").innerHTML +=   "Radius: <br>" ;
        document.getElementById("ResText").innerHTML +=  "Total without extras: <br>"; 

        document.getElementById("ResPrice1").innerHTML +=  "<br>";
        document.getElementById("ResPrice1").innerHTML +=  Layers + "<br>";
        document.getElementById("ResPrice1").innerHTML +=  Radius +"cm <br>";
        document.getElementById("ResPrice1").innerHTML +=  "$"+ (AreaPlus).toFixed(2) + "<br>";
    }
    if(document.getElementById("extra1").checked == true){
        document.getElementById("totalText").innerHTML +=   " + Cream Cheese icing: <br>"; 
        
        document.getElementById("totalPrice").innerHTML +=   " $5 <br>";
    }
    if(document.getElementById("extra2").checked == true){
        document.getElementById("totalText").innerHTML +=   " + Fruit and Almonds topping: <br>"; 
       
        document.getElementById("totalPrice").innerHTML +=   " $7 <br>";
    }
    if(document.getElementById("extra3").checked == true){
        document.getElementById("totalText").innerHTML +=   " + Fruit jam filling between layers: <br>"; 
        
        document.getElementById("totalPrice").innerHTML +=   " $4 <br>";

    }
        // document.getElementById("totalText").innerHTML +=   " <b>Total Cost:</b>: <br>"; 
        
        document.getElementById("totalPricefrTho").innerHTML =   " $" + (total).toFixed(2) + "<br>";
}
// disables the unslected input
function disable_input(){
    if(sDisabled == true){
        document.getElementById("Slayers").disabled = true;
        document.getElementById("Slength").disabled = true;
        document.getElementById("Swidth").disabled = true;
    }
    if(sDisabled == false){
        document.getElementById("Slayers").disabled = false;
        document.getElementById("Slength").disabled = false;
        document.getElementById("Swidth").disabled = false;
    }

    if(rDisabled == true){
        document.getElementById("Rlayers").disabled = true;
        document.getElementById("Rradius").disabled = true;
    }
    if(rDisabled == false){
        document.getElementById("Rlayers").disabled = false;
        document.getElementById("Rradius").disabled = false;
    }
}


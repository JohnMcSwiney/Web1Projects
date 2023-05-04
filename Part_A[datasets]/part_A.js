var outputText1;
var outputText2;

var xmlhttp = new XMLHttpRequest();
var r;

window.addEventListener("load", registerListeners, false);
var asynchrequest;

// load data on span tag click
function loaddata() {
    console.log("Load Data 1 Method");

    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    r = JSON.parse(xmlhttp.responseText);
      //displayData(r);
    }
  };
  xmlhttp.open("GET", "https://data.calgary.ca/resource/78gh-n26t.json", true);
  xmlhttp.send();
}
function loaddata2() {
  console.log("Load Data 2 Method");

    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    r = JSON.parse(xmlhttp.responseText);
        //displayData(r);
    }
    };
    xmlhttp.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);
    xmlhttp.send();
}

// needs to be updated
function loaddata3() {
//event listener
  console.log("Load Data 3 Method");

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      r = JSON.parse(xmlhttp.responseText);
        //displayData(r);
      }
    };
    xmlhttp.open("GET", "https://data.calgary.ca/resource/vqdp-z5rr.json", true);
    xmlhttp.send();
}
function loaddata4() {
  //event listener
    console.log("Load Data 4 Method");
  
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        r = JSON.parse(xmlhttp.responseText);
          //displayData(r);
        }
      };
      xmlhttp.open("GET", "scooter.json", true);
      // This dataset is very inconsistent,
      // it was a link but it didn't work
      // this is the like:
      // https://data.calgary.ca/resource/8mci-3bzr.json
      xmlhttp.send();
      
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

//works 100%
function Data1Search(){
    clearOutput();
    
    var MONTH = document.getElementById("Datainp1").value;
    var COMMUNITY = document.getElementById("Datainp2").value;
    var CATEGORY = document.getElementById("Datainp3").value;
    
    var objID1;
    var objID2;
    var objID3;

    var output="<tr><th>Sector</th> <th>Community Name</th> <th>Category</th><th>Crime Count</th></tr>";
    // var Name = document.getElementById("Data1inp3").value;
    
        for(var i=0; i<r.length; i++)
        {   
            var obj=r[i];
            objID1 = (obj.month).toLowerCase();
            objID2 = (obj.community_name).toLowerCase();
            objID3 = (obj.category).toLowerCase();
            
            if(
            (objID1.startsWith(MONTH.toLowerCase())      
            &&  objID2.startsWith(COMMUNITY.toLowerCase())  
            && objID3.startsWith(CATEGORY.toLowerCase()) 
            ))
            {
                  output+="<tr><td>";
                  output+= obj.sector;
                  output+="</td><td>";
                  output+= obj.community_name;
                  output+="</td><td>";
                  output+=obj.category;
                  output+="</td><td>";
                  output+=obj.crime_count;
                  output+="</td>";
                  output+="<td> <a href = http://maps.google.com/?q=" + obj.lat + "," + obj.long + " target=_blank>Click</a></td></tr>"
            }
            
        }
document.getElementById("searchresults").innerHTML=output;

}
//works 100%
function Data2Search(){
  clearOutput();
  
  var PERMITTYPE = document.getElementById("Datainp1").value;
  var ORIGINALADDRESS = document.getElementById("Datainp2").value;
  var COMMUNITYNAME = document.getElementById("Datainp3").value;
  
  var objID1;
  var objID2;
  var objID3;

  var output="";
  // var Name = document.getElementById("Data1inp3").value;
  
      for(var i=0; i<r.length; i++)
      {   
          var obj=r[i];
          objID1 = (obj.permittype).toLowerCase();
          objID2 = (obj.originaladdress).toLowerCase();
          objID3 = (obj.communityname).toLowerCase();
          
          if(
          (objID1.startsWith(PERMITTYPE.toLowerCase())      
          &&  objID2.startsWith(ORIGINALADDRESS.toLowerCase())  
          && objID3.startsWith(COMMUNITYNAME.toLowerCase()) 
          ))
          {
            output+="<tr><td>" + obj.permittype + "</td></tr>";
            output+="<tr><td>" + obj.communityname + " " +obj.originaladdress + "</td></tr>";
            output+="<tr><td>" + obj.description + "</td></tr>";
            output+="<tr><td>" + obj.permitclass + "</td></tr>";
            output+="<tr><td>" + obj.contractorname + "</td></tr>";
            output+="<tr><td> <a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Click</a></td></tr>"
            output+="<tr><td> - </td></tr>"
          }
          
      }
document.getElementById("searchresults2").innerHTML=output;

}
//works 100%
function Data3Search(){
  clearOutput();
  
  var ROLLNUM = document.getElementById("Datainp1").value;
  var ADDRESS = document.getElementById("Datainp2").value;
  var COMMNAME = document.getElementById("Datainp3").value;
  
  var objID1;
  var objID2;
  var objID3;

  var output="";
  // var Name = document.getElementById("Data1inp3").value;
  
      for(var i=0; i<r.length; i++)
      {   
          var obj=r[i];
          objID1 = (obj.roll_number);
          objID2 = (obj.address).toLowerCase();
          objID3 = (obj.comm_name).toLowerCase();

          // console.log(ROLLNUM + " " + objID1 ); 
          // console.log(OGADDRESS + " " + objID2 );          
          // console.log(COMMNAME + " " + objID3 );


          if(ROLLNUM == "" && ADDRESS != "" && COMMNAME != ""){
            console.log("rollnum null");
            if( objID2.startsWith( ADDRESS.toLowerCase() ) && objID3.startsWith( COMMNAME.toLowerCase() ) ){
              console.log("Found 1");
              output+="<tr><td> Community name: </td><td>" + obj.comm_name + "</td></tr>";
              output+="<tr><td> Address: </td><td>" + obj.address + "</td></tr>";
              output+="<tr><td> Roll Number: </td><td>" + obj.roll_number + "</td></tr>";
              output+="<tr><td> Value: </td><td>" + obj.assessed_value + "</td></tr>";
              output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Click</a></td></tr>"
              output+="<tr><td></td><td></td></tr>"
            }
          }
          if(ROLLNUM != "" && ADDRESS == "" && COMMNAME != ""){
            console.log("address null");
            if( objID1 == (ROLLNUM) && objID3.startsWith( COMMNAME.toLowerCase() ) ){
              // objID1.startsWith(ROLLNUM) crashes website
              console.log("Found 2");
              output+="<tr><td> Community name: </td><td>" + obj.comm_name + "</td></tr>";
              output+="<tr><td> Address: </td><td>" + obj.address + "</td></tr>";
              output+="<tr><td> Roll Number: </td><td>" + obj.roll_number + "</td></tr>";
              output+="<tr><td> Value: </td><td>" + obj.assessed_value + "</td></tr>";
              output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Click</a></td></tr>"
              output+="<tr><td></td><td></td></tr>"
          }
        }
          if(ROLLNUM != "" && ADDRESS != "" && COMMNAME == ""){
            console.log("comm name null");
            if(objID1 == (ROLLNUM) && objID2.startsWith( ADDRESS.toLowerCase() )){
              console.log("Found 3");
              output+="<tr><td> Community name: </td><td>" + obj.comm_name + "</td></tr>";
              output+="<tr><td> Address: </td><td>" + obj.address + "</td></tr>";
              output+="<tr><td> Roll Number: </td><td>" + obj.roll_number + "</td></tr>";
              output+="<tr><td> Value: </td><td>" + obj.assessed_value + "</td></tr>";
              output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Click</a></td></tr>"
              output+="<tr><td></td><td></td></tr>"
            }
          }

          if(ROLLNUM != "" && ADDRESS == "" && COMMNAME == ""){
            console.log("1");
            if( objID1.startsWith(ROLLNUM) ){
              console.log("Found One 4");
              output+="<tr><td> Community name: </td><td>" + obj.comm_name + "</td></tr>";
              output+="<tr><td> Address: </td><td>" + obj.address + "</td></tr>";
              output+="<tr><td> Roll Number: </td><td>" + obj.roll_number + "</td></tr>";
              output+="<tr><td> Value: </td><td>" + obj.assessed_value + "</td></tr>";
              output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Click</a></td></tr>"
              output+="<tr><td></td><td></td></tr>"
            }
          }
          if(ROLLNUM == "" && ADDRESS != "" && COMMNAME == ""){
            console.log("2");
            if(objID2.startsWith( ADDRESS.toLowerCase() ) ){
              console.log("Found One 5");
              output+="<tr><td> Community name: </td><td>" + obj.comm_name + "</td></tr>";
              output+="<tr><td> Address: </td><td>" + obj.address + "</td></tr>";
              output+="<tr><td> Roll Number: </td><td>" + obj.roll_number + "</td></tr>";
              output+="<tr><td> Value: </td><td>" + obj.assessed_value + "</td></tr>";
              output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Click</a></td></tr>"
              output+="<tr><td></td><td></td></tr>"
            }
          }
          if(ROLLNUM == "" && ADDRESS == "" && COMMNAME != ""){
            console.log("3");
            if(objID3.startsWith( COMMNAME.toLowerCase() )  ){
              console.log("Found One 6");
              output+="<tr><td> Community name: </td><td>" + obj.comm_name + "</td></tr>";
              output+="<tr><td> Address: </td><td>" + obj.address + "</td></tr>";
              output+="<tr><td> Roll Number: </td><td>" + obj.roll_number + "</td></tr>";
              output+="<tr><td> Value: </td><td>" + obj.assessed_value + "</td></tr>";
              output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Click</a></td></tr>"
              output+="<tr><td></td><td></td></tr>"
            }
          }
          if(ROLLNUM != "" && ADDRESS != "" && COMMNAME != ""){
            console.log("nothing null");
            if(
              ( objID1 == (ROLLNUM) ) &&
              (objID2.startsWith( ADDRESS.toLowerCase() ) ) &&
              (objID3.startsWith( COMMNAME.toLowerCase() )  )
            ){
              console.log("Found One 7");
              output+="<tr><td> Community name: </td><td>" + obj.comm_name + "</td></tr>";
              output+="<tr><td> Address: </td><td>" + obj.address + "</td></tr>";
              output+="<tr><td> Roll Number: </td><td>" + obj.roll_number + "</td></tr>";
              output+="<tr><td> Value: </td><td>" + obj.assessed_value + "</td></tr>";
              output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Click</a></td></tr>"
              output+="<tr><td></td><td></td></tr>"
            }
          }
        }
  document.getElementById("searchresults2").innerHTML=output;
}

function Data4Search(){
  clearOutput();
  console.log("Search 4");
  
  var VENDOR = document.getElementById("Datainp1").value;
  var RESERVED = document.getElementById("Datainp2").value;
  var DISABLED = document.getElementById("Datainp3").value;
  var Rvalue;
  var Dvalue;
  console.log(VENDOR);
  console.log(RESERVED);
  console.log(DISABLED);


  var output="<tr><th>Vendor </th> <th> Reserved? </th> <th> Disabled? </th></tr>";
  
  for(var i=0; i<r.length; i++)
  {   
      var obj=r[i];
      objID1 = obj.vendor.toLowerCase();
      objID2 = obj.is_reserved_flag;
      objID3 = obj.is_disabled_flag;

      // console.log(ROLLNUM + " " + objID1 ); 
      // console.log(OGADDRESS + " " + objID2 );          
      // console.log(COMMNAME + " " + objID3 );


      if(VENDOR == "" && RESERVED != "" && DISABLED != ""){
        console.log("rollnum null");
        if( ( objID2 == RESERVED ) && ( objID3 == DISABLED ) ){
          output+="<tr><td>";
          output+= obj.vendor;
          output+="</td><td>";
          if(objID2 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          
          output+="</td><td>";
          if(objID3 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          output+="</td></tr>";
          output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Location</a></td><td></td></tr>"
          
        }
      }
      if(VENDOR != "" && RESERVED == "" && DISABLED != ""){
        console.log("address null");
        if( (objID1.startsWith(VENDOR.toLowerCase())) && ( objID3 == DISABLED ) ){
          // objID1.startsWith(ROLLNUM) crashes website
          output+="<tr><td>";
          output+= obj.vendor;
          output+="</td><td>";
          if(objID2 == 0 ){
            output+= " No ";
          }
          else{
            output+= " Yes ";
          }
          
          output+="</td><td>";
          if(objID3 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          output+="</td></tr>";
          output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Location</a></td><td></td></tr>"
      }
    }
      if(VENDOR != "" && RESERVED != "" && DISABLED == ""){
        console.log("comm name null");
        if((objID1.startsWith(VENDOR.toLowerCase())) && ( objID2 == DISABLED )){
          output+="<tr><td>";
          output+= obj.vendor;
          output+="</td><td>";
          if(objID2 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          
          output+="</td><td>";
          if(objID3 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          output+="</td></tr>";
          output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Location</a></td><td></td></tr>"
           
        }
      }

      if(VENDOR != "" && RESERVED == "" && DISABLED == ""){
        console.log("1");
        if( (objID1.startsWith(VENDOR.toLowerCase())) ){
          output+="<tr><td>";
          output+= obj.vendor;
          output+="</td><td>";
          if(objID2 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          
          output+="</td><td>";
          if(objID3 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          output+="</td></tr>";
          output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Location</a></td><td></td></tr>"
           

        }
      }
      if(VENDOR == "" && RESERVED != "" && DISABLED == ""){
        console.log("2");
        if( objID2 == RESERVED ){
          output+="<tr><td>";
          output+= obj.vendor;
          output+="</td><td>";
          if(objID2 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          
          output+="</td><td>";
          if(objID3 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          output+="</td></tr>";
          output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Location</a></td><td></td></tr>"
           

        }
      }
      if(VENDOR == "" && RESERVED == "" && DISABLED != ""){
        console.log("3");
        if( ( objID3 == DISABLED ) ){
          output+="<tr><td>";
          output+= obj.vendor;
          output+="</td><td>";
          if(objID2 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          
          output+="</td><td>";
          if(objID3 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          output+="</td></tr>";
          output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Location</a></td><td></td></tr>"
           

        }
      }
      if(VENDOR != "" && RESERVED != "" && DISABLED != ""){
        console.log("nothing null");
        if(
          (objID1.startsWith(VENDOR.toLowerCase())) &&
          ( objID2 == RESERVED ) &&
          ( objID3 == DISABLED )
        ){
          output+="<tr><td>";
          output+= obj.vendor;
          output+="</td><td>";
          if(objID2 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          
          output+="</td><td>";
          if(objID3 == 0 ){
            output+= " No ";
          }else{
            output+= " Yes ";
          }
          output+="</td></tr>";
          output+="<tr><td>  : </td><td><a href = http://maps.google.com/?q=" + obj.latitude + "," + obj.longitude + " target=_blank>Location</a></td><td></td></tr>"
          
        }
      }
    }
document.getElementById("searchresults").innerHTML=output;

}
function registerListeners() {
	var span;
	span=document.getElementById("Data1Sel");
	span.addEventListener("click", function () { getContent("data1.html");}, false);
  span.addEventListener("click",function () { clearOutput(); });
  span.addEventListener("click",function () { loaddata(); });

	span=document.getElementById("Data2Sel");
	span.addEventListener("click", function () { getContent("data2.html");}, false);
  span.addEventListener("click",function () { clearOutput(); });
  span.addEventListener("click",function () { loaddata2(); });

	span=document.getElementById("Data3Sel");""
	span.addEventListener("click", function () { getContent("data3.html");}, false);
  span.addEventListener("click",function () { clearOutput(); });
  span.addEventListener("click",function () { loaddata3(); });

  span=document.getElementById("Data4Sel");
  span.addEventListener("click", function () { getContent("data4.html");}, false);
  span.addEventListener("click",function () { clearOutput(); });
  span.addEventListener("click",function () { loaddata4(); });


}

function clearOutput() {
  document.getElementById("searchresults").innerHTML= "";  
  document.getElementById("searchresults2").innerHTML= "";
}



var outputText1;
var outputText2;

var xmlhttp = new XMLHttpRequest();
var r;

// load data on span tag click
function loaddata1() {
    console.log("Load Data 1 Method");

    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    r = JSON.parse(xmlhttp.responseText);
      //displayData(r);
    }
  };
  xmlhttp.open("GET", "https://data.cityofnewyork.us/resource/25th-nujf.json", true);
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
      xmlhttp.open("GET", "https://data.cityofnewyork.us/resource/hi3x-y76v.json", true);
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
      xmlhttp.open("GET", "https://data.cityofnewyork.us/resource/tg4x-b46p.json", true);
      xmlhttp.send();
}

window.addEventListener("load", registerListeners, false);
var asynchrequest;

function registerListeners() {
	var span;
	span=document.getElementById("Data1Sel");
	span.addEventListener("click", function () { getContent("data1.html");}, false);
    span.addEventListener("click",function () { clearOutput(); });
    span.addEventListener("click",function () { loaddata1(); });

	span=document.getElementById("Data2Sel");
	span.addEventListener("click", function () { getContent("data2.html");}, false);
    span.addEventListener("click",function () { clearOutput(); });
    span.addEventListener("click",function () { loaddata2(); });

	span=document.getElementById("Data3Sel");
	span.addEventListener("click", function () { getContent("data3.html");}, false);
    span.addEventListener("click",function () { clearOutput(); });
    span.addEventListener("click",function () { loaddata3(); });

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

function Data1Search1(){
    clearOutput();
    console.log("Data1Search1");
    var GENDER = document.getElementById("Data1inp1").value;
    var RANK = document.getElementById("Data1inp2").value;

    var output="<tr><th>Gender</th> <th>Name</th> <th>Rank</th><th>Count</th><th>Ethnicity</th></tr>";
    // var Name = document.getElementById("Data1inp3").value;
    
    if(RANK == ""){
        
        var search;
        for(var i=0; i<r.length; i++)
        {   
            var obj=r[i];
            search = (obj.gndr).toLowerCase();
            if(search.startsWith((GENDER).toLowerCase()))
            {	
                console.log("Found one");
                    
                output+="<tr><td>";
                output+= obj.gndr;
                output+="</td><td>";
                output+= obj.nm;
                output+="</td><td>";
                output+=obj.rnk;
                output+="</td><td>";
                output+=obj.cnt;
                output+="</td><td>";
                output+=obj.ethcty;
                output+="</td>";
                }
                    
        }
    }
    if(GENDER ==" " || GENDER == "" || GENDER == "  "){
        var search;
	for(var i=0; i<r.length; i++)
	{   
		var obj=r[i];
		search = obj.rnk;
		if(search == RANK)
		{	
            console.log("Found one");
				
            output+="<tr><td>";
            output+= obj.gndr;
            output+="</td><td>";
            output+= obj.nm;
            output+="</td><td>";
            output+=obj.rnk;
            output+="</td><td>";
            output+=obj.cnt;
            output+="</td><td>";
            output+=obj.ethcty;
            output+="</td>";
			}
				
	}
    }
    
    else{
        var search;
        var search2;
        for(var i=0; i<r.length; i++)
        {   
            var obj=r[i];
            search = (obj.gndr).toLowerCase();
            search2 = obj.rnk;
            if(search.startsWith((GENDER).toLowerCase()) && (search2 == RANK))
            {	
                console.log("Found one");
                    
                output+="<tr><td>";
                output+= obj.gndr;
                output+="</td><td>";
                output+= obj.nm;
                output+="</td><td>";
                output+=obj.rnk;
                output+="</td><td>";
                output+=obj.cnt;
                output+="</td><td>";
                output+=obj.ethcty;
                output+="</td>";
                }
                    
        }
    }
    //var r=JSON.parse(xhr.responseText);
	//structure table

document.getElementById("searchresults").innerHTML=output;

}

function Data2Search1(){
    clearOutput();
    console.log("Data2Search1");
    var NAME = document.getElementById("Data2inp1").value;
    var PERCENT = document.getElementById("Data2inp2").value;

    var output="";
    // var Name = document.getElementById("Data1inp3").value;
    
    if(PERCENT == ""){
        
        var search;
        for(var i=0; i<r.length; i++)
        {   
            var obj=r[i];
            search = (obj.hospital_name).toLowerCase();
            if(search.startsWith((NAME).toLowerCase()))
            {	
                console.log("Found one");
                    

                output+="<tr><td> Hospital Name: </td><td>";
                output+= obj.hospital_name;
                output+="</td></tr>";

                output+="<tr><td> Question: </td><td>";
                output+= obj.hcahps_question;
                output+="</td></tr>";

                output+="<tr><td> Answer description: </td><td>";
                output+= obj.hcahps_answer_description;
                output+="</td></tr>";

                output+="<tr><td> Answer %: </td><td>";
                output+= obj.hcahps_answer_percent;
                output+="</td></tr>";
                output+="<tr><td>  </td><td></td></tr>"
                }
                    
        }
    }
    if(NAME ==" " || NAME == "" || NAME == "  "){
        var search;
	for(var i=0; i<r.length; i++)
	{   
		var obj=r[i];
		search = obj.hcahps_answer_percent;
		if(search.startsWith(PERCENT))
		{	
            console.log("Found one");

            output+="<tr><td> Hospital Name: </td><td>";
            output+= obj.hospital_name;
            output+="</td></tr>";

            output+="<tr><td> Question: </td><td>";
            output+= obj.hcahps_question;
            output+="</td></tr>";

            output+="<tr><td> Answer description: </td><td>";
            output+= obj.hcahps_answer_description;
            output+="</td></tr>";

            output+="<tr><td> Answer %: </td><td>";
            output+= obj.hcahps_answer_percent;
            output+="</td></tr>";
            output+="<tr><td>  </td><td></td></tr>"
			}
				
	}
    }
    
    else{
        var search;
        var search2;
        for(var i=0; i<r.length; i++)
        {   
            var obj=r[i];
            search = (obj.hospital_name).toLowerCase();
            search2 = obj.hcahps_answer_percent;
            if((search.startsWith((NAME).toLowerCase()) && search2.startsWith(PERCENT)))
            {	
                console.log("Found one");

                output+="<tr><td> Hospital Name: </td><td>";
                output+= obj.hospital_name;
                output+="</td></tr>";

                output+="<tr><td> Question: </td><td>";
                output+= obj.hcahps_question;
                output+="</td></tr>";

                output+="<tr><td> Answer description: </td><td>";
                output+= obj.hcahps_answer_description;
                output+="</td></tr>";

                output+="<tr><td> Answer %: </td><td>";
                output+= obj.hcahps_answer_percent;
                output+="</td></tr>";
                output+="<tr><td>  </td><td></td></tr>"
                }
                    
        }
    }
    //var r=JSON.parse(xhr.responseText);
	//structure table

document.getElementById("searchresults").innerHTML=output;

}

function Data3Search(){
    clearOutput();
    console.log("Data3Search1");
    
    var EID = document.getElementById("Data3inp1").value;
    var SCATEG = document.getElementById("Data3inp2").value;

    var output="";
    // var Name = document.getElementById("Data1inp3").value;
    
    if(SCATEG == ""){
        
        var search;
        for(var i=0; i<r.length; i++)
        {   
            var obj=r[i];
            search = (obj.eventid);
            if(search.startsWith(EID))
            {	
                console.log("Found one");
    
                output+="<tr><td> Event ID: </td><td>";
                output+= obj.eventid;
                output+="</td></tr>";

                output+="<tr><td> Event Agency: </td><td>";
                output+= obj.eventagency;
                output+="</td></tr>";

                output+="<tr><td> Borough: </td><td>";
                output+= obj.borough;
                output+="</td></tr>";

                output+="<tr><td> Subcategory: </td><td>";
                output+= obj.subcategoryname;
                output+="</td></tr>";

                output+="<tr><td> End Date: </td><td>";
                output+= obj.enddatetime;
                output+="</td></tr>";
                output+="<tr><td>  </td><td></td></tr>"


                }
                    
        }
    }
    if(EID == "" || EID == "0"){
        console.log(SCATEG);
        var search;
	for(var i=0; i<r.length; i++)
	{   
		var obj=r[i];
		search = (obj.subcategoryname).toLowerCase();
		if(search.startsWith((SCATEG).toLowerCase()))
		{	
            output+="<tr><td> Event ID: </td><td>";
            output+= obj.eventid;
            output+="</td></tr>";

            output+="<tr><td> Event Agency: </td><td>";
            output+= obj.eventagency;
            output+="</td></tr>";

            output+="<tr><td> Borough: </td><td>";
            output+= obj.borough;
            output+="</td></tr>";

            output+="<tr><td> Subcategory: </td><td>";
            output+= obj.subcategoryname;
            output+="</td></tr>";

            output+="<tr><td> End Date: </td><td>";
            output+= obj.enddatetime;
            output+="</td></tr>";
            output+="<tr><td>  </td><td></td></tr>"
			}
				
	}
    }
    
    else{
        var search;
        var search2;
        for(var i=0; i<r.length; i++)
        {   
            var obj=r[i];
            search = (obj.subcategoryname).toLowerCase();
            search2 = (obj.eventid);
            if(search.startsWith((SCATEG).toLowerCase()) && search2.startsWith(EID))
            {	
                console.log("Found one");

                output+="<tr><td> Event ID: </td><td>";
                output+= obj.eventid;
                output+="</td></tr>";

                output+="<tr><td> Event Agency: </td><td>";
                output+= obj.eventagency;
                output+="</td></tr>";

                output+="<tr><td> Borough: </td><td>";
                output+= obj.borough;
                output+="</td></tr>";

                output+="<tr><td> Subcategory: </td><td>";
                output+= obj.subcategoryname;
                output+="</td></tr>";

                output+="<tr><td> End Date: </td><td>";
                output+= obj.enddatetime;
                output+="</td></tr>";
                output+="<tr><td>  </td><td></td></tr>"
                }
                    
        }
    }
    //var r=JSON.parse(xhr.responseText);
	//structure table

document.getElementById("searchresults").innerHTML=output;

}

function  SearchnDisplay2(){
    
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

function  SearchnDisplay3() {
  
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

function clearOutput() {
  document.getElementById("searchresults").innerHTML= "";  
}
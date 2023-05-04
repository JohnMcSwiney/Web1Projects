window.onload = loadXMLDoc;

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  var xml;
  xmlhttp.open("GET", "FinalQuiz.xml", true);

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var output = "";
      var question;
      var opt1;
      var opt2;
      var opt3;
      var opt4;

      xml = xmlhttp.responseXML;
      readXML = xml.getElementsByTagName("question");
      for (var i = 0; i < readXML.length; i++) {
        question = "question" + [i];
        opt1 = "a1" + [i];
        opt2 = "a2" + [i];
        opt3 = "a3" + [i];
        opt4 = "a4" + [i];

        output += "<table>";
        output +=
          "<tr><th class = padL>" +
          readXML[i].getElementsByTagName("qnumber")[0].childNodes[0]
            .nodeValue +
          ". </th>";
        output +=
          "<th>" +
          readXML[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue +
          "</th></tr>";
        output +=
          " <tr><td><input type = radio id = " +
          opt1 +
          " value = a name=" +
          question +
          ">" +
          "A) </td><td>" +
          readXML[i].getElementsByTagName("a")[0].childNodes[0].nodeValue +
          "</td><tr>";
        output +=
          " <tr><td><input type = radio id = " +
          opt2 +
          " value = b name=" +
          question +
          ">" +
          "B) </td><td>" +
          readXML[i].getElementsByTagName("b")[0].childNodes[0].nodeValue +
          "</td><tr>";
        output +=
          " <tr><td><input type = radio id = " +
          opt3 +
          " value = c name=" +
          question +
          ">" +
          "C) </td><td>" +
          readXML[i].getElementsByTagName("c")[0].childNodes[0].nodeValue +
          "</td><tr>";
        output +=
          " <tr><td><input type = radio id = " +
          opt4 +
          " value = d name=" +
          question +
          ">" +
          "D) </td><td>" +
          readXML[i].getElementsByTagName("d")[0].childNodes[0].nodeValue +
          "</td><tr>";
        output += "<tr><td><hr></td> <td></td></tr>";
        output += "<table>";
        
      }
      output += "<br>" + "<button onclick=markQuiz(); return false> Grade Quiz </button>";
      document.getElementById("quiz").innerHTML = output;
    }
  };
  xmlhttp.send();
}

function markQuiz() {
  var display = " <h2> Final Score </h2>";
  var countScore = 0;
  var finalScore;
  var qnumber;
  var qtitle;
  var finalquiz;
  var leggomie;
  var questionSize;
  var rightAnswers;
  var bruh = new XMLHttpRequest();
  bruh.open("GET", "FinalQuiz.xml", true);
  bruh.onreadystatechange = function () {
    if (bruh.readyState == 4 && bruh.status == 200) {
      var xml2 = bruh.responseXML;
      finalquiz = xml2.getElementsByTagName("finalquiz");
      leggomie =
        finalquiz[0].getElementsByTagName("rightanswers")[0].childNodes[0]
          .nodeValue;
      questionSize = xml2.getElementsByTagName("question");

      for (var i = 0; i < questionSize.length; i++) {
        qnumber =
          readXML[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue;
        qtitle =
          readXML[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue;
        rightAnswers = leggomie.split(",");

        if (document.querySelector("input[name=question" + i + "]:checked")) {
          if (
            document.querySelector("input[name=question" + i + "]:checked")
              .value == rightAnswers[i]
          ) {
            display += qnumber + ". Correct!<br>";

            countScore++;

            finalScore = (countScore / 5) * 100;
          } 
        }else {
            display +=
              qnumber +
              ". Incorrect! The correct answer was " +
              rightAnswers[i].toUpperCase() +
              "<br>";
            finalScore = (countScore / 5) * 100;
          } 

      }
      display += "<br> <hr> <br>"
      display +=
        "Your mark is " + countScore + "/5 (" + finalScore + "%" + ")" + "<br>";

      if (finalScore >= 60) {
        display += "<b>Congratulations!</b>";
      }
      if (finalScore < 60) {
        display += "<b>You failed, try again!</b>";
      }
      document.getElementById("score").innerHTML = display;
    }
  };
  bruh.send();
}

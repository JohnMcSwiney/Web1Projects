function clearAll() {
    Eur.value = "";
    Usd.value = "";
    Cad.value = "";
    Bit.value = "";
    Eth.value = "";
  }
  
  clearButton.onclick = clearAll;
  
  Eur.oninput = updateE;
  
  Usd.oninput = updateU;
  
  Cad.oninput = updateC;
  
  Bit.oninput = updateB;

  Eth.oninput = updateEt;
  


    // as of march 8th


  function updateE() {
    //Eur.value = (Eur.value * 0.45359).toFixed(2);
    Usd.value = (Eur.value * 1.09).toFixed(2);
    Cad.value = (Eur.value * 1.41).toFixed(2);
    Bit.value = (Eur.value * 0.000026).toFixed(2);
    Eth.value = (Eur.value * 0.00040).toFixed(2);

  }
  
  function updateU() {
    Eur.value = (Usd.value * 0.92).toFixed(2);
    //Usd.value = (Usd.value * ).toFixed(2);
    Cad.value = (Usd.value * 1.29).toFixed(2);
    Bit.value = (Usd.value * 0.000024).toFixed(2);
    Eth.value = (Usd.value * 0.00037).toFixed(2);
  }
  
  function updateC() {
    Eur.value = (Cad.value * 0.71).toFixed(2);
    Usd.value = (Cad.value * 0.78).toFixed(2);
    //Cad.value = (Cad.value * ).toFixed(2);
    Bit.value = (Cad.value * 0.000019).toFixed(2);
    Eth.value = (Cad.value * 0.00029).toFixed(2);
  }
  
  function updateB() {
    Eur.value = (Bit.value * 38028.66).toFixed(2);
    Usd.value = (Bit.value * 41489.00).toFixed(2);
    Cad.value = (Bit.value * 53443.43).toFixed(2);
    //Bit.value = (Bit.value * ).toFixed(2);
    Eth.value = (Bit.value * 15.30).toFixed(2);
  }

  function updateEt() {
    Eur.value = (Eth.value * 2484.59).toFixed(2);
    Usd.value = (Eth.value * 2712.76).toFixed(2);
    Cad.value = (Eth.value * 3494.27).toFixed(2);
    Bit.value = (Eth.value * 0.065).toFixed(2);
    //Eth.value = (Eth.value * ).toFixed(2);
  }

//   <label>Euro<br><input id="Eur"></label>  
//   <label>US Dollar<br><input id="Usd"></label>
//   <label>Canadian<br><input id="Cad"></label>
//   <label>Bitcoin<br><input id="Bit"></label>  
//   <label>Ethereum<br><input id="Eth"></label> 

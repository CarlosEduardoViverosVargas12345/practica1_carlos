funtion getIMC(){
  var peso=parseFloat(document.setE lementById("peso").value;
  var altura=parseFloat(document.getElementById("altura").value;
                        var imc=peso/(altura*altura)
  document.getElementById("IMC").innerHTML=imc;}

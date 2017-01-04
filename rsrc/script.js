$(function(){
  $("#regform").hide();
});

function trig(x){
  console.log("klik");
  if(x == 1){
    $("#wskLog").css({ opacity: 1 });
    $("#wskReg").css({ opacity: 0 });

    $("#regform").hide();
    $("#logform").show();


  }else if(x == 2){
    $("#wskLog").css("opacity", "0");
    $("#wskReg").css("opacity", "1");

    $("#regform").show();
    $("#logform").hide();

  }
}

function checkData(){
	var wrong = false;
	var wrongPass = false;
	var string = "";
	string = document.getElementById("mail").value;
	if(string == "") wrong = true;
	string = document.getElementById("imie").value;
	if(string == "") wrong = true;
	string = document.getElementById("nazwisko").value;
	if(string == "") wrong = true;
	string = document.getElementById("nick").value;
	if(string == "") wrong = true;
	string = document.getElementById("haslo").value;
	if(string == "") wrong = true;
	string = document.getElementById("hasloAgain").value;
	if(string == "") wrong = true;
	if(wrong){
		document.getElementById("wrongFormula").innerHTML = "Uzupełnij formularz do końca!"
		document.getElementById("regButt").disabled = true;
	}
	else {
		document.getElementById("wrongFormula").innerHTML = "";
	}
	if(document.getElementById("haslo").value != document.getElementById("hasloAgain").value) wrongPass = true;
	if(wrongPass){
		document.getElementById("wrongPass").innerHTML = "Hasła nie są zgodne!";
		document.getElementById("regButt").disabled = true;
	 }
	else{
		document.getElementById("wrongPass").innerHTML = "";

	}
	if(!wrong && !wrongPass) document.getElementById("regButt").disabled = false;
}

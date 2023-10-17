let x1 = 40, x1old = 40, x2 = 40; x2old = 40;
let pocetsipek = 1;
let hrac1 = [], legy1 = 0, pocetsipek1 = 0;
let hrac2 = [], legy2 = 0, pocetsipek2 = 0;
let idhrace = 1;
let jekonec = 0;
let jmenohrace1, jmenohrace2;

function myNoExit() {
  return "NoExit...";
}

function myZadejJmena() {  
  jmenohrace1 = prompt("Zadej jméno začínajícího hráče:", "DOMÁCÍ");
  if (jmenohrace1 == null || jmenohrace1 == "") {
    jmenohrace1 = "DOMÁCÍ";
  } else {    
  }
  jmenohrace2 = prompt("Zadej jméno druhého hráče:", "HOSTÉ");
  if (jmenohrace2 == null || jmenohrace2 == "") {
    jmenohrace2 = "HOSTÉ";
  } else {    
  }
  document.getElementById("scoretable1h").innerHTML = jmenohrace1;
  document.getElementById("scoretable2h").innerHTML = jmenohrace2;
}
         
function changeCOLOR15() {
	document.getElementById("bd1").style.backgroundColor = "#EAECEE";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#EAECEE";
	document.getElementById("bd2").style.backgroundColor = "#EAECEE";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#EAECEE";
	document.getElementById("bd3").style.backgroundColor = "#EAECEE";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#EAECEE";
	document.getElementById("bd4").style.backgroundColor = "#EAECEE";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#EAECEE";
	document.getElementById("bd5").style.backgroundColor = "#EAECEE";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#EAECEE";
	document.getElementById("bd6").style.backgroundColor = "#EAECEE";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#EAECEE";
	document.getElementById("bd7").style.backgroundColor = "#EAECEE";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#EAECEE";
	document.getElementById("bd8").style.backgroundColor = "#EAECEE";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#EAECEE";
	document.getElementById("bd9").style.backgroundColor = "#EAECEE";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#EAECEE";
	document.getElementById("bd10").style.backgroundColor = "#EAECEE";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#EAECEE";
	document.getElementById("bd11").style.backgroundColor = "#EAECEE";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#EAECEE";
	document.getElementById("bd12").style.backgroundColor = "#EAECEE";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#EAECEE";
	document.getElementById("bd13").style.backgroundColor = "#EAECEE";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#EAECEE";
	document.getElementById("bd14").style.backgroundColor = "#EAECEE";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#EAECEE";
	document.getElementById("bd15").style.backgroundColor = "#4CAF50";
	document.getElementById("bs15").style.backgroundColor = "#FFA427";
	document.getElementById("bt15").style.backgroundColor = "#4CAF50";
	document.getElementById("bd16").style.backgroundColor = "#EAECEE";
	document.getElementById("bs16").style.backgroundColor = "#EAECEE";
	document.getElementById("bt16").style.backgroundColor = "#EAECEE";
	document.getElementById("bd17").style.backgroundColor = "#EAECEE";
	document.getElementById("bs17").style.backgroundColor = "#EAECEE";
	document.getElementById("bt17").style.backgroundColor = "#EAECEE";
	document.getElementById("bd18").style.backgroundColor = "#EAECEE";
	document.getElementById("bs18").style.backgroundColor = "#EAECEE";
	document.getElementById("bt18").style.backgroundColor = "#EAECEE";
	document.getElementById("bd19").style.backgroundColor = "#EAECEE";
	document.getElementById("bs19").style.backgroundColor = "#EAECEE";
	document.getElementById("bt19").style.backgroundColor = "#EAECEE";
	document.getElementById("bd20").style.backgroundColor = "#EAECEE";
	document.getElementById("bs20").style.backgroundColor = "#EAECEE";
	document.getElementById("bt20").style.backgroundColor = "#EAECEE";
	document.getElementById("b25t").style.backgroundColor = "#EAECEE";
	document.getElementById("b25l").style.backgroundColor = "#EAECEE";
	document.getElementById("b50").style.backgroundColor = "#EAECEE";
	document.getElementById("b25r").style.backgroundColor = "#EAECEE";
	document.getElementById("b25b").style.backgroundColor = "#EAECEE";
}

function changeCOLOR16() {
	document.getElementById("bd1").style.backgroundColor = "#EAECEE";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#EAECEE";
	document.getElementById("bd2").style.backgroundColor = "#EAECEE";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#EAECEE";
	document.getElementById("bd3").style.backgroundColor = "#EAECEE";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#EAECEE";
	document.getElementById("bd4").style.backgroundColor = "#EAECEE";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#EAECEE";
	document.getElementById("bd5").style.backgroundColor = "#EAECEE";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#EAECEE";
	document.getElementById("bd6").style.backgroundColor = "#EAECEE";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#EAECEE";
	document.getElementById("bd7").style.backgroundColor = "#EAECEE";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#EAECEE";
	document.getElementById("bd8").style.backgroundColor = "#EAECEE";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#EAECEE";
	document.getElementById("bd9").style.backgroundColor = "#EAECEE";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#EAECEE";
	document.getElementById("bd10").style.backgroundColor = "#EAECEE";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#EAECEE";
	document.getElementById("bd11").style.backgroundColor = "#EAECEE";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#EAECEE";
	document.getElementById("bd12").style.backgroundColor = "#EAECEE";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#EAECEE";
	document.getElementById("bd13").style.backgroundColor = "#EAECEE";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#EAECEE";
	document.getElementById("bd14").style.backgroundColor = "#EAECEE";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#EAECEE";
	document.getElementById("bd15").style.backgroundColor = "#EAECEE";
	document.getElementById("bs15").style.backgroundColor = "#EAECEE";
	document.getElementById("bt15").style.backgroundColor = "#EAECEE";
	document.getElementById("bd16").style.backgroundColor = "#4CAF50";
	document.getElementById("bs16").style.backgroundColor = "#FFA427";
	document.getElementById("bt16").style.backgroundColor = "#4CAF50";
	document.getElementById("bd17").style.backgroundColor = "#EAECEE";
	document.getElementById("bs17").style.backgroundColor = "#EAECEE";
	document.getElementById("bt17").style.backgroundColor = "#EAECEE";
	document.getElementById("bd18").style.backgroundColor = "#EAECEE";
	document.getElementById("bs18").style.backgroundColor = "#EAECEE";
	document.getElementById("bt18").style.backgroundColor = "#EAECEE";
	document.getElementById("bd19").style.backgroundColor = "#EAECEE";
	document.getElementById("bs19").style.backgroundColor = "#EAECEE";
	document.getElementById("bt19").style.backgroundColor = "#EAECEE";
	document.getElementById("bd20").style.backgroundColor = "#EAECEE";
	document.getElementById("bs20").style.backgroundColor = "#EAECEE";
	document.getElementById("bt20").style.backgroundColor = "#EAECEE";
	document.getElementById("b25t").style.backgroundColor = "#EAECEE";
	document.getElementById("b25l").style.backgroundColor = "#EAECEE";
	document.getElementById("b50").style.backgroundColor = "#EAECEE";
	document.getElementById("b25r").style.backgroundColor = "#EAECEE";
	document.getElementById("b25b").style.backgroundColor = "#EAECEE";
}

function changeCOLORD() {
	document.getElementById("bd1").style.backgroundColor = "#4CAF50";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#EAECEE";
	document.getElementById("bd2").style.backgroundColor = "#F44336";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#EAECEE";
	document.getElementById("bd3").style.backgroundColor = "#F44336";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#EAECEE";
	document.getElementById("bd4").style.backgroundColor = "#4CAF50";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#EAECEE";
	document.getElementById("bd5").style.backgroundColor = "#4CAF50";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#EAECEE";
	document.getElementById("bd6").style.backgroundColor = "#4CAF50";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#EAECEE";
	document.getElementById("bd7").style.backgroundColor = "#F44336";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#EAECEE";
	document.getElementById("bd8").style.backgroundColor = "#F44336";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#EAECEE";
	document.getElementById("bd9").style.backgroundColor = "#4CAF50";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#EAECEE";
	document.getElementById("bd10").style.backgroundColor = "#F44336";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#EAECEE";
	document.getElementById("bd11").style.backgroundColor = "#4CAF50";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#EAECEE";
	document.getElementById("bd12").style.backgroundColor = "#F44336";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#EAECEE";
	document.getElementById("bd13").style.backgroundColor = "#F44336";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#EAECEE";
	document.getElementById("bd14").style.backgroundColor = "#F44336";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#EAECEE";
	document.getElementById("bd15").style.backgroundColor = "#4CAF50";
	document.getElementById("bs15").style.backgroundColor = "#EAECEE";
	document.getElementById("bt15").style.backgroundColor = "#EAECEE";
	document.getElementById("bd16").style.backgroundColor = "#4CAF50";
	document.getElementById("bs16").style.backgroundColor = "#EAECEE";
	document.getElementById("bt16").style.backgroundColor = "#EAECEE";
	document.getElementById("bd17").style.backgroundColor = "#4CAF50";
	document.getElementById("bs17").style.backgroundColor = "#EAECEE";
	document.getElementById("bt17").style.backgroundColor = "#EAECEE";
	document.getElementById("bd18").style.backgroundColor = "#F44336";
	document.getElementById("bs18").style.backgroundColor = "#EAECEE";
	document.getElementById("bt18").style.backgroundColor = "#EAECEE";
	document.getElementById("bd19").style.backgroundColor = "#4CAF50";
	document.getElementById("bs19").style.backgroundColor = "#EAECEE";
	document.getElementById("bt19").style.backgroundColor = "#EAECEE";
	document.getElementById("bd20").style.backgroundColor = "#F44336";
	document.getElementById("bs20").style.backgroundColor = "#EAECEE";
	document.getElementById("bt20").style.backgroundColor = "#EAECEE";
	document.getElementById("b25t").style.backgroundColor = "#EAECEE";
	document.getElementById("b25l").style.backgroundColor = "#EAECEE";
	document.getElementById("b50").style.backgroundColor = "#F44336";
	document.getElementById("b25r").style.backgroundColor = "#EAECEE";
	document.getElementById("b25b").style.backgroundColor = "#EAECEE";
}

function changeCOLOR17() {
	document.getElementById("bd1").style.backgroundColor = "#EAECEE";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#EAECEE";
	document.getElementById("bd2").style.backgroundColor = "#EAECEE";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#EAECEE";
	document.getElementById("bd3").style.backgroundColor = "#EAECEE";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#EAECEE";
	document.getElementById("bd4").style.backgroundColor = "#EAECEE";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#EAECEE";
	document.getElementById("bd5").style.backgroundColor = "#EAECEE";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#EAECEE";
	document.getElementById("bd6").style.backgroundColor = "#EAECEE";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#EAECEE";
	document.getElementById("bd7").style.backgroundColor = "#EAECEE";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#EAECEE";
	document.getElementById("bd8").style.backgroundColor = "#EAECEE";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#EAECEE";
	document.getElementById("bd9").style.backgroundColor = "#EAECEE";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#EAECEE";
	document.getElementById("bd10").style.backgroundColor = "#EAECEE";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#EAECEE";
	document.getElementById("bd11").style.backgroundColor = "#EAECEE";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#EAECEE";
	document.getElementById("bd12").style.backgroundColor = "#EAECEE";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#EAECEE";
	document.getElementById("bd13").style.backgroundColor = "#EAECEE";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#EAECEE";
	document.getElementById("bd14").style.backgroundColor = "#EAECEE";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#EAECEE";
	document.getElementById("bd15").style.backgroundColor = "#EAECEE";
	document.getElementById("bs15").style.backgroundColor = "#EAECEE";
	document.getElementById("bt15").style.backgroundColor = "#EAECEE";
	document.getElementById("bd16").style.backgroundColor = "#EAECEE";
	document.getElementById("bs16").style.backgroundColor = "#EAECEE";
	document.getElementById("bt16").style.backgroundColor = "#EAECEE";
	document.getElementById("bd17").style.backgroundColor = "#4CAF50";
	document.getElementById("bs17").style.backgroundColor = "#FFA427";
	document.getElementById("bt17").style.backgroundColor = "#4CAF50";
	document.getElementById("bd18").style.backgroundColor = "#EAECEE";
	document.getElementById("bs18").style.backgroundColor = "#EAECEE";
	document.getElementById("bt18").style.backgroundColor = "#EAECEE";
	document.getElementById("bd19").style.backgroundColor = "#EAECEE";
	document.getElementById("bs19").style.backgroundColor = "#EAECEE";
	document.getElementById("bt19").style.backgroundColor = "#EAECEE";
	document.getElementById("bd20").style.backgroundColor = "#EAECEE";
	document.getElementById("bs20").style.backgroundColor = "#EAECEE";
	document.getElementById("bt20").style.backgroundColor = "#EAECEE";
	document.getElementById("b25t").style.backgroundColor = "#EAECEE";
	document.getElementById("b25l").style.backgroundColor = "#EAECEE";
	document.getElementById("b50").style.backgroundColor = "#EAECEE";
	document.getElementById("b25r").style.backgroundColor = "#EAECEE";
	document.getElementById("b25b").style.backgroundColor = "#EAECEE";
}

function changeCOLOR18() {
	document.getElementById("bd1").style.backgroundColor = "#EAECEE";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#EAECEE";
	document.getElementById("bd2").style.backgroundColor = "#EAECEE";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#EAECEE";
	document.getElementById("bd3").style.backgroundColor = "#EAECEE";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#EAECEE";
	document.getElementById("bd4").style.backgroundColor = "#EAECEE";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#EAECEE";
	document.getElementById("bd5").style.backgroundColor = "#EAECEE";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#EAECEE";
	document.getElementById("bd6").style.backgroundColor = "#EAECEE";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#EAECEE";
	document.getElementById("bd7").style.backgroundColor = "#EAECEE";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#EAECEE";
	document.getElementById("bd8").style.backgroundColor = "#EAECEE";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#EAECEE";
	document.getElementById("bd9").style.backgroundColor = "#EAECEE";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#EAECEE";
	document.getElementById("bd10").style.backgroundColor = "#EAECEE";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#EAECEE";
	document.getElementById("bd11").style.backgroundColor = "#EAECEE";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#EAECEE";
	document.getElementById("bd12").style.backgroundColor = "#EAECEE";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#EAECEE";
	document.getElementById("bd13").style.backgroundColor = "#EAECEE";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#EAECEE";
	document.getElementById("bd14").style.backgroundColor = "#EAECEE";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#EAECEE";
	document.getElementById("bd15").style.backgroundColor = "#EAECEE";
	document.getElementById("bs15").style.backgroundColor = "#EAECEE";
	document.getElementById("bt15").style.backgroundColor = "#EAECEE";
	document.getElementById("bd16").style.backgroundColor = "#EAECEE";
	document.getElementById("bs16").style.backgroundColor = "#EAECEE";
	document.getElementById("bt16").style.backgroundColor = "#EAECEE";
	document.getElementById("bd17").style.backgroundColor = "#EAECEE";
	document.getElementById("bs17").style.backgroundColor = "#EAECEE";
	document.getElementById("bt17").style.backgroundColor = "#EAECEE";
	document.getElementById("bd18").style.backgroundColor = "#F44336";
	document.getElementById("bs18").style.backgroundColor = "#555555";
	document.getElementById("bt18").style.backgroundColor = "#F44336";
	document.getElementById("bd19").style.backgroundColor = "#EAECEE";
	document.getElementById("bs19").style.backgroundColor = "#EAECEE";
	document.getElementById("bt19").style.backgroundColor = "#EAECEE";
	document.getElementById("bd20").style.backgroundColor = "#EAECEE";
	document.getElementById("bs20").style.backgroundColor = "#EAECEE";
	document.getElementById("bt20").style.backgroundColor = "#EAECEE";
	document.getElementById("b25t").style.backgroundColor = "#EAECEE";
	document.getElementById("b25l").style.backgroundColor = "#EAECEE";
	document.getElementById("b50").style.backgroundColor = "#EAECEE";
	document.getElementById("b25r").style.backgroundColor = "#EAECEE";
	document.getElementById("b25b").style.backgroundColor = "#EAECEE";
}

function changeCOLORT() {
	document.getElementById("bd1").style.backgroundColor = "#EAECEE";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#4CAF50";
	document.getElementById("bd2").style.backgroundColor = "#EAECEE";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#F44336";
	document.getElementById("bd3").style.backgroundColor = "#EAECEE";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#F44336";
	document.getElementById("bd4").style.backgroundColor = "#EAECEE";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#4CAF50";
	document.getElementById("bd5").style.backgroundColor = "#EAECEE";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#4CAF50";
	document.getElementById("bd6").style.backgroundColor = "#EAECEE";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#4CAF50";
	document.getElementById("bd7").style.backgroundColor = "#EAECEE";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#F44336";
	document.getElementById("bd8").style.backgroundColor = "#EAECEE";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#F44336";
	document.getElementById("bd9").style.backgroundColor = "#EAECEE";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#4CAF50";
	document.getElementById("bd10").style.backgroundColor = "#EAECEE";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#F44336";
	document.getElementById("bd11").style.backgroundColor = "#EAECEE";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#4CAF50";
	document.getElementById("bd12").style.backgroundColor = "#EAECEE";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#F44336";
	document.getElementById("bd13").style.backgroundColor = "#EAECEE";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#F44336";
	document.getElementById("bd14").style.backgroundColor = "#EAECEE";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#F44336";
	document.getElementById("bd15").style.backgroundColor = "#EAECEE";
	document.getElementById("bs15").style.backgroundColor = "#EAECEE";
	document.getElementById("bt15").style.backgroundColor = "#4CAF50";
	document.getElementById("bd16").style.backgroundColor = "#EAECEE";
	document.getElementById("bs16").style.backgroundColor = "#EAECEE";
	document.getElementById("bt16").style.backgroundColor = "#4CAF50";
	document.getElementById("bd17").style.backgroundColor = "#EAECEE";
	document.getElementById("bs17").style.backgroundColor = "#EAECEE";
	document.getElementById("bt17").style.backgroundColor = "#4CAF50";
	document.getElementById("bd18").style.backgroundColor = "#EAECEE";
	document.getElementById("bs18").style.backgroundColor = "#EAECEE";
	document.getElementById("bt18").style.backgroundColor = "#F44336";
	document.getElementById("bd19").style.backgroundColor = "#EAECEE";
	document.getElementById("bs19").style.backgroundColor = "#EAECEE";
	document.getElementById("bt19").style.backgroundColor = "#4CAF50";
	document.getElementById("bd20").style.backgroundColor = "#EAECEE";
	document.getElementById("bs20").style.backgroundColor = "#EAECEE";
	document.getElementById("bt20").style.backgroundColor = "#F44336";
	document.getElementById("b25t").style.backgroundColor = "#EAECEE";
	document.getElementById("b25l").style.backgroundColor = "#EAECEE";
	document.getElementById("b50").style.backgroundColor = "#EAECEE";
	document.getElementById("b25r").style.backgroundColor = "#EAECEE";
	document.getElementById("b25b").style.backgroundColor = "#EAECEE";
}

function changeCOLOR19() {
	document.getElementById("bd1").style.backgroundColor = "#EAECEE";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#EAECEE";
	document.getElementById("bd2").style.backgroundColor = "#EAECEE";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#EAECEE";
	document.getElementById("bd3").style.backgroundColor = "#EAECEE";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#EAECEE";
	document.getElementById("bd4").style.backgroundColor = "#EAECEE";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#EAECEE";
	document.getElementById("bd5").style.backgroundColor = "#EAECEE";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#EAECEE";
	document.getElementById("bd6").style.backgroundColor = "#EAECEE";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#EAECEE";
	document.getElementById("bd7").style.backgroundColor = "#EAECEE";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#EAECEE";
	document.getElementById("bd8").style.backgroundColor = "#EAECEE";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#EAECEE";
	document.getElementById("bd9").style.backgroundColor = "#EAECEE";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#EAECEE";
	document.getElementById("bd10").style.backgroundColor = "#EAECEE";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#EAECEE";
	document.getElementById("bd11").style.backgroundColor = "#EAECEE";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#EAECEE";
	document.getElementById("bd12").style.backgroundColor = "#EAECEE";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#EAECEE";
	document.getElementById("bd13").style.backgroundColor = "#EAECEE";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#EAECEE";
	document.getElementById("bd14").style.backgroundColor = "#EAECEE";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#EAECEE";
	document.getElementById("bd15").style.backgroundColor = "#EAECEE";
	document.getElementById("bs15").style.backgroundColor = "#EAECEE";
	document.getElementById("bt15").style.backgroundColor = "#EAECEE";
	document.getElementById("bd16").style.backgroundColor = "#EAECEE";
	document.getElementById("bs16").style.backgroundColor = "#EAECEE";
	document.getElementById("bt16").style.backgroundColor = "#EAECEE";
	document.getElementById("bd17").style.backgroundColor = "#EAECEE";
	document.getElementById("bs17").style.backgroundColor = "#EAECEE";
	document.getElementById("bt17").style.backgroundColor = "#EAECEE";
	document.getElementById("bd18").style.backgroundColor = "#EAECEE";
	document.getElementById("bs18").style.backgroundColor = "#EAECEE";
	document.getElementById("bt18").style.backgroundColor = "#EAECEE";
	document.getElementById("bd19").style.backgroundColor = "#4CAF50";
	document.getElementById("bs19").style.backgroundColor = "#FFA427";
	document.getElementById("bt19").style.backgroundColor = "#4CAF50";
	document.getElementById("bd20").style.backgroundColor = "#EAECEE";
	document.getElementById("bs20").style.backgroundColor = "#EAECEE";
	document.getElementById("bt20").style.backgroundColor = "#EAECEE";
	document.getElementById("b25t").style.backgroundColor = "#EAECEE";
	document.getElementById("b25l").style.backgroundColor = "#EAECEE";
	document.getElementById("b50").style.backgroundColor = "#EAECEE";
	document.getElementById("b25r").style.backgroundColor = "#EAECEE";
	document.getElementById("b25b").style.backgroundColor = "#EAECEE";
}

function changeCOLOR20() {
	document.getElementById("bd1").style.backgroundColor = "#EAECEE";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#EAECEE";
	document.getElementById("bd2").style.backgroundColor = "#EAECEE";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#EAECEE";
	document.getElementById("bd3").style.backgroundColor = "#EAECEE";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#EAECEE";
	document.getElementById("bd4").style.backgroundColor = "#EAECEE";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#EAECEE";
	document.getElementById("bd5").style.backgroundColor = "#EAECEE";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#EAECEE";
	document.getElementById("bd6").style.backgroundColor = "#EAECEE";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#EAECEE";
	document.getElementById("bd7").style.backgroundColor = "#EAECEE";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#EAECEE";
	document.getElementById("bd8").style.backgroundColor = "#EAECEE";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#EAECEE";
	document.getElementById("bd9").style.backgroundColor = "#EAECEE";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#EAECEE";
	document.getElementById("bd10").style.backgroundColor = "#EAECEE";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#EAECEE";
	document.getElementById("bd11").style.backgroundColor = "#EAECEE";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#EAECEE";
	document.getElementById("bd12").style.backgroundColor = "#EAECEE";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#EAECEE";
	document.getElementById("bd13").style.backgroundColor = "#EAECEE";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#EAECEE";
	document.getElementById("bd14").style.backgroundColor = "#EAECEE";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#EAECEE";
	document.getElementById("bd15").style.backgroundColor = "#EAECEE";
	document.getElementById("bs15").style.backgroundColor = "#EAECEE";
	document.getElementById("bt15").style.backgroundColor = "#EAECEE";
	document.getElementById("bd16").style.backgroundColor = "#EAECEE";
	document.getElementById("bs16").style.backgroundColor = "#EAECEE";
	document.getElementById("bt16").style.backgroundColor = "#EAECEE";
	document.getElementById("bd17").style.backgroundColor = "#EAECEE";
	document.getElementById("bs17").style.backgroundColor = "#EAECEE";
	document.getElementById("bt17").style.backgroundColor = "#EAECEE";
	document.getElementById("bd18").style.backgroundColor = "#EAECEE";
	document.getElementById("bs18").style.backgroundColor = "#EAECEE";
	document.getElementById("bt18").style.backgroundColor = "#EAECEE";
	document.getElementById("bd19").style.backgroundColor = "#EAECEE";
	document.getElementById("bs19").style.backgroundColor = "#EAECEE";
	document.getElementById("bt19").style.backgroundColor = "#EAECEE";
	document.getElementById("bd20").style.backgroundColor = "#F44336";
	document.getElementById("bs20").style.backgroundColor = "#555555";
	document.getElementById("bt20").style.backgroundColor = "#F44336";
	document.getElementById("b25t").style.backgroundColor = "#EAECEE";
	document.getElementById("b25l").style.backgroundColor = "#EAECEE";
	document.getElementById("b50").style.backgroundColor = "#EAECEE";
	document.getElementById("b25r").style.backgroundColor = "#EAECEE";
	document.getElementById("b25b").style.backgroundColor = "#EAECEE";
}

function changeCOLOR25() {
	document.getElementById("bd1").style.backgroundColor = "#EAECEE";
	document.getElementById("bs1").style.backgroundColor = "#EAECEE";
	document.getElementById("bt1").style.backgroundColor = "#EAECEE";
	document.getElementById("bd2").style.backgroundColor = "#EAECEE";
	document.getElementById("bs2").style.backgroundColor = "#EAECEE";
	document.getElementById("bt2").style.backgroundColor = "#EAECEE";
	document.getElementById("bd3").style.backgroundColor = "#EAECEE";
	document.getElementById("bs3").style.backgroundColor = "#EAECEE";
	document.getElementById("bt3").style.backgroundColor = "#EAECEE";
	document.getElementById("bd4").style.backgroundColor = "#EAECEE";
	document.getElementById("bs4").style.backgroundColor = "#EAECEE";
	document.getElementById("bt4").style.backgroundColor = "#EAECEE";
	document.getElementById("bd5").style.backgroundColor = "#EAECEE";
	document.getElementById("bs5").style.backgroundColor = "#EAECEE";
	document.getElementById("bt5").style.backgroundColor = "#EAECEE";
	document.getElementById("bd6").style.backgroundColor = "#EAECEE";
	document.getElementById("bs6").style.backgroundColor = "#EAECEE";
	document.getElementById("bt6").style.backgroundColor = "#EAECEE";
	document.getElementById("bd7").style.backgroundColor = "#EAECEE";
	document.getElementById("bs7").style.backgroundColor = "#EAECEE";
	document.getElementById("bt7").style.backgroundColor = "#EAECEE";
	document.getElementById("bd8").style.backgroundColor = "#EAECEE";
	document.getElementById("bs8").style.backgroundColor = "#EAECEE";
	document.getElementById("bt8").style.backgroundColor = "#EAECEE";
	document.getElementById("bd9").style.backgroundColor = "#EAECEE";
	document.getElementById("bs9").style.backgroundColor = "#EAECEE";
	document.getElementById("bt9").style.backgroundColor = "#EAECEE";
	document.getElementById("bd10").style.backgroundColor = "#EAECEE";
	document.getElementById("bs10").style.backgroundColor = "#EAECEE";
	document.getElementById("bt10").style.backgroundColor = "#EAECEE";
	document.getElementById("bd11").style.backgroundColor = "#EAECEE";
	document.getElementById("bs11").style.backgroundColor = "#EAECEE";
	document.getElementById("bt11").style.backgroundColor = "#EAECEE";
	document.getElementById("bd12").style.backgroundColor = "#EAECEE";
	document.getElementById("bs12").style.backgroundColor = "#EAECEE";
	document.getElementById("bt12").style.backgroundColor = "#EAECEE";
	document.getElementById("bd13").style.backgroundColor = "#EAECEE";
	document.getElementById("bs13").style.backgroundColor = "#EAECEE";
	document.getElementById("bt13").style.backgroundColor = "#EAECEE";
	document.getElementById("bd14").style.backgroundColor = "#EAECEE";
	document.getElementById("bs14").style.backgroundColor = "#EAECEE";
	document.getElementById("bt14").style.backgroundColor = "#EAECEE";
	document.getElementById("bd15").style.backgroundColor = "#EAECEE";
	document.getElementById("bs15").style.backgroundColor = "#EAECEE";
	document.getElementById("bt15").style.backgroundColor = "#EAECEE";
	document.getElementById("bd16").style.backgroundColor = "#EAECEE";
	document.getElementById("bs16").style.backgroundColor = "#EAECEE";
	document.getElementById("bt16").style.backgroundColor = "#EAECEE";
	document.getElementById("bd17").style.backgroundColor = "#EAECEE";
	document.getElementById("bs17").style.backgroundColor = "#EAECEE";
	document.getElementById("bt17").style.backgroundColor = "#EAECEE";
	document.getElementById("bd18").style.backgroundColor = "#EAECEE";
	document.getElementById("bs18").style.backgroundColor = "#EAECEE";
	document.getElementById("bt18").style.backgroundColor = "#EAECEE";
	document.getElementById("bd19").style.backgroundColor = "#EAECEE";
	document.getElementById("bs19").style.backgroundColor = "#EAECEE";
	document.getElementById("bt19").style.backgroundColor = "#EAECEE";
	document.getElementById("bd20").style.backgroundColor = "#EAECEE";
	document.getElementById("bs20").style.backgroundColor = "#EAECEE";
	document.getElementById("bt20").style.backgroundColor = "#EAECEE";
	document.getElementById("b25t").style.backgroundColor = "#4CAF50";
	document.getElementById("b25l").style.backgroundColor = "#4CAF50";
	document.getElementById("b50").style.backgroundColor = "#F44336";
	document.getElementById("b25r").style.backgroundColor = "#4CAF50";
	document.getElementById("b25b").style.backgroundColor = "#4CAF50";
}

function myOdecti(kolik) {  
  switch (idhrace) {
    case 1:
      ++pocetsipek1;      
      if (pocetsipek1 > 24) {
        if (kolik == 125) {
          kolik = (kolik - 100);
        } else if (kolik == 250) {
            kolik = (kolik - 200);
        } else kolik = 0;
      } else if (pocetsipek1 > 21) {
          if (kolik == 120) {
            kolik = (kolik - 100);
          } else if (kolik == 240) {
              kolik = (kolik - 200);
          } else if (kolik == 360) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek1 > 18) {
          if (kolik == 119) {
            kolik = (kolik - 100);
          } else if (kolik == 238) {
              kolik = (kolik - 200);
          } else if (kolik == 357) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek1 > 15) {
          if (kolik > 302) {
            kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek1 > 12) {
          if (kolik == 118) {
            kolik = (kolik - 100);
          } else if (kolik == 236) {
              kolik = (kolik - 200);
          } else if (kolik == 354) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek1 > 9) {
          if (kolik == 117) {
            kolik = (kolik - 100);
          } else if (kolik == 234) {
              kolik = (kolik - 200);
          } else if (kolik == 351) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek1 > 6) {
          if (kolik > 302) {
	          kolik = 0;
          } else if (kolik > 201) {
              kolik = (kolik - 200);  
          } else kolik = 0;
      } else if (pocetsipek1 > 3) {
          if (kolik == 116) {
            kolik = (kolik - 100);
          } else if (kolik == 232) {
              kolik = (kolik - 200);
          } else if (kolik == 348) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else {
          if (kolik == 115) {
            kolik = (kolik - 100);
          } else if (kolik == 230) {
              kolik = (kolik - 200);
          } else if (kolik == 345) {
              kolik = (kolik - 300);
          } else kolik = 0;
      }
      hrac1[pocetsipek1] = kolik;          
      x1 = x1 + kolik;
      switch (pocetsipek) {
        case 1:
          scorethree1 = kolik;         
          document.getElementById("scoretable1").innerHTML = x1;
          document.getElementById("darts1").innerHTML = pocetsipek1;
          document.getElementById("scoretablethree1").innerHTML = scorethree1;
          document.getElementById("score1sipka1").innerHTML = kolik;
          document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
          document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
          break;
        case 2:
          scorethree1 = hrac1[pocetsipek1 - 1] + kolik;         
          document.getElementById("scoretable1").innerHTML = x1;
          document.getElementById("darts1").innerHTML = pocetsipek1;
          document.getElementById("scoretablethree1").innerHTML = scorethree1;
          document.getElementById("score1sipka2").innerHTML = kolik;
          document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
          document.getElementById("score1sipka3h").style.backgroundColor = "#FFA427";        
          break;
        case 3:
					scorethree1 = hrac1[pocetsipek1 - 2] + hrac1[pocetsipek1 - 1] + kolik;
					if (x1old == x1) {
						x1 = Math.round(x1 / 2);
					}
					x1old = x1;
          if (pocetsipek2 == 27) {
						if (confirm("Potvrď zavření poslední šipkou " + kolik) == true) {
              if (x1 > x2) {
               ++legy1;
              } else if (x2 > x1) {
	               	++legy2;
              } else {
              		++legy1;
              		++legy2;
              }
              x1 = 40;
              x2 = 40;
              x1old = 40;
              x2old = 40;              
              pocetsipek1 = 0;              
              pocetsipek2 = 0;              
              pocetsipek = 3;
              document.getElementById("legs1").innerHTML = legy1;
              document.getElementById("legs2").innerHTML = legy2;
              document.getElementById("scoretable1").innerHTML = 40;
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
              document.getElementById("darts1").innerHTML = "&nbsp";              
              document.getElementById("scoretable2").innerHTML = 40;
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("score2sipka2").innerHTML = "&nbsp";
              document.getElementById("score2sipka3").innerHTML = "&nbsp";
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";            
              document.getElementById("darts2").innerHTML = "&nbsp";              
              document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
	            document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
              document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
              document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
              document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";              
              if ((legy1 + legy2) % 2 == 0) {
                document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
                document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
                jekonec = 1;
              } else {
                  document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
                  document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
                  jekonec = 1;
              }
              changeCOLOR15();
            } else {
                --pocetsipek1;
                --pocetsipek;
                x1 = x1 - kolik;
            }   
          } else {    		          
	          document.getElementById("scoretable1").innerHTML = x1;
	          document.getElementById("darts1").innerHTML = pocetsipek1;
	          document.getElementById("scoretablethree1").innerHTML = scorethree1;
	          document.getElementById("scoretablethree2").innerHTML = "&nbsp";
	          document.getElementById("score1sipka3").innerHTML = kolik;
	          document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
	          document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
	          document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
	          document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
	          if (hrac2[pocetsipek2 + 1] >= 0) {
	            document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2 + 1];
	            document.getElementById("scoretablethree2").innerHTML = hrac2[pocetsipek2 + 1];
	          } else {
	            document.getElementById("score2sipka1").innerHTML = "&nbsp";
	          }            
	          if (hrac2[pocetsipek2 + 2] >= 0) {
	            document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 + 2];
	          } else {
	            document.getElementById("score2sipka2").innerHTML = "&nbsp";
	          }
	          if (hrac2[pocetsipek2 + 3] >= 0) {
	            document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2 + 3];
	          } else {
	            document.getElementById("score2sipka3").innerHTML = "&nbsp";
	          }

						if ((legy1 + legy2) % 2 == 0) {
						} else {
								if (pocetsipek1 > 23) {
									changeCOLOR25();
								} else if (pocetsipek1 > 20) {
										changeCOLOR20();
								} else if (pocetsipek1 > 17) {
										changeCOLOR19();
								} else if (pocetsipek1 > 14) {
										changeCOLORT();
								} else if (pocetsipek1 > 11) {
										changeCOLOR18();
								} else if (pocetsipek1 > 8) {
										changeCOLOR17();
								} else if (pocetsipek1 > 5) {
										changeCOLORD();
								} else if (pocetsipek1 > 2) {
										changeCOLOR16();
								}
							}	
				
          }
          break; 
      }
      break;
    case 2:
      ++pocetsipek2;      
      if (pocetsipek2 > 24) {
        if (kolik == 125) {
          kolik = (kolik - 100);
        } else if (kolik == 250) {
            kolik = (kolik - 200);
        } else kolik = 0;
      } else if (pocetsipek2 > 21) {
          if (kolik == 120) {
            kolik = (kolik - 100);
          } else if (kolik == 240) {
              kolik = (kolik - 200);
          } else if (kolik == 360) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek2 > 18) {
          if (kolik == 119) {
            kolik = (kolik - 100);
          } else if (kolik == 238) {
              kolik = (kolik - 200);
          } else if (kolik == 357) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek2 > 15) {
          if (kolik > 302) {
            kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek2 > 12) {
          if (kolik == 118) {
            kolik = (kolik - 100);
          } else if (kolik == 236) {
              kolik = (kolik - 200);
          } else if (kolik == 354) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek2 > 9) {
          if (kolik == 117) {
            kolik = (kolik - 100);
          } else if (kolik == 234) {
              kolik = (kolik - 200);
          } else if (kolik == 351) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else if (pocetsipek2 > 6) {
          if (kolik > 302) {
	          kolik = 0;
          } else if (kolik > 201) {
              kolik = (kolik - 200);  
          } else kolik = 0;
      } else if (pocetsipek2 > 3) {
          if (kolik == 116) {
            kolik = (kolik - 100);
          } else if (kolik == 232) {
              kolik = (kolik - 200);
          } else if (kolik == 348) {
              kolik = (kolik - 300);
          } else kolik = 0;
      } else {
          if (kolik == 115) {
            kolik = (kolik - 100);
          } else if (kolik == 230) {
              kolik = (kolik - 200);
          } else if (kolik == 345) {
              kolik = (kolik - 300);
          } else kolik = 0;
      }
      hrac2[pocetsipek2] = kolik;          
      x2 = x2 + kolik;
      switch (pocetsipek) {
        case 1:
          scorethree2 = kolik;
          document.getElementById("scoretable2").innerHTML = x2;
          document.getElementById("darts2").innerHTML = pocetsipek2;
          document.getElementById("scoretablethree2").innerHTML = scorethree2;
          document.getElementById("score2sipka1").innerHTML = kolik;
          document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
          document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
          break;
        case 2:
          scorethree2 = hrac2[pocetsipek2 - 1] + kolik;         
          document.getElementById("scoretable2").innerHTML = x2;
          document.getElementById("darts2").innerHTML = pocetsipek2;
          document.getElementById("scoretablethree2").innerHTML = scorethree2;
          document.getElementById("score2sipka2").innerHTML = kolik;
          document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
          document.getElementById("score2sipka3h").style.backgroundColor = "#FFA427";
          break;
        case 3:
					scorethree2 = hrac2[pocetsipek2 - 2] + hrac2[pocetsipek2 - 1] + kolik;
					if (x2old == x2) {
						x2 = Math.round(x2 / 2);
					}
					x2old = x2;        
          if (pocetsipek1 == 27) {        
            if (confirm("Potvrď zavření poslední šipkou " + kolik) == true) {              
              if (x1 > x2) {
               ++legy1;
              } else if (x2 > x1) {
               	++legy2;
              } else {
              		++legy1;
              		++legy2;
              }
              x1 = 40;
              x2 = 40;
              x1old = 40;
              x2old = 40;
              pocetsipek1 = 0;              
              pocetsipek2 = 0;              
              pocetsipek = 3;
              document.getElementById("legs1").innerHTML = legy1;
              document.getElementById("legs2").innerHTML = legy2;
              document.getElementById("scoretable1").innerHTML = 40;
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
              document.getElementById("darts1").innerHTML = "&nbsp";         
              document.getElementById("scoretable2").innerHTML = 40;
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("score2sipka2").innerHTML = "&nbsp";
              document.getElementById("score2sipka3").innerHTML = "&nbsp";
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";            
              document.getElementById("darts2").innerHTML = "&nbsp";              
              document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
              document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
              document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
              document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
              if ((legy1 + legy2) % 2 == 0) {
                document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
                document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
                jekonec = 1;
              } else {
                  document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
                  document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
                  jekonec = 1;
              }
              changeCOLOR15();
            } else {
                --pocetsipek2;
                --pocetsipek2all;
                --pocetsipek;
                x2 = x2 - kolik;
            }        
          } else {	          
	          document.getElementById("scoretable2").innerHTML = x2;
	          document.getElementById("darts2").innerHTML = pocetsipek2;
	          document.getElementById("scoretablethree2").innerHTML = scorethree2;
	          document.getElementById("scoretablethree1").innerHTML = "&nbsp";
	          document.getElementById("score2sipka3").innerHTML = kolik;
	          document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";            
	          document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
	          document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
	          document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
	          if (hrac1[pocetsipek1 + 1] >= 0) {
	            document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1 + 1];
	            document.getElementById("scoretablethree1").innerHTML = hrac1[pocetsipek1 + 1];
	          } else {
	            document.getElementById("score1sipka1").innerHTML = "&nbsp";
	          }            
	          if (hrac1[pocetsipek1 + 2] >= 0) {
	            document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 + 2];
	          } else {
	            document.getElementById("score1sipka2").innerHTML = "&nbsp";
	          }
	          if (hrac1[pocetsipek1 + 3] >= 0) {
	            document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1 + 3];
	          } else {
	            document.getElementById("score1sipka3").innerHTML = "&nbsp";
	          }
						if ((legy1 + legy2) % 2 == 0) {
							if (pocetsipek2 > 23) {
								changeCOLOR25();
							} else if (pocetsipek2 > 20) {
									changeCOLOR20();
							} else if (pocetsipek2 > 17) {
									changeCOLOR19();
							} else if (pocetsipek2 > 14) {
									changeCOLORT();
							} else if (pocetsipek2 > 11) {
									changeCOLOR18();
							} else if (pocetsipek2 > 8) {
									changeCOLOR17();
							} else if (pocetsipek2 > 5) {
									changeCOLORD();
							} else if (pocetsipek2 > 2) {
									changeCOLOR16();
							} else {								
							}
					  }
          }
          break; 
      }    
      break;
  }  
  switch (pocetsipek) {
    case 3:
      switch (idhrace) {
        case 1:
          if (jekonec == 0) {
            idhrace = 2;
          } else {
              if ((legy1 + legy2) % 2 == 0) {
                idhrace = 1; 
              } else {
                  idhrace = 2;
              }
              jekonec = 0;
              hrac1.length = 0;
              hrac2.length = 0;
          }          
          break;
        case 2:
          if (jekonec == 0) {
            idhrace = 1;         
          } else {
              if ((legy1 + legy2) % 2 == 0) {
                idhrace = 1; 
              } else {
                  idhrace = 2;
              }
              jekonec = 0;
              hrac1.length = 0;
              hrac2.length = 0;
          }            
          break;
      }
      pocetsipek = 0;
      break; 
  }
  ++pocetsipek;  
}

function myBCK() {
  if ((pocetsipek1 + pocetsipek2) > 0) {
    switch (idhrace) {
      case 1:        
        switch (pocetsipek) {
          case 1:            
            x2 = x2 - hrac2[pocetsipek2];
            scorethree2 = hrac2[pocetsipek2 - 2] + hrac2[pocetsipek2 - 1];            
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2 - 1);
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2];           
            document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
            document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
            document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
            document.getElementById("score2sipka3h").style.backgroundColor = "#FFA427";
            if (hrac2[pocetsipek2 - 2] >= 0) {
              document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2 - 2];
            } else {
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
            }
            if (hrac2[pocetsipek2 - 1] >= 0) {
              document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 - 1];
            } else {            
              document.getElementById("score2sipka2").innerHTML = "&nbsp";
            }            
            if (hrac2[pocetsipek2] >= 0) {
              document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2];
            } else {
              document.getElementById("score2sipka3").innerHTML = "&nbsp";
            }
            if (hrac1[pocetsipek1 - 2] >= 0) {
              document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1 - 2];
            } else {
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
            }
            if (hrac1[pocetsipek1 - 1] >= 0) {
              document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 - 1];
            } else {
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
            }            
            if (hrac1[pocetsipek1] >= 0) {
              document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1];
              scorethree1 = hrac1[pocetsipek1 - 2] + hrac1[pocetsipek1 - 1] + hrac1[pocetsipek1];
              document.getElementById("scoretablethree1").innerHTML = scorethree1;
            } else {
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
            }            
            idhrace = 2;
            pocetsipek = 3;
						--pocetsipek2;
						if ((legy1 + legy2) % 2 == 0) {
							if (pocetsipek2 > 23) {
								changeCOLOR25();
							} else if (pocetsipek2 > 20) {
									changeCOLOR20();
							} else if (pocetsipek2 > 17) {
									changeCOLOR19();
							} else if (pocetsipek2 > 14) {
									changeCOLORT();
							} else if (pocetsipek2 > 11) {
									changeCOLOR18();
							} else if (pocetsipek2 > 8) {
									changeCOLOR17();
							} else if (pocetsipek2 > 5) {
									changeCOLORD();
							} else if (pocetsipek2 > 2) {
									changeCOLOR16();
							} else if (pocetsipek2 > 0) {
								 changeCOLOR15();
							}	 
						}							
            break;         
          case 2:            
            x1 = x1 - hrac1[pocetsipek1];
						scorethree1 = scorethree1 - hrac1[pocetsipek1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1 - 1);
            document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
            pocetsipek = 1;            
						--pocetsipek1;
            break;
          case 3:            
            x1 = x1 - hrac1[pocetsipek1];           
            scorethree1 = scorethree1 - hrac1[pocetsipek1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1 - 1);
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
            document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
            pocetsipek = 2;
						--pocetsipek1;
            break;
        }
        break;
      case 2:          
        switch (pocetsipek) {
          case 1:            
            x1 = x1 - hrac1[pocetsipek1];
            scorethree1 = hrac1[pocetsipek1 - 2] + hrac1[pocetsipek1 - 1];            
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1 - 1);
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1];
            document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
            document.getElementById("score1sipka3h").style.backgroundColor = "#FFA427";
            if (hrac1[pocetsipek1 - 2] >= 0) {
              document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1 - 2];
            } else {
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
            }
            if (hrac1[pocetsipek1 - 1] >= 0) {
              document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 - 1]
            } else {            
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
            }            
            if (hrac1[pocetsipek1] >= 0) {
              document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1]
            } else {
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
            }
            idhrace = 1;
            pocetsipek = 3;
						--pocetsipek1;            
						if ((legy1 + legy2) % 2 == 0) {
						} else {
								if (pocetsipek1 > 23) {
									changeCOLOR25();
								} else if (pocetsipek1 > 20) {
										changeCOLOR20();
								} else if (pocetsipek1 > 17) {
										changeCOLOR19();
								} else if (pocetsipek1 > 14) {
										changeCOLORT();
								} else if (pocetsipek1 > 11) {
										changeCOLOR18();
								} else if (pocetsipek1 > 8) {
										changeCOLOR17();
								} else if (pocetsipek1 > 5) {
										changeCOLORD();
								} else if (pocetsipek1 > 2) {
										changeCOLOR16();
								} else if (pocetsipek1 > 0) {
										changeCOLOR15();
								}		
							}
						break;
          case 2:            
            x2 = x2 - hrac2[pocetsipek2];						
						scorethree2 = scorethree2 - hrac2[pocetsipek2];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2 - 1);
            document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2];
            document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
            pocetsipek = 1;
						--pocetsipek2;
            break;
          case 3:            
            x2 = x2 - hrac2[pocetsipek2];           
            scorethree2 = scorethree2 - hrac2[pocetsipek2];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2 - 1);
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2];           
            document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
            document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
            pocetsipek = 2;
						--pocetsipek2;
            break;
        }
        break;   
    }
  }
}

function myFWD() {
  switch (idhrace) {
    case 1:                  
			if (pocetsipek1 < (hrac1.length - 1)) {
				++pocetsipek1;
        x1 = x1 + hrac1[pocetsipek1];
        switch (pocetsipek) {
          case 1:            
            scorethree1 = hrac1[pocetsipek1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1);
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
            document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
            pocetsipek = 2;
            break;         
          case 2:
            scorethree1 = scorethree1 + hrac1[pocetsipek1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1);
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
            document.getElementById("score1sipka3h").style.backgroundColor = "#FFA427";
            pocetsipek = 3;
            break;
          case 3:
            scorethree1 = scorethree1 + hrac1[pocetsipek1];            
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1);
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
            document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
            document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
            if (hrac2[pocetsipek2 + 1] >= 0) {
              document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2 + 1]
            } else {
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            }
            if (hrac2[pocetsipek2 + 2] >= 0) {
              document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 + 2]
            } else {            
              document.getElementById("score2sipka2").innerHTML = "&nbsp";             
            }            
            if (hrac2[pocetsipek2 + 3] >= 0) {
              document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2 + 3]
            } else {
              document.getElementById("score2sipka3").innerHTML = "&nbsp";             
            }
            idhrace = 2;
            pocetsipek = 1;
						if ((legy1 + legy2) % 2 == 0) {
						} else {
								if (pocetsipek1 > 23) {
									changeCOLOR25();
								} else if (pocetsipek1 > 20) {
										changeCOLOR20();
								} else if (pocetsipek1 > 17) {
										changeCOLOR19();
								} else if (pocetsipek1 > 14) {
										changeCOLORT();
								} else if (pocetsipek1 > 11) {
										changeCOLOR18();
								} else if (pocetsipek1 > 8) {
										changeCOLOR17();
								} else if (pocetsipek1 > 5) {
										changeCOLORD();
								} else if (pocetsipek1 > 2) {
										changeCOLOR16();
								} else if (pocetsipek1 > 0) {
										changeCOLOR15();
								}		
							}	
            break;
        }        
        break;
    }  
    case 2:                
			if (pocetsipek2 < (hrac2.length - 1)) {
				++pocetsipek2;
        x2 = x2 + hrac2[pocetsipek2]; 
        switch (pocetsipek) {
          case 1:
            scorethree2 = hrac2[pocetsipek2];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2);
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2];
            document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
            pocetsipek = 2;
            break;         
          case 2:
            scorethree2 = scorethree2 + hrac2[pocetsipek2];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2);
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2];
            document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka3h").style.backgroundColor = "#FFA427";
            pocetsipek = 3;           
            break;
          case 3:
            scorethree2 = scorethree2 + hrac2[pocetsipek2];            
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2);
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2];
            document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
            if (hrac1[pocetsipek1 + 1] >= 0) {
              document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1 + 1];
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            } else {
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            }
            if (hrac1[pocetsipek1 + 2] >= 0) {
              document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 + 2];
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            } else {            
              document.getElementById("score1sipka2").innerHTML = "&nbsp";             
            }            
            if (hrac1[pocetsipek1 + 3] >= 0) {
              document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1 + 3];
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            } else {
              document.getElementById("score1sipka3").innerHTML = "&nbsp";             
            }
            if (hrac2[pocetsipek2 + 1] >= 0) {
              document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2 + 1];
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            } else {
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            }
            if (hrac2[pocetsipek2 + 2] >= 0) {
              document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 + 2];
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            } else {            
              document.getElementById("score2sipka2").innerHTML = "&nbsp";             
            }            
            if (hrac2[pocetsipek2 + 3] >= 0) {
              document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2 + 3];
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            } else {
              document.getElementById("score2sipka3").innerHTML = "&nbsp";             
            }            
            idhrace = 1;
            pocetsipek = 1;
						if ((legy1 + legy2) % 2 == 0) {
							if (pocetsipek2 > 23) {
								changeCOLOR25();
							} else if (pocetsipek2 > 20) {
									changeCOLOR20();
							} else if (pocetsipek2 > 17) {
									changeCOLOR19();
							} else if (pocetsipek2 > 14) {
									changeCOLORT();
							} else if (pocetsipek2 > 11) {
									changeCOLOR18();
							} else if (pocetsipek2 > 8) {
									changeCOLOR17();
							} else if (pocetsipek2 > 5) {
									changeCOLORD();
							} else if (pocetsipek2 > 2) {
									changeCOLOR16();
							} else if (pocetsipek2 > 0) {
									changeCOLOR15();
							}	
						}						
            break;
        }        
        break; 
      }  
  }
}
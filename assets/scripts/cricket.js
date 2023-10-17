let pocetsipek = 1, idhrace = 1, jekonec = 0, vrattozpet = 0;
let jmenohrace1, x1 = 0, hrac1 = [], legy1 = 0, pocetsipek1 = 0, 
		pocetsipek1all = 0, prumer1 = 0, prumer1score = 0, scorethree1 = 0, 
		scorethree1all = [], hrac1_20s = 0, hrac1_19s = 0, hrac1_18s = 0,
		hrac1_17s = 0, hrac1_16s = 0,	hrac1_15s = 0,	hrac1_25s = 0;
let jmenohrace2, x2 = 0;	hrac2 = [], legy2 = 0, pocetsipek2 = 0, 
		pocetsipek2all = 0, prumer2 = 0, prumer2score = 0, scorethree2 = 0, 
		scorethree2all = [], hrac2_20s = 0, hrac2_19s = 0, hrac2_18s = 0,
		hrac2_17s = 0, hrac2_16s = 0,	hrac2_15s = 0,	hrac2_25s = 0;
	
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

function myCricket(kolik) {
  switch (idhrace) {
    case 1:
      hrac1[pocetsipek1] = kolik;
      ++pocetsipek1;
      ++pocetsipek1all;
      switch (kolik) {
        case 15:					
          if (document.getElementById('score1sipka15_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka15_1').className = 'SkoreLight';
            ++prumer1score;
          } else if (document.getElementById('score1sipka15_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka15_2').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka15_3').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              ++prumer1score;
							++hrac1_15s;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 15);
          break;
        case 16:
          if (document.getElementById('score1sipka16_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka16_1').className = 'SkoreLight';
            ++prumer1score;
          } else if (document.getElementById('score1sipka16_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka16_2').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka16_3').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              ++prumer1score;
							++hrac1_16s;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 16);
          break;
        case 17:
          if (document.getElementById('score1sipka17_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka17_1').className = 'SkoreLight';
            ++prumer1score;
          } else if (document.getElementById('score1sipka17_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka17_2').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka17_3').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              ++prumer1score;
							++hrac1_17s;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 17);
          break;
        case 18:
          if (document.getElementById('score1sipka18_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka18_1').className = 'SkoreLight';
            ++prumer1score;
          } else if (document.getElementById('score1sipka18_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka18_2').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka18_3').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              ++prumer1score;
							++hrac1_18s;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 18);
          break;
        case 19:
          if (document.getElementById('score1sipka19_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka19_1').className = 'SkoreLight';
            ++prumer1score;
          } else if (document.getElementById('score1sipka19_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka19_2').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka19_3').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              ++prumer1score;
							++hrac1_19s;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 19);
          break;
        case 20:
          if (document.getElementById('score1sipka20_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka20_1').className = 'SkoreLight';
            ++prumer1score;
          } else if (document.getElementById('score1sipka20_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka20_2').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka20_3').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              ++prumer1score;
							++hrac1_20s;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 20);
          break;
        case 25:
          if (document.getElementById('score1sipka25_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka25_1').className = 'SkoreLight';
            ++prumer1score;
          } else if (document.getElementById('score1sipka25_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka25_2').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka25_3').className = 'SkoreLight';
              ++prumer1score;
          } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              ++prumer1score;
							++hrac1_25s;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 25);
          break;
        case 30:
          if (document.getElementById('score1sipka15_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka15_1').className = 'SkoreLight';
            document.getElementById('score1sipka15_2').className = 'SkoreLight';
            prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka15_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka15_2').className = 'SkoreLight';
              document.getElementById('score1sipka15_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka15_3').className = 'SkoreLight';
              ++prumer1score;   
              if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 2);
                x1 = x1 + (kolik / 2);
                ++prumer1score;
								++hrac1_15s;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 15);
          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 2;
							hrac1_15s = hrac1_15s  + 2;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 30);
          break;
        case 32:
          if (document.getElementById('score1sipka16_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka16_1').className = 'SkoreLight';
            document.getElementById('score1sipka16_2').className = 'SkoreLight';
            prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka16_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka16_2').className = 'SkoreLight';
              document.getElementById('score1sipka16_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka16_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 2);
                x1 = x1 + (kolik / 2);
                ++prumer1score;
								++hrac1_16s;                
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 16);
          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 2;
							hrac1_16s = hrac1_16s  + 2;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 32);
          break;
        case 34:
          if (document.getElementById('score1sipka17_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka17_1').className = 'SkoreLight';
            document.getElementById('score1sipka17_2').className = 'SkoreLight';
            prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka17_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka17_2').className = 'SkoreLight';
              document.getElementById('score1sipka17_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka17_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 2);
                x1 = x1 + (kolik / 2);
                ++prumer1score;
								++hrac1_17s;                
							} hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 17);
          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 2;
							hrac1_17s = hrac1_17s  + 2;              
					} hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 34);
          break;
        case 36:
          if (document.getElementById('score1sipka18_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka18_1').className = 'SkoreLight';
            document.getElementById('score1sipka18_2').className = 'SkoreLight';
            prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka18_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka18_2').className = 'SkoreLight';
              document.getElementById('score1sipka18_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka18_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 2);
                x1 = x1 + (kolik / 2);
                ++prumer1score;
								++hrac1_18s;                
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 18);
          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 2;
							hrac1_18s = hrac1_18s  + 2;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 36);
          break;
        case 38:
          if (document.getElementById('score1sipka19_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka19_1').className = 'SkoreLight';
            document.getElementById('score1sipka19_2').className = 'SkoreLight';
            prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka19_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka19_2').className = 'SkoreLight';
              document.getElementById('score1sipka19_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka19_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 2);
                x1 = x1 + (kolik / 2);
                ++prumer1score;
								++hrac1_19s;                
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 19);
          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 2;
							hrac1_19s = hrac1_19s  + 2;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 38);
          break;
        case 40:
          if (document.getElementById('score1sipka20_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka20_1').className = 'SkoreLight';
            document.getElementById('score1sipka20_2').className = 'SkoreLight';
            prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka20_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka20_2').className = 'SkoreLight';
              document.getElementById('score1sipka20_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka20_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 2);
                x1 = x1 + (kolik / 2);
                ++prumer1score;
								++hrac1_20s;                
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 20);
          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 2;
							hrac1_20s = hrac1_20s  + 2;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 40);
          break;
        case 45:
          if (document.getElementById('score1sipka15_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka15_1').className = 'SkoreLight';
            document.getElementById('score1sipka15_2').className = 'SkoreLight';
            document.getElementById('score1sipka15_3').className = 'SkoreLight';
            prumer1score = prumer1score + 3;            
          } else if (document.getElementById('score1sipka15_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka15_2').className = 'SkoreLight';
              document.getElementById('score1sipka15_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
              if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 3);
                x1 = x1 + (kolik / 3);
                ++prumer1score;
								++hrac1_15s;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 15);
          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka15_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 1.5);
                x1 = x1 + (kolik / 1.5);
                prumer1score = prumer1score + 2;
								hrac1_15s = hrac1_15s  + 2;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 30);
          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 3;
							hrac1_15s = hrac1_15s  + 3;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 45);
          break;
        case 48:
          if (document.getElementById('score1sipka16_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka16_1').className = 'SkoreLight';
            document.getElementById('score1sipka16_2').className = 'SkoreLight';
            document.getElementById('score1sipka16_3').className = 'SkoreLight';
            prumer1score = prumer1score + 3;
          } else if (document.getElementById('score1sipka16_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka16_2').className = 'SkoreLight';
              document.getElementById('score1sipka16_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
              if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 3);
                x1 = x1 + (kolik / 3);
                ++prumer1score;
								++hrac1_16s;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 16);
          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka16_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 1.5);
                x1 = x1 + (kolik / 1.5);
                prumer1score = prumer1score + 2;
 								hrac1_16s = hrac1_16s  + 2;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 32);
          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 3;
							hrac1_16s = hrac1_16s  + 3;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 48);
          break;
        case 50:
          if (document.getElementById('score1sipka25_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka25_1').className = 'SkoreLight';
            document.getElementById('score1sipka25_2').className = 'SkoreLight';
            prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka25_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka25_2').className = 'SkoreLight';
              document.getElementById('score1sipka25_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
          } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka25_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {                
                scorethree1 = scorethree1 + (kolik / 2);
                x1 = x1 + (kolik / 2);
                ++prumer1score;
                ++hrac1_25s;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 25);
          } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 2;
							hrac1_25s = hrac1_25s  + 2;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 50);
          break;          
        case 51:
          if (document.getElementById('score1sipka17_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka17_1').className = 'SkoreLight';
            document.getElementById('score1sipka17_2').className = 'SkoreLight';
            document.getElementById('score1sipka17_3').className = 'SkoreLight';
            prumer1score = prumer1score + 3;
          } else if (document.getElementById('score1sipka17_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka17_2').className = 'SkoreLight';
              document.getElementById('score1sipka17_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
              if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 3);
                x1 = x1 + (kolik / 3);
                ++prumer1score;
								++hrac1_17s;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 17);
          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka17_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 1.5);
                x1 = x1 + (kolik / 1.5);
                prumer1score = prumer1score + 2;
								hrac1_17s = hrac1_17s  + 2;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 34);
          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 3;
							hrac1_17s = hrac1_17s  + 3;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 51);
          break;
        case 54:
          if (document.getElementById('score1sipka18_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka18_1').className = 'SkoreLight';
            document.getElementById('score1sipka18_2').className = 'SkoreLight';
            document.getElementById('score1sipka18_3').className = 'SkoreLight';
            prumer1score = prumer1score + 3;
          } else if (document.getElementById('score1sipka18_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka18_2').className = 'SkoreLight';
              document.getElementById('score1sipka18_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
              if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 3);
                x1 = x1 + (kolik / 3);
                ++prumer1score;
                ++hrac1_18s;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 18);
          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka18_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 1.5);
                x1 = x1 + (kolik / 1.5);
                prumer1score = prumer1score + 2;
								hrac1_18s = hrac1_18s  + 2;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 36);
          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 3;
							hrac1_18s = hrac1_18s  + 3;              
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 54);
          break;
        case 57:
          if (document.getElementById('score1sipka19_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka19_1').className = 'SkoreLight';
            document.getElementById('score1sipka19_2').className = 'SkoreLight';
            document.getElementById('score1sipka19_3').className = 'SkoreLight';
            prumer1score = prumer1score + 3;
          } else if (document.getElementById('score1sipka19_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka19_2').className = 'SkoreLight';
              document.getElementById('score1sipka19_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
              if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 3);
                x1 = x1 + (kolik / 3);
                ++prumer1score;
								++hrac1_19s;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 19);
          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka19_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 1.5);
                x1 = x1 + (kolik / 1.5);
                prumer1score = prumer1score + 2;
								hrac1_19s = hrac1_19s  + 2;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 38);
          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 3;
							hrac1_19s = hrac1_19s  + 3;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 57);
          break;
        case 60:
          if (document.getElementById('score1sipka20_1').className == 'SkoreEmpty') {
            document.getElementById('score1sipka20_1').className = 'SkoreLight';
            document.getElementById('score1sipka20_2').className = 'SkoreLight';
            document.getElementById('score1sipka20_3').className = 'SkoreLight';
            prumer1score = prumer1score + 3;
          } else if (document.getElementById('score1sipka20_2').className == 'SkoreEmpty') {
              document.getElementById('score1sipka20_2').className = 'SkoreLight';
              document.getElementById('score1sipka20_3').className = 'SkoreLight';
              prumer1score = prumer1score + 2;
              if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 3);
                x1 = x1 + (kolik / 3);
                ++prumer1score;
								++hrac1_20s;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 20);
          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
              document.getElementById('score1sipka20_3').className = 'SkoreLight';
              ++prumer1score;
              if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
                scorethree1 = scorethree1 + (kolik / 1.5);
                x1 = x1 + (kolik / 1.5);
                prumer1score = prumer1score + 2;
								hrac1_20s = hrac1_20s  + 2;
							} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 40);
          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
              scorethree1 = scorethree1 + kolik;
              x1 = x1 + kolik;
              prumer1score = prumer1score + 3;
							hrac1_20s = hrac1_20s  + 3;
					} else hrac1[pocetsipek1 - 1] = (hrac1[pocetsipek1 - 1] - 60);
          break;
      }      
      switch (pocetsipek) {
        case 1:
          document.getElementById("scoretable1").innerHTML = x1;
          document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1 - 1];
          document.getElementById("scoretablethree1").innerHTML = scorethree1;
          document.getElementById("darts1").innerHTML = pocetsipek1;
          document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
          document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
          break;
        case 2:
          document.getElementById("scoretable1").innerHTML = x1;
          document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 - 1];
          document.getElementById("scoretablethree1").innerHTML = scorethree1;
          document.getElementById("darts1").innerHTML = pocetsipek1;
          document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
          document.getElementById("score1sipka3h").style.backgroundColor = "#FFA427";        
          break;
        case 3:
          document.getElementById("scoretable1").innerHTML = x1;
          document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1 - 1];
          document.getElementById("scoretablethree1").innerHTML = scorethree1;
          document.getElementById("score2sipka1").innerHTML = "&nbsp";
          document.getElementById("score2sipka2").innerHTML = "&nbsp";
          document.getElementById("score2sipka3").innerHTML = "&nbsp";
          document.getElementById("scoretablethree2").innerHTML = "&nbsp";          
          document.getElementById("darts1").innerHTML = pocetsipek1;
          document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
          document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
          document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
          document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
          scorethree1all[(pocetsipek1 / 3) - 1] = scorethree1;
          scorethree1 = 0;
          break;          
      }      
      if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
      } else if (x1 >= x2) {
        if (confirm("Potvrď zavření poslední šipkou: " + kolik) == true) {
          ++legy1;
          x1 = 0;
          x2 = 0;
          pocetsipek1 = 0;          
          pocetsipek2 = 0;          
          pocetsipek = 3;
          document.getElementById("legs1").innerHTML = legy1;
          document.getElementById("scoretable1").innerHTML = "&nbsp";
          document.getElementById("score1sipka1").innerHTML = "&nbsp";
          document.getElementById("score1sipka2").innerHTML = "&nbsp";
          document.getElementById("score1sipka3").innerHTML = "&nbsp";
          document.getElementById("scoretablethree1").innerHTML = "&nbsp";
          document.getElementById("darts1").innerHTML = "&nbsp";              
          document.getElementById("scoretable2").innerHTML = "&nbsp";
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
          document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka25_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka25_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka25_3').className = 'SkoreEmpty';          
          if ((legy1 + legy2) % 2 == 0) {
            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
            jekonec = 1;
          } else {
              document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
              document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
              jekonec = 1;
          }                
        } else {
						vrattozpet = 1;
        }
      }      
			if (pocetsipek1all > 2) {
				prumer1 = (prumer1score / pocetsipek1all) * 3;
				document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
			} else document.getElementById("average1").innerHTML = "&nbsp";
      break;      
    case 2:
      hrac2[pocetsipek2] = kolik;
      ++pocetsipek2;
      ++pocetsipek2all;
      switch (kolik) {
        case 15:					
          if (document.getElementById('score2sipka15_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka15_1').className = 'SkoreLight';
            ++prumer2score;
          } else if (document.getElementById('score2sipka15_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka15_2').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka15_3').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              ++prumer2score;
							++hrac2_15s;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 15);
          break;
        case 16:
          if (document.getElementById('score2sipka16_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka16_1').className = 'SkoreLight';
            ++prumer2score;
          } else if (document.getElementById('score2sipka16_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka16_2').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka16_3').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              ++prumer2score;
							++hrac2_16s;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 16);
          break;
        case 17:
          if (document.getElementById('score2sipka17_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka17_1').className = 'SkoreLight';
            ++prumer2score;
          } else if (document.getElementById('score2sipka17_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka17_2').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka17_3').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              ++prumer2score;
							++hrac2_17s;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 17);
          break;
        case 18:
          if (document.getElementById('score2sipka18_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka18_1').className = 'SkoreLight';
            ++prumer2score;
          } else if (document.getElementById('score2sipka18_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka18_2').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka18_3').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              ++prumer2score;
							++hrac2_18s;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 18);
          break;
        case 19:
          if (document.getElementById('score2sipka19_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka19_1').className = 'SkoreLight';
            ++prumer2score;
          } else if (document.getElementById('score2sipka19_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka19_2').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka19_3').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              ++prumer2score;
							++hrac2_19s;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 19);
          break;
        case 20:
          if (document.getElementById('score2sipka20_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka20_1').className = 'SkoreLight';
            ++prumer2score;
          } else if (document.getElementById('score2sipka20_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka20_2').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka20_3').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              ++prumer2score;
							++hrac2_20s;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 20);
          break;
        case 25:
          if (document.getElementById('score2sipka25_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka25_1').className = 'SkoreLight';
            ++prumer2score;
          } else if (document.getElementById('score2sipka25_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka25_2').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka25_3').className = 'SkoreLight';
              ++prumer2score;
          } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              ++prumer2score;
							++hrac2_25s;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 25);
          break;
        case 30:
          if (document.getElementById('score2sipka15_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka15_1').className = 'SkoreLight';
            document.getElementById('score2sipka15_2').className = 'SkoreLight';
            prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka15_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka15_2').className = 'SkoreLight';
              document.getElementById('score2sipka15_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka15_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 2);
                x2 = x2 + (kolik / 2);
                ++prumer2score;
								++hrac2_15s;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 15);
          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 2;
							hrac2_15s = hrac2_15s  + 2;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 30);
          break;
        case 32:
          if (document.getElementById('score2sipka16_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka16_1').className = 'SkoreLight';
            document.getElementById('score2sipka16_2').className = 'SkoreLight';
            prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka16_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka16_2').className = 'SkoreLight';
              document.getElementById('score2sipka16_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka16_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 2);
                x2 = x2 + (kolik / 2);
                ++prumer2score;
								++hrac2_16s;                
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 16);
          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 2;
							hrac2_16s = hrac2_16s  + 2;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 32);
          break;
        case 34:
          if (document.getElementById('score2sipka17_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka17_1').className = 'SkoreLight';
            document.getElementById('score2sipka17_2').className = 'SkoreLight';
            prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka17_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka17_2').className = 'SkoreLight';
              document.getElementById('score2sipka17_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka17_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 2);
                x2 = x2 + (kolik / 2);
                ++prumer2score;
								++hrac2_17s;                
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 17);
          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 2;
							hrac2_17s = hrac2_17s  + 2;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 34);
          break;
        case 36:
          if (document.getElementById('score2sipka18_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka18_1').className = 'SkoreLight';
            document.getElementById('score2sipka18_2').className = 'SkoreLight';
            prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka18_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka18_2').className = 'SkoreLight';
              document.getElementById('score2sipka18_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka18_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 2);
                x2 = x2 + (kolik / 2);
                ++prumer2score;
								++hrac2_18s;                
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 18);
          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 2;
							hrac2_18s = hrac2_18s  + 2;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 36);
          break;
        case 38:
          if (document.getElementById('score2sipka19_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka19_1').className = 'SkoreLight';
            document.getElementById('score2sipka19_2').className = 'SkoreLight';
            prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka19_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka19_2').className = 'SkoreLight';
              document.getElementById('score2sipka19_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka19_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 2);
                x2 = x2 + (kolik / 2);
                ++prumer2score;
								++hrac2_19s;                
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 19);
          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 2;
							hrac2_19s = hrac2_19s  + 2;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 38);
          break;
        case 40:
          if (document.getElementById('score2sipka20_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka20_1').className = 'SkoreLight';
            document.getElementById('score2sipka20_2').className = 'SkoreLight';
            prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka20_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka20_2').className = 'SkoreLight';
              document.getElementById('score2sipka20_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka20_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 2);
                x2 = x2 + (kolik / 2);
                ++prumer2score;
								++hrac2_20s;                
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 20);
          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 2;
							hrac2_20s = hrac2_20s  + 2;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 40);
          break;
        case 45:
          if (document.getElementById('score2sipka15_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka15_1').className = 'SkoreLight';
            document.getElementById('score2sipka15_2').className = 'SkoreLight';
            document.getElementById('score2sipka15_3').className = 'SkoreLight';
            prumer2score = prumer2score + 3;
          } else if (document.getElementById('score2sipka15_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka15_2').className = 'SkoreLight';
              document.getElementById('score2sipka15_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
              if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 3);
                x2 = x2 + (kolik / 3);
                ++prumer2score;
								++hrac2_15s;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 15);
          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka15_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 1.5);
                x2 = x2 + (kolik / 1.5);
                prumer2score = prumer2score + 2;
								hrac2_15s = hrac2_15s  + 2;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 30);
          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 3;
							hrac2_15s = hrac2_15s  + 3;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 45);
          break;
        case 48:
          if (document.getElementById('score2sipka16_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka16_1').className = 'SkoreLight';
            document.getElementById('score2sipka16_2').className = 'SkoreLight';
            document.getElementById('score2sipka16_3').className = 'SkoreLight';
            prumer2score = prumer2score + 3;
          } else if (document.getElementById('score2sipka16_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka16_2').className = 'SkoreLight';
              document.getElementById('score2sipka16_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
              if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 3);
                x2 = x2 + (kolik / 3);
                ++prumer2score;
								++hrac2_16s;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 16);
          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka16_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 1.5);
                x2 = x2 + (kolik / 1.5);
                prumer2score = prumer2score + 2;
 								hrac2_16s = hrac2_16s  + 2;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 32);
          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 3;
							hrac2_16s = hrac2_16s  + 3;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 48);
          break;
        case 50:
          if (document.getElementById('score2sipka25_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka25_1').className = 'SkoreLight';
            document.getElementById('score2sipka25_2').className = 'SkoreLight';
            prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka25_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka25_2').className = 'SkoreLight';
              document.getElementById('score2sipka25_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
          } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka25_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {                
                scorethree2 = scorethree2 + (kolik / 2);
                x2 = x2 + (kolik / 2);
                ++prumer2score;
                ++hrac2_25s;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 25);
          } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 2;
							hrac2_25s = hrac2_25s  + 2;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 50);
          break;          
        case 51:
          if (document.getElementById('score2sipka17_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka17_1').className = 'SkoreLight';
            document.getElementById('score2sipka17_2').className = 'SkoreLight';
            document.getElementById('score2sipka17_3').className = 'SkoreLight';
            prumer2score = prumer2score + 3;
          } else if (document.getElementById('score2sipka17_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka17_2').className = 'SkoreLight';
              document.getElementById('score2sipka17_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
              if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 3);
                x2 = x2 + (kolik / 3);
                ++prumer2score;
								++hrac2_17s;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 17);
          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka17_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 1.5);
                x2 = x2 + (kolik / 1.5);
                prumer2score = prumer2score + 2;
								hrac2_17s = hrac2_17s  + 2;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 34);
          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 3;
							hrac2_17s = hrac2_17s  + 3;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 51);
          break;
        case 54:
          if (document.getElementById('score2sipka18_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka18_1').className = 'SkoreLight';
            document.getElementById('score2sipka18_2').className = 'SkoreLight';
            document.getElementById('score2sipka18_3').className = 'SkoreLight';
            prumer2score = prumer2score + 3;
          } else if (document.getElementById('score2sipka18_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka18_2').className = 'SkoreLight';
              document.getElementById('score2sipka18_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
              if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 3);
                x2 = x2 + (kolik / 3);
                ++prumer2score;
                ++hrac2_18s;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 18);
          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka18_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 1.5);
                x2 = x2 + (kolik / 1.5);
                prumer2score = prumer2score + 2;
								hrac2_18s = hrac2_18s  + 2;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 36);
          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 3;
							hrac2_18s = hrac2_18s  + 3;              
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 54);
          break;
        case 57:
          if (document.getElementById('score2sipka19_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka19_1').className = 'SkoreLight';
            document.getElementById('score2sipka19_2').className = 'SkoreLight';
            document.getElementById('score2sipka19_3').className = 'SkoreLight';
            prumer2score = prumer2score + 3;
          } else if (document.getElementById('score2sipka19_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka19_2').className = 'SkoreLight';
              document.getElementById('score2sipka19_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
              if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 3);
                x2 = x2 + (kolik / 3);
                ++prumer2score;
								++hrac2_19s;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 19);
          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka19_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 1.5);
                x2 = x2 + (kolik / 1.5);
                prumer2score = prumer2score + 2;
								hrac2_19s = hrac2_19s  + 2;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 38);
          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 3;
							hrac2_19s = hrac2_19s  + 3;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 57);
          break;
        case 60:
          if (document.getElementById('score2sipka20_1').className == 'SkoreEmpty') {
            document.getElementById('score2sipka20_1').className = 'SkoreLight';
            document.getElementById('score2sipka20_2').className = 'SkoreLight';
            document.getElementById('score2sipka20_3').className = 'SkoreLight';
            prumer2score = prumer2score + 3;
          } else if (document.getElementById('score2sipka20_2').className == 'SkoreEmpty') {
              document.getElementById('score2sipka20_2').className = 'SkoreLight';
              document.getElementById('score2sipka20_3').className = 'SkoreLight';
              prumer2score = prumer2score + 2;
              if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 3);
                x2 = x2 + (kolik / 3);
                ++prumer2score;
								++hrac2_20s;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 20);
          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
              document.getElementById('score2sipka20_3').className = 'SkoreLight';
              ++prumer2score;
              if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
                scorethree2 = scorethree2 + (kolik / 1.5);
                x2 = x2 + (kolik / 1.5);
                prumer2score = prumer2score + 2;
								hrac2_20s = hrac2_20s  + 2;
							} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 40);
          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
              scorethree2 = scorethree2 + kolik;
              x2 = x2 + kolik;
              prumer2score = prumer2score + 3;
							hrac2_20s = hrac2_20s  + 3;
					} else hrac2[pocetsipek2 - 1] = (hrac2[pocetsipek2 - 1] - 60);
          break;
      }
      switch (pocetsipek) {
        case 1:          
          document.getElementById("scoretable2").innerHTML = x2;
          document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2 - 1];
          document.getElementById("scoretablethree2").innerHTML = scorethree2;
          document.getElementById("darts2").innerHTML = pocetsipek2;
          document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
          document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
          break;
        case 2:
          document.getElementById("scoretable2").innerHTML = x2;
          document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 - 1];
          document.getElementById("scoretablethree2").innerHTML = scorethree2;          
          document.getElementById("darts2").innerHTML = pocetsipek2;
          document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
          document.getElementById("score2sipka3h").style.backgroundColor = "#FFA427";
          break;
        case 3:
          document.getElementById("scoretable2").innerHTML = x2;
          document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2 - 1];
          document.getElementById("scoretablethree2").innerHTML = scorethree2;
          document.getElementById("score1sipka1").innerHTML = "&nbsp";
          document.getElementById("score1sipka2").innerHTML = "&nbsp";
          document.getElementById("score1sipka3").innerHTML = "&nbsp";
          document.getElementById("scoretablethree1").innerHTML = "&nbsp";
          document.getElementById("darts2").innerHTML = pocetsipek2;
          document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";            
          document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
          document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
          document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";          
          scorethree2all[(pocetsipek2 / 3) - 1] = scorethree2;
          scorethree2 = 0;
          break;          
      }      
      if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
      } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
      } else if (x2 >= x1) {
        if (confirm("Potvrď zavření poslední šipkou: " + kolik) == true) {
          ++legy2;
          x1 = 0;
          x2 = 0;
          pocetsipek1 = 0;          
          pocetsipek2 = 0;          
          pocetsipek = 3;          
          document.getElementById("legs2").innerHTML = legy2;
          document.getElementById("scoretable1").innerHTML = "&nbsp";
          document.getElementById("score1sipka1").innerHTML = "&nbsp";
          document.getElementById("score1sipka2").innerHTML = "&nbsp";
          document.getElementById("score1sipka3").innerHTML = "&nbsp";
          document.getElementById("scoretablethree1").innerHTML = "&nbsp";          
          document.getElementById("darts1").innerHTML = "&nbsp";          
          document.getElementById("scoretable2").innerHTML = "&nbsp";
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
          document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
          document.getElementById('score1sipka25_1').className = 'SkoreEmpty';
          document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
          document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
          document.getElementById('score2sipka25_1').className = 'SkoreEmpty';
          document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
          document.getElementById('score2sipka25_3').className = 'SkoreEmpty';
          if ((legy1 + legy2) % 2 == 0) {
            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
            jekonec = 1;
          } else {
              document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
              document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
              jekonec = 1;
          }                
        } else {
            vrattozpet = 1;
        }
      }  
			if (pocetsipek2all > 2) {
				prumer2 = (prumer2score / pocetsipek2all) * 3;
				document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;
			} else document.getElementById("average2").innerHTML = "&nbsp";
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
  if (vrattozpet == 1) {
  	myBCK();
  	vrattozpet = 0;
  } 
}

function myBCK() {
  if ((pocetsipek1 + pocetsipek2) > 0) {  
    switch (idhrace) {
	    case 1:
        if (pocetsipek > 1) {          
          --pocetsipek1;
          --pocetsipek1all;
          switch (hrac1[pocetsipek1]) {
	          case 15:
							if (hrac1_15s > 0 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								--hrac1_15s;
							} else if (document.getElementById('score1sipka15_3').className == 'SkoreLight') {
									document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka15_2').className == 'SkoreLight') {
										document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka15_1').className == 'SkoreLight') {
										document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
							}
							--prumer1score;							
						  break;
	          case 16:
							if (hrac1_16s > 0 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								--hrac1_16s;
							} else if (document.getElementById('score1sipka16_3').className == 'SkoreLight') {
									document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka16_2').className == 'SkoreLight') {
										document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka16_1').className == 'SkoreLight') {
										document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
							}
							--prumer1score;							
						  break;
	          case 17:
							if (hrac1_17s > 0 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								--hrac1_17s;
							} else if (document.getElementById('score1sipka17_3').className == 'SkoreLight') {
									document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka17_2').className == 'SkoreLight') {
										document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka17_1').className == 'SkoreLight') {
										document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
							}
							--prumer1score;							
						  break;
	          case 18:
							if (hrac1_18s > 0 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								--hrac1_18s;
							} else if (document.getElementById('score1sipka18_3').className == 'SkoreLight') {
									document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka18_2').className == 'SkoreLight') {
										document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka18_1').className == 'SkoreLight') {
										document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
							}
							--prumer1score;							
						  break;
	          case 19:
							if (hrac1_19s > 0 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								--hrac1_19s;
							} else if (document.getElementById('score1sipka19_3').className == 'SkoreLight') {
									document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka19_2').className == 'SkoreLight') {
										document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka19_1').className == 'SkoreLight') {
										document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
							}
							--prumer1score;							
						  break;
	          case 20:
							if (hrac1_20s > 0 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								--hrac1_20s;
							} else if (document.getElementById('score1sipka20_3').className == 'SkoreLight') {
									document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka20_2').className == 'SkoreLight') {
										document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka20_1').className == 'SkoreLight') {
										document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
							}
							--prumer1score;
						  break;							
	          case 25:
							if (hrac1_25s > 0 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								--hrac1_25s;
							} else if (document.getElementById('score1sipka25_3').className == 'SkoreLight') {
									document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka25_2').className == 'SkoreLight') {
										document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
								} else if (document.getElementById('score1sipka25_1').className == 'SkoreLight') {
										document.getElementById('score1sipka25_1').className = 'SkoreEmpty';
							}
							--prumer1score;
						  break;
	          case 30:
							if (hrac1_15s > 1) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								hrac1_15s = hrac1_15s - 2;
							} else if (hrac1_15s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
									x1 = x1 - (hrac1[pocetsipek1] / 2);
									--hrac1_15s;
									document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
							} else if (document.getElementById('score1sipka15_3').className == 'SkoreLight') {
									document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
							}
					  	prumer1score = prumer1score - 2;
						  break;
	          case 32:
							if (hrac1_16s > 1) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								hrac1_16s = hrac1_16s - 2;
							} else if (hrac1_16s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
									x1 = x1 - (hrac1[pocetsipek1] / 2);
									--hrac1_16s;
									document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
							} else if (document.getElementById('score1sipka16_3').className == 'SkoreLight') {
									document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
							}
					  	prumer1score = prumer1score - 2;
						  break;
	          case 34:
							if (hrac1_17s > 1) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								hrac1_17s = hrac1_17s - 2;
							} else if (hrac1_17s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
									x1 = x1 - (hrac1[pocetsipek1] / 2);
									--hrac1_17s;
									document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
							} else if (document.getElementById('score1sipka17_3').className == 'SkoreLight') {
									document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
							}
					  	prumer1score = prumer1score - 2;
						  break;
	          case 36:
							if (hrac1_18s > 1) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								hrac1_18s = hrac1_18s - 2;
							} else if (hrac1_18s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
									x1 = x1 - (hrac1[pocetsipek1] / 2);
									--hrac1_18s;
									document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
							} else if (document.getElementById('score1sipka18_3').className == 'SkoreLight') {
									document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
							}
					  	prumer1score = prumer1score - 2;
						  break;
	          case 38:
							if (hrac1_19s > 1) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								hrac1_19s = hrac1_19s - 2;
							} else if (hrac1_19s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
									x1 = x1 - (hrac1[pocetsipek1] / 2);
									--hrac1_19s;
									document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
							} else if (document.getElementById('score1sipka19_3').className == 'SkoreLight') {
									document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
							}
					  	prumer1score = prumer1score - 2;
						  break;
	          case 40:        
							if (hrac1_20s > 1) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								hrac1_20s = hrac1_20s - 2;
							} else if (hrac1_20s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
									x1 = x1 - (hrac1[pocetsipek1] / 2);
									--hrac1_20s;
									document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
							} else if (document.getElementById('score1sipka20_3').className == 'SkoreLight') {
									document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
							}
					  	prumer1score = prumer1score - 2;
						  break;
	          case 45:
							if (hrac1_15s > 2 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];									
								hrac1_15s = hrac1_15s - 3;
							} else if (hrac1_15s > 1 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
									x1 = x1 - (hrac1[pocetsipek1] / 1.5);
									hrac1_15s = hrac1_15s - 2;
									document.getElementById('score1sipka15_3').className = 'SkoreEmpty';										
							} else if (hrac1_15s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
									x1 = x1 - (hrac1[pocetsipek1] / 3);
									--hrac1_15s;
									document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
							} 
							prumer1score = prumer1score - 3;
						  break;
	          case 48:
							if (hrac1_16s > 2 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];									
								hrac1_16s = hrac1_16s - 3;
							} else if (hrac1_16s > 1 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
									x1 = x1 - (hrac1[pocetsipek1] / 1.5);
									hrac1_16s = hrac1_16s - 2;
									document.getElementById('score1sipka16_3').className = 'SkoreEmpty';										
							} else if (hrac1_16s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
									x1 = x1 - (hrac1[pocetsipek1] / 3);
									--hrac1_16s;
									document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
							} 
							prumer1score = prumer1score - 3;
						  break;
	          case 50:
							if (hrac1_25s > 1) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];
								hrac1_25s = hrac1_25s - 2;
							} else if (hrac1_25s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
									x1 = x1 - (hrac1[pocetsipek1] / 2);
									--hrac1_25s;
									document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
							} else if (document.getElementById('score1sipka25_3').className == 'SkoreLight') {
									document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka25_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
							}
					  	prumer1score = prumer1score - 2;
						  break;        
	          case 51:
							if (hrac1_17s > 2 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];									
								hrac1_17s = hrac1_17s - 3;
							} else if (hrac1_17s > 1 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
									x1 = x1 - (hrac1[pocetsipek1] / 1.5);
									hrac1_17s = hrac1_17s - 2;
									document.getElementById('score1sipka17_3').className = 'SkoreEmpty';										
							} else if (hrac1_17s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
									x1 = x1 - (hrac1[pocetsipek1] / 3);
									--hrac1_17s;
									document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
							} 
							prumer1score = prumer1score - 3;
						  break;
	          case 54:
							if (hrac1_18s > 2 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];									
								hrac1_18s = hrac1_18s - 3;
							} else if (hrac1_18s > 1 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
									x1 = x1 - (hrac1[pocetsipek1] / 1.5);
									hrac1_18s = hrac1_18s - 2;
									document.getElementById('score1sipka18_3').className = 'SkoreEmpty';										
							} else if (hrac1_18s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
									x1 = x1 - (hrac1[pocetsipek1] / 3);
									--hrac1_18s;
									document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
							} 
							prumer1score = prumer1score - 3;
						  break;
	          case 57:
							if (hrac1_19s > 2 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];									
								hrac1_19s = hrac1_19s - 3;
							} else if (hrac1_19s > 1 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
									x1 = x1 - (hrac1[pocetsipek1] / 1.5);
									hrac1_19s = hrac1_19s - 2;
									document.getElementById('score1sipka19_3').className = 'SkoreEmpty';										
							} else if (hrac1_19s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
									x1 = x1 - (hrac1[pocetsipek1] / 3);
									--hrac1_19s;
									document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
							} 
							prumer1score = prumer1score - 3;
						  break;
	          case 60:
							if (hrac1_20s > 2 ) {
								scorethree1 = scorethree1 - hrac1[pocetsipek1];
								x1 = x1 - hrac1[pocetsipek1];									
								hrac1_20s = hrac1_20s - 3;
							} else if (hrac1_20s > 1 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
									x1 = x1 - (hrac1[pocetsipek1] / 1.5);
									hrac1_20s = hrac1_20s - 2;
									document.getElementById('score1sipka20_3').className = 'SkoreEmpty';										
							} else if (hrac1_20s > 0 ) {
									scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
									x1 = x1 - (hrac1[pocetsipek1] / 3);
									--hrac1_20s;
									document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
							} else {
									document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
									document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
									document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
							} 
							prumer1score = prumer1score - 3;
						  break;
	        }   
				} else {
						scorethree2 = scorethree2all[(pocetsipek2 / 3) - 1];
						--pocetsipek2;
						--pocetsipek2all;						
	          switch (hrac2[pocetsipek2]) {
		          case 15:
								if (hrac2_15s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_15s;
								} else if (document.getElementById('score2sipka15_3').className == 'SkoreLight') {
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka15_2').className == 'SkoreLight') {
											document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka15_1').className == 'SkoreLight') {
											document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 16:
								if (hrac2_16s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_16s;
								} else if (document.getElementById('score2sipka16_3').className == 'SkoreLight') {
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka16_2').className == 'SkoreLight') {
											document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka16_1').className == 'SkoreLight') {
											document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 17:
								if (hrac2_17s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_17s;
								} else if (document.getElementById('score2sipka17_3').className == 'SkoreLight') {
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka17_2').className == 'SkoreLight') {
											document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka17_1').className == 'SkoreLight') {
											document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 18:
								if (hrac2_18s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_18s;
								} else if (document.getElementById('score2sipka18_3').className == 'SkoreLight') {
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka18_2').className == 'SkoreLight') {
											document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka18_1').className == 'SkoreLight') {
											document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 19:
								if (hrac2_19s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_19s;
								} else if (document.getElementById('score2sipka19_3').className == 'SkoreLight') {
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka19_2').className == 'SkoreLight') {
											document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka19_1').className == 'SkoreLight') {
											document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 20:
								if (hrac2_20s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_20s;
								} else if (document.getElementById('score2sipka20_3').className == 'SkoreLight') {
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka20_2').className == 'SkoreLight') {
											document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka20_1').className == 'SkoreLight') {
											document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
								}
								--prumer2score;
							  break;								
		          case 25:
								if (hrac2_25s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_25s;
								} else if (document.getElementById('score2sipka25_3').className == 'SkoreLight') {
										document.getElementById('score2sipka25_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka25_2').className == 'SkoreLight') {
											document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka25_1').className == 'SkoreLight') {
											document.getElementById('score2sipka25_1').className = 'SkoreEmpty';
								}
								--prumer2score;
							  break;
		          case 30:
								if (hrac2_15s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_15s = hrac2_15s - 2;
								} else if (hrac2_15s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_15s;
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka15_3').className == 'SkoreLight') {
										document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 32:
								if (hrac2_16s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_16s = hrac2_16s - 2;
								} else if (hrac2_16s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_16s;
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka16_3').className == 'SkoreLight') {
										document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 34:
								if (hrac2_17s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_17s = hrac2_17s - 2;
								} else if (hrac2_17s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_17s;
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka17_3').className == 'SkoreLight') {
										document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 36:
								if (hrac2_18s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_18s = hrac2_18s - 2;
								} else if (hrac2_18s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_18s;
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka18_3').className == 'SkoreLight') {
										document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 38:
								if (hrac2_19s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_19s = hrac2_19s - 2;
								} else if (hrac2_19s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_19s;
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka19_3').className == 'SkoreLight') {
										document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 40:        
								if (hrac2_20s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_20s = hrac2_20s - 2;
								} else if (hrac2_20s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_20s;
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka20_3').className == 'SkoreLight') {
										document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 45:
								if (hrac2_15s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_15s = hrac2_15s - 3;
								} else if (hrac2_15s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_15s = hrac2_15s - 2;
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';										
								} else if (hrac2_15s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_15s;
										document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 48:
								if (hrac2_16s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_16s = hrac2_16s - 3;
								} else if (hrac2_16s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_16s = hrac2_16s - 2;
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';										
								} else if (hrac2_16s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_16s;
										document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 50:
								if (hrac2_25s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_25s = hrac2_25s - 2;
								} else if (hrac2_25s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_25s;
										document.getElementById('score2sipka25_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka25_3').className == 'SkoreLight') {
										document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka25_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka25_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;        
		          case 51:
								if (hrac2_17s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_17s = hrac2_17s - 3;
								} else if (hrac2_17s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_17s = hrac2_17s - 2;
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';										
								} else if (hrac2_17s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_17s;
										document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 54:
								if (hrac2_18s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_18s = hrac2_18s - 3;
								} else if (hrac2_18s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_18s = hrac2_18s - 2;
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';										
								} else if (hrac2_18s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_18s;
										document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 57:
								if (hrac2_19s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_19s = hrac2_19s - 3;
								} else if (hrac2_19s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_19s = hrac2_19s - 2;
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';										
								} else if (hrac2_19s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_19s;
										document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 60:
								if (hrac2_20s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_20s = hrac2_20s - 3;
								} else if (hrac2_20s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_20s = hrac2_20s - 2;
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';										
								} else if (hrac2_20s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_20s;
										document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		        }
				}
					switch (pocetsipek) {
						case 1:
							document.getElementById("scoretable2").innerHTML = x2;
							document.getElementById("darts2").innerHTML = pocetsipek2;
							document.getElementById("scoretablethree2").innerHTML = scorethree2;
							document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2];            
							document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
							document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
							document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
							document.getElementById("score2sipka3h").style.backgroundColor = "#FFA427";
							document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2 - 2];
							document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 - 1];
							document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2];
							if (pocetsipek1 > 0) {
								document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1 - 3];
								document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 - 2];
								document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1 - 1];
								scorethree1 = scorethree1all[(pocetsipek1 / 3) - 1];
								document.getElementById("scoretablethree1").innerHTML = scorethree1;
								if (pocetsipek1all > 2) {
									prumer1 = (prumer1score / pocetsipek1all) * 3;
									document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
								} else document.getElementById("average1").innerHTML = "&nbsp";
							} else {
							    document.getElementById("score1sipka1").innerHTML = "&nbsp";
									document.getElementById("score1sipka2").innerHTML = "&nbsp";
									document.getElementById("score1sipka3").innerHTML = "&nbsp";
									document.getElementById("scoretablethree1").innerHTML = "&nbsp";
							}
							idhrace = 2;
							pocetsipek = 3;
							if (pocetsipek2all > 2) {
								prumer2 = (prumer2score / pocetsipek2all) * 3;
								document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;
							} else document.getElementById("average2").innerHTML = "&nbsp";							
							break;
						case 2:
							document.getElementById("scoretable1").innerHTML = x1;
							if (pocetsipek1all > 0) {
							  document.getElementById("darts1").innerHTML = pocetsipek1;
							} else	document.getElementById("darts1").innerHTML = "&nbsp";  
							document.getElementById("scoretablethree1").innerHTML = "&nbsp";
							document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];							
							document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
							document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
							pocetsipek = 1;
							if (pocetsipek1all > 2) {
								prumer1 = (prumer1score / pocetsipek1all) * 3;
								document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
							} else document.getElementById("average1").innerHTML = "&nbsp";
							break;
						case 3:
							document.getElementById("scoretable1").innerHTML = x1;
							document.getElementById("darts1").innerHTML = pocetsipek1;
							document.getElementById("scoretablethree1").innerHTML = scorethree1;
							document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1];
							document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
							document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
							pocetsipek = 2;
							if (pocetsipek1all > 2) {
								prumer1 = (prumer1score / pocetsipek1all) * 3;
								document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
							} else document.getElementById("average1").innerHTML = "&nbsp";
							break;
					}
        break;
			case 2:
          if (pocetsipek > 1) {
						--pocetsipek2;
						--pocetsipek2all;
	          switch (hrac2[pocetsipek2]) {
		          case 15:
								if (hrac2_15s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_15s;
								} else if (document.getElementById('score2sipka15_3').className == 'SkoreLight') {
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka15_2').className == 'SkoreLight') {
											document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka15_1').className == 'SkoreLight') {
											document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 16:
								if (hrac2_16s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_16s;
								} else if (document.getElementById('score2sipka16_3').className == 'SkoreLight') {
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka16_2').className == 'SkoreLight') {
											document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka16_1').className == 'SkoreLight') {
											document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 17:
								if (hrac2_17s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_17s;
								} else if (document.getElementById('score2sipka17_3').className == 'SkoreLight') {
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka17_2').className == 'SkoreLight') {
											document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka17_1').className == 'SkoreLight') {
											document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 18:
								if (hrac2_18s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_18s;
								} else if (document.getElementById('score2sipka18_3').className == 'SkoreLight') {
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka18_2').className == 'SkoreLight') {
											document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka18_1').className == 'SkoreLight') {
											document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 19:
								if (hrac2_19s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_19s;
								} else if (document.getElementById('score2sipka19_3').className == 'SkoreLight') {
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka19_2').className == 'SkoreLight') {
											document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka19_1').className == 'SkoreLight') {
											document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
								}
								--prumer2score;							
							  break;
		          case 20:
								if (hrac2_20s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_20s;
								} else if (document.getElementById('score2sipka20_3').className == 'SkoreLight') {
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka20_2').className == 'SkoreLight') {
											document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka20_1').className == 'SkoreLight') {
											document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
								}
								--prumer2score;
							  break;								
		          case 25:
								if (hrac2_25s > 0 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									--hrac2_25s;
								} else if (document.getElementById('score2sipka25_3').className == 'SkoreLight') {
										document.getElementById('score2sipka25_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka25_2').className == 'SkoreLight') {
											document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
									} else if (document.getElementById('score2sipka25_1').className == 'SkoreLight') {
											document.getElementById('score2sipka25_1').className = 'SkoreEmpty';
								}
								--prumer2score;
							  break;
		          case 30:
								if (hrac2_15s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_15s = hrac2_15s - 2;
								} else if (hrac2_15s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_15s;
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka15_3').className == 'SkoreLight') {
										document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 32:
								if (hrac2_16s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_16s = hrac2_16s - 2;
								} else if (hrac2_16s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_16s;
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka16_3').className == 'SkoreLight') {
										document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 34:
								if (hrac2_17s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_17s = hrac2_17s - 2;
								} else if (hrac2_17s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_17s;
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka17_3').className == 'SkoreLight') {
										document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 36:
								if (hrac2_18s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_18s = hrac2_18s - 2;
								} else if (hrac2_18s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_18s;
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka18_3').className == 'SkoreLight') {
										document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 38:
								if (hrac2_19s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_19s = hrac2_19s - 2;
								} else if (hrac2_19s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_19s;
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka19_3').className == 'SkoreLight') {
										document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 40:        
								if (hrac2_20s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_20s = hrac2_20s - 2;
								} else if (hrac2_20s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_20s;
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka20_3').className == 'SkoreLight') {
										document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;
		          case 45:
								if (hrac2_15s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_15s = hrac2_15s - 3;
								} else if (hrac2_15s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_15s = hrac2_15s - 2;
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';										
								} else if (hrac2_15s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_15s;
										document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 48:
								if (hrac2_16s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_16s = hrac2_16s - 3;
								} else if (hrac2_16s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_16s = hrac2_16s - 2;
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';										
								} else if (hrac2_16s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_16s;
										document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 50:
								if (hrac2_25s > 1) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];
									hrac2_25s = hrac2_25s - 2;
								} else if (hrac2_25s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 2);
										x2 = x2 - (hrac2[pocetsipek2] / 2);
										--hrac2_25s;
										document.getElementById('score2sipka25_3').className = 'SkoreEmpty';
								} else if (document.getElementById('score2sipka25_3').className == 'SkoreLight') {
										document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka25_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka25_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
								}
						  	prumer2score = prumer2score - 2;
							  break;        
		          case 51:
								if (hrac2_17s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_17s = hrac2_17s - 3;
								} else if (hrac2_17s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_17s = hrac2_17s - 2;
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';										
								} else if (hrac2_17s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_17s;
										document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 54:
								if (hrac2_18s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_18s = hrac2_18s - 3;
								} else if (hrac2_18s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_18s = hrac2_18s - 2;
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';										
								} else if (hrac2_18s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_18s;
										document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 57:
								if (hrac2_19s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_19s = hrac2_19s - 3;
								} else if (hrac2_19s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_19s = hrac2_19s - 2;
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';										
								} else if (hrac2_19s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_19s;
										document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		          case 60:
								if (hrac2_20s > 2 ) {
									scorethree2 = scorethree2 - hrac2[pocetsipek2];
									x2 = x2 - hrac2[pocetsipek2];									
									hrac2_20s = hrac2_20s - 3;
								} else if (hrac2_20s > 1 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 1.5);
										x2 = x2 - (hrac2[pocetsipek2] / 1.5);
										hrac2_20s = hrac2_20s - 2;
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';										
								} else if (hrac2_20s > 0 ) {
										scorethree2 = scorethree2 - (hrac2[pocetsipek2] / 3);
										x2 = x2 - (hrac2[pocetsipek2] / 3);
										--hrac2_20s;
										document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
								} else {
										document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
										document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
								} 
								prumer2score = prumer2score - 3;
							  break;
		        }
          } else {
						  scorethree1 = scorethree1all[(pocetsipek1 / 3) - 1];						  
							--pocetsipek1;
							--pocetsipek1all;
		          switch (hrac1[pocetsipek1]) {
			          case 15:
									if (hrac1_15s > 0 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										--hrac1_15s;
									} else if (document.getElementById('score1sipka15_3').className == 'SkoreLight') {
											document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka15_2').className == 'SkoreLight') {
												document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka15_1').className == 'SkoreLight') {
												document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
									}
									--prumer1score;							
								  break;
			          case 16:
									if (hrac1_16s > 0 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										--hrac1_16s;
									} else if (document.getElementById('score1sipka16_3').className == 'SkoreLight') {
											document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka16_2').className == 'SkoreLight') {
												document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka16_1').className == 'SkoreLight') {
												document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
									}
									--prumer1score;							
								  break;
			          case 17:
									if (hrac1_17s > 0 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										--hrac1_17s;
									} else if (document.getElementById('score1sipka17_3').className == 'SkoreLight') {
											document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka17_2').className == 'SkoreLight') {
												document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka17_1').className == 'SkoreLight') {
												document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
									}
									--prumer1score;							
								  break;
			          case 18:
									if (hrac1_18s > 0 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										--hrac1_18s;
									} else if (document.getElementById('score1sipka18_3').className == 'SkoreLight') {
											document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka18_2').className == 'SkoreLight') {
												document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka18_1').className == 'SkoreLight') {
												document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
									}
									--prumer1score;							
								  break;
			          case 19:
									if (hrac1_19s > 0 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										--hrac1_19s;
									} else if (document.getElementById('score1sipka19_3').className == 'SkoreLight') {
											document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka19_2').className == 'SkoreLight') {
												document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka19_1').className == 'SkoreLight') {
												document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
									}
									--prumer1score;							
								  break;
			          case 20:
									if (hrac1_20s > 0 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										--hrac1_20s;
									} else if (document.getElementById('score1sipka20_3').className == 'SkoreLight') {
											document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka20_2').className == 'SkoreLight') {
												document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka20_1').className == 'SkoreLight') {
												document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
									}
								  --prumer1score;
								  break;									
			          case 25:
									if (hrac1_25s > 0 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										--hrac1_25s;
									} else if (document.getElementById('score1sipka25_3').className == 'SkoreLight') {
											document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka25_2').className == 'SkoreLight') {
												document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
										} else if (document.getElementById('score1sipka25_1').className == 'SkoreLight') {
												document.getElementById('score1sipka25_1').className = 'SkoreEmpty';
									}
									--prumer1score;
								  break;
			          case 30:
									if (hrac1_15s > 1) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										hrac1_15s = hrac1_15s - 2;
									} else if (hrac1_15s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
											x1 = x1 - (hrac1[pocetsipek1] / 2);
											--hrac1_15s;
											document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score1sipka15_3').className == 'SkoreLight') {
											document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
									}
							  	prumer1score = prumer1score - 2;
								  break;
			          case 32:
									if (hrac1_16s > 1) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										hrac1_16s = hrac1_16s - 2;
									} else if (hrac1_16s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
											x1 = x1 - (hrac1[pocetsipek1] / 2);
											--hrac1_16s;
											document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score1sipka16_3').className == 'SkoreLight') {
											document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
									}
							  	prumer1score = prumer1score - 2;
								  break;
			          case 34:
									if (hrac1_17s > 1) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										hrac1_17s = hrac1_17s - 2;
									} else if (hrac1_17s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
											x1 = x1 - (hrac1[pocetsipek1] / 2);
											--hrac1_17s;
											document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score1sipka17_3').className == 'SkoreLight') {
											document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
									}
							  	prumer1score = prumer1score - 2;
								  break;
			          case 36:
									if (hrac1_18s > 1) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										hrac1_18s = hrac1_18s - 2;
									} else if (hrac1_18s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
											x1 = x1 - (hrac1[pocetsipek1] / 2);
											--hrac1_18s;
											document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score1sipka18_3').className == 'SkoreLight') {
											document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
									}
							  	prumer1score = prumer1score - 2;
								  break;
			          case 38:
									if (hrac1_19s > 1) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										hrac1_19s = hrac1_19s - 2;
									} else if (hrac1_19s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
											x1 = x1 - (hrac1[pocetsipek1] / 2);
											--hrac1_19s;
											document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score1sipka19_3').className == 'SkoreLight') {
											document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
									}
							  	prumer1score = prumer1score - 2;
								  break;
			          case 40:        
									if (hrac1_20s > 1) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										hrac1_20s = hrac1_20s - 2;
									} else if (hrac1_20s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
											x1 = x1 - (hrac1[pocetsipek1] / 2);
											--hrac1_20s;
											document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score1sipka20_3').className == 'SkoreLight') {
											document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
									}
							  	prumer1score = prumer1score - 2;
								  break;
			          case 45:
									if (hrac1_15s > 2 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];									
										hrac1_15s = hrac1_15s - 3;
									} else if (hrac1_15s > 1 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
											x1 = x1 - (hrac1[pocetsipek1] / 1.5);
											hrac1_15s = hrac1_15s - 2;
											document.getElementById('score1sipka15_3').className = 'SkoreEmpty';										
									} else if (hrac1_15s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
											x1 = x1 - (hrac1[pocetsipek1] / 3);
											--hrac1_15s;
											document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
									} 
									prumer1score = prumer1score - 3;
								  break;
			          case 48:
									if (hrac1_16s > 2 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];									
										hrac1_16s = hrac1_16s - 3;
									} else if (hrac1_16s > 1 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
											x1 = x1 - (hrac1[pocetsipek1] / 1.5);
											hrac1_16s = hrac1_16s - 2;
											document.getElementById('score1sipka16_3').className = 'SkoreEmpty';										
									} else if (hrac1_16s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
											x1 = x1 - (hrac1[pocetsipek1] / 3);
											--hrac1_16s;
											document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
									} 
									prumer1score = prumer1score - 3;
								  break;
			          case 50:
									if (hrac1_25s > 1) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];
										hrac1_25s = hrac1_25s - 2;
									} else if (hrac1_25s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 2);
											x1 = x1 - (hrac1[pocetsipek1] / 2);
											--hrac1_25s;
											document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
									} else if (document.getElementById('score1sipka25_3').className == 'SkoreLight') {
											document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka25_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
									}
							  	prumer1score = prumer1score - 2;
								  break;        
			          case 51:
									if (hrac1_17s > 2 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];									
										hrac1_17s = hrac1_17s - 3;
									} else if (hrac1_17s > 1 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
											x1 = x1 - (hrac1[pocetsipek1] / 1.5);
											hrac1_17s = hrac1_17s - 2;
											document.getElementById('score1sipka17_3').className = 'SkoreEmpty';										
									} else if (hrac1_17s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
											x1 = x1 - (hrac1[pocetsipek1] / 3);
											--hrac1_17s;
											document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
									} 
									prumer1score = prumer1score - 3;
								  break;
			          case 54:
									if (hrac1_18s > 2 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];									
										hrac1_18s = hrac1_18s - 3;
									} else if (hrac1_18s > 1 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
											x1 = x1 - (hrac1[pocetsipek1] / 1.5);
											hrac1_18s = hrac1_18s - 2;
											document.getElementById('score1sipka18_3').className = 'SkoreEmpty';										
									} else if (hrac1_18s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
											x1 = x1 - (hrac1[pocetsipek1] / 3);
											--hrac1_18s;
											document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
									} 
									prumer1score = prumer1score - 3;
								  break;
			          case 57:
									if (hrac1_19s > 2 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];									
										hrac1_19s = hrac1_19s - 3;
									} else if (hrac1_19s > 1 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
											x1 = x1 - (hrac1[pocetsipek1] / 1.5);
											hrac1_19s = hrac1_19s - 2;
											document.getElementById('score1sipka19_3').className = 'SkoreEmpty';										
									} else if (hrac1_19s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
											x1 = x1 - (hrac1[pocetsipek1] / 3);
											--hrac1_19s;
											document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
									} 
									prumer1score = prumer1score - 3;
								  break;
			          case 60:
									if (hrac1_20s > 2 ) {
										scorethree1 = scorethree1 - hrac1[pocetsipek1];
										x1 = x1 - hrac1[pocetsipek1];									
										hrac1_20s = hrac1_20s - 3;
									} else if (hrac1_20s > 1 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 1.5);
											x1 = x1 - (hrac1[pocetsipek1] / 1.5);
											hrac1_20s = hrac1_20s - 2;
											document.getElementById('score1sipka20_3').className = 'SkoreEmpty';										
									} else if (hrac1_20s > 0 ) {
											scorethree1 = scorethree1 - (hrac1[pocetsipek1] / 3);
											x1 = x1 - (hrac1[pocetsipek1] / 3);
											--hrac1_20s;
											document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
									} else {
											document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
											document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
											document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
									} 
									prumer1score = prumer1score - 3;
								  break;
			        }
          	}
					switch (pocetsipek) {
						case 1:
							document.getElementById("scoretable1").innerHTML = x1;
							document.getElementById("darts1").innerHTML = pocetsipek1;
							document.getElementById("scoretablethree1").innerHTML = scorethree1;
							document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
							document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
							document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
							document.getElementById("score1sipka3h").style.backgroundColor = "#FFA427";
							idhrace = 1;
							pocetsipek = 3;
							if (pocetsipek1all > 2) {
								prumer1 = (prumer1score / pocetsipek1all) * 3;
								document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
							} else document.getElementById("average1").innerHTML = "&nbsp";
							break;			
						case 2:
							document.getElementById("scoretable2").innerHTML = x2;
							if (pocetsipek2all > 0) {
							  document.getElementById("darts2").innerHTML = pocetsipek2;
							} else	document.getElementById("darts2").innerHTML = "&nbsp";  
							document.getElementById("scoretablethree2").innerHTML = "&nbsp";
							document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2];							
							document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
							document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
							pocetsipek = 1;
							if (pocetsipek2all > 2) {
								prumer2 = (prumer2score / pocetsipek2all) * 3;
								document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;
							} else document.getElementById("average2").innerHTML = "&nbsp";
							break;
						case 3:							
							document.getElementById("scoretable2").innerHTML = x2;
							document.getElementById("darts2").innerHTML = pocetsipek2;
							document.getElementById("scoretablethree2").innerHTML = scorethree2;
							document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2];
							document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
							document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
							pocetsipek = 2;
							if (pocetsipek2all > 2) {
								prumer2 = (prumer2score / pocetsipek2all) * 3;
								document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;
							} else document.getElementById("average2").innerHTML = "&nbsp";							
							break;
					}       	
				break;
		}
	}
}

function myFWD() {
  switch (idhrace) {
    case 1:
			if (pocetsipek1 < hrac1.length) {
	      switch (hrac1[pocetsipek1]) {
	        case 15:					
	          if (document.getElementById('score1sipka15_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka15_1').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka15_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka15_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka15_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								++hrac1_15s;
						};
						++prumer1score;
	          break;
	        case 16:
	          if (document.getElementById('score1sipka16_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka16_1').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka16_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka16_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka16_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								++hrac1_16s;
						};
						++prumer1score;
	          break;
	        case 17:
	          if (document.getElementById('score1sipka17_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka17_1').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka17_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka17_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka17_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								++hrac1_17s;              
						};
						++prumer1score;
	          break;
	        case 18:
	          if (document.getElementById('score1sipka18_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka18_1').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka18_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka18_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka18_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								++hrac1_18s;              
						};
						++prumer1score;
	          break;
	        case 19:
	          if (document.getElementById('score1sipka19_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka19_1').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka19_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka19_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka19_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								++hrac1_19s;              
						};
						++prumer1score;
	          break;
	        case 20:
	          if (document.getElementById('score1sipka20_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka20_1').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka20_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka20_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka20_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								++hrac1_20s;              
						};
						++prumer1score;
	          break;
	        case 25:
	          if (document.getElementById('score1sipka25_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka25_1').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka25_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka25_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka25_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								++hrac1_25s;
						};
						++prumer1score;
	          break;
	        case 30:
	          if (document.getElementById('score1sipka15_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka15_1').className = 'SkoreLight';
	            document.getElementById('score1sipka15_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka15_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka15_2').className = 'SkoreLight';
	              document.getElementById('score1sipka15_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka15_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 2);
	                x1 = x1 + (hrac1[pocetsipek1] / 2);
									++hrac1_15s;
	              }
	          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_15s = hrac1_15s  + 2;
						};
						prumer1score = prumer1score + 2;
	          break;
	        case 32:
	          if (document.getElementById('score1sipka16_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka16_1').className = 'SkoreLight';
	            document.getElementById('score1sipka16_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka16_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka16_2').className = 'SkoreLight';
	              document.getElementById('score1sipka16_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka16_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 2);
	                x1 = x1 + (hrac1[pocetsipek1] / 2);
									++hrac1_16s;                
	              }
	          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_16s = hrac1_16s  + 2;
						};
						prumer1score = prumer1score + 2;						
	          break;
	        case 34:
	          if (document.getElementById('score1sipka17_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka17_1').className = 'SkoreLight';
	            document.getElementById('score1sipka17_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka17_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka17_2').className = 'SkoreLight';
	              document.getElementById('score1sipka17_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka17_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 2);
	                x1 = x1 + (hrac1[pocetsipek1] / 2);
									++hrac1_17s;                
	              }
	          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_17s = hrac1_17s  + 2;              
						};
						prumer1score = prumer1score + 2;
	          break;
	        case 36:
	          if (document.getElementById('score1sipka18_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka18_1').className = 'SkoreLight';
	            document.getElementById('score1sipka18_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka18_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka18_2').className = 'SkoreLight';
	              document.getElementById('score1sipka18_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka18_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 2);
	                x1 = x1 + (hrac1[pocetsipek1] / 2);
									++hrac1_18s;                
	              }
	          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_18s = hrac1_18s  + 2;              
						};
						prumer1score = prumer1score + 2;						
	          break;
	        case 38:
	          if (document.getElementById('score1sipka19_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka19_1').className = 'SkoreLight';
	            document.getElementById('score1sipka19_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka19_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka19_2').className = 'SkoreLight';
	              document.getElementById('score1sipka19_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka19_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 2);
	                x1 = x1 + (hrac1[pocetsipek1] / 2);
									++hrac1_19s;                
	              }
	          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_19s = hrac1_19s  + 2;              
						};
						prumer1score = prumer1score + 2;						
	          break;
	        case 40:
	          if (document.getElementById('score1sipka20_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka20_1').className = 'SkoreLight';
	            document.getElementById('score1sipka20_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka20_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka20_2').className = 'SkoreLight';
	              document.getElementById('score1sipka20_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka20_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 2);
	                x1 = x1 + (hrac1[pocetsipek1] / 2);
									++hrac1_20s;                
	              }  
	          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_20s = hrac1_20s  + 2;
						};
						prumer1score = prumer1score + 2;						
	          break;
	        case 45:
	          if (document.getElementById('score1sipka15_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka15_1').className = 'SkoreLight';
	            document.getElementById('score1sipka15_2').className = 'SkoreLight';
	            document.getElementById('score1sipka15_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka15_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka15_2').className = 'SkoreLight';
	              document.getElementById('score1sipka15_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 3);
	                x1 = x1 + (hrac1[pocetsipek1] / 3);
									++hrac1_15s;
	              }  
	          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka15_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 1.5);
	                x1 = x1 + (hrac1[pocetsipek1] / 1.5);
									hrac1_15s = hrac1_15s  + 2;
	              }  
	          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_15s = hrac1_15s  + 3;              
						};
						prumer1score = prumer1score + 3;
	          break;
	        case 48:
	          if (document.getElementById('score1sipka16_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka16_1').className = 'SkoreLight';
	            document.getElementById('score1sipka16_2').className = 'SkoreLight';
	            document.getElementById('score1sipka16_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka16_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka16_2').className = 'SkoreLight';
	              document.getElementById('score1sipka16_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 3);
	                x1 = x1 + (hrac1[pocetsipek1] / 3);
									++hrac1_16s;
	              }  
	          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka16_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 1.5);
	                x1 = x1 + (hrac1[pocetsipek1] / 1.5);
	 								hrac1_16s = hrac1_16s  + 2;
	              }  
	          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_16s = hrac1_16s  + 3;              
						};
						prumer1score = prumer1score + 3;					
	          break;
	        case 50:
	          if (document.getElementById('score1sipka25_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka25_1').className = 'SkoreLight';
	            document.getElementById('score1sipka25_2').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka25_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka25_2').className = 'SkoreLight';
	              document.getElementById('score1sipka25_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka25_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {                
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 2);
	                x1 = x1 + (hrac1[pocetsipek1] / 2);
	                ++hrac1_25s;
	              }
	          } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_25s = hrac1_25s  + 2;
						};
						prumer1score = prumer1score + 2;
	          break;          
	        case 51:
	          if (document.getElementById('score1sipka17_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka17_1').className = 'SkoreLight';
	            document.getElementById('score1sipka17_2').className = 'SkoreLight';
	            document.getElementById('score1sipka17_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka17_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka17_2').className = 'SkoreLight';
	              document.getElementById('score1sipka17_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 3);
	                x1 = x1 + (hrac1[pocetsipek1] / 3);
									++hrac1_17s;
	              }  
	          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka17_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 1.5);
	                x1 = x1 + (hrac1[pocetsipek1] / 1.5);
									hrac1_17s = hrac1_17s  + 2;
	              }  
	          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_17s = hrac1_17s  + 3;              
						};
						prumer1score = prumer1score + 3;
	          break;
	        case 54:
	          if (document.getElementById('score1sipka18_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka18_1').className = 'SkoreLight';
	            document.getElementById('score1sipka18_2').className = 'SkoreLight';
	            document.getElementById('score1sipka18_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka18_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka18_2').className = 'SkoreLight';
	              document.getElementById('score1sipka18_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 3);
	                x1 = x1 + (hrac1[pocetsipek1] / 3);
	                ++hrac1_18s;
	              }  
	          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka18_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 1.5);
	                x1 = x1 + (hrac1[pocetsipek1] / 1.5);
									hrac1_18s = hrac1_18s  + 2;
	              }  
	          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_18s = hrac1_18s  + 3;              
						};
						prumer1score = prumer1score + 3;
	          break;
	        case 57:
	          if (document.getElementById('score1sipka19_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka19_1').className = 'SkoreLight';
	            document.getElementById('score1sipka19_2').className = 'SkoreLight';
	            document.getElementById('score1sipka19_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka19_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka19_2').className = 'SkoreLight';
	              document.getElementById('score1sipka19_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 3);
	                x1 = x1 + (hrac1[pocetsipek1] / 3);
									++hrac1_19s;
	              }  
	          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka19_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 1.5);
	                x1 = x1 + (hrac1[pocetsipek1] / 1.5);
									hrac1_19s = hrac1_19s  + 2;
	              }  
	          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_19s = hrac1_19s  + 3;
						};
						prumer1score = prumer1score + 3;
	          break;
	        case 60:
	          if (document.getElementById('score1sipka20_1').className == 'SkoreEmpty') {
	            document.getElementById('score1sipka20_1').className = 'SkoreLight';
	            document.getElementById('score1sipka20_2').className = 'SkoreLight';
	            document.getElementById('score1sipka20_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka20_2').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka20_2').className = 'SkoreLight';
	              document.getElementById('score1sipka20_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 3);
	                x1 = x1 + (hrac1[pocetsipek1] / 3);
									++hrac1_20s;
	              }  
	          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	              document.getElementById('score1sipka20_3').className = 'SkoreLight';
	              if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	                scorethree1 = scorethree1 + (hrac1[pocetsipek1] / 1.5);
	                x1 = x1 + (hrac1[pocetsipek1] / 1.5);
									hrac1_20s = hrac1_20s  + 2;
	              }  
	          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	              scorethree1 = scorethree1 + hrac1[pocetsipek1];
	              x1 = x1 + hrac1[pocetsipek1];
								hrac1_20s = hrac1_20s  + 3;
						};
						prumer1score = prumer1score + 3;
	          break;
      	}      
	      switch (pocetsipek) {
	        case 1:
	          document.getElementById("scoretable1").innerHTML = x1;
	          document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];
	          document.getElementById("scoretablethree1").innerHTML = scorethree1;
	          document.getElementById("darts1").innerHTML = pocetsipek1 + 1;
	          document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
	          document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
	          break;
	        case 2:
	          document.getElementById("scoretable1").innerHTML = x1;
	          document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1];
	          document.getElementById("scoretablethree1").innerHTML = scorethree1;
	          document.getElementById("darts1").innerHTML = pocetsipek1 + 1;
	          document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
	          document.getElementById("score1sipka3h").style.backgroundColor = "#FFA427";        
	          break;
	        case 3:
	          document.getElementById("scoretable1").innerHTML = x1;
	          document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1];
	          document.getElementById("scoretablethree1").innerHTML = scorethree1;	          
	          if (hrac2[pocetsipek2] >= 0) {
              document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2]
            } else {
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            }
            if (hrac2[pocetsipek2 + 1] >= 0) {
              document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 + 1]
            } else {            
              document.getElementById("score2sipka2").innerHTML = "&nbsp";              
            }            
            if (hrac2[pocetsipek2 + 2] >= 0) {
              document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2 + 2]
            } else {
              document.getElementById("score2sipka3").innerHTML = "&nbsp";              
            }
	          document.getElementById("scoretablethree2").innerHTML = scorethree2;	          
	          document.getElementById("darts1").innerHTML = pocetsipek1 + 1;
	          document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
	          document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
	          document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
	          document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
	          scorethree1Backup = scorethree1;
	          scorethree1 = 0;
	          break;          
	      }
	      ++pocetsipek1;
	      ++pocetsipek1all;
				if (pocetsipek1all > 2) {
					prumer1 = (prumer1score / pocetsipek1all) * 3;
					document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
				} else document.getElementById("average1").innerHTML = "&nbsp";
				if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
	      } else if (x1 >= x2) {
	        if (confirm("Potvrď zavření poslední šipkou: " + hrac1[pocetsipek1 - 1]) == true) {
	          ++legy1;
	          x1 = 0;
	          x2 = 0;
	          pocetsipek1 = 0;          
	          pocetsipek2 = 0;          
	          pocetsipek = 3;
	          document.getElementById("legs1").innerHTML = legy1;
	          document.getElementById("scoretable1").innerHTML = "&nbsp";
	          document.getElementById("score1sipka1").innerHTML = "&nbsp";
	          document.getElementById("score1sipka2").innerHTML = "&nbsp";
	          document.getElementById("score1sipka3").innerHTML = "&nbsp";
	          document.getElementById("scoretablethree1").innerHTML = "&nbsp";
	          document.getElementById("darts1").innerHTML = "&nbsp";              
	          document.getElementById("scoretable2").innerHTML = "&nbsp";
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
	          document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka25_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka25_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka25_3').className = 'SkoreEmpty';          
	          if ((legy1 + legy2) % 2 == 0) {
	            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
	            document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
	            jekonec = 1;
	          } else {
	              document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
	              document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
	              jekonec = 1;
	          }                
	        } else {
							vrattozpet = 1;
	        }
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
			  if (vrattozpet == 1) {
			  	myBCK();
			  	vrattozpet = 0;
			  }			  
	      }	      
	    break;
    case 2:
      if (pocetsipek2 < hrac2.length) {
	      switch (hrac2[pocetsipek2]) {
	        case 15:					
	          if (document.getElementById('score2sipka15_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka15_1').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka15_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka15_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka15_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								++hrac2_15s;
						};
						++prumer2score;
	          break;
	        case 16:
	          if (document.getElementById('score2sipka16_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka16_1').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka16_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka16_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka16_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								++hrac2_16s;
						};
						++prumer2score;
	          break;
	        case 17:
	          if (document.getElementById('score2sipka17_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka17_1').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka17_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka17_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka17_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								++hrac2_17s;              
						};
						++prumer2score;
	          break;
	        case 18:
	          if (document.getElementById('score2sipka18_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka18_1').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka18_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka18_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka18_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								++hrac2_18s;              
						};
						++prumer2score;
	          break;
	        case 19:
	          if (document.getElementById('score2sipka19_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka19_1').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka19_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka19_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka19_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								++hrac2_19s;              
						};
						++prumer2score;
	          break;
	        case 20:
	          if (document.getElementById('score2sipka20_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka20_1').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka20_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka20_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka20_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								++hrac2_20s;              
						};
						++prumer2score;
	          break;
	        case 25:
	          if (document.getElementById('score2sipka25_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka25_1').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka25_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka25_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka25_3').className = 'SkoreLight';
	          } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								++hrac2_25s;
						};
						++prumer2score;
	          break;
	        case 30:
	          if (document.getElementById('score2sipka15_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka15_1').className = 'SkoreLight';
	            document.getElementById('score2sipka15_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka15_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka15_2').className = 'SkoreLight';
	              document.getElementById('score2sipka15_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka15_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 2);
	                x2 = x2 + (hrac2[pocetsipek2] / 2);
									++hrac2_15s;
	              }
	          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_15s = hrac2_15s  + 2;
						};
						prumer2score = prumer2score + 2;
	          break;
	        case 32:
	          if (document.getElementById('score2sipka16_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka16_1').className = 'SkoreLight';
	            document.getElementById('score2sipka16_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka16_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka16_2').className = 'SkoreLight';
	              document.getElementById('score2sipka16_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka16_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 2);
	                x2 = x2 + (hrac2[pocetsipek2] / 2);
									++hrac2_16s;                
	              }
	          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_16s = hrac2_16s  + 2;
						};
						prumer2score = prumer2score + 2;
	          break;
	        case 34:
	          if (document.getElementById('score2sipka17_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka17_1').className = 'SkoreLight';
	            document.getElementById('score2sipka17_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka17_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka17_2').className = 'SkoreLight';
	              document.getElementById('score2sipka17_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka17_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 2);
	                x2 = x2 + (hrac2[pocetsipek2] / 2);
									++hrac2_17s;                
	              }
	          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_17s = hrac2_17s  + 2;              
						};
						prumer2score = prumer2score + 2;
	          break;
	        case 36:
	          if (document.getElementById('score2sipka18_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka18_1').className = 'SkoreLight';
	            document.getElementById('score2sipka18_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka18_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka18_2').className = 'SkoreLight';
	              document.getElementById('score2sipka18_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka18_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 2);
	                x2 = x2 + (hrac2[pocetsipek2] / 2);
									++hrac2_18s;                
	              }
	          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_18s = hrac2_18s  + 2;              
						};
						prumer2score = prumer2score + 2;
	          break;
	        case 38:
	          if (document.getElementById('score2sipka19_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka19_1').className = 'SkoreLight';
	            document.getElementById('score2sipka19_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka19_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka19_2').className = 'SkoreLight';
	              document.getElementById('score2sipka19_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka19_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 2);
	                x2 = x2 + (hrac2[pocetsipek2] / 2);
									++hrac2_19s;                
	              }
	          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_19s = hrac2_19s  + 2;              
						};
						prumer2score = prumer2score + 2;						
	          break;
	        case 40:
	          if (document.getElementById('score2sipka20_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka20_1').className = 'SkoreLight';
	            document.getElementById('score2sipka20_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka20_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka20_2').className = 'SkoreLight';
	              document.getElementById('score2sipka20_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka20_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 2);
	                x2 = x2 + (hrac2[pocetsipek2] / 2);
									++hrac2_20s;                
	              }  
	          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_20s = hrac2_20s  + 2;
						};
						prumer2score = prumer2score + 2;
	          break;
	        case 45:
	          if (document.getElementById('score2sipka15_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka15_1').className = 'SkoreLight';
	            document.getElementById('score2sipka15_2').className = 'SkoreLight';
	            document.getElementById('score2sipka15_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka15_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka15_2').className = 'SkoreLight';
	              document.getElementById('score2sipka15_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 3);
	                x2 = x2 + (hrac2[pocetsipek2] / 3);
									++hrac2_15s;
	              }  
	          } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka15_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 1.5);
	                x2 = x2 + (hrac2[pocetsipek2] / 1.5);
									hrac2_15s = hrac2_15s  + 2;
	              }  
	          } else if (document.getElementById('score1sipka15_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_15s = hrac2_15s  + 3;              
						};
						prumer2score = prumer2score + 3;
	          break;
	        case 48:
	          if (document.getElementById('score2sipka16_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka16_1').className = 'SkoreLight';
	            document.getElementById('score2sipka16_2').className = 'SkoreLight';
	            document.getElementById('score2sipka16_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka16_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka16_2').className = 'SkoreLight';
	              document.getElementById('score2sipka16_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 3);
	                x2 = x2 + (hrac2[pocetsipek2] / 3);
									++hrac2_16s;
	              }  
	          } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka16_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 1.5);
	                x2 = x2 + (hrac2[pocetsipek2] / 1.5);
	 								hrac2_16s = hrac2_16s  + 2;
	              }  
	          } else if (document.getElementById('score1sipka16_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_16s = hrac2_16s  + 3;              
						};
						prumer2score = prumer2score + 3;
	          break;
	        case 50:
	          if (document.getElementById('score2sipka25_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka25_1').className = 'SkoreLight';
	            document.getElementById('score2sipka25_2').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka25_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka25_2').className = 'SkoreLight';
	              document.getElementById('score2sipka25_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka25_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {                
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 2);
	                x2 = x2 + (hrac2[pocetsipek2] / 2);
	                ++hrac2_25s;
	              }
	          } else if (document.getElementById('score1sipka25_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_25s = hrac2_25s  + 2;
						};
						prumer2score = prumer2score + 2;
	          break;          
	        case 51:
	          if (document.getElementById('score2sipka17_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka17_1').className = 'SkoreLight';
	            document.getElementById('score2sipka17_2').className = 'SkoreLight';
	            document.getElementById('score2sipka17_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka17_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka17_2').className = 'SkoreLight';
	              document.getElementById('score2sipka17_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 3);
	                x2 = x2 + (hrac2[pocetsipek2] / 3);
									++hrac2_17s;
	              }  
	          } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka17_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 1.5);
	                x2 = x2 + (hrac2[pocetsipek2] / 1.5);
									hrac2_17s = hrac2_17s  + 2;
	              }  
	          } else if (document.getElementById('score1sipka17_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_17s = hrac2_17s  + 3;              
						};
						prumer2score = prumer2score + 3;						
	          break;
	        case 54:
	          if (document.getElementById('score2sipka18_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka18_1').className = 'SkoreLight';
	            document.getElementById('score2sipka18_2').className = 'SkoreLight';
	            document.getElementById('score2sipka18_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka18_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka18_2').className = 'SkoreLight';
	              document.getElementById('score2sipka18_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 3);
	                x2 = x2 + (hrac2[pocetsipek2] / 3);
	                ++hrac2_18s;
	              }  
	          } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka18_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 1.5);
	                x2 = x2 + (hrac2[pocetsipek2] / 1.5);
									hrac2_18s = hrac2_18s  + 2;
	              }  
	          } else if (document.getElementById('score1sipka18_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_18s = hrac2_18s  + 3;              
						};
						prumer2score = prumer2score + 3;						
	          break;
	        case 57:
	          if (document.getElementById('score2sipka19_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka19_1').className = 'SkoreLight';
	            document.getElementById('score2sipka19_2').className = 'SkoreLight';
	            document.getElementById('score2sipka19_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka19_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka19_2').className = 'SkoreLight';
	              document.getElementById('score2sipka19_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 3);
	                x2 = x2 + (hrac2[pocetsipek2] / 3);
									++hrac2_19s;
	              }  
	          } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka19_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 1.5);
	                x2 = x2 + (hrac2[pocetsipek2] / 1.5);
									hrac2_19s = hrac2_19s  + 2;
	              }  
	          } else if (document.getElementById('score1sipka19_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_19s = hrac2_19s  + 3;
						};
						prumer2score = prumer2score + 3;
	          break;
	        case 60:
	          if (document.getElementById('score2sipka20_1').className == 'SkoreEmpty') {
	            document.getElementById('score2sipka20_1').className = 'SkoreLight';
	            document.getElementById('score2sipka20_2').className = 'SkoreLight';
	            document.getElementById('score2sipka20_3').className = 'SkoreLight';
	          } else if (document.getElementById('score2sipka20_2').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka20_2').className = 'SkoreLight';
	              document.getElementById('score2sipka20_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 3);
	                x2 = x2 + (hrac2[pocetsipek2] / 3);
									++hrac2_20s;
	              }  
	          } else if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	              document.getElementById('score2sipka20_3').className = 'SkoreLight';
	              if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	                scorethree2 = scorethree2 + (hrac2[pocetsipek2] / 1.5);
	                x2 = x2 + (hrac2[pocetsipek2] / 1.5);
									hrac2_20s = hrac2_20s  + 2;
	              }  
	          } else if (document.getElementById('score1sipka20_3').className == 'SkoreEmpty') {
	              scorethree2 = scorethree2 + hrac2[pocetsipek2];
	              x2 = x2 + hrac2[pocetsipek2];
								hrac2_20s = hrac2_20s  + 3;
						};
						prumer2score = prumer2score + 3;
	          break;
	      }
	      switch (pocetsipek) {
	        case 1:          
	          document.getElementById("scoretable2").innerHTML = x2;
	          document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2];
	          document.getElementById("scoretablethree2").innerHTML = scorethree2;
	          document.getElementById("darts2").innerHTML = pocetsipek2 + 1;
	          document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
	          document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
	          break;
	        case 2:
	          document.getElementById("scoretable2").innerHTML = x2;
	          document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2];
	          document.getElementById("scoretablethree2").innerHTML = scorethree2;          
	          document.getElementById("darts2").innerHTML = pocetsipek2 + 1;
	          document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
	          document.getElementById("score2sipka3h").style.backgroundColor = "#FFA427";
	          break;
	        case 3:
	          document.getElementById("scoretable2").innerHTML = x2;
	          document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2];
	          document.getElementById("scoretablethree2").innerHTML = scorethree2;
            if (hrac1[pocetsipek1] >= 0) {
              document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];
            } else {
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            }
            if (hrac1[pocetsipek1 + 1] >= 0) {
              document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 + 1];
            } else {            
              document.getElementById("score1sipka2").innerHTML = "&nbsp";              
            }            
            if (hrac1[pocetsipek1 + 2] >= 0) {
              document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1 + 2];
            } else {
              document.getElementById("score1sipka3").innerHTML = "&nbsp";              
            }
            if (hrac2[pocetsipek2 + 1] >= 0) {
              document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2 + 1];
            } else {
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
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
	          document.getElementById("scoretablethree1").innerHTML = scorethree1;	          
	          document.getElementById("darts2").innerHTML = pocetsipek2 + 1;
	          document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";            
	          document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
	          document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
	          document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";          
	          scorethree2Backup = scorethree2;
	          scorethree2 = 0;
	          break;
	      }
				++pocetsipek2;
	      ++pocetsipek2all;
				if (pocetsipek2all > 2) {
					prumer2 = (prumer2score / pocetsipek2all) * 3;
					document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;
				} else document.getElementById("average2").innerHTML = "&nbsp";
				if (document.getElementById('score2sipka20_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score2sipka19_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score2sipka18_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score2sipka17_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score2sipka16_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score2sipka15_3').className == 'SkoreEmpty') {
	      } else if (document.getElementById('score2sipka25_3').className == 'SkoreEmpty') {
	      } else if (x2 >= x1) {
	        if (confirm("Potvrď zavření poslední šipkou: " + hrac2[pocetsipek2 - 1]) == true) {
	          ++legy2;
	          x1 = 0;
	          x2 = 0;
	          pocetsipek1 = 0;          
	          pocetsipek2 = 0;          
	          pocetsipek = 3;          
	          document.getElementById("legs2").innerHTML = legy2;
	          document.getElementById("scoretable1").innerHTML = "&nbsp";
	          document.getElementById("score1sipka1").innerHTML = "&nbsp";
	          document.getElementById("score1sipka2").innerHTML = "&nbsp";
	          document.getElementById("score1sipka3").innerHTML = "&nbsp";
	          document.getElementById("scoretablethree1").innerHTML = "&nbsp";          
	          document.getElementById("darts1").innerHTML = "&nbsp";          
	          document.getElementById("scoretable2").innerHTML = "&nbsp";
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
	          document.getElementById('score1sipka20_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka20_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka20_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka19_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka19_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka19_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka18_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka18_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka18_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka17_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka17_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka17_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka16_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka16_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka16_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka15_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka15_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka15_3').className = 'SkoreEmpty';
	          document.getElementById('score1sipka25_1').className = 'SkoreEmpty';
	          document.getElementById('score1sipka25_2').className = 'SkoreEmpty';
	          document.getElementById('score1sipka25_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka20_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka20_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka20_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka19_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka19_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka19_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka18_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka18_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka18_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka17_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka17_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka17_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka16_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka16_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka16_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka15_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka15_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka15_3').className = 'SkoreEmpty';
	          document.getElementById('score2sipka25_1').className = 'SkoreEmpty';
	          document.getElementById('score2sipka25_2').className = 'SkoreEmpty';
	          document.getElementById('score2sipka25_3').className = 'SkoreEmpty';
	          if ((legy1 + legy2) % 2 == 0) {
	            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
	            document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
	            jekonec = 1;
	          } else {
	              document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
	              document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
	              jekonec = 1;
	          }                
	        } else {
	            vrattozpet = 1;
	        }
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
			  if (vrattozpet == 1) {
			  	myBCK();
			  	vrattozpet = 0;
			  }			  
	      }	      
	    break;
  }  
}
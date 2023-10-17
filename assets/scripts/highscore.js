let x1 = 0, x1old = 0, x2 = 0; x2old = 0;
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

function myPricti(kolik) {  
  switch (idhrace) {
    case 1:
      ++pocetsipek1;
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
          if (pocetsipek2 == 21) {
						if (confirm("Potvrď poslední hozenou šipku " + kolik) == true) {
              if (x1 > x2) {
               ++legy1;
              } else if (x2 > x1) {
	               	++legy2;
              } else {
              		++legy1;
              		++legy2;
              }
              x1 = 0;
              x2 = 0;
              x1old = 0;
              x2old = 0;              
              pocetsipek1 = 0;              
              pocetsipek2 = 0;              
              pocetsipek = 3;
              document.getElementById("legs1").innerHTML = legy1;
              document.getElementById("legs2").innerHTML = legy2;
              document.getElementById("scoretable1").innerHTML = 0;
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
              document.getElementById("darts1").innerHTML = "&nbsp";              
              document.getElementById("scoretable2").innerHTML = 0;
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
          }
          break; 
      }
      break;
    case 2:
      ++pocetsipek2;      
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
          if (pocetsipek1 == 21) {        
            if (confirm("Potvrď poslední hozenou šipku " + kolik) == true) {              
              if (x1 > x2) {
               ++legy1;
              } else if (x2 > x1) {
               	++legy2;
              } else {
              		++legy1;
              		++legy2;
              }
              x1 = 0;
              x2 = 0;
              x1old = 0;
              x2old = 0;
              pocetsipek1 = 0;              
              pocetsipek2 = 0;              
              pocetsipek = 3;
              document.getElementById("legs1").innerHTML = legy1;
              document.getElementById("legs2").innerHTML = legy2;
              document.getElementById("scoretable1").innerHTML = 0;
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
              document.getElementById("darts1").innerHTML = "&nbsp";         
              document.getElementById("scoretable2").innerHTML = 0;
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
            break;
        }        
        break; 
      }  
  }
}
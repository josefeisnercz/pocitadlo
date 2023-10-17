let x1 = 301, x2 = 301;
let pocetsipek = 1;
let hrac1 = [], legy1 = 0, pocetsipek1 = 0, pocetsipek1all = 0, prumer1 = 0, prumer1score = 0, devadesatpet1 = 0, sto1 = 0, stotricettri1 = 0, stoctyricet1 = 0, stosedmdesat1 = 0, stoosmdesat1 = 0, scorethree1 = 0;
let hrac2 = [], legy2 = 0, pocetsipek2 = 0, pocetsipek2all = 0, prumer2 = 0, prumer2score = 0, devadesatpet2 = 0, sto2 = 0, stotricettri2 = 0, stoctyricet2 = 0, stosedmdesat2 = 0, stoosmdesat2 = 0, scorethree2 = 0;
let idhrace = 1;
let jekonec = 0;
let jmenohrace1, jmenohrace2;
var elem = document.documentElement;

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

function myBCK() {
  if (pocetsipek1 > 0) {
    switch (idhrace) {
      case 1:        
        switch (pocetsipek) {
          case 1:
            --pocetsipek2;
            --pocetsipek2all;
            x2 = x2 + hrac2[pocetsipek2];
            scorethree2 = hrac2[pocetsipek2 - 2] + hrac2[pocetsipek2 - 1] + hrac2[pocetsipek2];
            if (scorethree2 >= 180) {
              --stoosmdesat2;
              document.getElementById("bingo2").innerHTML = stosedmdesat2 + " / " + stoosmdesat2;
            } else if (scorethree2 >= 170) {
                --stosedmdesat2;
                document.getElementById("bingo2").innerHTML = stosedmdesat2 + " / " + stoosmdesat2;
            } else if (scorethree2 >= 140) {
                --stotricettri2;
                --stoctyricet2;
                document.getElementById("tonplus2").innerHTML = stotricettri2 + " / " + stoctyricet2;
             } else if (scorethree2 >= 133) {              
                 --stotricettri2;
                 document.getElementById("tonplus2").innerHTML = stotricettri2 + " / " + stoctyricet2;
             } else if (scorethree2 >= 100) {                            
                 --devadesatpet2;
                 --sto2;
                 document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
             } else if (scorethree2 >= 95) {                                          
                 --devadesatpet2;
                 document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
            } else {    
            }                
            scorethree2 = hrac2[pocetsipek2 - 2] + hrac2[pocetsipek2 - 1];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = pocetsipek2;
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
            if (hrac1[pocetsipek1 - 3] >= 0) {
              document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1 - 3];
            } else {
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
            }
            if (hrac1[pocetsipek1 - 2] >= 0) {
              document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 - 2];
            } else {
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
            }            
            if (hrac1[pocetsipek1 - 1] >= 0) {
              document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1 - 1];
              scorethree1 = hrac1[pocetsipek1 - 3] + hrac1[pocetsipek1 - 2] + hrac1[pocetsipek1 - 1];
              document.getElementById("scoretablethree1").innerHTML = scorethree1;
            } else {
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
            }            
            idhrace = 2;
            pocetsipek = 3;
            if (pocetsipek2 < 3) {
              document.getElementById("average2").innerHTML = "&nbsp";
            } else {                
                prumer2 = (((301 - x2) + prumer2score) / pocetsipek2all) * 3;
                document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;          
            }
            break;          
          case 2:
            --pocetsipek1;
            --pocetsipek1all;
            x1 = x1 + hrac1[pocetsipek1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = pocetsipek1;
            document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
            pocetsipek = 1;
            prumer1 = (((301 - x1) + prumer1score) / pocetsipek1all) * 3;
            document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
            break;
          case 3:
            --pocetsipek1;
            --pocetsipek1all;
            x1 = x1 + hrac1[pocetsipek1];            
            scorethree1 = hrac1[pocetsipek1 - 1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = pocetsipek1;
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
            document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
            pocetsipek = 2;
            prumer1 = (((301 - x1) + prumer1score) / pocetsipek1all) * 3;
            document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
            break;
        }
        break;
      case 2:          
        switch (pocetsipek) {
          case 1:
            --pocetsipek1;
            --pocetsipek1all;
            x1 = x1 + hrac1[pocetsipek1];
            scorethree1 = hrac1[pocetsipek1 - 2] + hrac1[pocetsipek1 - 1] + hrac1[pocetsipek1];
            if (scorethree1 >= 180) {
              --stoosmdesat1;
              document.getElementById("bingo1").innerHTML = stosedmdesat1 + " / " + stoosmdesat1;
            } else if (scorethree1 >= 170) {
                --stosedmdesat1;
                document.getElementById("bingo1").innerHTML = stosedmdesat1 + " / " + stoosmdesat1;
            } else if (scorethree1 >= 140) {
                --stotricettri1;
                --stoctyricet1;
                document.getElementById("tonplus1").innerHTML = stotricettri1 + " / " + stoctyricet1;
            } else if (scorethree1 >= 133) {              
                --stotricettri1;
                document.getElementById("tonplus1").innerHTML = stotricettri1 + " / " + stoctyricet1;
            } else if (scorethree1 >= 100) {                            
                --devadesatpet1;
                --sto1;
                document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
            } else if (scorethree1 >= 95) {                                          
                --devadesatpet1;
                document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
            } else {    
            }                
            scorethree1 = hrac1[pocetsipek1 - 2] + hrac1[pocetsipek1 - 1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = pocetsipek1;
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
            if (pocetsipek1 < 3) {
              document.getElementById("average1").innerHTML = "&nbsp";
            } else {                
                prumer1 = (((301 - x1) + prumer1score) / pocetsipek1all) * 3;
                document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
            }            
            break;          
          case 2:
            --pocetsipek2;
            --pocetsipek2all;
            x2 = x2 + hrac2[pocetsipek2];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = pocetsipek2;
            document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2];
            document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
            pocetsipek = 1;
            prumer2 = (((301 - x2) + prumer2score) / pocetsipek2all) * 3;
            document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;          
            break;
          case 3:
            --pocetsipek2;
            --pocetsipek2all;
            x2 = x2 + hrac2[pocetsipek2];            
            scorethree2 = hrac2[pocetsipek2 - 1];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = pocetsipek2;
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2];            
            document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
            document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
            pocetsipek = 2;
            prumer2 = (((301 - x2) + prumer2score) / pocetsipek2all) * 3;
            document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;          
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
        x1 = x1 - hrac1[pocetsipek1];
        switch (pocetsipek) {
          case 1:            
            scorethree1 = hrac1[pocetsipek1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1 + 1);
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
            document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
            pocetsipek = 2;
            break;          
          case 2:
            scorethree1 = hrac1[pocetsipek1 - 1] + hrac1[pocetsipek1];
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1 + 1);
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
            document.getElementById("score1sipka3h").style.backgroundColor = "#FFA427";
            pocetsipek = 3;
            break;
          case 3:
            scorethree1 = hrac1[pocetsipek1 - 2] + hrac1[pocetsipek1 - 1] + hrac1[pocetsipek1];
            if (x1 > 2) {
              if (scorethree1 >= 180) {
                ++stoosmdesat1;
                document.getElementById("bingo1").innerHTML = stosedmdesat1 + " / " + stoosmdesat1;
              } else if (scorethree1 >= 170) {
                  ++stosedmdesat1;
                  document.getElementById("bingo1").innerHTML = stosedmdesat1 + " / " + stoosmdesat1;
              } else if (scorethree1 >= 140) {
                  ++stotricettri1;
                  ++stoctyricet1;
                  document.getElementById("tonplus1").innerHTML = stotricettri1 + " / " + stoctyricet1;
              } else if (scorethree1 >= 133) {              
                  ++stotricettri1;
                  document.getElementById("tonplus1").innerHTML = stotricettri1 + " / " + stoctyricet1;
              } else if (scorethree1 >= 100) {                            
                  ++devadesatpet1;
                  ++sto1;
                  document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
              } else if (scorethree1 >= 95) {                                          
                  ++devadesatpet1;
                  document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
              } else {    
              }
            } else {
                x1 = x1 + scorethree1;
            }
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = (pocetsipek1 + 1);
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1];
            document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
            document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
            document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
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
            idhrace = 2;
            pocetsipek = 1;            
            break;
        }
        ++pocetsipek1;
        ++pocetsipek1all;        
        prumer1 = (((301 - x1) + prumer1score) / pocetsipek1all) * 3;
        document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
        break;
    }  
    case 2:          
      if (pocetsipek2 < hrac2.length) {
        x2 = x2 - hrac2[pocetsipek2];  
        switch (pocetsipek) {
          case 1:
            scorethree2 = hrac2[pocetsipek2];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2 + 1);
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2];
            document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
            pocetsipek = 2;
            break;          
          case 2:
            scorethree2 = hrac2[pocetsipek2 - 1] + hrac2[pocetsipek2];
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2 + 1);
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2];
            document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka3h").style.backgroundColor = "#FFA427";
            pocetsipek = 3;            
            break;
          case 3:
            scorethree2 = hrac2[pocetsipek2 - 2] + hrac2[pocetsipek2 - 1] + hrac2[pocetsipek2];
            if (x1 > 2) {
              if (scorethree2 >= 180) {
                ++stoosmdesat2;
                document.getElementById("bingo2").innerHTML = stosedmdesat2 + " / " + stoosmdesat2;
              } else if (scorethree2 >= 170) {
                  ++stosedmdesat2;
                  document.getElementById("bingo2").innerHTML = stosedmdesat2 + " / " + stoosmdesat2;
              } else if (scorethree2 >= 140) {
                  ++stotricettri2;
                  ++stoctyricet2;
                  document.getElementById("tonplus2").innerHTML = stotricettri2 + " / " + stoctyricet2;
              } else if (scorethree2 >= 133) {              
                  ++stotricettri2;
                  document.getElementById("tonplus2").innerHTML = stotricettri2 + " / " + stoctyricet2;
              } else if (scorethree2 >= 100) {                            
                  ++devadesatpet2;
                  ++sto2;
                  document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
              } else if (scorethree2 >= 95) {                                          
                  ++devadesatpet2;
                  document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
              } else {    
              }
            } else {
                x2 = x2 + scorethree2;
            }
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = (pocetsipek2 + 1);
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2];
            document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
            if (hrac1[pocetsipek1] >= 0) {
              document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];
              document.getElementById("scoretablethree1").innerHTML = hrac1[pocetsipek1];
            } else {
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            }
            if (hrac1[pocetsipek1 + 1] >= 0) {
              document.getElementById("score1sipka2").innerHTML = hrac1[pocetsipek1 + 1];
              document.getElementById("scoretablethree1").innerHTML = hrac1[pocetsipek1] + hrac1[pocetsipek1 + 1];
            } else {            
              document.getElementById("score1sipka2").innerHTML = "&nbsp";              
            }            
            if (hrac1[pocetsipek1 + 2] >= 0) {
              document.getElementById("score1sipka3").innerHTML = hrac1[pocetsipek1 + 2];
              document.getElementById("scoretablethree1").innerHTML = hrac1[pocetsipek1] + hrac1[pocetsipek1 + 1] + hrac1[pocetsipek1 + 2];
            } else {
              document.getElementById("score1sipka3").innerHTML = "&nbsp";              
            }
            if (hrac2[pocetsipek2 + 1] >= 0) {
              document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2 + 1];
              document.getElementById("scoretablethree2").innerHTML = hrac2[pocetsipek2 + 1];
            } else {
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            }
            if (hrac2[pocetsipek2 + 2] >= 0) {
              document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 + 2];
              document.getElementById("scoretablethree2").innerHTML = hrac2[pocetsipek2 + 1] + hrac2[pocetsipek2 + 2];
            } else {            
              document.getElementById("score2sipka2").innerHTML = "&nbsp";              
            }            
            if (hrac2[pocetsipek2 + 3] >= 0) {
              document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2 + 3];
              document.getElementById("scoretablethree2").innerHTML = hrac2[pocetsipek2 + 1] + hrac2[pocetsipek2 + 2] + hrac2[pocetsipek2 + 3];
            } else {
              document.getElementById("score2sipka3").innerHTML = "&nbsp";              
            }            
            idhrace = 1;
            pocetsipek = 1;                          
            break;
        }
        ++pocetsipek2;
        ++pocetsipek2all;
        prumer2 = (((301 - x2) + prumer2score) / pocetsipek2all) * 3;
        document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;          
        break;  
      }  
  }
}

function myOdecti(kolik) {     
  switch (idhrace) {
    case 1:
      hrac1[pocetsipek1] = kolik;
      ++pocetsipek1;
      ++pocetsipek1all;
      x1 = x1 - kolik;
      switch (pocetsipek) {
        case 1:
          scorethree1 = kolik;          
          if (x1 > 1) {
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = pocetsipek1;
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka1").innerHTML = kolik;
            document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
            document.getElementById("score1sipka2h").style.backgroundColor = "#FFA427";
          } else if (x1 == 0) {
              if (confirm("Potvrď zavření poslední šipkou " + kolik) == true) {
                ++legy1;
                x1 = 301;
                prumer1score = prumer1score + x1;              
                prumer2score = prumer2score + (301 - x2);
                x2 = 301;
                pocetsipek1 = 0;              
                pocetsipek2 = 0;              
                pocetsipek = 3;
                document.getElementById("legs1").innerHTML = legy1;
                document.getElementById("scoretable1").innerHTML = 301;
                document.getElementById("score1sipka1").innerHTML = "&nbsp";
                document.getElementById("score1sipka2").innerHTML = "&nbsp";
                document.getElementById("score1sipka3").innerHTML = "&nbsp";
                document.getElementById("scoretablethree1").innerHTML = "&nbsp";
                document.getElementById("darts1").innerHTML = "&nbsp";              
                document.getElementById("scoretable2").innerHTML = 301;
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
                  --pocetsipek1all;
                  --pocetsipek;
                  x1 = x1 + kolik;
              }
          } else if (x1 < 2) {               
              x1 = x1 + scorethree1;              
              hrac1[pocetsipek1 - 1] = 0;
              hrac1.push(0);
              hrac1.push(0);
              pocetsipek = 3;
              pocetsipek1 = pocetsipek1 + 2;
              pocetsipek1all = pocetsipek1all + 2;
              document.getElementById("score1sipka1").innerHTML = 0;
              document.getElementById("score1sipka2").innerHTML = 0;
              document.getElementById("score1sipka3").innerHTML = 0;
              document.getElementById("scoretablethree1").innerHTML = 0;
              document.getElementById("scoretable1").innerHTML = x1;
              document.getElementById("darts1").innerHTML = pocetsipek1;            
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("score2sipka2").innerHTML = "&nbsp";
              document.getElementById("score2sipka3").innerHTML = "&nbsp";
              document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
              document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
              document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
              document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";           
          } else {    
          }          
          break;
        case 2:
          scorethree1 = hrac1[pocetsipek1 - 2] + kolik;          
          if (x1 > 1) {
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = pocetsipek1;
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("score1sipka2").innerHTML = kolik;
            document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
            document.getElementById("score1sipka3h").style.backgroundColor = "#FFA427";
          } else if (x1 == 0) {
              if (confirm("Potvrď zavření poslední šipkou " + kolik) == true) {              
                ++legy1;
                x1 = 301;
                prumer1score = prumer1score + x1;              
                prumer2score = prumer2score + (301 - x2);
                x2 = 301;
                pocetsipek1 = 0;              
                pocetsipek2 = 0;              
                pocetsipek = 3;
                document.getElementById("legs1").innerHTML = legy1;
                document.getElementById("scoretable1").innerHTML = 301;
                document.getElementById("score1sipka1").innerHTML = "&nbsp";
                document.getElementById("score1sipka2").innerHTML = "&nbsp";
                document.getElementById("score1sipka3").innerHTML = "&nbsp";
                document.getElementById("scoretablethree1").innerHTML = "&nbsp";
                document.getElementById("darts1").innerHTML = "&nbsp";              
                document.getElementById("scoretable2").innerHTML = 301;
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
                if (scorethree1 >= 100) {                            
                  ++devadesatpet1;
                  ++sto1;
                  document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
                } else if (scorethree1 >= 95) {                                          
                    ++devadesatpet1;
                    document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
                } else {    
                }
              } else {
                  --pocetsipek1;
                  --pocetsipek1all;
                  --pocetsipek;
                  x1 = x1 + kolik;
              }                
          } else if (x1 < 2) {              
              x1 = x1 + scorethree1;
              hrac1[pocetsipek1 - 1] = 0;
              hrac1[pocetsipek1 - 2] = 0;
              hrac1.push(0);
              pocetsipek = 3;
              ++pocetsipek1;
              ++pocetsipek1all;
              document.getElementById("score1sipka1").innerHTML = 0;
              document.getElementById("score1sipka2").innerHTML = 0;
              document.getElementById("score1sipka3").innerHTML = 0;
              document.getElementById("scoretablethree1").innerHTML = 0;;
              document.getElementById("scoretable1").innerHTML = x1;
              document.getElementById("darts1").innerHTML = pocetsipek1;            
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("score2sipka2").innerHTML = "&nbsp";
              document.getElementById("score2sipka3").innerHTML = "&nbsp";
              document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
              document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
              document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
              document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";          
          } else {    
          }
          break;
        case 3:
          scorethree1 = hrac1[pocetsipek1 - 3] + hrac1[pocetsipek1 - 2] + kolik;          
          if (x1 > 1) {
            document.getElementById("scoretable1").innerHTML = x1;
            document.getElementById("darts1").innerHTML = pocetsipek1;
            document.getElementById("scoretablethree1").innerHTML = scorethree1;
            document.getElementById("scoretablethree2").innerHTML = "&nbsp";
            document.getElementById("score1sipka3").innerHTML = kolik;
            document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
            document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
            document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";
            if (hrac2[pocetsipek2] >= 0) {
              document.getElementById("score2sipka1").innerHTML = hrac2[pocetsipek2];
              document.getElementById("scoretablethree2").innerHTML = hrac2[pocetsipek2];
            } else {
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
            }            
            if (hrac2[pocetsipek2 + 1] >= 0) {
              document.getElementById("score2sipka2").innerHTML = hrac2[pocetsipek2 + 1];
            } else {
              document.getElementById("score2sipka2").innerHTML = "&nbsp";
            }
            if (hrac2[pocetsipek2 + 2] >= 0) {
              document.getElementById("score2sipka3").innerHTML = hrac2[pocetsipek2 + 2];
            } else {
              document.getElementById("score2sipka3").innerHTML = "&nbsp";
            }
            if (scorethree1 >= 180) {
              ++stoosmdesat1;
              document.getElementById("bingo1").innerHTML = stosedmdesat1 + " / " + stoosmdesat1;
            } else if (scorethree1 >= 170) {
                ++stosedmdesat1;
                document.getElementById("bingo1").innerHTML = stosedmdesat1 + " / " + stoosmdesat1;
            } else if (scorethree1 >= 140) {
                ++stotricettri1;
                ++stoctyricet1;
                document.getElementById("tonplus1").innerHTML = stotricettri1 + " / " + stoctyricet1;
            } else if (scorethree1 >= 133) {              
                ++stotricettri1;
                document.getElementById("tonplus1").innerHTML = stotricettri1 + " / " + stoctyricet1;
            } else if (scorethree1 >= 100) {                            
                ++devadesatpet1;
                ++sto1;
                document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
            } else if (scorethree1 >= 95) {                                          
                ++devadesatpet1;
                document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
            } else {    
            }
          } else if (x1 == 0) {
              if (confirm("Potvrď zavření poslední šipkou " + kolik) == true) {
                ++legy1;
                x1 = 301;
                prumer1score = prumer1score + x1;              
                prumer2score = prumer2score + (301 - x2);
                x2 = 301;
                pocetsipek1 = 0;              
                pocetsipek2 = 0;              
                pocetsipek = 3;
                document.getElementById("legs1").innerHTML = legy1;
                document.getElementById("scoretable1").innerHTML = 301;
                document.getElementById("score1sipka1").innerHTML = "&nbsp";
                document.getElementById("score1sipka2").innerHTML = "&nbsp";
                document.getElementById("score1sipka3").innerHTML = "&nbsp";
                document.getElementById("scoretablethree1").innerHTML = "&nbsp";
                document.getElementById("darts1").innerHTML = "&nbsp";              
                document.getElementById("scoretable2").innerHTML = 301;
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
                if (scorethree1 >= 180) {
                  ++stoosmdesat1;
                  document.getElementById("bingo1").innerHTML = stosedmdesat1 + " / " + stoosmdesat1;
                } else if (scorethree1 >= 170) {
                    ++stosedmdesat1;
                    document.getElementById("bingo1").innerHTML = stosedmdesat1 + " / " + stoosmdesat1;
                } else if (scorethree1 >= 140) {
                    ++stotricettri1;
                    ++stoctyricet1;
                    document.getElementById("tonplus1").innerHTML = stotricettri1 + " / " + stoctyricet1;
                } else if (scorethree1 >= 133) {              
                    ++stotricettri1;
                    document.getElementById("tonplus1").innerHTML = stotricettri1 + " / " + stoctyricet1;
                } else if (scorethree1 >= 100) {                            
                    ++devadesatpet1;
                    ++sto1;
                    document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
                } else if (scorethree1 >= 95) {                                          
                    ++devadesatpet1;
                    document.getElementById("ton1").innerHTML = devadesatpet1 + " / " + sto1;
                } else {    
                }
              } else {
                  --pocetsipek1;
                  --pocetsipek1all;
                  --pocetsipek;
                  x1 = x1 + kolik;
              }                
          } else if (x1 < 2) {                
              x1 = x1 + scorethree1;
              hrac1[pocetsipek1 - 1] = 0;
              hrac1[pocetsipek1 - 2] = 0;
              hrac1[pocetsipek1 - 3] = 0;
              document.getElementById("score1sipka1").innerHTML = 0;
              document.getElementById("score1sipka2").innerHTML = 0;
              document.getElementById("score1sipka3").innerHTML = 0;
              document.getElementById("scoretablethree1").innerHTML = 0;            
              document.getElementById("scoretable1").innerHTML = x1;
              document.getElementById("darts1").innerHTML = pocetsipek1;
              document.getElementById("scoretablethree2").innerHTML = "&nbsp";
              document.getElementById("score2sipka1").innerHTML = "&nbsp";
              document.getElementById("score2sipka2").innerHTML = "&nbsp";
              document.getElementById("score2sipka3").innerHTML = "&nbsp";
              document.getElementById("score1sipka1h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka2h").style.backgroundColor = "#F44336";
              document.getElementById("score1sipka3h").style.backgroundColor = "#F44336";
              document.getElementById("score2sipka1h").style.backgroundColor = "#FFA427";
              document.getElementById("scoretable1h").style.backgroundColor = "#F44336";
              document.getElementById("scoretable2h").style.backgroundColor = "#FFA427";           
          } else {    
          }        
          break;          
      }  
      prumer1 = (((301 - x1) + prumer1score) / pocetsipek1all) * 3;
      document.getElementById("average1").innerHTML = Math.round(prumer1 * 10) / 10;
      break;      
    case 2:
      hrac2[pocetsipek2] = kolik;
      ++pocetsipek2;
      ++pocetsipek2all;
      x2 = x2 - kolik;
      switch (pocetsipek) {
        case 1:
          scorethree2 = kolik;          
          if (x2 > 1) {
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = pocetsipek2;
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka1").innerHTML = kolik;
            document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka2h").style.backgroundColor = "#FFA427";
          } else if (x2 == 0) {
              if (confirm("Potvrď zavření poslední šipkou " + kolik) == true) {
                ++legy2;
                prumer1score = prumer1score + (301 - x1);
                x1 = 301;
                x2 = 301;
                prumer2score = prumer2score + x2;              
                pocetsipek1 = 0;              
                pocetsipek2 = 0;              
                pocetsipek = 3;
                document.getElementById("scoretable1").innerHTML = 301;
                document.getElementById("score1sipka1").innerHTML = "&nbsp";
                document.getElementById("score1sipka2").innerHTML = "&nbsp";
                document.getElementById("score1sipka3").innerHTML = "&nbsp";
                document.getElementById("scoretablethree1").innerHTML = "&nbsp";
                document.getElementById("darts1").innerHTML = "&nbsp";              
                document.getElementById("legs2").innerHTML = legy2;
                document.getElementById("scoretable2").innerHTML = 301;
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
                  x2 = x2 + kolik;
              }
          } else if (x2 < 2) {
              x2 = x2 + scorethree2;
              hrac2[pocetsipek2 - 1] = 0;
              hrac2.push(0);
              hrac2.push(0);
              pocetsipek = 3;
              pocetsipek2 = pocetsipek2 + 2;
              pocetsipek2all = pocetsipek2all + 2;
              document.getElementById("score2sipka1").innerHTML = 0;
              document.getElementById("score2sipka2").innerHTML = 0;
              document.getElementById("score2sipka3").innerHTML = 0;
              document.getElementById("scoretablethree2").innerHTML = 0;
              document.getElementById("scoretable2").innerHTML = x2;
              document.getElementById("darts2").innerHTML = pocetsipek2;            
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
              document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
              document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
              document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
              document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";         
          } else {    
          }         
          break;
        case 2:
          scorethree2 = hrac2[pocetsipek2 - 2] + kolik;          
          if (x2 > 1) {
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = pocetsipek2;
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("score2sipka2").innerHTML = kolik;
            document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
            document.getElementById("score2sipka3h").style.backgroundColor = "#FFA427";
          } else if (x2 == 0) {
              if (confirm("Potvrď zavření poslední šipkou " + kolik) == true) {
                ++legy2;
                prumer1score = prumer1score + (301 - x1);
                x1 = 301;
                x2 = 301;
                prumer2score = prumer2score + x2;              
                pocetsipek1 = 0;              
                pocetsipek2 = 0;              
                pocetsipek = 3;
                document.getElementById("scoretable1").innerHTML = 301;
                document.getElementById("score1sipka1").innerHTML = "&nbsp";
                document.getElementById("score1sipka2").innerHTML = "&nbsp";
                document.getElementById("score1sipka3").innerHTML = "&nbsp";
                document.getElementById("scoretablethree1").innerHTML = "&nbsp";
                document.getElementById("darts1").innerHTML = "&nbsp";              
                document.getElementById("legs2").innerHTML = legy2;
                document.getElementById("scoretable2").innerHTML = 301;
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
                if (scorethree2 >= 100) {                            
                  ++devadesatpet2;
                  ++sto2;
                  document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
                } else if (scorethree2 >= 95) {                                          
                    ++devadesatpet2;
                    document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
                } else {    
                }
              } else {
                  --pocetsipek2;
                  --pocetsipek2all;
                  --pocetsipek;
                  x2 = x2 + kolik;
              }
          } else if (x2 < 2) {
              x2 = x2 + scorethree2;
              hrac2[pocetsipek2 - 1] = 0;
              hrac2[pocetsipek2 - 2] = 0;
              hrac2.push(0);
              pocetsipek = 3;
              ++pocetsipek2;
              ++pocetsipek2all;
              document.getElementById("score2sipka1").innerHTML = 0;
              document.getElementById("score2sipka2").innerHTML = 0;
              document.getElementById("score2sipka3").innerHTML = 0;
              document.getElementById("scoretablethree2").innerHTML = 0;
              document.getElementById("scoretable2").innerHTML = x2;
              document.getElementById("darts2").innerHTML = pocetsipek2;            
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
              document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
              document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
              document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
              document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";        
          } else {    
          } 
          break;
        case 3:
          scorethree2 = hrac2[pocetsipek2 - 3] + hrac2[pocetsipek2 - 2]  + kolik;
          if (x2 > 1) {
            document.getElementById("scoretable2").innerHTML = x2;
            document.getElementById("darts2").innerHTML = pocetsipek2;
            document.getElementById("scoretablethree2").innerHTML = scorethree2;
            document.getElementById("scoretablethree1").innerHTML = "&nbsp";
            document.getElementById("score2sipka3").innerHTML = kolik;
            document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";            
            document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
            document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
            document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";
            if (hrac1[pocetsipek1] >= 0) {
              document.getElementById("score1sipka1").innerHTML = hrac1[pocetsipek1];
              document.getElementById("scoretablethree1").innerHTML = hrac1[pocetsipek1];
            } else {
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
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
            if (scorethree2 >= 180) {
              ++stoosmdesat2;
              document.getElementById("bingo2").innerHTML = stosedmdesat2 + " / " + stoosmdesat2;
            } else if (scorethree2 >= 170) {
                ++stosedmdesat2;
                document.getElementById("bingo2").innerHTML = stosedmdesat2 + " / " + stoosmdesat2;
            } else if (scorethree2 >= 140) {
                ++stotricettri2;
                ++stoctyricet2;
                document.getElementById("tonplus2").innerHTML = stotricettri2 + " / " + stoctyricet2;
            } else if (scorethree2 >= 133) {              
                ++stotricettri2;
                document.getElementById("tonplus2").innerHTML = stotricettri2 + " / " + stoctyricet2;
            } else if (scorethree2 >= 100) {                            
                ++devadesatpet2;
                ++sto2;
                document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
            } else if (scorethree2 >= 95) {                                          
                ++devadesatpet2;
                document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
            } else {    
            }
          } else if (x2 == 0) {
              if (confirm("Potvrď zavření poslední šipkou " + kolik) == true) {
                ++legy2;
                prumer1score = prumer1score + (301 - x1);
                x1 = 301;
                x2 = 301;
                prumer2score = prumer2score + x2;              
                pocetsipek1 = 0;              
                pocetsipek2 = 0;              
                pocetsipek = 3;
                document.getElementById("scoretable1").innerHTML = 301;
                document.getElementById("score1sipka1").innerHTML = "&nbsp";
                document.getElementById("score1sipka2").innerHTML = "&nbsp";
                document.getElementById("score1sipka3").innerHTML = "&nbsp";
                document.getElementById("scoretablethree1").innerHTML = "&nbsp";
                document.getElementById("darts1").innerHTML = "&nbsp";              
                document.getElementById("legs2").innerHTML = legy2;
                document.getElementById("scoretable2").innerHTML = 301;
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
                if (scorethree2 >= 180) {
                  ++stoosmdesat2;
                  document.getElementById("bingo2").innerHTML = stosedmdesat2 + " / " + stoosmdesat2;
                } else if (scorethree2 >= 170) {
                    ++stosedmdesat2;
                    document.getElementById("bingo2").innerHTML = stosedmdesat2 + " / " + stoosmdesat2;
                } else if (scorethree2 >= 140) {
                    ++stotricettri2;
                    ++stoctyricet2;
                    document.getElementById("tonplus2").innerHTML = stotricettri2 + " / " + stoctyricet2;
                } else if (scorethree2 >= 133) {              
                    ++stotricettri2;
                    document.getElementById("tonplus2").innerHTML = stotricettri2 + " / " + stoctyricet2;
                } else if (scorethree2 >= 100) {                            
                    ++devadesatpet2;
                    ++sto2;
                    document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
                } else if (scorethree2 >= 95) {                                          
                    ++devadesatpet2;
                    document.getElementById("ton2").innerHTML = devadesatpet2 + " / " + sto2;
                } else {    
                }
              } else {
                  --pocetsipek2;
                  --pocetsipek2all;
                  --pocetsipek;
                  x2 = x2 + kolik;
              }
          } else if (x2 < 2) {    
              x2 = x2 + scorethree2;
              hrac2[pocetsipek2 - 1] = 0;
              hrac2[pocetsipek2 - 2] = 0;
              hrac2[pocetsipek2 - 3] = 0;
              document.getElementById("score2sipka1").innerHTML = 0;
              document.getElementById("score2sipka2").innerHTML = 0;
              document.getElementById("score2sipka3").innerHTML = 0;
              document.getElementById("scoretablethree2").innerHTML = 0;            
              document.getElementById("scoretable2").innerHTML = x2;
              document.getElementById("darts2").innerHTML = pocetsipek2;
              document.getElementById("scoretablethree1").innerHTML = "&nbsp";
              document.getElementById("score1sipka1").innerHTML = "&nbsp";
              document.getElementById("score1sipka2").innerHTML = "&nbsp";
              document.getElementById("score1sipka3").innerHTML = "&nbsp";
              document.getElementById("score2sipka1h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka2h").style.backgroundColor = "#4CAF50";
              document.getElementById("score2sipka3h").style.backgroundColor = "#4CAF50";
              document.getElementById("score1sipka1h").style.backgroundColor = "#FFA427";
              document.getElementById("scoretable2h").style.backgroundColor = "#4CAF50";
              document.getElementById("scoretable1h").style.backgroundColor = "#FFA427";       
          } else {    
          }   
          break;          
      }  
      prumer2 = (((301 - x2) + prumer2score) / pocetsipek2all) * 3;
      document.getElementById("average2").innerHTML = Math.round(prumer2 * 10) / 10;          
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
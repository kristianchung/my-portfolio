/**
  * Initialisation de ma page 
  *
  * @param 	Aucun
  * @return	Aucun
  */
 (function() {


    window.onload = salade()
    
    
    window.onload = startTime()

    document.getElementById("front").addEventListener("click", calendrier)
    document.getElementById("back").addEventListener("click", calendrier)

    

    document.getElementById("burger").addEventListener("click", hide_res)   
 

    document.getElementById("salade_ul").addEventListener("click", salade)
    document.getElementById("entree_ul").addEventListener("click", entree)
    document.getElementById("pizza_ul").addEventListener("click", pizza)
    document.getElementById("pate_ul").addEventListener("click", pate)
    document.getElementById("poulet_ul").addEventListener("click", poulet)
    document.getElementById("steak_ul").addEventListener("click", steak)
    document.getElementById("veau_ul").addEventListener("click", veau)
    document.getElementById("poisson_ul").addEventListener("click", poisson)
    document.getElementById("enfant_ul").addEventListener("click", enfant)

    var leCheckBox = document.querySelector("input");
    var lesBoutons = document.querySelectorAll("nav a");
    var nbBoutons = lesBoutons.length;

    for (var i = 0; i < nbBoutons; i++) {
        lesBoutons[i].addEventListener("click", function() {
            leCheckBox.checked = false;
        }, false);
    }
    
    
    document.getElementById("salade").addEventListener("click", salade_hide)
    document.getElementById("entree").addEventListener("click", entree_hide)
    document.getElementById("pizza").addEventListener("click", pizza_hide)
    document.getElementById("pate").addEventListener("click", pate_hide)

    document.getElementById("poulet").addEventListener("click", poulet_hide)
    document.getElementById("steak").addEventListener("click", steak_hide)
    document.getElementById("veau").addEventListener("click", veau_hide)
    document.getElementById("poisson").addEventListener("click", poisson_hide)
    document.getElementById("enfant").addEventListener("click", enfant_hide)

    
    let cardElement = document.querySelector(".card");

    cardElement.addEventListener("click", flip);
    
    function flip(){
      cardElement.classList.toggle("flipped")
    }
    
    function startTime() {
        var weekday = new Array();
        weekday[0] =  "Dimanche";
        weekday[1] = "Lundi";
        weekday[2] = "Mardi";
        weekday[3] = "Mercredi";
        weekday[4] = "Jeudi";
        weekday[5] = "Vendredi";
        weekday[6] = "Samedi";
        var month = new Array();
        month[0] = "Janvier";
        month[1] = "Février";
        month[2] = "Mars";
        month[3] = "Avril";
        month[4] = "Mai";
        month[5] = "Juin";
        month[6] = "Juillet";
        month[7] = "Aout";
        month[8] = "Septembre";
        month[9] = "Octobre";
        month[10] = "Novembre";
        month[11] = "Décembre";
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var d = today.getDate();
        var y = today.getFullYear();
        var wd = weekday[today.getDay()];
        var mt = month[today.getMonth()];
      
        m = checkTime(m);
        s = checkTime(s);
                        document.getElementById('date').innerHTML =
        d;
     document.getElementById('day').innerHTML =
        wd;
     document.getElementById('month').innerHTML =
        mt + "/" + y;
        
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }
    
      


    })();        

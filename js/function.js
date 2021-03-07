
function hide_res(){
    var res_maint = document.getElementById("res_maint");
    var leCheckBox = document.querySelector("input");
    var burger = document.getElementById("burger");
    
    if(leCheckBox.checked == false){
        res_maint.style.opacity = "0";
        burger.style.transform = "rotate(-90deg)";
    }
    else{
        res_maint.style.opacity = "1";
        burger.style.transform = "rotate(0deg)";
    }
    }

    function salade(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");

        document.getElementById("salade_ul").style.color = "red";
        document.getElementById("entree_ul").style.color = "black";
        document.getElementById("pizza_ul").style.color = "black";
        document.getElementById("pate_ul").style.color = "black";
        document.getElementById("poulet_ul").style.color = "black";
        document.getElementById("steak_ul").style.color = "black";
        document.getElementById("veau_ul").style.color = "black";
        document.getElementById("poisson_ul").style.color = "black";
        document.getElementById("enfant_ul").style.color = "black";

        salade.style.display = "block";   
        entree.style.display = "none";  
        pizza.style.display = "none";
        pate.style.display = "none";
        poulet.style.display = "none";
        steak.style.display = "none";
        veau.style.display = "none";
        poisson.style.display = "none";
        enfant.style.display = "none";

        document.getElementById("menu_img").src = "img/salade.png";

    }

    function entree(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");


        document.getElementById("salade_ul").style.color = "black";
        document.getElementById("entree_ul").style.color = "red";
        document.getElementById("pizza_ul").style.color = "black";
        document.getElementById("pate_ul").style.color = "black";
        document.getElementById("poulet_ul").style.color = "black";
        document.getElementById("steak_ul").style.color = "black";
        document.getElementById("veau_ul").style.color = "black";
        document.getElementById("poisson_ul").style.color = "black";
        document.getElementById("enfant_ul").style.color = "black";

        entree.style.display = "block"; 
        salade.style.display = "none";   
        pizza.style.display = "none";
        pate.style.display = "none";
        poulet.style.display = "none";
        steak.style.display = "none";
        veau.style.display = "none";
        poisson.style.display = "none";
        enfant.style.display = "none";

        document.getElementById("menu_img").src = "img/entree.png";

        
    }

    function pizza(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");


        document.getElementById("salade_ul").style.color = "black";
        document.getElementById("entree_ul").style.color = "black";
        document.getElementById("pizza_ul").style.color = "red";
        document.getElementById("pate_ul").style.color = "black";
        document.getElementById("poulet_ul").style.color = "black";
        document.getElementById("steak_ul").style.color = "black";
        document.getElementById("veau_ul").style.color = "black";
        document.getElementById("poisson_ul").style.color = "black";
        document.getElementById("enfant_ul").style.color = "black";

        salade.style.display = "none";   
        entree.style.display = "none";  
        pizza.style.display = "block";
        pate.style.display = "none";
        poulet.style.display = "none";
        steak.style.display = "none";
        veau.style.display = "none";
        poisson.style.display = "none";
        enfant.style.display = "none";

        document.getElementById("menu_img").src = "img/pizza.png";
        
    }

    function pate(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");


        document.getElementById("salade_ul").style.color = "black";
        document.getElementById("entree_ul").style.color = "black";
        document.getElementById("pizza_ul").style.color = "black";
        document.getElementById("pate_ul").style.color = "red";
        document.getElementById("poulet_ul").style.color = "black";
        document.getElementById("steak_ul").style.color = "black";
        document.getElementById("veau_ul").style.color = "black";
        document.getElementById("poisson_ul").style.color = "black";
        document.getElementById("enfant_ul").style.color = "black";

        salade.style.display = "none";   
        entree.style.display = "none";  
        pizza.style.display = "none";
        pate.style.display = "block";
        poulet.style.display = "none";
        steak.style.display = "none";
        veau.style.display = "none";
        poisson.style.display = "none";
        enfant.style.display = "none";

        document.getElementById("menu_img").src = "img/pate.png";
        
    }

    function poulet(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");


        document.getElementById("salade_ul").style.color = "black";
        document.getElementById("entree_ul").style.color = "black";
        document.getElementById("pizza_ul").style.color = "black";
        document.getElementById("pate_ul").style.color = "black";
        document.getElementById("poulet_ul").style.color = "red";
        document.getElementById("steak_ul").style.color = "black";
        document.getElementById("veau_ul").style.color = "black";
        document.getElementById("poisson_ul").style.color = "black";
        document.getElementById("enfant_ul").style.color = "black";

        salade.style.display = "none";   
        entree.style.display = "none";  
        pizza.style.display = "none";
        pate.style.display = "none";
        poulet.style.display = "block";
        steak.style.display = "none";
        veau.style.display = "none";
        poisson.style.display = "none";
        enfant.style.display = "none";

        document.getElementById("menu_img").src = "img/poulet.png";
        
    }

    function steak(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");


        document.getElementById("salade_ul").style.color = "black";
        document.getElementById("entree_ul").style.color = "black";
        document.getElementById("pizza_ul").style.color = "black";
        document.getElementById("pate_ul").style.color = "black";
        document.getElementById("poulet_ul").style.color = "black";
        document.getElementById("steak_ul").style.color = "red";
        document.getElementById("veau_ul").style.color = "black";
        document.getElementById("poisson_ul").style.color = "black";
        document.getElementById("enfant_ul").style.color = "black";


        salade.style.display = "none";   
        entree.style.display = "none";  
        pizza.style.display = "none";
        pate.style.display = "none";
        poulet.style.display = "none";
        steak.style.display = "block";
        veau.style.display = "none";
        poisson.style.display = "none";
        enfant.style.display = "none";

        document.getElementById("menu_img").src = "img/steak.png";
        
    }

    function veau(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");


        document.getElementById("salade_ul").style.color = "black";
        document.getElementById("entree_ul").style.color = "black";
        document.getElementById("pizza_ul").style.color = "black";
        document.getElementById("pate_ul").style.color = "black";
        document.getElementById("poulet_ul").style.color = "black";
        document.getElementById("steak_ul").style.color = "black";
        document.getElementById("veau_ul").style.color = "red";
        document.getElementById("poisson_ul").style.color = "black";
        document.getElementById("enfant_ul").style.color = "black";

        salade.style.display = "none";   
        entree.style.display = "none";  
        pizza.style.display = "none";
        pate.style.display = "none";
        poulet.style.display = "none";
        steak.style.display = "none";
        veau.style.display = "block";
        poisson.style.display = "none";
        enfant.style.display = "none";

        document.getElementById("menu_img").src = "img/veau.png";
        
    }

    function poisson(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");


        document.getElementById("salade_ul").style.color = "black";
        document.getElementById("entree_ul").style.color = "black";
        document.getElementById("pizza_ul").style.color = "black";
        document.getElementById("pate_ul").style.color = "black";
        document.getElementById("poulet_ul").style.color = "black";
        document.getElementById("steak_ul").style.color = "black";
        document.getElementById("veau_ul").style.color = "black";
        document.getElementById("poisson_ul").style.color = "red";
        document.getElementById("enfant_ul").style.color = "black";

        salade.style.display = "none";   
        entree.style.display = "none";  
        pizza.style.display = "none";
        pate.style.display = "none";
        poulet.style.display = "none";
        steak.style.display = "none";
        veau.style.display = "none";
        poisson.style.display = "block";
        enfant.style.display = "none";

        document.getElementById("menu_img").src = "img/poisson.png";

       
    }

    function enfant(){
        var salade = document.getElementById("salade");
        var entree = document.getElementById("entree");
        var pizza = document.getElementById("pizza");
        var pate = document.getElementById("pate");
        var poulet = document.getElementById("poulet");
        var steak = document.getElementById("steak");
        var veau = document.getElementById("veau");
        var poisson = document.getElementById("poisson");
        var enfant = document.getElementById("enfant");


        document.getElementById("salade_ul").style.color = "black";
        document.getElementById("entree_ul").style.color = "black";
        document.getElementById("pizza_ul").style.color = "black";
        document.getElementById("pate_ul").style.color = "black";
        document.getElementById("poulet_ul").style.color = "black";
        document.getElementById("steak_ul").style.color = "black";
        document.getElementById("veau_ul").style.color = "black";
        document.getElementById("poisson_ul").style.color = "black";
        document.getElementById("enfant_ul").style.color = "red";

        salade.style.display = "none";   
        entree.style.display = "none";  
        pizza.style.display = "none";
        pate.style.display = "none";
        poulet.style.display = "none";
        steak.style.display = "none";
        veau.style.display = "none";
        poisson.style.display = "none";
        enfant.style.display = "block";

        document.getElementById("menu_img").src = "img/enfant.png";


    }

    function dropDown() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

      
    function salade_hide() {
        var salade = document.getElementById("salade");
        var saladeul = document.getElementById("salade_ul");
        if(screen.width < 980){
        salade.style.display = "none";
            saladeul.style.color = "black";
    }
      }

      function entree_hide() {
        var entree = document.getElementById("entree");
        var entreeul = document.getElementById("entree_ul");

        if(screen.width < 980){
        entree.style.display = "none";
        entreeul.style.color = "black";
    }
      }

      function pizza_hide() {
        var pizza = document.getElementById("pizza");
        var pizzaul = document.getElementById("pizza_ul");

        if(screen.width < 980){
        pizza.style.display = "none";
        pizzaul.style.color = "black";
    }
      }

      function pate_hide() {
        var pate = document.getElementById("pate");
        var pateul = document.getElementById("pate_ul");

        if(screen.width < 980){
        pate.style.display = "none";
        pateul.style.color = "black";
    }
      }

      function poulet_hide() {
        var poulet = document.getElementById("poulet");
        var pouletul = document.getElementById("poulet_ul");

        if(screen.width < 980){
        poulet.style.display = "none";
        pouletul.style.color = "black";
    }
      }

      function steak_hide() {
        var steak = document.getElementById("steak");
        var steakul = document.getElementById("steak_ul");

        if(screen.width < 980){
        steak.style.display = "none";
        steakul.style.color = "black";
    }
      }

      function veau_hide() {
        var veau = document.getElementById("veau");
        var veauul = document.getElementById("veau_ul");

        if(screen.width < 980){
        veau.style.display = "none";
        veauul.style.color = "black";
    }
      }

      function poisson_hide() {
        var poisson = document.getElementById("poisson");
        var poissonul = document.getElementById("poisson_ul");

        if(screen.width < 980){
        poisson.style.display = "none";
        poissonul.style.color = "black";
    }
      }

      function enfant_hide() {
        var enfant = document.getElementById("enfant");
        var enfantul = document.getElementById("enfant_ul");

        if(screen.width < 980){
        enfant.style.display = "none";
        enfantul.style.color = "black";
    }
      }

  function calendrier(){
    var heure = document.getElementById("dateHeure");

    if(heure.innerHTML == "Date :"){
      heure.innerHTML = "Heure :";
    }

    else if (heure.innerHTML =="Heure :"){
      heure.innerHTML = "Date :";
    }

  }
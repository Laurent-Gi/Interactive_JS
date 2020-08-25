// Fonctionnalité 1 :
// ------------------

function printNumberOfClick() {
  let fooElt = document.getElementsByTagName("footer")[0];
  let numberOfFooterClick = 0;
  let onFooterClick = function() {
    numberOfFooterClick++;
    console.log("clique : " + numberOfFooterClick);  
  };
  fooElt.addEventListener("click", onFooterClick);
}

// Fonctionnalité 2 :
// ------------------
function showNavbarOnClickToggle() {
  let toggleButtonElt = document.getElementsByClassName("navbar-toggler")[0];
  let navbarHeaderElt = document.getElementById('navbarHeader');
  let onTogglerClick = function () {
    navbarHeaderElt.classList.toggle('collapse');
  };
  toggleButtonElt.addEventListener("click", onTogglerClick);
}

// Fonctionnalité 3 (Après les indices) :
// --------------------------------------
function changeTextColorFirstCard() {
  let firstCardElt = document.getElementsByClassName("card")[0];
  let editCardButtonElt1 = document.getElementsByClassName("btn-outline-secondary")[0]; // bouton de la première "card"
  let onEditButtonClick1 = function() {
    firstCardElt.style.color = "red";
  };
  editCardButtonElt1.addEventListener("click", onEditButtonClick1);
}


// Fonctionnalité 4 :
// ------------------
function changeTextColorSecondCard() {
  let secondCardElt = document.getElementsByClassName("card")[1];
  let editCardButtonElt2 = secondCardElt.getElementsByClassName("btn-outline-secondary")[0]; // bouton de la première "card"
  let onEditButtonClick2 = function() {
    if (secondCardElt.style.color === 'green') {
      secondCardElt.style.color = ""; // retour à la "default value" !
    } else {
      secondCardElt.style.color = "green";    
    }
  };
  editCardButtonElt2.addEventListener("click", onEditButtonClick2);
}

// Fonctionnalité 5 :
// ------------------
function killBootstrapCssLink() {
  let navbarElt = document.getElementsByTagName("header")[0];
  let linkCssElt = document.getElementsByTagName("link")[0];
  let parentLinkCssElt = linkCssElt.parentNode;

  let onNavbarClick = function() {
    if (document.getElementsByTagName("link")[0]) {
      parentLinkCssElt.removeChild(linkCssElt); // On retire le link
    } else {
      parentLinkCssElt.appendChild(linkCssElt); // On ré-attache le link au head
    }
  };
  navbarElt.addEventListener("dblclick", onNavbarClick);
}


// Fonctionnalité 6 :
// ------------------
function reduceCardsOnClick() {
  for (let cardElt of document.getElementsByClassName("card")) {
    let buttonView = cardElt.getElementsByClassName("btn-success")[0];
    let myImg = cardElt.getElementsByClassName("card-img-top")[0];
    let textCardElt = cardElt.getElementsByClassName("card-text")[0];

    let onViewBouttonMouseOver = function() {
      textCardElt.classList.toggle("collapse") // selon suggestion : total bootstrap
      if (myImg.style.width === "20%") {
        myImg.style.width = "";          // retour à la taille par défaut
      } else {
        myImg.style.width = "20%";
      }
    };
    buttonView.addEventListener("mouseover",onViewBouttonMouseOver);
  }
}

// Fonctionnalité 7 :
// ------------------
function permuteCardsByTheRight() {
  let nextButtonElt = document.getElementsByClassName('btn-secondary')[0];

  let permuteOnNextButton = function(e) {
    e.preventDefault(); // Evite de revenir à top (recharger la page) à cause du lien "#" : se voit quand on a un scroll down 
    let card6Elt = document.getElementsByClassName("col-md-4")[5];
    let parentCardsElt = card6Elt.parentNode;
    parentCardsElt.insertAdjacentElement('afterbegin',card6Elt);
  };
  nextButtonElt.addEventListener("click", permuteOnNextButton);  
}



// Fonctionnalité 8 :
// ------------------
function permuteCardsByTheLeft() {
  let previousButtonElt = document.getElementsByClassName('btn-primary')[0];
  let permuteOnPreviusButton = function(e) {
    e.preventDefault(); // on bloque le comportement par défaut du bouton : e.preventDefault !
    let card1Elt = document.getElementsByClassName("col-md-4")[0];
    let parentCardsElt = card1Elt.parentNode;
    parentCardsElt.insertAdjacentElement('beforeend',card1Elt);
  }
  previousButtonElt.addEventListener("click", permuteOnPreviusButton);
}


// Fonctionnalité 9 :
// ------------------
function resizeByKeypress() {
  let divTextNavbar = document.querySelector("a.navbar-brand");
  let bodyElt = document.getElementsByTagName('body')[0];

  let removeBodyClasse = function() { // Pour partir sur du propre ou revenir à la base
    bodyElt.classList.remove("col-4");
    bodyElt.classList.remove("offset-md-4");
    bodyElt.classList.remove("offset-md-8");
  }

  let changeOnKeyDown = function(e) {

    if ((e.key === 'a') || (e.key === 'y') || (e.key === 'p') || (e.key === 'b')) {
      removeBodyClasse(); // ok pour 'b', mais aussi pour repartir d'un champ propre
      if (e.key !== 'b') {
        bodyElt.classList.add("col-4"); // On passe en 4 colonnes ok pour 'a' car à gauche
      }
      if (e.key === 'y') {  
        bodyElt.classList.add("offset-md-4"); // ok pour 'y' au milieu
      } else if (e.key === 'p') {
        bodyElt.classList.add("offset-md-8"); // ok pour 'p' à droite
      }
    } else {
      console.log("Désolé, mais nous ne traiterons pas la touche " + e.key + " aujourd'hui.");
      console.log("Revenez demain petu-être ?");
    }

  }
  divTextNavbar.addEventListener("keydown", changeOnKeyDown);
}


// Exécution principale du programme :

printNumberOfClick();

showNavbarOnClickToggle();

changeTextColorFirstCard();

changeTextColorSecondCard();

killBootstrapCssLink();

reduceCardsOnClick();

permuteCardsByTheRight();

permuteCardsByTheLeft();

resizeByKeypress();
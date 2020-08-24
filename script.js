// Fonctionnalité 1 :
// ------------------
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇
// Fonctionnalité 1-bis :
// ----------------------
// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x
// qui commence à 1 et s'incrémente de +1 à chaque clic.


// 1/ On récupère l'objet console :
// --------------------------------
let fooElt = document.getElementsByTagName("footer")[0];

// 2/ On définit la function :
// ---------------------------
let numberOfFooterClick = 0;
let onFooterClick = function() {
  // On affiche clique en console :
  numberOfFooterClick++;
  console.log("clique : " + numberOfFooterClick);  
};

// 3/ On écoute le footer, sur l'action click, et on lui relie l'action de la function
// -----------------------------------------------------------------------------------
fooElt.addEventListener("click", onFooterClick);



// Fonctionnalité 2 :
// ------------------
// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ?
// C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.

// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que
// si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader


// 1/ On récupère le "Hamburger Menu" : toggleButtonElt
let toggleButtonElt = document.getElementsByClassName("navbar-toggler")[0];

// 2/ On récupère la div d'id navbarHeader (contient la classe collapse)
let navbarHeaderElt = document.getElementById('navbarHeader');

// 3/ Définition de la fonction pour retirer ou ajouter la class collapse de navbarHeaderElt:
let onTogglerClick = function () {
    navbarHeaderElt.classList.toggle('collapse');
};
// Avant lecture de l'indice :
// ---------------------------
// let onTogglerClick = function () {
//   if (navbarHeaderElt.classList.contains('collapse')) {
//     navbarHeaderElt.classList.remove('collapse');
//   } else {
//     navbarHeaderElt.classList.add('collapse');
//   }
// };

// 4/ On écoute le toggler, sur l'action click, et on lui relie l'action de la function onTogglerClick
// ---------------------------------------------------------------------------------------------------
toggleButtonElt.addEventListener("click", onTogglerClick);



// Fonctionnalité 3 (Après les indices) :
// --------------------------------------
// Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).
// Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).
// Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !
let firstCardElt = document.getElementsByClassName("card")[0];

// Fonctionnalité 3 (avant les indices):
// -------------------------------------
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).
// À toi de jouer !

// 1/ Sélection du boutton edit de la première card :
let editCardButtonElt1 = document.getElementsByClassName("btn-success")[0]; // bouton de la première "card"
// 2/ Sélection de la div du texte de la première card :
// let textCardElt1 = document.getElementsByClassName("card-text")[0]; // texte de la première "card"

// 3/ Function : Mise en "red" de style.color
let onEditButtonClick1 = function() {
  // textCardElt1.style.color = "red";
  firstCardElt.style.color = "red";
};

// 4/ On écoute le "Edit boutton", sur l'action click, et on lui relie l'action de la function onEditButtonClick
// -------------------------------------------------------------------------------------------------------------
editCardButtonElt1.addEventListener("click", onEditButtonClick1);


// Fonctionnalité 4 :
// ------------------
// On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card
// va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte.
// C'est plus compliqué que sur une classe.
// Fonctionnalité 3 (Après les indices) :
// --------------------------------------
// 1/ Sélection de la deuxième card :
let secondCardElt = document.getElementsByClassName("card")[1];

// 2/ Sélection du boutton edit de la première card :
let editCardButtonElt2 = secondCardElt.getElementsByClassName("btn-success")[0]; // bouton de la première "card"

// 3/ Function : Mise en "green" de style.color
let onEditButtonClick2 = function() {
  if (secondCardElt.style.color === 'green') {
    secondCardElt.style.color = ""; // retour à la "default value" !
  } else {
    secondCardElt.style.color = "green";    
  }
};

// 4/ On écoute le "Edit boutton", sur l'action click, et on lui relie l'action de la function onEditButtonClick
// -------------------------------------------------------------------------------------------------------------
editCardButtonElt2.addEventListener("click", onEditButtonClick2);


// Fonctionnalité 5 :
// ------------------
// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher :
// Si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au
// fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

// Indice : Cherche sur Google comment désactiver le tag <link> avec JavaScript.

// 1/ Sélection de la navbar : On va sélectionner tout le <header> car la navbar peut-être en postion déployée ou non (Toggle).
// ---------------------------
let navbarElt = document.getElementsByTagName("header")[0];
console.log(navbarElt);

// 2/ On sélectionne le tag <link> qui relie au css de bootstrap (et on garde son parentNode : parentLinkCssElt (<head>)
// -------------------------------
linkCssElt = document.getElementsByTagName("link")[0];
parentLinkCssElt = linkCssElt.parentNode;

// 3/ fonction : faire diparaitre le tag <link> vers le CSS de Bootstrap
// -------------
let onNavbarClick = function() {
    console.log("double click Navbar !!!!!!!!!!")
  if (document.getElementsByTagName("link")[0]) {
    parentLinkCssElt.removeChild(linkCssElt); // On retire le link
  } else {
    parentLinkCssElt.appendChild(linkCssElt); // On ré-attache le link au head
  }
}

// 4/On écoute le navbarElt, sur l'action double-click, et on lui relie l'action de la function onNavbarClick
// ----------------------------------------------------------------------------------------------------------
navbarElt.addEventListener("dblclick", onNavbarClick);


    // document.getElementsByClassName("card")[2].style.color = "blue";


// Fonctionnalité 6 :
// ------------------
// T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

// Indice 1 : Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.

// Indice 2 : Tu vas devoir appliquer les leçons apprises sur la fonctionnalité 2 (toggle de la classe "collapse") et sur la fonctionnalité 3 (toggle sur le style appliqué à l'image : tantôt on lui rajoute "width: 20 %;", tantôt on lui enlève).

// Indice 3 : Une fois que ça marche sur une card, fait une boucle for sur la liste des 6 cards (a priori tu as extrait la card d'une liste d'éléments HTML non?) pour appliquer un addEventListener à chacune. /!\ mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… => clique ici pour accéder à une ressource qui parle de ça

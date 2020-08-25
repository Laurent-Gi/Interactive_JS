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
let editCardButtonElt1 = document.getElementsByClassName("btn-outline-secondary")[0]; // bouton de la première "card"
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
let editCardButtonElt2 = secondCardElt.getElementsByClassName("btn-outline-secondary")[0]; // bouton de la première "card"

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
// console.log(navbarElt);

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
// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le
// texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa
// souris, la card redevient normale !
// Indice 1 : Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.
// Indice 2 : Tu vas devoir appliquer les leçons apprises sur la fonctionnalité 2 (toggle de la classe "collapse") et sur la fonctionnalité 3
// (toggle sur le style appliqué à l'image : tantôt on lui rajoute "width: 20 %;", tantôt on lui enlève).
// Indice 3 : Une fois que ça marche sur une card, fait une boucle for sur la liste des 6 cards (a priori tu as extrait la card d'une liste d'éléments HTML non?) pour
// appliquer un addEventListener à chacune. /!\ mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… => clique ici pour accéder à une ressource
// qui parle de ça

// 1/ Boucle sur toutes les cards
for (let cardElt of document.getElementsByClassName("card")) {

// 2/ On récupère le bouton view (btn-success) de la card
let buttonView = cardElt.getElementsByClassName("btn-success")[0];
// 3/ On récupère l'image
let myImg = cardElt.getElementsByClassName("card-img-top")[0];
// 4/ On récupère le card-text
let textCardElt = cardElt.getElementsByClassName("card-text")[0];


// 5/ Définition de la fonction : le texte disparait, l'image est réduite à 20%
let onViewBouttonMouseOver = function() {
  textCardElt.classList.toggle("collapse") // selon suggestion : total bootstrap

  if (myImg.style.width === "20%") { // ou sans le collapse on peut aussi faire : if (textCardElt.style.display)
    myImg.style.width = "";         // retour à la taille par défaut
    // textCardElt.style.display = ""; // retour à "block" par défaut => pratique aussi ça !
  } else {
    myImg.style.width = "20%";
    // textCardElt.style.display = "none";
  }
}

// 6/ On relie l'écoute du bouton view et de la présence de la souris dessus
buttonView.addEventListener("mouseover",onViewBouttonMouseOver);
}


// Fonctionnalité 7 :
// ------------------
// Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche).
// On va pouvoir faire tourner les cards !

// Indice : Cette fonctionnalité n'est pas ultra complexe en fait : il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

// Petite remarque : tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton
// "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.

// 1/ On récupère le bouton gris ==>
// previousButtonElt = document.getElementsByClassName('btn-primary')[0];
let nextButtonElt = document.getElementsByClassName('btn-secondary')[0];

// 2/ Fonction permute
let permuteOnNextButton = function(e) {
  e.preventDefault(); // Evite de revenir à top (recharger la page) à cause du lien "#" : se voit quand on a un scroll down 
  // La card 6 :
  card6Elt = document.getElementsByClassName("col-md-4")[5];
  parentCardsElt = card6Elt.parentNode;

  // On insère alors la card6 avant la card 1 : insertAdjacentElement mieux adapté ici
  parentCardsElt.insertAdjacentElement('afterbegin',card6Elt);
  // card1Elt = document.getElementsByClassName("col-md-4")[0];
  // parentCardsElt.insertBefore(card6Elt, card1Elt);
}

// 3/ On relie l'écoute du click bouton "==>" (nextButtonElt) avec le 
nextButtonElt.addEventListener("click", permuteOnNextButton);


// Fonctionnalité 8 :
// ------------------
// Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer
// en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈
// Indice 1 : Premier piège : il y a un lien HTML sur le bouton et si tu cliques dessus, une page s'ouvre ! Il faut que tu bloques ce comportement par défaut
// (via l'objet event - cf le cours).
// Indice 2 : Deuxième piège : tu as utilisé "insertBefore" pour la fonctionnalité précédente mais il n'y a pas de "insertAfter". Une solution est de considérer qu'un
// "insertAfter un élément A" serait, s'il existait, équivalent à faire un "insertBefore sur le nœud APRES l'élément A". 
// ==> Et tu peux pointer sur un noeud APRES un élément en faisant"lastCard.nextSibling". <== (Pas utile en fait mais bon à savoir) !

// 1/ On récupère le bouton bleu  <==
previousButtonElt = document.getElementsByClassName('btn-primary')[0];

// 2/ Fonction permute
let permuteOnPreviusButton = function(e) {
  e.preventDefault(); // on bloque le comportement par défaut du bouton : e.preventDefault !
  // La card 1, doit passer en 6 (afterend)
  card1Elt = document.getElementsByClassName("col-md-4")[0];
  // card6Elt = document.getElementsByClassName("col-md-4")[5];
  parentCardsElt = card1Elt.parentNode;

  // On insère alors la card1 après le dernier enfant : insertAdjacentElement mieux adapté ici
  parentCardsElt.insertAdjacentElement('beforeend',card1Elt);
  // parentCardsElt.insertBefore(card6Elt, card1Elt);
}

// 3/ On relie l'écoute du click bouton "==>" (nextButtonElt) avec le 
previousButtonElt.addEventListener("click", permuteOnPreviusButton);



// Fonctionnalité 9 :
// ------------------
// Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les
// moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :

// La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.

// Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.

// Indice 1 : L'event à utiliser est "keypress", appliqué au texte "JS & Events" (ou, mieux, à une div le contenant).
// Indice 2 : Pour modifier le rendu visuel de toute la page, il faut que tu joues avec les classes de <body>.
// Indice 3 : Pour mettre tout sur 4 colonnes, rajoute la classe col-4. Pour les placer au milieu ou à droite, rajoute la classe offset-md-4 ou offset-md-8.
// Indice 4 : Pour éviter que les classes s'accumulent, et pour que chaque touche ait un comportement propre, retire toutes les classes du <body> à chaque fois qu'un
//            "keypress" est détecté. Ensuite seulement tu rajoutes les classes nécessaires.

// 1/ On récupère la div du texte "JS & Events"
let divTextNavbar = document.querySelector("a.navbar-brand");

// 2/ On récupère le body pour jouer sur le rendu visuel class="col-4"
let bodyElt = document.getElementsByTagName('body')[0];

let removeBodyClasse = function() { // Pour partir sur du propre ou revenir à la base
  bodyElt.classList.remove("col-4");
  bodyElt.classList.remove("offset-md-4");
  bodyElt.classList.remove("offset-md-8");
}

// 3/ On définit la fonction
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

// 3/ On relie l'écoute du click bouton "==>" (nextButtonElt) avec le 
divTextNavbar.addEventListener("keydown", changeOnKeyDown);
// divTextNavbar.addEventListener("keypress", changeOn);


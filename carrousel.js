//---------------------------------------------------------------------------------------
//Déclaration de tableau d'image avec les legendes
//---------------------------------------------------------------------------------------
var o=[{image:'images/1.jpg', leg:'Image 1'},{image:'images/2.jpg',leg:'Image 2'},{image:'images/3.jpg',leg:'Image 3'},{image:'images/4.jpg',leg:'Image 4'},{image:'images/5.jpg',leg:'Image 5'},{image:'images/6.jpg',leg:'Image 6'},{image:'images/7.jpg',leg:'Dark dreams'},{image:'images/8.jpg',leg:'Cat vocation'},{image:'images/9.jpg',leg:'Earth'},{image:'images/10.jpg',leg:'Web Developper'}];
//var n=[{texte:'image 1'},{texte:'image 2'},{texte:'image 3'},{texte:'image 4'},{texte:'image 5'},{texte:'image 6'}];
var x=document.getElementsByTagName('img');
//---------------------------------------------------------------------------------------
//Avancement et récule en click 
//---------------------------------------------------------------------------------------
var i=0;
function suivant(){
	if (i<o.length-1) {
	i++;
  document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
}
else{
	i=0;
  document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
}

x[0].setAttribute('src',o[i].image);


}

function prev(){
if (i>0) {
      i--;
      document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
  }
  else{
  	i=o.length-1;
    document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
  }
	x[0].setAttribute('src',o[i].image);
}
//----------------------------------------------------------------------------
//Avancement automatique arrét
//----------------------------------------------------------------------------
var i=0;
var Var;
function commencer() {
y=document.getElementById('player');
y.classList.add('hidden');
y.classList.remove('showen');

z=document.getElementById('stopen');

z.classList.remove('hidden');
z.classList.add('showen');
    
    Var = setInterval(function(){
        if(i<o.length-1){
            i++;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }else{
            i=0;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }
x[0].setAttribute('src',o[i].image);
        
    }, 1000);
}

function arreter(y){
z=document.getElementById('player');

z.classList.remove('hidden');
z.classList.add('showen');
y.classList.remove('showen');
y.classList.add('hidden');
clearInterval(Var);
}

//------------------------------------------------------------------------
//Avancement aléatoire et arrét 
//------------------------------------------------------------------------
function getRandomInteger(min, max)
{
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var var2;
function rand (y){
y.classList.add('hidden');
y.classList.remove('showen');
z=document.getElementById('rans');
z.classList.remove('hidden');
z.classList.add('showen');
    Var2 = setInterval(function(){
      i=getRandomInteger(0,o.length-1);
        if(i<o.length-1){
            i++;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }else{
            i=getRandomInteger(0,o.length-1);
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }
x[0].setAttribute('src',o[i].image);
        
    }, 1000);
}
function rands(y){

y.classList.remove('showen');
y.classList.add('hidden');
z=document.getElementById('ran');
z.classList.remove('hidden');
z.classList.add('showen');

clearInterval(Var2);
}
//------------------------------------------------------------------------------------
//Affichage et disparition de barre d'outil
//------------------------------------------------------------------------------------

function showit(y){

y.classList.toggle('hidden');
z=document.getElementById('down');
z.classList.toggle('hidden');

w=document.getElementById('btt');
w.classList.toggle('hidden');
 
}
function hideit(y){
z=document.getElementById('right');
z.classList.toggle('hidden');
y.classList.toggle('hidden');
w=document.getElementById('btt');
w.classList.toggle('hidden');

}
//-----------------------------------------------------------------------------------
//Faire réculer automatique 
//-----------------------------------------------------------------------------------
var var3;
function recule(y) {
y.classList.toggle('hidden');
z=document.getElementById('reculearr');
z.classList.toggle('hidden');

    Var3 = setInterval(function(){
        if(i>0){
            i--;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }else{
            i=o.length-1;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }
x[0].setAttribute('src',o[i].image);
        
    }, 1000);
}

function reculearr(y){
y.classList.toggle('hidden');
z=document.getElementById('recule')
z.classList.remove('hidden');
  clearInterval(Var3);

}
//----------------------------------------------------------------------------------------------------
//Touche de clavier
//----------------------------------------------------------------------------------------------------
// Codes des touches du clavier.
const TOUCHE_ESPACE = 32;
const TOUCHE_GAUCHE = 37;
const TOUCHE_DROITE = 39;
function installEventHandler(selector, type, eventHandler)
{
    var domObject;

    // Récupération du premier objet DOM correspondant au sélecteur.
    domObject = document.querySelector(selector);

    // Installation d'un gestionnaire d'évènement sur cet objet DOM.
    domObject.addEventListener(type, eventHandler);
}
function onSliderKeyUp(event)
{
    /*
     * Les gestionnaires d'évènements d'appui sur une touche (évènements
     * keydown, keyup, keypress) contiennent une propriété keyCode dans l'objet
     * event représentant le code de la touche du clavier.
     *
     * Il existe de très nombreux codes, plus ou moins standards, voir la page :
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
     */

    switch(event.keyCode)
    {
        case TOUCHE_DROITE:
        // On passe à la slide suivante.
        suivant();
        break;

        case TOUCHE_ESPACE:
        // On démarre ou on arrête le carrousel.
        commencer();
        break;
        
        case TOUCHE_GAUCHE:
        // On passe à la slide précédente.
        prev();
        break;
    }
}
/*
     * L'évènement d'appui sur une touche doit être installé sur l'ensemble de la
     * page, on ne recherche pas une balise en particulier dans l'arbre DOM.
     *
     * L'ensemble de la page c'est la balise <html> et donc la variable document.
     */
    document.addEventListener('keyup', onSliderKeyUp);
    // Equivalent à installEventHandler('html', 'keyup', onSliderKeyUp);
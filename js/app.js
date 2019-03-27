var app = {
  init: function() {

    app.generateMenus();
    app.generateArdoise();
  },
  activeMenu: 'squid',
  activeModel: [],
  fonctionPourChaqueMenu: function(menu, index){

    var navigation = document.querySelector('.select-model');
    var menuElement = document.createElement('a');
    menuElement.textContent = menu;
    menuElement.href="#";
    menuElement.classList = "menu-item";
    menuElement.dataset.textMenu = menu;
    menuElement.dataset.menuIndex = index;
    menuElement.addEventListener('click', app.handleMenuClick);
    navigation.appendChild(menuElement);
  },
  generateMenus: function(){
    // console.log('début génération menus');
    var menuArray = Object.keys(map.models);
   
    menuArray.forEach(app.fonctionPourChaqueMenu); 
  },
  handleMenuClick: function(event){
    var cible = event.target;
    app.activeMenu = cible.dataset.textMenu;
    app.generateArdoise()
  },
  creerDessin: function(){

    app.activeModel = map.models[app.activeMenu];

    app.activeModel.forEach(app.genererUneLigne);
  },
  genererUneLigne: function(elementDuTableau, indexElement){

    var divLigne = document.createElement('div');
    divLigne.classList = "ligne ";
    
    var ligneArray = elementDuTableau.split("");

    var ligneGeneree = ligneArray.map(app.genererCellule);

    var ardoise = document.querySelector('.ardoise');
    ligneGeneree.forEach(function(divCellule){
      divLigne.appendChild(divCellule);
    })
    
    
    ardoise.appendChild(divLigne);
  },
  genererCellule: function(lettre, index){
    var div = document.createElement('div');
    var types = map.types;
    var maClasse = types[lettre];
    div.classList = "cell " + maClasse;
    return div;

  },
  generateArdoise: function(){
    var container = document.getElementById('invader');
    container.innerHTML = "";
    var ardoise = document.createElement('div');
    ardoise.classList = "ardoise";
    ardoise.textContent = app.activeMenu;
    container.appendChild(ardoise);
    app.creerDessin()
  }
};

document.addEventListener('DOMContentLoaded', app.init);

var tableauExemple = ["tata", "toto", "titi"];

var functionAExecuterPourChaqueElemt = function(elementDuTableau, indexElement){
  console.log(elementDuTableau, indexElement);
}

tableauExemple.forEach(functionAExecuterPourChaqueElemt);
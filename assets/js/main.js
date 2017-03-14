//Tabs de navegador
var mostrarOcultar = function(divtexte) {

  var text1 = document.getElementById('contenido-1');
  var text2 = document.getElementById('contenido-2');
  var text3 = document.getElementById('contenido-3');
  var text4 = document.getElementById('contenido-4');

  if (divtexte == 'contenido-1') {
    text1.style.display = 'block';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
  }
  else if (divtexte == 'contenido-2') {
    text1.style.display = 'none';
    text2.style.display = 'block';
    text3.style.display = 'none';
    text4.style.display = 'none';
  }
  else if (divtexte == 'contenido-3') {
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'block';
    text4.style.display = 'none';
  }
  else if (divtexte == 'contenido-4') {
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'block';
  }
}

//Abrir tiptool
var addResources = document.getElementById('specify-resources');
addResources.addEventListener('click', function(e) {
  e.preventDefault();
  var tooltipBubble = document.getElementById('bubble');
  tooltipBubble.classList.toggle("show");
});

//Cerrar Tiptool
var closeBubble = document.getElementById('close-bubble');
closeBubble.addEventListener('click', function(e) {
  e.preventDefault();
  var tooltipOcultar = document.getElementById('bubble');
  tooltipOcultar.classList.toggle("show");
});

//Objeto agent
function Agent(type, status, web, ip, path) {
  this.type = type;
  this.status = status;
  this.web = web;
  this.ip = ip;
  this.path = path;
  this.resources = [];
  this.id = 0;

  this.addResources = function () {
    var agentsDisplay = document.getElementById('Agents-display');

    var userResources = document.createElement('div');
    userResources.className = "user-resources";
    agentsDisplay.appendChild(userResources);

    var web = document.createElement('span');
    web.className = "web";
    agentsDisplay.appendChild(web);

    var tooltip = document.createElement('div');
    tooltip.className = "tooltip";
    agentsDisplay.appendChild(tooltip);

      var specifyResources = document.createElement('span');
      specifyResources.id = "specify-resources";
      tooltip.appendChild(specifyResources);

      var resources = document.createElement('span');
      resources.innerHTML = " | Resources:"
      tooltip.appendChild(resources);

      var tooltipText = document.createElement('div');
      tooltipText.id = "bubble";
      tooltipText.className = "tooltiptext";
      tooltip.appendChild(tooltipText);

        var enterResources = document.createElement('span');
        enterResources.innerHTML = "(Separate multiple resouces names with commas)";
        tooltipText.appendChild(enterResources);

        var inputResources = document.createElement('input');
        inputResources.type = "text";
        inputResources.name = "resources";
        tooltipText.appendChild(inputResources);

        var btAddResources = document.createElement('button');
        btAddResources.type = "button";
        btAddResources.name = "bts-bubble";
        btAddResources.id = "add-resources"
        btAddResources.innerHTML = "Add Resources";
        tooltipText.appendChild(btAddResources);

        var btClose = document.createElement('button');
        btClose.type = "button";
        btClose.name = "bts-bubble";
        btClose.id = "close-bubble"
        btClose.innerHTML = "Close";
        tooltipText.appendChild(btClose);
  }
}

//Array de agents según type
function AgentsManager() {
  this.all = [];
  this.physicall = [];
  this.virtual = [];
}

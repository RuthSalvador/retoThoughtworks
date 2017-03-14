
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
    web.innerHTML = this.web;
    userResources.appendChild(web);

    var ip = document.createElement('span');
    ip.className = "web";
    ip.innerHTML = this.ip;
    userResources.appendChild(ip);

    var path = document.createElement('span');
    path.className = "web";
    path.innerHTML = this.path;
    userResources.appendChild(path);

    var salto = document.createElement('br');
    userResources.appendChild(salto);

    var tooltip = document.createElement('div');
    tooltip.className = "tooltip";
    userResources.appendChild(tooltip);

      var specifyResources = document.createElement('span');
      specifyResources.id = "specify-resources";
      specifyResources.innerHTML = "Specify Resources";
      specifyResources.addEventListener('click', function (e) {
        e.preventDefault();
        var tooltipBubble = document.getElementById('bubble');
        tooltipBubble.classList.toggle("show");
      });

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
        inputResources.className = "input";
        inputResources.type = "text";
        inputResources.id = "input-resources";
        tooltipText.appendChild(inputResources);


        var btAddResources = document.createElement('button');
        btAddResources.type = "button";
        btAddResources.name = "bts-bubble";
        btAddResources.id = "add-resources"
        btAddResources.innerHTML = "Add Resources";

        btAddResources.addEventListener('click', function (e) {
          e.preventDefault();
          var newInput = inputResources.value;
          var inputSplited = newInput.split(',');
          console.log(inputSplited);
          agent.resources.push(inputSplited);
          console.log(agent);
        });

        tooltipText.appendChild(btAddResources);

        var btClose = document.createElement('button');
        btClose.type = "button";
        btClose.name = "bts-bubble";
        btClose.id = "close-bubble"
        btClose.innerHTML = "Close";

        btClose.addEventListener('click', function (e) {
          e.preventDefault();
          var tooltipOcultar = document.getElementById('bubble');
          console.log(tooltipOcultar);
          tooltipOcultar.classList.toggle("show");
          inputResources.value = "";
        });

        tooltipText.appendChild(btClose);
  }
}

var agent = new Agent("physicall", "building", "bjstdmngbgr02.thougthworks.com", "23.4324.24", "/var/lib/cruise-agent");
agent.addResources();
console.log(agent);

//Abrir tiptool
/*
var openBubble = document.getElementById('specify-resources');
openBubble.addEventListener('click', function(e) {
  e.preventDefault();
  var tooltipBubble = document.getElementById('bubble');
  tooltipBubble.classList.toggle("show");
});
*/
/*
//Cerrar Tiptool
var closeBubble = document.getElementById('close-bubble');
closeBubble.addEventListener('click', function(e) {
  e.preventDefault();
  var tooltipOcultar = document.getElementById('bubble');
  console.log(tooltipOcultar);
  tooltipOcultar.classList.toggle("show");
  document.getElementsByClassName('input')[0].value = "";
});
*/
/*
//Agregar resources
var addResources = document.getElementById('add-resources');
addResources.addEventListener('click', function(e) {
  e.preventDefault();
  var newInput = (document.getElementsByClassName('input')[0].value);
  var inputSplited = newInput.split(',');
  console.log(inputSplited);
  agent.resources.push(inputSplited);
  console.log(agent);
});
*/
//Array de agents según type
function AgentsManager() {
  this.all = [];
  this.physicall = [];
  this.virtual = [];
}

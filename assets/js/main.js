//Objeto agent
function Agent(type, status, web, ip, path, agentId ) {
  this.type = type;
  this.status = status;
  this.web = web;
  this.ip = ip;
  this.path = path;
  this.agentId = agentId;
  this.resources = [];

  this.addResources = function () {
    var newAgentId = this.agentId;
    console.log(newAgentId);
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
    ip.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; | " + this.ip;
    userResources.appendChild(ip);

    var path = document.createElement('span');
    path.className = "web";
    path.innerHTML = " | " + this.path;
    userResources.appendChild(path);

    var salto = document.createElement('br');
    userResources.appendChild(salto);

    var tooltip = document.createElement('div');
    tooltip.className = "tooltip";
    userResources.appendChild(tooltip);

      var specifyResources = document.createElement('span');
      specifyResources.id = "specify-resources-"+newAgentId;
      specifyResources.innerHTML = " + Specify Resources";
      specifyResources.addEventListener('click', function (e) {
        e.preventDefault();
        var tooltipBubble = document.getElementById('bubble-'+newAgentId);
        tooltipBubble.classList.toggle("show");
      });

      tooltip.appendChild(specifyResources);

      var resources = document.createElement('span');
      resources.innerHTML = " | Resources:"
      tooltip.appendChild(resources);

      var resourcesSpan = document.createElement('span');
      tooltip.appendChild(resourcesSpan);

      var tooltipText = document.createElement('div');
      tooltipText.id = "bubble-"+newAgentId;
      tooltipText.className = "tooltiptext";
      tooltip.appendChild(tooltipText);

        var enterResources = document.createElement('span');
        enterResources.innerHTML = "(Separate multiple resouces names with commas)<br>";
        tooltipText.appendChild(enterResources);

        var inputResources = document.createElement('input');
        inputResources.className = "input";
        inputResources.type = "text";
        inputResources.id = "input-resources-"+newAgentId;
        tooltipText.appendChild(inputResources);

        var salto2 = document.createElement('br');
        tooltipText.appendChild(salto2);

        var btAddResources = document.createElement('button');
        btAddResources.type = "button";
        btAddResources.name = "bts-bubble";
        btAddResources.id = "add-resources-"+newAgentId;
        btAddResources.innerHTML = "Add Resources";
        var arrResources = this.resources;
        btAddResources.addEventListener('click', function (e) {
          e.preventDefault();
          var newInput = inputResources.value;
          var inputSplited = newInput.split(',');
          arrResources = arrResources.concat(inputSplited);
          console.log (arrResources);

          // agregando for para los inputs
          resourcesSpan.innerHTML = "";

          for (var i = 0; i < arrResources.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(arrResources[i]))
            var newResource = document.createElement('input');
            newResource.className = 'newResource';
            newResource.type = 'button';
            newResource.value = 'X';

            label.appendChild(newResource);
            resourcesSpan.appendChild(label);

            newResource.addEventListener('click', function(e){
              if (e.target.parentNode){
                e.target.parentNode.remove();
              }

            });
          }

        });

        tooltipText.appendChild(btAddResources);

        var btClose = document.createElement('button');
        btClose.type = "button";
        btClose.name = "bts-bubble";
        btClose.id = "close-bubble-"+newAgentId;
        btClose.innerHTML = "Close";

        btClose.addEventListener('click', function (e) {
          e.preventDefault();
          var tooltipOcultar = document.getElementById('bubble-'+newAgentId);
          //console.log(tooltipOcultar);
          tooltipOcultar.classList.toggle("show");
          inputResources.value = "";
        });

        tooltipText.appendChild(btClose);
  }
}

var agent = new Agent("physicall", "building", "bjstdmngbgr02.thougthworks.com", "192.168.1.2", "/var/lib/cruise-agent", 0);
agent.addResources();

var agent2 = new Agent("physicall", "building", "bjstdmngbgr03.thougthworks.com", "192.168.1.2", "/var/lib/cruise-agent", 1);
agent2.addResources();

function AgentsManager() {
  this.all = [];
  this.physicall = [];
  this.virtual = [];
}

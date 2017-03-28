//Objeto agent
function Agent(type, status, web, ip, path, agentId) {
  this.type = type;
  this.status = status;
  this.web = web;
  this.ip = ip;
  this.path = path;
  this.agentId = agentId;
  this.resources = [];
  this.deny = "";

  this.addResources = function () {
    var newAgentId = this.agentId;
    console.log(newAgentId);
    var agentsDisplay = document.getElementById('Agents-display');

    var userResources = document.createElement('div');
    agentsDisplay.appendChild(userResources);

    var circle = document.createElement('div');
    circle.className = "circle";
    userResources.appendChild(circle);

    var agentDatos = document.createElement('div');
    agentDatos.className = 'agent-datos';
    userResources.appendChild(agentDatos);

    var web = document.createElement('span');
    web.className = "web";
    web.innerHTML = this.web;
    agentDatos.appendChild(web);

    var status = document.createElement('span');
    status.className = "status";
    status.innerHTML = "| "+ this.status;
    agentDatos.appendChild(status);
    if (this.status == "idle"){
      userResources.className = "user-resources1";
    } else if (this.status == "building"){
      userResources.className = "user-resources2";
    }

    var ip = document.createElement('span');
    ip.className = "ip";
    ip.innerHTML = "&nbsp; | " + this.ip;
    agentDatos.appendChild(ip);

    var path = document.createElement('span');
    path.className = "path";
    path.innerHTML = " | " + this.path;
    agentDatos.appendChild(path);

    var salto = document.createElement('br');
    agentDatos.appendChild(salto);

    var tooltip = document.createElement('div');
    tooltip.className = "tooltip";
    agentDatos.appendChild(tooltip);

      var specifyResources = document.createElement('span');
      specifyResources.id = "specify-resources-"+newAgentId;
      specifyResources.className = "specify-resources"
      specifyResources.innerHTML = " + <u>Specify Resources</u>";
      specifyResources.addEventListener('click', function (e) {
        e.preventDefault();
        var tooltipBubble = document.getElementById('bubble-'+newAgentId);
        tooltipBubble.classList.toggle("show");
        focusInput.focus();
      });

      tooltip.appendChild(specifyResources);

      var resources = document.createElement('span');
      resources.innerHTML = " | Resources: &nbsp;"
      tooltip.appendChild(resources);

      var resourcesDiv = document.createElement('div');
      resourcesDiv.className = "div-spans";
      tooltip.appendChild(resourcesDiv);

      var deny = document.createElement('span');
      deny.className = "denyClass";
      tooltip.appendChild(deny);
      //Contador de status
      var countingIdle = 1;
      var countingBuilding = 1;

      if (this.status == "idle"){
        deny.innerHTML = " <i class='material-icons md-18'>&#xE14B;</i> <u>Deny</u>";
        //Imprimir status idle
        var printIdle = document.getElementById('idle');
        countingIdle++;
        printIdle.innerHTML = countingIdle;

      } else if (this.status == "building"){
        deny.innerHTML = "";
        //Imprimir status building
        var printBuilding = document.getElementById('building');
        countingBuilding++;
        printBuilding.innerHTML = countingBuilding;
      }

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
        inputResources.size="67";
        inputResources.id = "input-resources-"+newAgentId;
        tooltipText.appendChild(inputResources);
        var focusInput = document.getElementById(inputResources.id);

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

          if(newInput == ""){
            alert ('Please, specify resources');
            focusInput.focus();
          } else if (newInput != ""){
          arrResources = arrResources.concat(inputSplited);
          console.log (arrResources);
          }

          // agregando for para los inputs
          resourcesDiv.innerHTML = "";

          for (var i = 0; i < arrResources.length; i++) {

            if (arrResources[i] != undefined) {
              var spanLabelBtn = document.createElement('span');
              resourcesDiv.appendChild(spanLabelBtn);
              var label = document.createElement("label");
              label.appendChild(document.createTextNode(arrResources[i]))
              label.className = "name-resource";

              var deleteResource = document.createElement('button');
              deleteResource.id = i;
              deleteResource.className = 'deleteResource';
              deleteResource.innerHTML='x';
              deleteResource.type = 'button';
              deleteResource.value = 'x';

              spanLabelBtn.appendChild(label);
              spanLabelBtn.appendChild(deleteResource);
              deleteResource.addEventListener('click', function(e){
                var currentId = e.target.id;

                function findIndex(id) {
                var btsClass = document.getElementsByClassName('deleteResource');
                for (var i = 0; i < btsClass.length; i++) {
                  if (btsClass[i].id === id)
                    return i;
                  }
                return -1;
                }

                var index = findIndex(currentId);
                console.log(index);

                //Elimino recurso de HTML
                if (e.target.parentNode){
                  e.target.parentNode.remove();
                }
                //Elimino recurso de arreglo
                arrResources.splice(index, 1);

                console.log(arrResources);

              });
            }
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
          var tooltipOcultar = document.getElementById('bubble-'+ newAgentId);
          tooltipOcultar.classList.toggle("show");
          inputResources.value = "";
          console.log(arrResources);

        });

        tooltipText.appendChild(btClose);
  }
}

var AgentManager = {
  all : [],
  physicall : [agent, agent2, agent3, agent4],
  virtual : [],
}

var agent = new Agent("physicall", "idle", "bjstdmngbgr02.thougthworks.com", "192.168.1.2", "/var/lib/cruise-agent", 0);
agent.addResources();
AgentManager.all.push(agent);

var agent2 = new Agent("physicall", "building", "bjstdmngbgr03.thougthworks.com", "192.168.1.3", "/var/lib/cruise-agent", 1);
agent2.addResources();
AgentManager.all.push(agent2);

var agent3 = new Agent("physicall", "building", "bjstdmngbgr04.thougthworks.com", "192.168.1.4", "/var/lib/cruise-agent", 2);
agent3.addResources();
AgentManager.all.push(agent3);

var agent4 = new Agent("physicall", "idle", "bjstdmngbgr05.thougthworks.com", "192.168.1.5", "/var/lib/cruise-agent", 3);
agent4.addResources();
AgentManager.all.push(agent4);

console.log(AgentManager.all);

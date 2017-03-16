//Objeto agent
function Agent(type, status, web, ip, path, agentId ) {
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
    //userResources.className = "user-resources1";
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
    status.innerHTML = "&nbsp;&nbsp;&nbsp; | "+ this.status;
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
      if (this.status == "idle"){
        deny.innerHTML = " / <u>Deny</u>";
      } else if (this.status == "building"){
        deny.innerHTML = "";
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
              var index = e.target.id;
              console.log(index);
              arrResources.splice(index, 2);
              //delete arrResources[index];
             console.log(arrResources);

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
          var tooltipOcultar = document.getElementById('bubble-'+ newAgentId);
          //console.log(tooltipOcultar);
          tooltipOcultar.classList.toggle("show");
          inputResources.value = "";

        });

        tooltipText.appendChild(btClose);
  }
}

var agent = new Agent("physicall", "idle", "bjstdmngbgr02.thougthworks.com", "192.168.1.2", "/var/lib/cruise-agent", 0);
agent.addResources();

var agent2 = new Agent("physicall", "building", "bjstdmngbgr03.thougthworks.com", "192.168.1.3", "/var/lib/cruise-agent", 1);
agent2.addResources();

var agent3 = new Agent("physicall", "building", "bjstdmngbgr04.thougthworks.com", "192.168.1.4", "/var/lib/cruise-agent", 2);
agent3.addResources();

var agent4 = new Agent("physicall", "idle", "bjstdmngbgr05.thougthworks.com", "192.168.1.5", "/var/lib/cruise-agent", 3);
agent4.addResources();

function AgentsManager() {
  this.all = [];
  this.physicall = [];
  this.virtual = [];
}

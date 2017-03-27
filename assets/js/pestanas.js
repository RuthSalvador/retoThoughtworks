//Pestañas DASHBOARD, MY CRUISE, AGENTS y HELP
var tabsGeneral = document.getElementsByName('tabs-general');

for (var i = 0; i < tabsGeneral.length; i++) {
  tabsGeneral[i].addEventListener('click',function(e) {
    // e.preventDefault(); /* el evento no debe ser cancelable*/
    var currentTab = e.target.id;
    var dashboard = document.getElementById('dashboard-div');
    var cruise = document.getElementById('cruise-div');
    var agents = document.getElementById('agents-div');
    var help = document.getElementById('help-div');

    function show(tabShown) {
      tabShown.style.display = 'block';
    }
    function hide(tabHidden1, tabHidden2, tabHidden3) {
      tabHidden1.style.display = 'none';
      tabHidden2.style.display = 'none';
      tabHidden3.style.display = 'none';
    }

    if (currentTab == 'dashboard') {
    show(dashboard);
    hide(cruise, agents, help);

    }
    if (currentTab == 'cruise') {
    show(cruise);
    hide(dashboard, agents, help);
    }
    if (currentTab == 'agents') {
    show(agents);
    hide(dashboard, cruise, help);
    }
    if (currentTab == 'help') {
    show(help);
    hide(dashboard, agents, cruise);
    }
  });
}


var tabsAgent = document.getElementsByName('tabs-agent');

  for (var i = 0; i < tabsAgent.length; i++) {
    tabsAgent[i].addEventListener('click',function(e) {
      //e.preventDefault();
      var currentTabx = e.target.id;
      var all = document.getElementById('all-div');
      var physical = document.getElementById('physical-div');
      var virtual = document.getElementById('virtual-div');

      function show(tabShown) {
        tabShown.style.display = 'block';
      }
      function hide(tabHidden1, tabHidden2) {
        tabHidden1.style.display = 'none';
        tabHidden2.style.display = 'none';
      }

      if (currentTabx == 'all') {
      show(all);
      hide(physical, virtual);
      }
      if (currentTabx == 'physical') {
      show(physical);
      hide(all, virtual);
      }
      if (currentTabx == 'virtual') {
      show(virtual);
      hide(all, physical);
      }
    });
  }

"use strict";

let simpleLeagues = [{
    leagueCode: "PL",
    league: "Premier League",
    description: "Top level English football",
    teams: ["Manchester United", "Arsenal", "Liverpool", "Manchester City"]
},
{
    leagueCode: "LL",
    league: "La Liga",
    description: "Top level Spanish football",
    teams: ["Real Madrid", "Barcelona", "Valencia", "Atletico Madrid"]
},
{
    leagueCode: "SA",
    league: "Serie A",
    description: "Top level Italian football",
    teams: ["AC Milan", "Inder Milan", "Juventus"]
}
];


window.onload = function () {
    // load leagues dropdown when page first loads
    loadLeaguesDropdown();
    // connect onchange event handler for the leagues dropdown (hook up a function to it)
    // find the league dropdown
    const leagueDropdown = document.getElementById("leagueDropdown");
    leagueDropdown.onchange = onLeagueDropdownChanged;
    // connect onchange event handler for the team dropdown (hook up a function to it)
    // find the team dropdown
    const teamDropdown = document.getElementById("teamDropdown");
    teamDropdown.onchange = onTeamDropdownChanged;
}


function loadLeaguesDropdown() {
    // find the league dropdown
    const leagueDropdown = document.getElementById("leagueDropdown");
    
    // Add a "Select one..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    leagueDropdown.appendChild(selectOneOption);
    
    // loop thru the simpleLeagues array to create an <option> for each league
    for (let i = 0; i < simpleLeagues.length; i++) {
        let theOption = document.createElement("option"); // creates <option> element
        theOption.textContent = simpleLeagues[i].league;
        theOption.value = simpleLeagues[i].leagueCode;
        leagueDropdown.appendChild(theOption);
    }
    
    // find the team dropdown
    const teamDropdown = document.getElementById("teamDropdown");
    
    // Add a "Select league first..." <option>
    addSelectLeagueFirstOptionToTeamDropdown()
}


function onLeagueDropdownChanged() {
    // find the league and team dropdowns
    const leagueDropdown = document.getElementById("leagueDropdown");
    const teamDropdown = document.getElementById("teamDropdown");

    // erase previous team message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";

    // remove the previous teams from the team dropdown because the league has changed
    teamDropdown.options.length = 0;

    // find the league dropdown selection
    let selectedLeagueCode = leagueDropdown.value;

    // did they pick "Select one..." option"
    if (selectedLeagueCode == "") {

        // Add a "Select league first..." <option>
        addSelectLeagueFirstOptionToTeamDropdown();

        // if they don't pick a league, we can't load teams
        return;
    }

    // go use the selected leagueCode to find the matching league from the array
    let matchingLeague = simpleLeagues.find(arrayElement => arrayElement.leagueCode == selectedLeagueCode);
    
    // Add a "Select one..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    teamDropdown.appendChild(selectOneOption);
    
    // loop thru the teams in the matching league and create <option> elements for each
    for (let i = 0; i < matchingLeague.teams.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingLeague.teams[i];
        teamDropdown.appendChild(theOption);
    }
}


function onTeamDropdownChanged() {
   
    // find the league and team dropdowns
    const leagueDropdown = document.getElementById("leagueDropdown");
    const teamDropdown = document.getElementById("teamDropdown");
   
    // erase previous team message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
   
    // get the selected team
    let selectedTeam = teamDropdown.value;
   
    // if "Select one..." is picked, just exit the function
    if (selectedTeam == "") {
        return;
    }
   
    // get the selected league
    let selectedLeagueIndex = leagueDropdown.selectedIndex;
    let selectedLeague = leagueDropdown.options[selectedLeagueIndex].text;
  
    // build a message w/ team and league info and display in <p>
    let message = "Team: " + selectedTeam + "<br>" +
        "League: " + selectedLeague;
    messagePara.innerHTML = message;
}

function addSelectLeagueFirstOptionToTeamDropdown() {
    const teamDropdown = document.getElementById("teamDropdown");

     // Add a "Select league first..." <option>
     let selectOneOption = document.createElement("option"); // creates <option> element
     selectOneOption.textContent = "Select league first...";
     selectOneOption.value = "";
     teamDropdown.appendChild(selectOneOption);
}
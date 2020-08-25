// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  let takeoffBtn = document.getElementById("takeoff");
  let flightStatus = document.getElementById("flightStatus");
  let shuttleBackground = document.getElementById("shuttleBackground");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  let landBtn = document.getElementById("landing");



  takeoffBtn.addEventListener("click", function() {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(response) {
      flightStatus.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      changeHeight(false, false, true);
    }
  })

  landBtn.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged!");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    changeHeight(false,true);
  })




}


function changeHeight(increase = true, land = false, initialTakeOff = false) {
  let height = Number(spaceShuttleHeight.innerHTML);
  if(land) {
    height = 0;
  } else if(initialTakeOff) {
    height = 10000;
  } else if (increase) {
    height += 10000;
  } else {
    height -= 10000;
  }
  spaceShuttleHeight.innerHTML = height;
}

window.onload = init;
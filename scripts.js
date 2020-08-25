// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  let takeoffBtn = document.getElementById("takeoff");
  let flightStatus = document.getElementById("flightStatus");
  let shuttleBackground = document.getElementById("shuttleBackground");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  let landBtn = document.getElementById("landing");
  let abortBtn = document.getElementById("missionAbort");
  let rocket = document.getElementById("rocket");
  rocket.style.position = 'absolute';
  rocket.style.left = '0px';
  rocket.style.bottom = '0px';
  
  let upBtn = document.getElementById("up");
  let downBtn = document.getElementById("down");
  let rightBtn = document.getElementById("right");
  let leftBtn = document.getElementById("left");



  takeoffBtn.addEventListener("click", function() {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(response) {
      flightStatus.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      changeRocketLocation("takeoff");
    }
  });

  landBtn.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged!");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    changeRocketLocation("land");
  });

  abortBtn.addEventListener("click", function() {
    let response = window.confirm("Confirm that you want to abort the mission.");
    if(response) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      changeRocketLocation("abort");
    }
  })

  upBtn.addEventListener("click", function() {
    changeRocketLocation("up");
  })

  downBtn.addEventListener("click", function() {
    changeRocketLocation("down");
  })
  rightBtn.addEventListener("click", function() {
    changeRocketLocation("right");
  })

  leftBtn.addEventListener("click", function() {
    changeRocketLocation("left");
  })

}


function changeRocketLocation(buttonClicked) {
  let height = Number(spaceShuttleHeight.innerHTML);
  let leftValue = parseInt(rocket.style.left);
  if(buttonClicked === "land") {
    height = 0;
    
  } else if(buttonClicked === "abort") {
    height = 0;
    leftMarginValue = 0;
    
  } else if(buttonClicked === "takeoff") {
    height = 10000;
    
  } else if (buttonClicked === "up") {
    height += 10000;
    
  } else if (buttonClicked === "down"){
    height -= 10000;
    if(height < 0) {
      height = 0;
    }
    
  } else if (buttonClicked === "right") {
    leftValue += 10;
    
  } else if (buttonClicked === "left") {
    leftValue -= 10;
    if(leftValue < 0) {
      leftValue = 0;
    }
    
  }
  moveRocket(height, leftValue);
  spaceShuttleHeight.innerHTML = height;
}

function moveRocket(height, leftValue) {  
  if(height === 0 ) {
    rocket.style.bottom = '0px';
  } else {
    let pixelHeight = 10 * height/10000;
    rocket.style.bottom = pixelHeight + 'px';

  }
  rocket.style.left = leftValue + 'px';
}


window.onload = init;
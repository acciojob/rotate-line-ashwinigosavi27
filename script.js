//your JS code here. If required.
//your JS code here. If required.
var line = document.getElementById("line");
var angle = 0;
var rotationSpeed = 2;
function rotateLine(){
	angle += rotationSpeed;
	line.style.transform = "rotate(" + angle + "deg)";

  // Request the next frame to continue the rotation
  requestAnimationFrame(rotateLine);
	
	
}
rotateLine();
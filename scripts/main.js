

// changing individual properties with code and using setInterval
var rotationSpeed = -6;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps

function spiny(){
	myOtherBox.object3D.rotation.y += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.y);
}

setInterval(spiny, 16); //equivalent to 60 fps

function spinz(){
	myOtherBox.object3D.rotation.z += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.z);
}

setInterval(spinz, 16); //equivalent to 60 fps
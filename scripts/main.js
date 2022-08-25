let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/*
document.querySelector('html').onclick = function(){
	alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img')

myImage.onclick=function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox.jfif'){
		myImage.setAttribute('src', 'images/settlite.jpg.webp');
	} else {
		myImage.setAttribute('src', 'images/firefox.jfif');
	}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName===null){
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

let myButton = document.querySelector('button');

myButton.onclick = function() {
  setUserName();
}



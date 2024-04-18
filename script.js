// input
document.getElementById("android").addEventListener("click", androidClicked);
document.getElementById("ios").addEventListener("click", iosClicked);
let theImage = document.getElementById("ImageS");
let expWords = document.getElementById("exploreText");
let expLink = document.getElementById("exploreLink");
// process
function androidClicked() {
  theImage.src = `images/Android-Logo.jpg`;
  expLink.innerHTML = "Android Home ";
  expLink.style.backgroundColor = "#a4c93b";
  document.getElementById("exploreLink").href = "https://www.android.com/";
  expLink.style.fontFamily = "Roboto";
  document.getElementById("android").classList.add("active");
  document.getElementById("ios").classList.remove("active");
}

function iosClicked() {
  document.getElementById("android").classList.remove("active");
  document.getElementById("ios").classList.add("active");

  theImage.src = `images/Apple-Logo.jpg`;
  expLink.innerHTML = "Apple Home ";
  expLink.style.backgroundColor = "#b6bcca";
  document.getElementById("exploreLink").href = "https://www.android.com/";
  expLink.style.fontFamily = "'Brygada 1918', serif";
}

// output

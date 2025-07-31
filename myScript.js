  function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
  let button = document.getElementById("theme");
  const container = document.querySelector(".container");
  if(button.innerHTML == "Dark Mode"){
	  button.innerHTML = "Light Mode";
	  container.style.backgroundColor ="#444"
  }else{
	  button.innerHTML = "Dark Mode"
	  container.style.backgroundColor ="#f2f2f2"
  }
} 

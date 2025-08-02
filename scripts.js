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

document.addEventListener('DOMContentLoaded', function() {
	const blogList = document.getElementById('blog-list');
	fetch('./posts.json')
	.then(response => response.json())
	.then(posts => {
		posts.forEach(post => {
        console.log(post); // For debugging

		const postElement = document.createElement('div');
		
		postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
       `;
         blogList.appendChild(postElement);

	
		});
	})
	.catch(error => console.error('Error loading blog posts:', error));
});
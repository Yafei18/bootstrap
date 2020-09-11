this keyword
var comments = {};
comments.data = ["good job", "good night"];
function print(arr) {
	arr.forEach(function(el) {
		console.log(el);
	});
}
comments.print = function() {
	this.data.forEach(function(el) {
		console.log(el);
	});
};

var tag = document.getElementById();

console.dir(tag);

var body = document.getElementByTagName("body")[0];
var tag = document.getElementByClassName();


var tag = document.querySelector(".bolded");
var tag = document.querySelector("h1");

var tag = document.querySelectorAll("h1");

classList
var p = document.querySelector("p");
p.style.color = "red";
p.classList.add("big");
p.classList.remove("big");
p.classList.toggle("big");


tag.textContent = "blah blah blah";
tag.innerHTML = "<h1>GoodBye</h1>";

document.body.innerHTML
document.body.textContent

var link = document.querySelector("a");
link.getAttribute("herf");
link.setAttribute("herf", "http://www.google.com");


var img = document.getElementByTagName("img")[0];
img.setAttribute("src", "breed.jpg");



button.addEventListener("click", function() {
	pargra.textContent = "the text has changed";
});

var lis = document.querySelectorAll("li");
for(int i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.style.color = "purple";
	});
}

var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click", function() {
	document.body.classlist.toggle("purple");
});

jquery



























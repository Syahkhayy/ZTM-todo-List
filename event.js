var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var btnDelete = document.getElementsByClassName("delete");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	var btn = document.createElement("button");
	// Grab input value
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("delete");
	// Attach li element to ul element
	li.appendChild(btn);
	ul.appendChild(li);
	// Clear input
	input.value = "";
}

function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
}

function addListAfterKeyPress(event){
	if(inputLength()>0 && event.keyCode === 13){
			createListElement();
		}
}

function itemDone(e){
	if(e.target && e.target.nodeName === "LI"){
		e.target.classList.toggle("done");
	}
}

function deleteList(e){
	if(e.target.className==="delete"){
		e.target.parentElement.remove();
	}
}

function UlClick(e){
	itemDone(e);
	deleteList(e);
}


function pointer(){
	document.documentElement.style.cursor = "pointer";
}

// Click Event
button.addEventListener("click", addListAfterClick);

// Enter (13) Event
input.addEventListener("keypress", addListAfterKeyPress);

ul.addEventListener("click", UlClick);


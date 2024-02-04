let inputValue = document.getElementById("inputValue");
let listContainer = document.getElementById("list-container");

todo = () => {
	if (inputValue.value === "") {
		alert("Write something");
	}
	else {
		let li = document.createElement('li');
		li.innerHTML = inputValue.value;
		listContainer.appendChild(li);
		let button = document.createElement('button');
		li.appendChild(button);
	}
	inputValue.value = "";
	saveData();
}

listContainer.addEventListener('click', (click) => {
	if (click.target.tagName === "LI") {
		click.target.classList.toggle("checked");
		saveData();
	}
	else if(click.target.tagName === "BUTTON") {
		click.target.parentElement.remove();
		saveData();
	}
});


enter = () => {
	if (event.key === "Enter") {
		todo();
	}
}

saveData = () => {
	localStorage.setItem("data", listContainer.innerHTML);
}

showData = () => {
	listContainer.innerHTML = localStorage.getItem("data");
}

showData();


localClear = () => {
	localStorage.clear();
}
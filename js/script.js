document.getElementById("add").addEventListener('click', function () {
	var input = document.getElementById("input").value;
		addItem(input);
		document.getElementById("input").value = "";
});
function addItem(text) {
	var list = document.getElementById("todo");
	var item = document.createElement('li');
		item.innerText = text + "  ";
	var button = document.createElement('button');
		button.innerHTML = " Remove "
		button.addEventListener('click', removeItem);
		item.appendChild(button);
		list.appendChild(item);
}
function removeItem() {
	var itemD = this.parentNode;
	var parent = itemD.parentNode;
		parent.removeChild(itemD);
}


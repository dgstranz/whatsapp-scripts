var list = document.getElementsByClassName('unchecked');
for (var i = list.length - 1; i >= 0; i--) {
	list[i].parentElement.click();
}